import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        userId: v.string(),
        image: v.optional(v.string()),
        role : v.union(v.literal('candidate'), v.literal('interviewer'))
    },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .filter(q => q.eq(q.field("userId"), args.userId))
            .first();
            
        if(existingUser) return;

        return await ctx.db.insert("users", {
            ...args,
            role: "candidate",
            
        });
    }
}) 


export const getUsers = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("User is Not authenticated");

        const users = await ctx.db.query("users").collect();

        return users
            
    }
})


export const getUserById = query({
    args: {
        userId: v.string()
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_userId", (q) => q.eq("userId", args.userId))
            .first();
        return user;
    }
})
import {mutation, query} from "./_generated/server";
import {v} from "convex/values";

export const getAllInterviews = query({
    handler : async(ctx) => {
        const identity = ctx.auth.getUserIdentity();
        if(!identity) throw new Error("User is Not authenticated");

        const interviews = await ctx.db.query("interviews").collect();
        if(!interviews) throw new Error("No interviews found");
        return interviews;

    }
})

export const getMyInterviews = query({
    handler : async(ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) return [];

        const interviews = await ctx.db
        .query("interviews")
        .withIndex("by_candidateId", (q) => q.eq("candidateId", identity.subject))
        .collect();
        if(!interviews) throw new Error("No interviews found");
        
        return interviews!;

    }
})

export const getInterviewByStreamCallId = query({
    args: {
        streamCallId: v.string()
    },
    handler: async (ctx, args) => {
        const interview = await ctx.db
        .query("interviews")
        .withIndex("by_streamCallId", (q) => q.eq("streamCallId", args.streamCallId))
        .first();
        if(!interview) return [];
        return interview;
    }
})


export const createInterview = mutation({
    args: {
        title: v.string(),
        description: v.optional(v.string()),
        status: v.string(),
        startTime: v.number(),
        streamCallId: v.string(),
        candidateId: v.string(),
        interviewerIds: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("Unauthorized");

        const interview = await ctx.db.insert("interviews", {
            ...args
        }
        );
        return interview;
    }
})


export const updateInterviewStatus = mutation({
    args: {
        id: v.id("interviews"),
        status: v.string(),
        
    },
    handler: async (ctx, args) => {
       
        const interview = await ctx.db.patch( args.id, {
            status: args.status,
            ...(args.status === "completed" ? { endTime: Date.now() } : {}),
        }    
        );
        return interview;
    }
})
import {defineSchema, defineTable} from 'convex/server'
import {v} from 'convex/values';

export default defineSchema({
    users : defineTable({
        name : v.string(),
        email: v.string(),
        image: v.optional(v.string()),
        role: v.union(v.literal('candidate'), v.literal('interviewer')),
        userId: v.string()
    }).index("by_userId", ["userId"]),

    interviews : defineTable({
        title : v.string(),
        description : v.optional(v.string()),
        startTime : v.number(),
        endTime: v.optional(v.number()),
        status: v.string(),
        streamCallId : v.string(),
        interviewerIds: v.array(v.string()),
        candidateId: v.string()
    })
    .index("by_candidateId", ["candidateId"])
    .index("by_streamCallId", ["streamCallId"]),

    comments : defineTable({
        content : v.string(),
        rating : v.number(),
        interviewerId : v.string(),
        interviewId : v.string()
    })
    .index("by_interviewId", ["interviewId"])

});
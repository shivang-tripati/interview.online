import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { api } from "./_generated/api";
import {Webhook} from "svix"

const http = httpRouter();



http.route({
    path: "/clerk-webhook",
    method: "POST",
    handler: httpAction(async (ctx, req) => {
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET
        if (!webhookSecret) {
            throw new Error('Missing CLERK_WEBHOOK_SECRET environment variable');
        }
        
        const svix_id = req.headers.get("svix-id");
        const svix_signature = req.headers.get("svix-signature");
        const svix_timestamp = req.headers.get("svix-timestamp");
        
        if (!svix_id || !svix_signature || !svix_timestamp) {
           return new Response("No svix header found,", { status: 400 });
    
        }

        const payload = await req.json();
        const body = JSON.stringify(payload);

        //creating new webhook instance from svix
        const wbh = new Webhook(webhookSecret);
        let evt : WebhookEvent

        try {
            evt = await wbh.verify(body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature
            }) as WebhookEvent;
        } catch (error) {
            console.error("Error verifying webhook",error);
            return new Response("Failed to verify webhook", { status: 400 });
        }

        const evntType = evt.type;
        if(evntType === "user.created") {
            const {id, email_addresses, first_name, last_name, image_url,} = evt.data;
            const email = email_addresses[0].email_address;
            const name = `${first_name} ${last_name}`.trim(); 

            try {
                await ctx.runMutation(api.users.syncUser, {userId: id, email, name, image : image_url, role : "interviewer"});
            } catch (error) {
                console.log('error creating user', error);
                return new Response("Failed to create user", { status: 500 });
            }
        }
        console.log(evt);
        return new Response("Webhook processed successfully", { status: 200 });
    })
    
})

export default http
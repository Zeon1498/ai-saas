import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
}) ///changed

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
    }
        if (!openai) { 
            return new NextResponse("OpenAI API Key not configured", { status:500});
        } ///changed
        if (!messages) {
            return new NextResponse(" Messages are required", {status:400});
        }
       
        const completion = await openai.chat.completions.create({ ///changed chatcreatecompletion. response to completion
            model: "gpt-3.5-turbo",
            messages,
        });
        return NextResponse.json(completion.choices[0].message); ///changed .data . response to completion
                
    }catch (error) {
        console.log("[CONVERATION_ERROR]", error);
        return new NextResponse("internal error", {status:500 });
    }
}
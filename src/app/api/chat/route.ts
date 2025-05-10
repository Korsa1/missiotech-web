import { NextRequest, NextResponse } from "next/server";

// Load API key from environment variables (e.g., .env.local or .env)
const XAI_API_KEY = process.env.XAI_API_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!XAI_API_KEY) {
      return NextResponse.json(
        { error: "xAI API key not set in environment" },
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages are required and must be an array" },
        { status: 400 }
      );
    }

    const systemMessage = {
      role: "system",
      content: `You are a helpful assistant for MissioTech, a company that provides AI integration, VR/XR training, and strategic consulting services. 
      Be kind, encouraging, and informative. Highlight MissioTech's services when appropriate and guide users toward solutions that MissioTech can provide.
      Always maintain a professional and supportive tone.`
    };

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "grok-3-mini-fast-beta",
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error: "Failed to get response from xAI API",
          details: errorData,
        },
        { status: response.status }
      );
    }

    const completion = await response.json();
    const assistantMessage = completion.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "No message returned from xAI API." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}

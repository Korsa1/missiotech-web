import { NextRequest, NextResponse } from "next/server";

const XAI_API_KEY = process.env.XAI_API_KEY;
const XAI_MODEL = process.env.XAI_MODEL?.trim() || "grok-4.3";
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4_000;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isValidMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.trim().length > 0 &&
    message.content.length <= MAX_MESSAGE_LENGTH
  );
}

export async function POST(request: NextRequest) {
  try {
    if (!XAI_API_KEY) {
      return NextResponse.json(
        { error: "xAI API key not set in environment" },
        { status: 500 }
      );
    }

    const body: unknown = await request.json();
    const messages =
      body && typeof body === "object"
        ? (body as Record<string, unknown>).messages
        : undefined;

    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > MAX_MESSAGES ||
      !messages.every(isValidMessage)
    ) {
      return NextResponse.json(
        {
          error:
            "Provide 1–20 valid user or assistant messages, each no longer than 4,000 characters.",
        },
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
        model: XAI_MODEL,
        messages: [systemMessage, ...messages],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const upstreamBody = await response.text();
      console.error("xAI API error", response.status, upstreamBody);
      return NextResponse.json(
        {
          error: "Failed to get response from xAI API",
        },
        { status: response.status }
      );
    }

    const completion = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const assistantMessage = completion.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "No message returned from xAI API." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: assistantMessage });
  } catch (error: unknown) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

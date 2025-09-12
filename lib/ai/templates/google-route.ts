import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages, model = 'gemini-1.5-pro', temperature = 0.7, maxTokens } = await request.json();

    const result = await streamText({
      model: google(model),
      messages,
      temperature,
      ...(maxTokens && { maxTokens }),
      system: 'You are Gemini, a helpful AI assistant for Bridgit-AI platform.',
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Google AI API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process Google AI request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Example usage:
// POST /api/ai/google
// {
//   "messages": [
//     { "role": "user", "content": "Hello, how are you?" }
//   ],
//   "model": "gemini-1.5-pro",
//   "temperature": 0.7,
//   "maxTokens": 1000
// }
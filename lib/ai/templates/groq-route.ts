import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages, model = 'llama-3.3-70b-versatile', temperature = 0.7, maxTokens } = await request.json();

    const groq = createOpenAI({
      apiKey: process.env.GROQ_API_KEY!,
      baseURL: 'https://api.groq.com/openai/v1',
    });

    const result = await streamText({
      model: groq(model),
      messages,
      temperature,
      ...(maxTokens && { maxTokens }),
      system: 'You are Grok, a helpful AI assistant for Bridgit-AI platform.',
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Groq API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process Groq request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Example usage:
// POST /api/ai/groq
// {
//   "messages": [
//     { "role": "user", "content": "Hello, how are you?" }
//   ],
//   "model": "llama-3.3-70b-versatile",
//   "temperature": 0.7,
//   "maxTokens": 1000
// }
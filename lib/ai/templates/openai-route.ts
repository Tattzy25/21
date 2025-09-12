import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages, model = 'gpt-4o', temperature = 0.7, maxTokens } = await request.json();

    const result = await streamText({
      model: openai(model),
      messages,
      temperature,
      ...(maxTokens && { maxTokens }),
      system: 'You are a helpful AI assistant for Bridgit-AI platform.',
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process OpenAI request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Example usage:
// POST /api/ai/openai
// {
//   "messages": [
//     { "role": "user", "content": "Hello, how are you?" }
//   ],
//   "model": "gpt-4o",
//   "temperature": 0.7,
//   "maxTokens": 1000
// }
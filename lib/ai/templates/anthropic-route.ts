import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages, model = 'claude-3-5-sonnet-20241022', temperature = 0.7, maxTokens } = await request.json();

    const result = await streamText({
      model: anthropic(model),
      messages,
      temperature,
      ...(maxTokens && { maxTokens }),
      system: 'You are Claude, a helpful AI assistant for Bridgit-AI platform.',
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Anthropic API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process Anthropic request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Example usage:
// POST /api/ai/anthropic
// {
//   "messages": [
//     { "role": "user", "content": "Hello, how are you?" }
//   ],
//   "model": "claude-3-5-sonnet-20241022",
//   "temperature": 0.7,
//   "maxTokens": 1000
// }
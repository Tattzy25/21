import { NextRequest } from 'next/server';
import { aiService } from '@/lib/ai/service-manager';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, model, temperature, maxTokens, provider, stream = false } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await aiService.processRequest({
      messages,
      model,
      temperature,
      maxTokens,
      provider,
      stream,
    });

    return new Response(
      JSON.stringify(result),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('AI Service Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process AI request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    const health = await aiService.healthCheck();
    return new Response(
      JSON.stringify({ status: 'ok', providers: health }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({ status: 'error', message: 'Health check failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
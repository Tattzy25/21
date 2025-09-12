import { generateText } from 'ai';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const result = await generateText({
    model: 'openai/gpt-5', // Or any supported model
    prompt,
  });
  return Response.json(result);
}
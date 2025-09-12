import { Groq } from 'groq-sdk';

export async function GET() {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "user", content: "Hello from Vercel!" }
      ]
    });

    return new Response(JSON.stringify({ message: response.choices[0].message.content }), { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}
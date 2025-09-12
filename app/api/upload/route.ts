import { put } from '@vercel/blob';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response('No file uploaded', { status: 400 });
  }

  try {
    const { url } = await put(file.name, file, { access: 'public' });
    return new Response(JSON.stringify({ url }), { status: 200 });
  } catch (error) {
    console.error('Upload error:', error);
    return new Response('Upload failed', { status: 500 });
  }
}
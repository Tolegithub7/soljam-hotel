import { NextRequest, NextResponse } from 'next/server';
import { generateDescription } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }
    const description = await generateDescription(text);
    return NextResponse.json({ description });
  } catch (error: any) {
    console.error('Gemini error', error);
    return NextResponse.json({ error: 'Failed to generate description' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { classifyUserInput } from '@/lib/llm/classify';
import type { ClassifyRequest, ClassifyResponse } from '@/lib/types';

export async function POST(request: NextRequest): Promise<NextResponse<ClassifyResponse>> {
  try {
    const body = (await request.json()) as ClassifyRequest;

    if (!body.userInput || typeof body.userInput !== 'string') {
      return NextResponse.json(
        { category: 'general-civil', confidence: 'low', reasoning: 'Invalid input' },
        { status: 400 }
      );
    }

    const result = await classifyUserInput(body.userInput.trim());
    return NextResponse.json(result);
  } catch (error) {
    console.error('[classify]', error);
    return NextResponse.json(
      { category: 'general-civil', confidence: 'low', reasoning: 'Classification failed' },
      { status: 500 }
    );
  }
}

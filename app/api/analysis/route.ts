import { NextRequest, NextResponse } from 'next/server';
import { createTabStream } from '@/lib/llm/analyze';
import { retrieve } from '@/lib/rag';
import type { AnalysisRequest, AnalysisTab } from '@/lib/types';

const VALID_TABS: AnalysisTab[] = ['overview', 'legalBreakdown', 'eli5', 'references'];

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body = (await request.json()) as AnalysisRequest;

    if (!body.userInput || !body.category || !body.tab) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!VALID_TABS.includes(body.tab)) {
      return NextResponse.json({ error: `Invalid tab: ${body.tab}` }, { status: 400 });
    }

    const queryString = [
      body.userInput,
      ...Object.values(body.caseData ?? {}).filter(Boolean),
    ].join(' ');

    const documents = await retrieve(queryString, body.category, body.tab);
    console.log('[rag]', body.category, body.tab, '→', documents.map(d => d.id));

    const stream = createTabStream(
      body.tab,
      body.userInput,
      body.category,
      body.caseData ?? {},
      documents
    );

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    console.error('[analysis]', error);
    return NextResponse.json({ error: 'Analysis generation failed' }, { status: 500 });
  }
}

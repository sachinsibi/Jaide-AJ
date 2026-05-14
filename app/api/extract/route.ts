import { NextRequest, NextResponse } from 'next/server';
import { getAnthropicClient, MODEL } from '@/lib/llm/client';

interface ExtractRequest {
  userInput: string;
  questions: { id: string; question: string }[];
}

interface ExtractResponse {
  answered: Record<string, string>;
}

export async function POST(request: NextRequest): Promise<NextResponse<ExtractResponse>> {
  try {
    const body = (await request.json()) as ExtractRequest;

    if (!body.userInput || !body.questions?.length) {
      return NextResponse.json({ answered: {} });
    }

    const client = getAnthropicClient();

    const questionList = body.questions
      .map(q => `- id: "${q.id}" | question: "${q.question}"`)
      .join('\n');

    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 512,
      system: `You extract information already present in a user's description to avoid asking redundant follow-up questions.

Given the user's description and a list of questions, return a JSON object where each key is a question id and each value is the answer extracted from the description.

Rules:
- Only include a question id if the answer is clearly and explicitly stated in the description.
- Do not infer or assume. If the answer is ambiguous or only implied, do not include it.
- Values should be short, direct summaries of what the user stated, not direct quotes.
- For date questions (id contains "when" or "date"): only extract if the user stated a specific calendar date or month+year (e.g. "March 2025", "12th January"). Relative phrases like "3 months ago", "last year", "recently" do NOT count. Leave those out.
- Return a JSON object only. No markdown, no explanation.`,
      messages: [
        {
          role: 'user',
          content: `User description:\n"${body.userInput}"\n\nQuestions to check:\n${questionList}\n\nReturn a JSON object with only the question ids whose answers are clearly present in the description.`,
        },
      ],
    });

    const text = response.content[0].type === 'text' ? response.content[0].text.trim() : '{}';

    try {
      const answered = JSON.parse(text.replace(/^```json\n?/, '').replace(/\n?```$/, '')) as Record<string, string>;
      return NextResponse.json({ answered });
    } catch {
      return NextResponse.json({ answered: {} });
    }
  } catch (error) {
    console.error('[extract]', error);
    return NextResponse.json({ answered: {} });
  }
}

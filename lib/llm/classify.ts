import { getAnthropicClient, MODEL } from './client';
import type { ClassifyResponse, IncidentCategory } from '../types';

const SYSTEM_PROMPT = `You are a civil law classification assistant for England & Wales. Your task is to classify a user's legal situation into exactly one of the following categories:

1. **tenancy** — Issues between landlords and tenants: disrepair, eviction, deposit disputes, rent arrears, lease breaches, quiet enjoyment, section 21/8 notices, HMO issues.

2. **motor-accident** — Road traffic incidents: vehicle collisions, damage caused by another driver, disputes with insurers about accident claims, uninsured drivers, hit and run.

3. **contract-service** — Contractual and consumer disputes: breach of contract, defective goods, faulty products (Consumer Rights Act 2015), service failures, refund disputes, warranty claims, unfair terms.

4. **employment** — Workplace disputes: unfair dismissal, redundancy, unpaid wages, holiday pay, discrimination (Equality Act 2010), whistleblowing, wrongful dismissal, constructive dismissal.

5. **property-damage** — Damage to property by third parties (non-tenancy): neighbour damage, tree damage, construction damage, flooding from neighbour's land, boundary disputes causing damage.

6. **general-civil** — Any other civil dispute that does not fit the above categories: debt, professional negligence, defamation, nuisance (non-property-damage), etc.

7. **personal-injury** — The user's PRIMARY legal claim is compensation for physical bodily harm. IMPORTANT: Only use this category when the user's main goal is compensation for physical injuries. If injury is mentioned incidentally (e.g., whiplash in a car accident where the primary claim is vehicle damage or insurance) do NOT classify as personal-injury. Personal injury is out of scope for this platform.

Classification rules:
- Context determines category, not individual keywords. "Neck pain after a crash" where the user wants vehicle repairs = motor-accident.
- personal-injury ONLY fires when compensation for bodily harm is the user's primary stated goal.
- Be decisive: pick the single best-fitting category.

Respond with a JSON object only — no other text:
{
  "category": "<one of the 7 categories>",
  "confidence": "<high|medium|low>",
  "reasoning": "<one sentence explaining why>"
}`;

export async function classifyUserInput(userInput: string): Promise<ClassifyResponse> {
  const client = getAnthropicClient();

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 256,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: userInput,
      },
    ],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';

  try {
    const parsed = JSON.parse(text.trim()) as {
      category: IncidentCategory;
      confidence: 'high' | 'medium' | 'low';
      reasoning: string;
    };
    return {
      category: parsed.category,
      confidence: parsed.confidence,
      reasoning: parsed.reasoning,
    };
  } catch {
    return {
      category: 'general-civil',
      confidence: 'low',
      reasoning: 'Could not parse classification response; defaulting to general civil.',
    };
  }
}

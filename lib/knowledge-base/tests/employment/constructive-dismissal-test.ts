import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-constructive-dismissal-test',
  type: 'test',
  category: 'employment',
  title: 'Constructive Dismissal Test (Western Excavating)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['constructive dismissal', 'forced to resign', 'no choice but to leave', 'last straw', 'breach of trust', 'forced out', 'resigned because'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Four-stage test (Western Excavating v Sharp [1978] QB 761): (1) repudiatory breach of contract by the employer; (2) employee resigned (at least in part) in response to the breach; (3) no affirmation — resignation occurred without unreasonable delay; (4) the resignation counts as dismissal under s.95(1)(c) ERA 1996. Mere unreasonable conduct without contractual breach is not enough.',
  content: `Constructive Dismissal Test:

The test under s.95(1)(c) ERA 1996 (constructive dismissal) is contractual, not based on reasonableness alone (Western Excavating v Sharp [1978] QB 761).

Stage 1 — Repudiatory breach. The employer must have committed a fundamental breach of an express or implied term of the contract, going to the root of the contract.

Common breaches grounding constructive dismissal:

(a) Breach of the implied term of mutual trust and confidence (Malik v BCCI [1998] AC 20). The leading head: serious unilateral changes to terms; humiliation; failure to investigate grievances; sustained bullying; setting an employee up to fail.

(b) Failure to pay agreed wages or honour contractual benefits.

(c) Unilateral changes to fundamental terms (pay, hours, role, location) without consent or contractual right.

(d) Breach of the duty to provide a safe system of work (e.g., failing to address bullying or workplace stress).

(e) Failure to comply with grievance procedures — particularly where the failure forms part of a course of conduct.

(f) Breach of an express term (e.g., demoting in breach of contract; reducing pay below the contractual rate).

Stage 2 — Causation. The employee must resign at least in part in response to the breach. Mixed motives do not defeat the claim if the breach was a real cause.

Stage 3 — No affirmation. The employee must resign within a reasonable time. Continuing to work without protest after the breach can amount to affirmation, treating the contract as continuing and waiving the right to claim constructive dismissal. Reasonable time depends on circumstances; raising a grievance and giving the employer time to respond does not affirm.

Stage 4 — Resignation. The employee must in fact resign — not merely complain or threaten. The resignation can be with or without notice; resignation with notice is still a constructive dismissal if the four elements are met.

The "last straw" doctrine (Omilaju v Waltham Forest LBC [2004] EWCA Civ 1493): a series of non-repudiatory acts may cumulatively breach trust and confidence. The final act must contribute — even slightly — to the cumulative breach; an entirely innocuous act cannot revive affirmed conduct.

Effect: counts as a dismissal for unfair-dismissal protection; normally also unfair. Wrongful-dismissal damages (breach of contract — notice pay) also available.

Tactical: best practice is to raise a written grievance, allow reasonable time, then resign clearly stating the breach. Resigning without grievance risks affirmation findings.`,
  tags: ['constructive-dismissal-test', 'Western-Excavating', 'mutual-trust-and-confidence', 'last-straw', 'affirmation'],
};

export default doc;

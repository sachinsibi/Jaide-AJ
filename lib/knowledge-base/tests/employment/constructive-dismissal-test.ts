import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-constructive-dismissal-test',
  type: 'test',
  category: 'employment',
  title: 'Constructive Dismissal Test — Barbados (Cap. 23 and Common Law)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['constructive dismissal', 'forced to resign', 'no choice but to leave', 'last straw', 'breach of trust', 'forced out', 'resigned because'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The constructive dismissal test under Barbados employment law (Cap. 23 and common law) requires: (1) a repudiatory breach of contract by the employer, going to the root of the employment relationship; (2) the employee resigned at least in part in response to that breach; (3) the employee did not affirm the contract by delaying unreasonably before resigning; (4) the employee in fact resigned. Mere unreasonable conduct by the employer without an underlying contractual breach is not sufficient.',
  content: `Constructive Dismissal Test under Barbados Employment Law (Cap. 23 and Common Law):

The test for constructive dismissal in Barbados is contractual, not based on a general assessment of the employer's reasonableness. The leading persuasive common law authority is Western Excavating (ECC) Ltd v Sharp [1978] QB 761 (Court of Appeal, England and Wales), applied in Barbados as a Commonwealth jurisdiction. The test is also reflected in Cap. 23 (Employment Rights Act, Barbados).

Stage 1 — Repudiatory breach by the employer. The employer must have committed a fundamental breach of an express or implied term of the employment contract — a breach going to the root of the relationship. The mere fact that the employer acted unreasonably, harshly, or unfairly is not sufficient without an underlying contractual breach.

Common breaches capable of supporting a constructive dismissal claim:

(a) Breach of the implied term of mutual trust and confidence — the most commonly relied-upon basis. Examples include: unilateral and unjustified changes to fundamental contractual terms; sustained bullying, humiliation, or intimidation; failure to investigate a serious grievance; demotion without contractual authority; creating an intolerable working environment deliberately or recklessly; setting unrealistic targets designed to engineer failure.

(b) Failure to pay agreed wages or honour express contractual benefits.

(c) Unilateral and fundamental changes to role, working hours, or place of work without contractual authority and without consent.

(d) Breach of the duty to provide a safe working environment — persistent failure to address bullying, harassment, or a serious physical safety risk of which the employer is aware.

(e) Breach of any other express contractual term — for example, demoting in breach of a contractual guarantee of status.

Stage 2 — Causation. The employee must resign at least in part in response to the employer's breach. If the employee resigned for an entirely different reason unconnected to the breach, the constructive dismissal claim fails. Mixed motives do not defeat the claim if the breach was a genuine contributing cause of the decision to resign.

Stage 3 — No affirmation. The employee must not delay unreasonably before resigning after becoming aware of the breach. Continuing to work for an extended period without protest, after full knowledge of the breach, may amount to affirmation — treating the contract as continuing and waiving the right to resign on that basis.

Important: raising a formal internal grievance and allowing the employer a reasonable opportunity to remedy the breach is consistent with preserving the right to claim constructive dismissal. An employee who raises a grievance, waits for a reasonable response, and then resigns where the breach remains unremedied has not affirmed the contract.

Stage 4 — Resignation. The employee must in fact resign — with or without notice. A threat to resign, a complaint short of resignation, or continued employment following the breach is not sufficient.

The "last straw" doctrine:

A series of acts by the employer, each individually insufficient to amount to a repudiatory breach, may cumulatively constitute a breach of the implied term of mutual trust and confidence. The final act in the series — the "last straw" — need only be a further contribution to the cumulative breach; it need not itself be a serious act. An entirely innocuous or benign act cannot by itself amount to the last straw.

Effect of constructive dismissal:

Where the test is satisfied, the resignation counts as a dismissal under Cap. 23. The dismissal will generally also be unfair under Cap. 23. Compensation in the civil courts is assessed on the same basis as for any unfair dismissal.

Forum for claims:
- Labour Department (Chief Labour Officer): conciliation before or alongside civil proceedings.
- Magistrates' Court: claims up to $10,000 BBD (approximately $5,000 USD at the 2:1 BBD/USD peg).
- High Court of Barbados: claims above $10,000 BBD.`,
  tags: ['constructive-dismissal-test', 'Western-Excavating', 'mutual-trust-and-confidence', 'last-straw', 'affirmation', 'Barbados', 'Cap-23'],
};

export default doc;

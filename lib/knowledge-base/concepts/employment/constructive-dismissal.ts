import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-constructive-dismissal',
  type: 'concept',
  category: 'employment',
  title: 'Constructive Dismissal',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['constructive dismissal', 'forced to resign', 'no choice but to leave', 'last straw', 'breach of trust', 'forced out', 'resigned because'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Where an employee resigns in response to a fundamental breach of contract by the employer, the resignation counts as a dismissal under s.95(1)(c) ERA 1996. The test is contractual (Western Excavating v Sharp): repudiatory breach + causal resignation + no affirmation. The breach is most often of the implied term of mutual trust and confidence.',
  eli5Summary:
    'If your employer treats you so badly that you have no real choice but to quit, the law can treat your resignation as a "dismissal" — even though you walked out yourself. This is called constructive dismissal. To claim it, the employer must have done something seriously wrong (not just unkind) — like cutting your pay without agreement, sustained bullying, or completely failing to deal with a serious complaint — and you must resign promptly because of it.',
  content: `Constructive Dismissal:

Under s.95(1)(c) ERA 1996, an employee is dismissed if they "terminate the contract under which they are employed (with or without notice) in circumstances in which they are entitled to terminate it without notice by reason of the employer's conduct."

The test (Western Excavating v Sharp [1978] QB 761):

(1) Repudiatory breach. The employer must have committed a fundamental breach of contract — going to the root of the contract.

(2) Causation. The employee must resign at least in part because of the breach.

(3) No affirmation. The employee must resign within a reasonable time of the breach (delay can amount to affirmation).

(4) Resignation. The employee must in fact resign, not merely complain.

Common breaches grounding constructive dismissal:

- Breach of mutual trust and confidence (Malik v BCCI [1998] AC 20) — the most-used implied term. Examples: serious unilateral changes; humiliation; failure to investigate grievances; sustained bullying; demotion without justification; falsely accusing an employee of misconduct; setting unreasonable targets to engineer failure.

- Breach of express terms — pay reduction, role demotion, unilateral relocation, removal of contractual benefits.

- Breach of duty to provide a safe system of work — failure to address bullying, harassment, or workplace stress.

- Failure to comply with grievance procedures — particularly where the failure is part of a wider course of conduct.

The "last straw" doctrine (Omilaju v Waltham Forest LBC [2004] EWCA Civ 1493): a series of non-repudiatory acts may cumulatively breach trust and confidence; the final act must contribute — even slightly — to the breach.

Effect: counts as dismissal for unfair dismissal (s.94), wrongful dismissal (common law — notice pay), and statutory redundancy pay where applicable. Normally also unfair.

Practical sequence: (1) written grievance setting out breach; (2) reasonable time to remedy; (3) resignation in writing citing the breach; (4) ACAS EC, then ET within 3 months. Resigning without grievance risks affirmation findings.`,
  tags: ['constructive-dismissal', 'Western-Excavating', 'mutual-trust-and-confidence', 'last-straw', 'repudiatory-breach'],
};

export default doc;

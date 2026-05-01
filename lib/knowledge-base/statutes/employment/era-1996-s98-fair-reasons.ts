import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-era-1996-s98',
  type: 'statute',
  category: 'employment',
  title: 'Employment Rights Act 1996, s.98 — Fair reasons and reasonableness',
  jurisdiction: 'england-wales',
  citation: 'Employment Rights Act 1996, s.98',
  url: 'https://www.legislation.gov.uk/ukpga/1996/18/section/98',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Section 98 ERA 1996 sets out when a dismissal is fair: the employer must show (1) one of five potentially fair reasons (capability/qualifications, conduct, redundancy, statutory illegality, or some other substantial reason), and (2) that they acted reasonably in treating that reason as sufficient under all the circumstances of the case (s.98(4) — band of reasonable responses).',
  content: `Section 98 ERA 1996 governs the substantive and procedural fairness of a dismissal where the qualifying period is met.

Stage 1 — Potentially fair reason (s.98(1) and (2)). The employer must show the reason for dismissal was one of:

(a) Capability or qualifications relating to the work the employee was employed to do (e.g., poor performance after fair process; long-term ill health; loss of required qualification).
(b) Conduct (e.g., misconduct after fair investigation and process).
(c) Redundancy (as defined in s.139).
(d) Statutory illegality (continued employment would breach an enactment, e.g., immigration status, regulatory disqualification).
(e) Some other substantial reason (SOSR) — a residual category for genuine business reasons not falling within (a)–(d) (e.g., business reorganisation, irreconcilable personality clash, third-party pressure).

If the employer fails to establish one of these reasons, the dismissal is unfair without need to consider s.98(4).

Stage 2 — Reasonableness (s.98(4)). The tribunal considers:

"whether in the circumstances (including the size and administrative resources of the employer's undertaking) the employer acted reasonably or unreasonably in treating it as a sufficient reason for dismissing the employee … determined in accordance with equity and the substantial merits of the case."

The "band of reasonable responses" test (Iceland Frozen Foods v Jones [1983] ICR 17): the tribunal does not substitute its own view of what the employer should have done; it asks whether the dismissal fell within the range of responses a reasonable employer might adopt. Procedural fairness is part of reasonableness.

Burden of proof:

- The employer bears the burden of proving the potentially fair reason at Stage 1.
- At Stage 2 (reasonableness), the burden is neutral — neither party bears it formally; the tribunal evaluates the evidence.

Procedural fairness:

- Compliance with the ACAS Code of Practice on Disciplinary and Grievance Procedures is highly relevant. Failure to follow it can attract a compensation uplift of up to 25% (TULRCA 1992 s.207A); claimant non-compliance with the Code can attract up to 25% reduction.
- Internal procedures: warnings, investigations, opportunities to respond, the right to be accompanied (Employment Relations Act 1999 s.10), appeal rights.
- Polkey reduction (Polkey v A E Dayton [1988] AC 344): where procedural failings make the dismissal unfair, compensation may be reduced to reflect the chance the employee would have been fairly dismissed anyway. Reduction can be 0–100%.`,
  tags: ['ERA-1996', 'section-98', 'fair-reasons', 'band-of-reasonable-responses', 'reasonableness', 'ACAS-Code'],
};

export default doc;

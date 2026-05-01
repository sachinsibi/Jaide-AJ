import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-unfair-dismissal-test',
  type: 'test',
  category: 'employment',
  title: 'Unfair Dismissal Test (s.98 ERA 1996)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage test under ERA 1996 s.98: (1) employee status and 2-year qualifying service (or automatically unfair category); (2) potentially fair reason — capability, conduct, redundancy, statutory illegality, or SOSR; (3) reasonableness under s.98(4), assessed on the band-of-reasonable-responses standard, including procedural fairness (ACAS Code; Polkey).',
  content: `Unfair Dismissal Test (applied by Employment Tribunals):

Stage 1 — Jurisdiction. Was the claimant an "employee" with the right to claim? Threshold issues:

(a) Employee status (s.230(1) ERA 1996) — multi-factor test (Ready Mixed Concrete; Pimlico Plumbers): control, mutuality of obligation, integration, personal service, economic reality.
(b) Two years' continuous service (s.108) — unless the dismissal is "automatically unfair" (whistleblowing, trade-union activity, pregnancy, asserting a statutory right, health & safety, etc.), in which case day-one protection.
(c) Dismissal occurred (s.95): termination by employer; expiry of fixed term not renewed; or constructive dismissal (Western Excavating).
(d) Time limit met (s.111): claim presented to ET within 3 months less 1 day of effective date of termination, subject to ACAS EC extension.

Stage 2 — Potentially fair reason (s.98(1) and (2)). Employer must show the reason for dismissal was one of:

(a) Capability or qualifications.
(b) Conduct.
(c) Redundancy.
(d) Statutory illegality.
(e) Some other substantial reason (SOSR).

Burden of proof on employer at this stage. Failure here defeats the dismissal as unfair without need to consider Stage 3.

Stage 3 — Reasonableness (s.98(4)). Did the employer act reasonably in treating the reason as sufficient to dismiss?

The band-of-reasonable-responses test (Iceland Frozen Foods v Jones [1983] ICR 17): tribunal does not substitute its view; asks whether dismissal fell within the range a reasonable employer might adopt.

Substantive fairness:
- Misconduct: the Burchell test (BHS v Burchell [1980] ICR 303) — genuine belief, reasonable grounds, reasonable investigation.
- Capability: warnings, opportunity to improve, support / training, medical evidence for ill-health cases.
- Redundancy: genuine redundancy situation, fair pool, objective criteria, consultation, suitable alternative employment (Williams v Compair Maxam).
- SOSR: legitimate business reason; proportionate response.

Procedural fairness:
- Compliance with ACAS Code of Practice on Disciplinary and Grievance Procedures.
- Right to be informed of allegations, to respond, to be accompanied (ERA 1999 s.10), and to appeal.
- Failure to follow ACAS Code attracts up to 25% uplift in compensation (TULRCA 1992 s.207A).

Polkey reduction: even where dismissal is procedurally unfair, the compensatory award may be reduced (0–100%) to reflect the chance the employee would have been dismissed anyway had a fair procedure been followed.

Burden at Stage 3 is neutral — neither party bears it formally; the tribunal evaluates the evidence.`,
  tags: ['unfair-dismissal-test', 'section-98', 'band-of-reasonable-responses', 'Burchell', 'ACAS-Code', 'Polkey'],
};

export default doc;

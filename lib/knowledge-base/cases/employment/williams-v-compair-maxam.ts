import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-williams-v-compair-maxam',
  type: 'case',
  category: 'employment',
  title: 'Williams v Compair Maxam [1982] ICR 156 (EAT)',
  jurisdiction: 'england-wales',
  citation: 'Williams v Compair Maxam Ltd [1982] ICR 156 (EAT)',
  url: 'https://www.bailii.org/uk/cases/UKEAT/1981/372_81_2210.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['redundancy', 'redundant', 'made redundant', 'reorganisation', 'restructure', 'closure', 'collective consultation', 'selection criteria', 'pool', 'unfair selection'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Articulates the procedural standards for fair redundancy: (1) maximum warning of redundancy; (2) consultation with the union or representatives; (3) objective and measurable selection criteria; (4) consideration of suitable alternative employment; (5) appeal mechanism. Failure on these elements typically renders a redundancy dismissal unfair under s.98(4) ERA 1996.',
  content: `Williams v Compair Maxam [1982] ICR 156 (Employment Appeal Tribunal).

Facts: Compair Maxam carried out a redundancy programme without proper warning, consultation, or objective selection criteria. Senior managers selected employees by impression, with no scoring or transparent process. The tribunal upheld the dismissal as fair; the EAT reversed.

Held (EAT, Browne-Wilkinson J): the dismissals were unfair. Where union members are dismissed for redundancy, the employer should normally observe certain principles (since extended to non-unionised contexts):

The five principles (the Compair Maxam framework):

(1) Maximum warning. The employer should give as much warning as possible of impending redundancies, so as to enable employees to find alternative employment and the union to inform itself and consult.

(2) Consultation. The employer should consult the union (or, in a non-unionised context, individual employees) on the best means of avoiding redundancies, achieving the desired outcome with as little hardship as possible, and on the selection criteria to be used.

(3) Objective and measurable selection criteria. Selection should not depend on the personal opinion of the manager; criteria should be objective such as length of service, skills, attendance, performance, and disciplinary record.

(4) Fair selection. The criteria should be applied fairly to those at risk in the relevant pool.

(5) Suitable alternative employment. The employer should see whether, instead of dismissing, it could offer alternative employment.

Modern application:

- The five principles are the working framework for procedural fairness in redundancy (alongside the statutory collective-consultation duty under TULRCA 1992 s.188 where 20+ dismissals are proposed).
- Subjective criteria without measurable scoring renders selection unfair (Capita Hartshead v Byard [2012] ICR 1256).
- Last in, first out (LIFO) alone is now treated cautiously: it may have a discriminatory impact (younger workers, women returning from maternity, employees recruited under workforce diversity initiatives). Modern practice combines LIFO with skills/performance criteria.
- Individual consultation is required even where collective consultation has occurred (Polkey v A E Dayton [1988] AC 344).
- Selection pool: the pool must be defined logically — typically the cohort of employees doing similar work whose roles are at risk. An incorrect or gerrymandered pool taints selection.

Failure on Compair Maxam principles typically takes the dismissal outside the band of reasonable responses, supporting an unfair-dismissal finding even where the underlying redundancy is genuine.`,
  tags: ['Williams-v-Compair-Maxam', 'redundancy', 'fair-procedure', 'selection-criteria', 'consultation', 'suitable-alternative-employment'],
};

export default doc;

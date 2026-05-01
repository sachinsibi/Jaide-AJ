import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-redundancy-fairness-test',
  type: 'test',
  category: 'employment',
  title: 'Redundancy Fairness Test (Compair Maxam framework)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['redundancy', 'redundant', 'made redundant', 'reorganisation', 'restructure', 'closure', 'collective consultation', 'selection criteria', 'pool', 'unfair selection'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A redundancy dismissal is fair only if (1) it falls within the s.139 ERA 1996 definition of redundancy (cessation of business / workplace, or reduced need for employees); and (2) the employer followed a fair procedure: warning, consultation, fair pool, objective selection, suitable alternative employment (Williams v Compair Maxam principles). Collective consultation under TULRCA 1992 s.188 is required for 20+ dismissals.',
  content: `Redundancy Fairness Test:

Stage 1 — Genuine redundancy (s.139 ERA 1996). The employer must show the dismissal was attributable wholly or mainly to:

(a) the fact that the employer has ceased or intends to cease carrying on the business; or
(b) the fact that the employer has ceased or intends to cease carrying on business in the place where the employee was employed; or
(c) the fact that the requirements of the business for employees to carry out work of a particular kind, or to do so in the place where the employee was employed, have ceased or diminished or are expected to do so.

Sham redundancies (e.g., redundancy as cover for a personality conflict; redundancy where the role is immediately re-advertised) defeat Stage 1 and the dismissal cannot rely on the redundancy reason.

Stage 2 — Fair procedure (Compair Maxam principles):

(a) Maximum warning. As much advance notice as possible.

(b) Consultation. Individual and (where applicable) collective consultation. Even where redundancy is unavoidable, individual consultation is required (Polkey v A E Dayton).

(c) Selection pool. Define the cohort of employees at risk logically — typically those doing similar work whose roles are at risk. An incorrect or gerrymandered pool taints selection.

(d) Selection criteria. Objective and measurable: performance, skills, qualifications, attendance, length of service, disciplinary record. Subjective criteria without scoring render selection unfair (Capita Hartshead v Byard [2012] ICR 1256). Length-of-service alone (LIFO) is treated cautiously due to potential discriminatory impact.

(e) Application of criteria. Consistent application across the pool, with documentation supporting the score.

(f) Suitable alternative employment. The employer must take reasonable steps to find suitable alternative employment within the business or group. Failure to consider known vacancies is unfair.

(g) Right to appeal. The selected employee should have an opportunity to challenge the decision through an appeal mechanism.

Stage 3 — Collective consultation (TULRCA 1992 s.188): 20+ proposed dismissals at one establishment within 90 days requires consultation with reps about avoiding, reducing, or mitigating. Minimum 30 days (20–99) / 45 days (100+). Failure → Protective Award of up to 90 days' pay per employee.

Stage 4 — Statutory redundancy pay (s.162): length of service (max 20 years) × age multiplier × weekly pay (capped, reviewed annually).

Outcome: failure on Stage 2 typically renders the dismissal unfair under s.98(4), even where the redundancy is genuine. Polkey may reduce compensation.`,
  tags: ['redundancy-test', 'Compair-Maxam', 'consultation', 'selection-criteria', 'suitable-alternative-employment', 'TULRCA-188'],
};

export default doc;

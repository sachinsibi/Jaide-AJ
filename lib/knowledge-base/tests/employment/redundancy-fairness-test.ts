import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-redundancy-fairness-test',
  type: 'test',
  category: 'employment',
  title: 'Redundancy Fairness Test — Barbados (Cap. 23)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['redundancy', 'redundant', 'made redundant', 'reorganisation', 'restructure', 'closure', 'selection criteria', 'pool', 'unfair selection', 'severance'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A redundancy dismissal under Barbados employment law (Cap. 23) is fair only if: (1) the redundancy is genuine — the employer\'s need for employees to carry out work of a particular kind has ceased or diminished; (2) a fair procedure was followed, including advance warning, genuine consultation, an objectively defined selection pool, objective selection criteria, and consideration of suitable alternative employment; (3) statutory severance pay under Cap. 23 is calculated and paid where applicable.',
  content: `Redundancy Fairness Test under Barbados Employment Law (Cap. 23):

Stage 1 — Genuine redundancy. The dismissal must be attributable to a genuine redundancy situation. Under Cap. 23 and Barbados employment law, a redundancy arises where the employer's requirements for employees to carry out work of a particular kind have ceased or diminished, or are expected to do so. This includes:

(a) Closure of the business as a whole.
(b) Closure of the particular workplace or location where the employee was employed.
(c) Reduction in the number of employees required to carry out work of a particular kind, whether due to technological change, reorganisation, or reduced demand.

A sham redundancy — where the redundancy label is applied to conceal a dismissal for another reason, or where the role is immediately re-filled by a new recruit — does not constitute genuine redundancy and cannot support a fair dismissal on that basis.

Stage 2 — Fair procedure. Even where the redundancy situation is genuine, the dismissal must be carried out through a fair process. Barbados employment law and the persuasive common law principles in Williams v Compair Maxam [1982] ICR 156 (EAT — persuasive authority in Barbados) require:

(a) Advance warning. Employees at risk should be given as much advance notice of potential redundancy as reasonably practicable, allowing time for consultation and consideration of alternatives.

(b) Genuine consultation. Affected employees must be individually consulted in a genuine manner — not merely informed of a pre-determined decision. Consultation should cover: whether the redundancy can be avoided; whether the selection criteria are appropriate; whether suitable alternative employment is available. Consultation with a recognised trade union or employee representatives, where applicable, is also expected.

(c) Fair selection pool. The pool of employees at risk must be defined logically, typically comprising those carrying out the same or similar work in the affected area. An incorrectly defined or manipulated pool taints the selection process.

(d) Objective selection criteria. Selection within the pool must be based on objective and measurable criteria, such as skills, qualifications, performance, attendance record, length of service, and disciplinary history. Criteria based on subjective personal impressions, without measurable scoring, render the selection process unfair.

(e) Fair application. The agreed criteria must be applied consistently and fairly across all employees in the pool, with documentation supporting the scores and the final selection decision.

(f) Suitable alternative employment. Before dismissing for redundancy, the employer must take reasonable steps to identify and offer any suitable alternative positions within the business or group. An employee who unreasonably refuses a genuine offer of suitable alternative employment may forfeit entitlement to statutory severance pay under Cap. 23.

(g) Right of appeal. The selected employee should be given an opportunity to challenge the selection decision through an internal appeal before the dismissal takes final effect.

Stage 3 — Statutory severance pay. An employee who is dismissed by reason of genuine redundancy and meets the qualifying conditions under Cap. 23 is entitled to statutory severance pay. The formula for calculating severance pay is set out in Cap. 23 — parties should consult the current legislation at laws.barbados.gov.bb for the applicable method and rates. All amounts are expressed in Barbados dollars (BBD); note the BBD/USD 2:1 fixed peg.

Failure on Stage 2 — consequences:

A failure on procedural fairness in Stage 2 may render the redundancy dismissal unfair even where the underlying redundancy is genuine. Where a procedural failure is established but the employer can show that fair procedure would not have changed the outcome, a court may reduce the compensation award to reflect the chance that dismissal would have occurred in any event (Polkey v A E Dayton [1988] AC 344, HL — persuasive authority in Barbados).

Forum for claims:
- Labour Department (Chief Labour Officer): conciliation and administrative assistance before or alongside civil proceedings.
- Magistrates' Court: claims up to $10,000 BBD (approximately $5,000 USD at the 2:1 BBD/USD peg).
- High Court of Barbados: claims above $10,000 BBD.`,
  tags: ['redundancy-test', 'Compair-Maxam', 'consultation', 'selection-criteria', 'suitable-alternative-employment', 'Barbados', 'Cap-23', 'severance'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-polkey-v-dayton',
  type: 'case',
  category: 'employment',
  title: 'Polkey v A E Dayton Services [1988] AC 344 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Polkey v A E Dayton Services Ltd [1988] AC 344 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1987/8.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Procedural failures cannot be excused on the ground that the result would have been the same. A dismissal carried out without proper procedure is unfair, even if the substantive outcome was inevitable. But the compensatory award may be reduced — the "Polkey reduction" — to reflect the percentage chance the employee would have been dismissed even if fair process had been followed. Reduction can be 0–100%.',
  content: `Polkey v A E Dayton Services [1988] AC 344 (House of Lords).

Facts: Mr Polkey was a van driver. He was dismissed for redundancy with no warning, no consultation, and no consideration of alternative employment. The tribunal found the dismissal would have happened anyway — there were genuinely no other roles — and held the dismissal fair under the then-prevailing "no difference" rule (British Labour Pump v Byrne).

Held (HL, reversing the no-difference rule): the dismissal was unfair. Procedural failures cannot be excused on the basis that the substantive outcome would have been the same. The s.98(4) reasonableness test is concerned with the employer's process and decision at the time, not with the counterfactual outcome.

Lord Mackay of Clashfern: the question whether dismissal was fair must be answered on the basis of the employer's actual conduct, not on speculation about what would have happened if the employer had behaved differently.

The Polkey reduction:

Although the dismissal is unfair, the COMPENSATORY award (not the basic award) may be reduced to reflect:

(a) The chance that the employee would have been dismissed in any event had the employer followed a fair procedure (a "percentage Polkey"); or

(b) Where it is clear the employee would have been dismissed within a defined period had a fair procedure been followed, compensation is awarded only for the period until the fair date of dismissal.

Reduction range: 0% to 100%. A 100% Polkey reduction yields nominal compensation; the basic award remains unaffected.

Burden: the employer bears the burden of establishing the basis for a Polkey reduction. The reduction is a matter of fact for the tribunal, not law (Software 2000 v Andrews [2007] ICR 825 — the tribunal must construct a reasonable model of what would have happened).

Modern application:

- Pleaded by employers in almost every unfair-dismissal case where procedure was incomplete.
- Particularly common in redundancy where consultation was inadequate but the underlying redundancy was genuine.
- Less commonly applied where the procedural failure infected the substantive decision (e.g., flawed investigation in a misconduct case): if the investigation could have produced a different finding, the chance of fair dismissal is harder to establish.
- Sits alongside the contributory-fault reduction under s.123(6) ERA 1996 (where the claimant's own conduct contributed to dismissal — separate principle, but can stack with Polkey).`,
  tags: ['Polkey', 'procedural-fairness', 'compensatory-reduction', 'redundancy', 'no-difference-rule-rejected'],
};

export default doc;

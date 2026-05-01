import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-iceland-frozen-foods',
  type: 'case',
  category: 'employment',
  title: 'Iceland Frozen Foods v Jones [1983] ICR 17 (EAT)',
  jurisdiction: 'england-wales',
  citation: 'Iceland Frozen Foods Ltd v Jones [1983] ICR 17 (EAT)',
  url: 'https://www.bailii.org/uk/cases/UKEAT/1982/277_82_1311.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Establishes the "band of reasonable responses" test for unfair dismissal under s.98(4) ERA 1996. The tribunal must not ask what it would have done; it must ask whether the dismissal fell within the range of responses a reasonable employer might have adopted. If yes — even if at the harsh end — the dismissal is fair.',
  content: `Iceland Frozen Foods Ltd v Jones [1983] ICR 17 (Employment Appeal Tribunal).

Facts: A night-shift manager at Iceland was dismissed after the alarms failed to be set. He admitted his role but argued the dismissal was disproportionate given the circumstances and his record. The tribunal substituted its own view that the dismissal was too harsh; the EAT reversed.

Held (EAT, Browne-Wilkinson J): the tribunal had erred. The correct approach to the reasonableness test in s.57(3) (now s.98(4) ERA 1996) is the "band of reasonable responses" test.

The band of reasonable responses test:

(1) The starting point is the words of s.98(4): the tribunal must determine "whether in the circumstances the employer acted reasonably or unreasonably in treating it [the reason] as a sufficient reason for dismissing the employee."

(2) In applying the section, the tribunal must consider the reasonableness of the employer's conduct, not whether the tribunal itself considers the dismissal to be fair.

(3) In judging the reasonableness of the employer's conduct, the tribunal must not substitute its decision as to what was the right course to adopt for that of the employer.

(4) In many (though not all) cases, there is a band of reasonable responses to the employee's conduct within which one employer might reasonably take one view, another quite reasonably take a different view.

(5) The function of the tribunal is to determine in the particular circumstances whether the employer's decision to dismiss the employee fell within the band of reasonable responses which a reasonable employer might have adopted. If the dismissal falls within the band, it is fair. If it falls outside, it is unfair.

Modern application:

- The test is binding on every Employment Tribunal hearing an unfair dismissal claim — applied in conjunction with the Burchell test (for misconduct cases) and procedural fairness (ACAS Code).
- It is reluctant; it produces deference to employer decision-making within an objective range, but is not a rubber stamp. Outside the range — e.g., dismissal for trivial misconduct, dismissal without warning where warning was due, dismissal in disregard of the ACAS Code — is unfair.
- Polkey v A E Dayton [1988] AC 344 limits the operational effect: even where the dismissal is unfair, compensation may be reduced to reflect the chance of fair dismissal.
- The test applies equally to procedural and substantive fairness — both fall within the s.98(4) reasonableness analysis.`,
  tags: ['Iceland-Frozen-Foods', 'band-of-reasonable-responses', 'section-98', 'reasonableness', 'no-substitution'],
};

export default doc;

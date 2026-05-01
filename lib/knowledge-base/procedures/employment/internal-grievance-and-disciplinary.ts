import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-internal-grievance-and-disciplinary',
  type: 'procedure',
  category: 'employment',
  title: 'Internal Grievance and Disciplinary Procedure (ACAS Code)',
  jurisdiction: 'england-wales',
  citation: 'ACAS Code of Practice on Disciplinary and Grievance Procedures (2015); TULRCA 1992 s.207A; ERA 1999 s.10',
  url: 'https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'The ACAS Code of Practice on Disciplinary and Grievance Procedures sets the minimum fair-process standards for workplace disputes. Compliance is not legally mandatory but unreasonable failure attracts an uplift of up to 25% on tribunal compensation (TULRCA 1992 s.207A); claimant non-compliance attracts up to 25% reduction. The right to be accompanied at hearings is a statutory right (ERA 1999 s.10).',
  content: `The ACAS Code applies to disciplinary and grievance situations in the workplace.

Grievance procedure (employee-initiated):

1. Raise the grievance in writing — clearly, with relevant facts and dates.
2. Employer arranges a grievance hearing without unreasonable delay.
3. Right to be accompanied (ERA 1999 s.10) — colleague, trade-union official, or trade-union-certified rep.
4. Employer investigates and gives a written outcome decision.
5. Right of appeal — to a more senior manager not previously involved.

Disciplinary procedure (employer-initiated):

1. Investigation. Establish the facts before any decision. Suspension may be necessary but should be on full pay and brief.
2. Inform the employee in writing of the alleged misconduct or performance issue, with relevant evidence and the consequences (up to dismissal where applicable).
3. Hold a hearing without unreasonable delay. Right to be accompanied.
4. Reach a decision — proportionate to the conduct and the employee's record. For first offences (other than gross misconduct), a written warning is normal; gross misconduct may warrant summary dismissal.
5. Notify in writing with reasons.
6. Right of appeal — to a more senior manager not previously involved. The appeal should not be a rubber stamp.

ACAS Code key principles:

- Act consistently and proportionately.
- Investigate fairly to establish facts.
- Inform the employee of the case against them.
- Allow the employee to put their case before any decision.
- Allow accompaniment at meetings.
- Allow appeal.

Tribunal consequences (TULRCA 1992 s.207A):

- Unreasonable employer non-compliance → tribunal may uplift compensation by up to 25%.
- Unreasonable claimant non-compliance (e.g., failing to raise a grievance before resigning) → tribunal may reduce compensation by up to 25%.

The uplift/reduction applies to most tribunal awards — unfair dismissal, discrimination, unauthorised deductions, etc. — to the extent the underlying claim relates to a disciplinary or grievance matter.

Strategic considerations:

- For a constructive-dismissal claim, raising a grievance and giving the employer a chance to remedy is usually essential to establish that resignation was reasonable and not premature affirmation.
- For a misconduct dismissal, employer compliance with the Code is highly persuasive evidence of reasonableness; failure on procedure (no investigation, no hearing, no appeal) is typically fatal.
- Document everything in writing — emails, dated meeting notes, witness accounts.`,
  tags: ['ACAS-Code', 'grievance', 'disciplinary', 'right-to-be-accompanied', 'TULRCA-207A', 'uplift', 'reduction'],
};

export default doc;

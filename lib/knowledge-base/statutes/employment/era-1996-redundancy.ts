import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-era-1996-redundancy',
  type: 'statute',
  category: 'employment',
  title: 'Employment Rights Act 1996, ss.135–162 — Redundancy',
  jurisdiction: 'england-wales',
  citation: 'Employment Rights Act 1996, ss.135, 139, 162; Trade Union and Labour Relations (Consolidation) Act 1992, s.188',
  url: 'https://www.legislation.gov.uk/ukpga/1996/18/part/XI',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['redundancy', 'redundant', 'made redundant', 'reorganisation', 'restructure', 'closure', 'collective consultation', 'selection criteria', 'pool'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A redundancy dismissal is potentially fair under ERA 1996 s.98(2)(c). It must be a genuine redundancy as defined by s.139 (cessation of business, workplace, or reduced need for employees). Procedural fairness requires consultation, fair selection criteria, and consideration of suitable alternative employment. Statutory redundancy pay under s.162 requires 2 years\' service and is calculated on age, length of service, and capped weekly pay.',
  content: `Sections 135–162 ERA 1996 govern statutory redundancy and its procedural framework. Section 188 of the Trade Union and Labour Relations (Consolidation) Act 1992 governs collective consultation where 20 or more dismissals are proposed at one establishment within 90 days.

Section 139 — Definition of redundancy. A dismissal is by reason of redundancy where the employer's requirements for employees:

(a) to carry out work of a particular kind, or
(b) to carry out work of a particular kind in the place where the employee was so employed,

have ceased or diminished or are expected to cease or diminish.

Three categories: (i) closure of the business; (ii) closure of the workplace; (iii) reduced need for employees doing particular work.

Procedural requirements for fair redundancy dismissal (judicial gloss on s.98(4); Williams v Compair Maxam [1982] ICR 156):

1. Warning and consultation. Employees should be given as much warning as possible. Individual consultation is required even where the redundancy situation is unavoidable (Polkey v A E Dayton [1988] AC 344).

2. Fair pool and selection criteria. Identify the correct selection pool (the employees at risk). Apply objective, measurable criteria — performance, attendance, qualifications, length of service. Subjective criteria without objective scoring render selection unfair (Capita Hartshead v Byard [2012] ICR 1256).

3. Suitable alternative employment. The employer must take reasonable steps to find suitable alternative employment within the business or group.

4. Right to appeal. The employee should have an opportunity to challenge selection.

Collective consultation (TULRCA 1992 s.188):

Where the employer proposes to dismiss as redundant 20 or more employees at one establishment within 90 days, the employer must consult representatives (recognised union; or elected employee representatives) about ways to avoid, reduce, or mitigate the dismissals. Minimum consultation periods:
- 30 days where 20–99 dismissals proposed.
- 45 days where 100 or more dismissals proposed.
- Failure can result in a Protective Award of up to 90 days' pay per affected employee.

Statutory redundancy pay (s.162):

Calculated by: (a) length of continuous service capped at 20 years; (b) age at dismissal (different multipliers for different age bands); (c) weekly pay subject to a statutory cap reviewed annually.

A genuine offer of suitable alternative employment that the employee unreasonably refuses can defeat the right to redundancy pay (s.141).`,
  tags: ['redundancy', 'ERA-1996', 'section-139', 'collective-consultation', 'TULRCA-section-188', 'selection-criteria', 'suitable-alternative-employment'],
};

export default doc;

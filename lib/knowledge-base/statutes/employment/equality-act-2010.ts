import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-equality-act-2010',
  type: 'statute',
  category: 'employment',
  title: 'Equality Act 2010 — Discrimination at work',
  jurisdiction: 'england-wales',
  citation: 'Equality Act 2010, Pts 2 and 5; ss.13–27; ss.39–60; ss.136 (burden of proof)',
  url: 'https://www.legislation.gov.uk/ukpga/2010/15/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['employment'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Equality Act 2010 protects nine characteristics: age; disability; gender reassignment; marriage and civil partnership; pregnancy and maternity; race; religion or belief; sex; sexual orientation. Five forms of prohibited conduct: direct discrimination (s.13); indirect discrimination (s.19); harassment (s.26); victimisation (s.27); and (for disability) failure to make reasonable adjustments (s.20). No qualifying period; compensation uncapped; burden shifts under s.136.',
  eli5Summary:
    'The Equality Act 2010 makes it unlawful for an employer to treat you worse because of who you are — your age, disability, race, religion, sex, sexual orientation, gender reassignment, marriage status, or being pregnant. You don\'t need any minimum service to claim. If you can show facts that point to discrimination, the employer must explain why it wasn\'t. Compensation is not capped.',
  content: `The Equality Act 2010 consolidates and replaces previous discrimination statutes. In employment (Pt 5), it protects against five forms of conduct in respect of nine protected characteristics.

Protected characteristics (s.4 and ss.5–12):
1. Age — s.5.
2. Disability — s.6 (long-term physical or mental impairment with substantial adverse effect on day-to-day activities).
3. Gender reassignment — s.7.
4. Marriage and civil partnership — s.8.
5. Pregnancy and maternity — s.18 (specific section in employment).
6. Race — s.9 (including colour, nationality, ethnic or national origin).
7. Religion or belief — s.10.
8. Sex — s.11.
9. Sexual orientation — s.12.

Prohibited conduct:

Section 13 — Direct discrimination. Treating someone less favourably because of a protected characteristic. The comparator (real or hypothetical) is in the same circumstances apart from the characteristic.

Section 19 — Indirect discrimination. Applying a provision, criterion, or practice (PCP) that puts or would put persons sharing a protected characteristic at a particular disadvantage compared to others, where the PCP cannot be shown to be a proportionate means of achieving a legitimate aim.

Section 26 — Harassment. Unwanted conduct related to a protected characteristic (or of a sexual nature) which has the purpose or effect of violating dignity or creating an intimidating, hostile, degrading, humiliating, or offensive environment.

Section 27 — Victimisation. Subjecting someone to a detriment because they have done a "protected act" (made a discrimination complaint, given evidence in someone else's complaint, made an allegation of contravention).

Section 20 — Reasonable adjustments (disability only). Where a PCP, physical feature, or absence of an auxiliary aid puts a disabled person at a substantial disadvantage, the employer must take reasonable steps to remove or compensate for the disadvantage.

Section 39 — Employment scope. Discrimination prohibited in arrangements for offering employment, terms, opportunities, dismissal, and detriments.

Burden of proof — s.136. Once the claimant establishes facts from which the tribunal could decide, in the absence of any other explanation, that contravention occurred, the burden shifts to the respondent to prove it did not contravene the Act.

Time limit (s.123): 3 months less 1 day from the act complained of (or last act of a continuing course of conduct), subject to ACAS Early Conciliation extension. Extension where "just and equitable" — broader than the unfair-dismissal "not reasonably practicable" test.

Remedy: declaration; recommendation; compensation. Compensation is uncapped, includes injury to feelings (Vento bands).`,
  tags: ['Equality-Act-2010', 'protected-characteristics', 'direct-discrimination', 'indirect-discrimination', 'harassment', 'victimisation', 'reasonable-adjustments', 'burden-of-proof'],
};

export default doc;

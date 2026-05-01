import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-discrimination-test',
  type: 'test',
  category: 'employment',
  title: 'Discrimination Test (Equality Act 2010)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['discrimination', 'discriminated', 'harassment', 'harassed', 'victimised', 'victimisation', 'less favourable', 'protected characteristic', 'race', 'sex', 'disability', 'age', 'religion', 'sexual orientation', 'pregnancy', 'maternity'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Test depends on the form of conduct alleged: (1) direct (s.13) — less favourable treatment because of a protected characteristic; (2) indirect (s.19) — neutral PCP that disadvantages a group, not justified as proportionate; (3) harassment (s.26) — unwanted conduct related to a characteristic; (4) victimisation (s.27) — detriment for a protected act; (5) reasonable adjustments (s.20, disability only). Burden shifts under s.136 once a prima facie case is shown.',
  content: `Discrimination Test (Equality Act 2010):

Five forms of prohibited conduct in employment, each with its own elements.

Section 13 — Direct discrimination:

(a) Less favourable treatment.
(b) Of the claimant.
(c) Because of a protected characteristic.
(d) Compared to a real or hypothetical comparator in the same material circumstances apart from the characteristic.

Test of causation: would the claimant have been treated this way if not for the protected characteristic? Even unconscious motivation suffices. Stereotyped assumptions count.

Section 19 — Indirect discrimination:

(a) Provision, criterion, or practice (PCP) applied generally.
(b) That puts (or would put) persons of a shared characteristic at a particular disadvantage.
(c) That puts the claimant at that disadvantage.
(d) Cannot be shown to be a proportionate means of achieving a legitimate aim.

Statistical or qualitative evidence of group disadvantage; objective justification by employer.

Section 26 — Harassment:

(a) Unwanted conduct.
(b) Related to a relevant protected characteristic (or, separately, of a sexual nature, or relating to gender reassignment / sex resulting in less favourable treatment).
(c) Has the purpose OR effect of (i) violating the claimant's dignity, OR (ii) creating an intimidating, hostile, degrading, humiliating, or offensive environment.

Effect is judged taking account of the claimant's perception, the other circumstances, and whether it is reasonable for the conduct to have that effect (s.26(4)).

Section 27 — Victimisation:

(a) Subjecting the claimant to a detriment.
(b) Because the claimant has done a "protected act" — bringing proceedings; giving evidence; making an allegation of contravention; doing any other thing for the purposes of or in connection with the Act.

Section 20 — Reasonable adjustments (disability only):

Where a PCP, a physical feature, or the absence of an auxiliary aid puts a disabled person at a substantial disadvantage compared with non-disabled persons, the employer must take such steps as it is reasonable to take to avoid the disadvantage.

Burden of proof (s.136): Stage 1 — claimant proves facts from which contravention could be inferred. Stage 2 — burden shifts to respondent to prove non-contravention on balance of probabilities.

Time limit (s.123): 3 months less 1 day, subject to EC extension; just-and-equitable extension available.

No qualifying period. Compensation uncapped (Vento bands; financial loss; aggravated damages).`,
  tags: ['discrimination-test', 'Equality-Act-2010', 'direct-discrimination', 'indirect-discrimination', 'harassment', 'victimisation', 'reasonable-adjustments', 'burden-shift'],
};

export default doc;

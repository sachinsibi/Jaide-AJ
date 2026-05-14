import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-discrimination-test',
  type: 'test',
  category: 'employment',
  title: 'Discrimination Test — Barbados Employment Law',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['discrimination', 'discriminated', 'harassment', 'harassed', 'victimised', 'victimisation', 'less favourable treatment', 'protected characteristic', 'race', 'sex', 'disability', 'religion', 'pregnancy', 'maternity'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The discrimination test under Barbados employment law applies according to the form of conduct alleged. The main forms of prohibited conduct are: (1) direct discrimination — less favourable treatment because of a protected characteristic; (2) indirect discrimination — a neutral requirement or practice that disadvantages a protected group and cannot be justified; (3) harassment — unwanted conduct related to a protected characteristic; (4) victimisation — detriment for having raised a discrimination complaint. The exact protected characteristics under current Barbados law should be confirmed at laws.barbados.gov.bb.',
  content: `Discrimination Test under Barbados Employment Law:

Barbados employment law prohibits several forms of discriminatory conduct in the workplace. The applicable protected characteristics are defined by Barbados legislation — parties should confirm the current scope at laws.barbados.gov.bb. The following test structure reflects the forms of prohibited conduct recognised under Barbados anti-discrimination law and common law principles applied in the jurisdiction.

Important: the nine protected characteristics listed in the English Equality Act 2010 do not automatically apply in Barbados. The protected grounds under Barbados law should be verified from current Barbados legislation.

Form 1 — Direct discrimination:

(a) Less favourable treatment.
(b) Of the claimant.
(c) Because of a protected characteristic recognised under Barbados law.
(d) Compared to a real or hypothetical comparator in the same or similar material circumstances, but without the protected characteristic.

Causation: the question is whether the claimant would have been treated in the same way if not for the protected characteristic. Unconscious motivation or stereotyped assumptions may be sufficient. There is no requirement that the employer intended to discriminate.

Form 2 — Indirect discrimination:

(a) A requirement, condition, or practice is applied generally to the workforce.
(b) It puts, or would put, persons sharing a protected characteristic at a particular disadvantage compared to those who do not share that characteristic.
(c) The claimant is put at that disadvantage.
(d) The requirement, condition, or practice cannot be objectively justified as a proportionate means of achieving a legitimate aim.

Statistical or qualitative evidence of disproportionate impact on the relevant group is relevant. An employer can defend indirect discrimination by establishing objective justification — a legitimate aim and a response that is proportionate to achieving it.

Form 3 — Harassment:

(a) Unwanted conduct.
(b) Related to a protected characteristic recognised under Barbados law (or, where applicable, of a sexual nature).
(c) Which has the purpose or effect of:
   (i) violating the claimant's dignity; or
   (ii) creating an intimidating, hostile, degrading, humiliating, or offensive working environment.

The effect of the conduct is assessed taking account of the claimant's perception, the context, and whether it is reasonable for the conduct to have had that effect. Intention is not determinative — conduct may amount to harassment even if not intended to cause offence.

Form 4 — Victimisation:

(a) Subjecting the claimant to a detriment.
(b) Because the claimant has done a "protected act" — such as raising a discrimination complaint, giving evidence in another person's complaint, or asserting rights under anti-discrimination provisions of Barbados law.

Detriment includes any adverse treatment, not limited to dismissal — for example, disciplinary action, demotion, exclusion, or denial of opportunities.

Disability accommodation:

Where a protected characteristic is disability, an employer may also be required to take reasonable steps to accommodate the employee's disability. See the separate disability accommodation document for the applicable principles under Barbados law.

Burden of proof:

Where an employee or claimant can show facts that give rise to an inference of discriminatory treatment, it is for the employer to provide a satisfactory non-discriminatory explanation for the treatment. This burden-shifting principle is applied in Barbados civil courts, consistent with common law practice across Commonwealth jurisdictions.

No qualifying period:

Anti-discrimination protections in employment in Barbados generally apply from the commencement of employment — no qualifying period is required to bring a discrimination claim.

Compensation:

Compensation for unlawful discrimination in Barbados is assessed on compensatory principles and may include:
- Financial loss caused by the discriminatory act.
- Compensation for non-financial harm, including injury to feelings and loss of dignity.
- Aggravated damages where the employer's conduct was particularly high-handed or oppressive.

Note: the Vento bands, which provide fixed guidance on injury-to-feelings awards in English Employment Tribunals, have no equivalent in Barbados. Barbados civil courts assess non-financial harm on general compensatory principles.

Forum for claims:
- Labour Department (Chief Labour Officer): conciliation and administrative assistance.
- Magistrates' Court: claims up to $10,000 BBD (approximately $5,000 USD at the 2:1 BBD/USD peg).
- High Court of Barbados: claims above $10,000 BBD.`,
  tags: ['discrimination-test', 'Barbados', 'direct-discrimination', 'indirect-discrimination', 'harassment', 'victimisation', 'burden-shift', 'anti-discrimination', 'Cap-23'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-civil-standard-of-proof',
  type: 'concept',
  category: 'general-civil',
  title: 'Civil Standard of Proof (balance of probabilities)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Civil proceedings in Barbados use the balance of probabilities standard — the claimant must show their version of events is more likely than not (greater than 50%). The standard is uniform and does not increase for serious allegations. The claimant bears the burden of proving each element of the claim; the defendant bears the burden on any affirmative defence.',
  eli5Summary:
    'In civil court cases in Barbados, a claimant succeeds if the evidence shows their version of events is more likely to be true than not — essentially, more than a 50% chance they are right. There is no requirement to prove the case beyond all doubt (that is the criminal standard). Civil proceedings require only that the claimant\'s account is more probable than not.',
  content: `Standard: the claimant must prove each element of their claim on the balance of probabilities — meaning it is more probable than not (greater than 50%) that the fact in question exists. The court asks: "Is this more likely than not to be true?"

This is a fundamental principle of the common law and applies in civil proceedings in Barbados as in all Commonwealth jurisdictions.

Uniform standard: there is one civil standard, uniformly applied. It does not increase for more serious allegations. A serious allegation of fraud, deliberate wrongdoing, or intentional harm does not attract a higher standard of proof in civil proceedings — the standard remains balance of probabilities throughout.

Distinguished from the criminal standard: proof beyond reasonable doubt is the criminal standard. Civil proceedings in Barbados never apply it.

Burden of proof:
- Claimant: proves each element of the cause of action. For example, in defamation, the claimant proves that a defamatory statement was published to a third party and identified the claimant. In a harassment-type claim, the claimant proves repeated conduct causing distress and the defendant's knowledge.
- Defendant: proves any affirmative defence. For example, in defamation, the defendant who relies on truth (justification) bears the burden of proving that the imputation is substantially true. A defendant asserting a consent or reasonableness defence bears the burden on that issue.
- Counter-claim: the defendant bears the burden on their own counter-claim, just as a claimant bears the burden on their claim.

Cogent evidence: while the standard does not increase with the gravity of the allegation, courts apply careful scrutiny to evidence supporting serious allegations. An allegation of deliberate fraud or malicious conduct requires evidence that genuinely establishes the probability of that conduct — the standard remains balance of probabilities, but cogent evidence is needed to meet it.

Adverse inferences: where a party fails to produce evidence that is within their control and that would reasonably be expected, the court may draw an adverse inference from the absence of that evidence.

Evidential standard for injunctions: for interim injunctions, the test is not balance of probabilities but whether there is a serious question to be tried — a lower threshold. The balance of probabilities standard applies at the final hearing on the merits.`,
  tags: ['standard-of-proof', 'balance-of-probabilities', 'burden-of-proof', 'civil-evidence', 'Barbados', 'common-law'],
};

export default doc;

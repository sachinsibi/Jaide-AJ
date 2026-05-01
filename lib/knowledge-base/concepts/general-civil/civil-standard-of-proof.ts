import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-civil-standard-of-proof',
  type: 'concept',
  category: 'general-civil',
  title: 'Civil Standard of Proof (balance of probabilities)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Civil proceedings use the balance of probabilities standard — the claimant must show their version of events is more likely than not (greater than 50%). The standard is uniform and does not increase for serious allegations (Re B (Children) [2008] UKHL 35). The claimant bears the burden of proving each element of the claim; the defendant bears the burden on any affirmative defence.',
  eli5Summary:
    'In civil court cases, you win if you can show the judge that your version of events is more likely to be true than not — basically, more than a 50% chance you\'re right. You don\'t have to prove it beyond all doubt (that\'s for criminal cases). You just have to make it more likely than not that what you say happened, happened.',
  content: `Standard: the claimant must prove each element of their claim on the balance of probabilities — meaning it is more probable than not (>50%) that the fact exists. The court asks: "Is this more likely than not to be true?"

Uniform standard: there is one civil standard, uniformly applied. It does not increase for more serious allegations — there is no "civil fraud" standard, no "enhanced" standard for grave allegations. The standard is always more likely than not (Re B (Children) [2008] UKHL 35, Lady Hale).

Distinguished from the criminal standard: beyond reasonable doubt (or "sure") is the criminal standard. Civil proceedings never apply it.

Burden of proof:
- Claimant: proves each element of the cause of action (e.g., in defamation: publication, reference, defamatory meaning, serious harm; in harassment: course of conduct, harassment, knowledge/ought to know).
- Defendant: proves any affirmative defence (e.g., truth in defamation, reasonableness in harassment, consent in trespass). If the defendant asserts a positive case, they bear the burden on it.
- Counter-claim: the defendant bears the burden on their counter-claim, just as a claimant would on a claim.

Cogent evidence: while the standard does not increase with the gravity of the allegation, courts require cogent evidence in proportion to the seriousness of the claim. An allegation of deliberate fraud or intentional wrongdoing requires evidence that genuinely establishes the probability of that conduct — the court scrutinises it carefully without applying a higher standard.

Adverse inferences: where a party fails to produce evidence that they could have produced and which would naturally be expected, the court may draw adverse inferences from the absence (Wisniewski v Central Manchester HA [1998]).

Evidential standard for injunctions: for interim injunctions, the test is not balance of probabilities but "serious question to be tried" — a lower bar (American Cyanamid [1975]).`,
  tags: ['standard-of-proof', 'balance-of-probabilities', 'burden-of-proof', 'civil-evidence', 'Re-B'],
};

export default doc;

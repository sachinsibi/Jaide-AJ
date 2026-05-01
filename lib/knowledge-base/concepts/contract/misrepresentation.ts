import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-misrepresentation',
  type: 'concept',
  category: 'contract-service',
  title: 'Misrepresentation',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['misled', 'misrepresent', 'lied', 'false statement', 'inducement', 'told me', 'said it was', 'rescind', 'rescission'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'A misrepresentation is a false statement of fact (or law) made by one party to another that induces the other to enter the contract. Three types: fraudulent (knowingly false — Derry v Peek), negligent (Misrepresentation Act 1967 s.2(1) — false but not fraudulent, with a reverse burden on the maker to prove reasonable belief), and innocent. Remedies: rescission (sometimes barred); damages (limited by the type).',
  eli5Summary:
    'If a seller tells you something false to make you buy — "this car has never been in an accident", "this watch is genuine" — and that pushed you into the deal, you may be able to back out (rescission) or claim money. The remedy depends on whether they lied, were careless, or made an honest mistake.',
  content: `Misrepresentation:

An unambiguous false statement of fact (or, post-Pankhania v Hackney LBC [2002] EWHC 2441 (Ch), of law) by one contracting party to another that induced the other to contract.

Elements:
(a) Fact, not opinion (Bisset v Wilkinson [1927] AC 177), advertising puff, or future intention (with narrow exceptions — Edgington v Fitzmaurice (1885)).
(b) Made by the contracting party (or agent).
(c) Induced the contract — must be a (not the sole) reason for entry. Not engaged where the representee's own investigation displaced reliance.

Types:

1. Fraudulent (Derry v Peek (1889) 14 App Cas 337) — made knowingly, without belief, or recklessly. Remedies: rescission and damages in deceit (all direct losses, not limited by remoteness).

2. Negligent under Misrepresentation Act 1967 s.2(1) — liable as if fraudulent unless the maker proves reasonable belief in truth at the time. Reverse burden: representee proves misrepresentation; maker must prove reasonable belief. Remedies: rescission and damages on the fraud measure.

3. Negligent misstatement at common law (Hedley Byrne v Heller [1964] AC 465) — distinct tort requiring assumption of responsibility; relevant pre-contract.

4. Innocent — reasonable belief in truth. Rescission, with damages in lieu at the court's discretion (s.2(2) MA 1967).

Rescission unwinds the contract. Bars: affirmation after discovery; lapse of time (especially for innocent); restitutio in integrum impossible; third-party rights acquired in good faith.

Exclusion of liability for misrepresentation must satisfy s.3 MA 1967 reasonableness (and, in consumer contracts, CRA 2015 Pt 2).

Consumer add-on: CPUTR 2008 gives consumers a separate right to redress (right to unwind / discount / damages) for misleading actions and aggressive practices — generally easier to engage than common-law misrepresentation.`,
  tags: ['misrepresentation', 'fraudulent', 'negligent', 'innocent', 'rescission', 'Misrepresentation-Act-1967'],
};

export default doc;

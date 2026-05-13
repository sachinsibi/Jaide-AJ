import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-misrepresentation',
  type: 'concept',
  category: 'contract-service',
  title: 'Misrepresentation — Barbados Contract Law',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['misled', 'misrepresent', 'lied', 'false statement', 'inducement', 'told me', 'said it was', 'rescind', 'rescission'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'A misrepresentation is a false statement of existing fact made by one party to another that induces the other to enter the contract. Three types are recognised at common law as applied in Barbados: fraudulent (knowingly false — Derry v Peek, persuasive authority), negligent (false but not fraudulent; the maker may bear the burden of proving reasonable belief under common law or applicable Barbados statute), and innocent (honestly believed). Remedies include rescission of the contract and damages. Barbados may have equivalent legislation to the English Misrepresentation Act 1967 — consult laws.barbados.gov.bb.',
  eli5Summary:
    'If a seller or service provider made a false statement of fact to induce entry into a contract in Barbados — for example, saying that a car had never been in an accident when it had — the other party may be able to undo the contract (rescission) and claim damages. The strength of the remedy depends on whether the false statement was made dishonestly, carelessly, or in honest but mistaken belief.',
  content: `Misrepresentation — Barbados common law and applicable statute.

A misrepresentation is an unambiguous false statement of existing fact (or, in some circumstances, law) made by one contracting party to another that induces the other party to enter the contract.

Elements of misrepresentation.

(a) Statement of fact, not opinion. A misrepresentation must be a statement of fact, not a mere expression of opinion or belief (Bisset v Wilkinson [1927] AC 177 — persuasive common law authority). A statement of opinion by a person with special knowledge or expertise may, however, carry an implied representation that the maker has a reasonable basis for that opinion. Advertising puffery and general commendation ("best product on the market") are not actionable misrepresentations.

(b) Existing fact. A statement about an existing state of affairs, not about future intentions. However, a statement about future intention that the maker does not in fact hold is a misrepresentation of an existing fact (the fact of the maker's present intention).

(c) Made by the contracting party (or their agent). The false statement must come from the other contracting party or an agent acting on their behalf.

(d) Materiality and inducement. The false statement must have induced the representee to enter the contract. It need not be the sole reason for entry; it is enough that it was a reason that operated on the representee's mind. The misrepresentation does not need to be the decisive factor.

Types of misrepresentation.

1. Fraudulent misrepresentation. A statement made knowingly, without belief in its truth, or recklessly as to whether it is true or false: Derry v Peek (1889) 14 App Cas 337 (persuasive common law authority applied in Barbados as a Commonwealth jurisdiction). Remedies: rescission of the contract and damages in the tort of deceit. Damages in deceit are assessed on a broad basis — all direct losses flowing from the fraudulent inducement, without limitation by remoteness in contract.

2. Negligent misrepresentation. A false statement made without the care and skill that the circumstances required. Under the common law as applied in Barbados, liability for negligent misstatement may arise where the maker assumed a responsibility for the accuracy of the statement and the representee reasonably relied on it (Hedley Byrne & Co Ltd v Heller & Partners Ltd [1964] AC 465 — persuasive common law authority). Barbados may have enacted legislation equivalent to the English Misrepresentation Act 1967 that provides a statutory basis for negligent misrepresentation claims and allocates the burden of proof — consult laws.barbados.gov.bb for the applicable provisions.

3. Innocent misrepresentation. A false statement made in the honest and reasonable belief that it was true. Rescission is available in principle, though bars to rescission are more readily applied. Damages in lieu of rescission may be available at the court's discretion under applicable Barbados statute (if equivalent legislation exists) or under equitable principles.

Rescission. Rescission unwinds the contract and, so far as possible, restores the parties to their pre-contract positions (restitutio in integrum). Rescission is available for all three types of misrepresentation but may be barred where:
(a) The representee has affirmed the contract after discovering the misrepresentation.
(b) A substantial period has elapsed, particularly for innocent misrepresentation.
(c) Restitution in integrum is impossible (third-party rights have intervened, or the subject matter has been substantially altered).
(d) A third party has acquired rights in good faith and for value.

Exclusion of liability. Any term of a contract that purports to exclude or restrict a party's liability for misrepresentation, or that purports to prevent a party from relying on a misrepresentation as grounds for rescission, is subject to the relevant Barbados provisions governing unfair contract terms. Consult laws.barbados.gov.bb for the applicable statutory controls.

Practical note. A party who believes they have been induced into a contract in Barbados by a false statement should act promptly. Delay in asserting the right to rescind may be treated as affirmation or as a bar to rescission. The nature of the false statement — fraudulent, negligent, or innocent — affects the remedies available.`,
  tags: ['misrepresentation', 'fraudulent', 'negligent', 'innocent', 'rescission', 'common-law', 'barbados'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-contract-formation',
  type: 'concept',
  category: 'contract-service',
  title: 'Contract Formation (offer, acceptance, consideration, intention)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'A binding contract requires four elements: (1) offer (a definite proposal capable of acceptance); (2) acceptance (unqualified agreement to its terms); (3) consideration (something of value moving from each party); and (4) intention to create legal relations. In consumer contracts, intention is presumed; for social/domestic agreements, the presumption is reversed.',
  eli5Summary:
    'A contract is formed when one person makes a clear offer ("I\'ll fix your boiler for £200"), the other agrees to it exactly, both give something of value (you pay, they work), and both intend the deal to be legally binding. In ordinary commerce that intention is taken for granted. Once formed, both sides are legally bound to do what they promised.',
  content: `Contract Formation:

English law requires four elements for a valid contract.

1. Offer. A definite proposal capable of acceptance without further negotiation. Distinguished from invitation to treat (shop displays, advertisements, catalogues — Pharmaceutical Society v Boots [1953] 1 QB 401; Partridge v Crittenden [1968] 1 WLR 1204), mere statements of intention, and requests for information. Revocable any time before acceptance unless consideration has been paid for an option.

2. Acceptance. Unqualified, communicated agreement to the exact offer terms (mirror-image). Counter-offers destroy the original (Hyde v Wrench (1840)). Express or by conduct. Silence is generally not acceptance (Felthouse v Bindley (1862)). Battle of forms (commercial) usually resolved by the "last shot" doctrine.

3. Consideration. Quid pro quo: sufficient (Chappell v Nestle [1960] — chocolate wrappers were consideration); need not be adequate; not past (Re McArdle [1951]); must move from the promisee (subject to Contracts (Rights of Third Parties) Act 1999). Promissory estoppel may protect promises to forgo rights without fresh consideration but only as a shield, not a sword (High Trees [1947]).

4. Intention to create legal relations. Commercial/consumer contracts — presumed bound; rebuttable only by clear language ("subject to contract"). Social/domestic — presumption reversed; intention must be proved (Balfour v Balfour [1919]; Merritt v Merritt [1970]).

Formalities: sale of land (s.2 LP(MP)A 1989); guarantees (Statute of Frauds 1677 s.4); consumer credit (CCA 1974) require writing/deed. Most contracts can be oral or by conduct.

Capacity: minors, intoxicated, and mentally incapacitated persons have special protections.`,
  tags: ['contract-formation', 'offer', 'acceptance', 'consideration', 'intention-to-create-legal-relations'],
};

export default doc;

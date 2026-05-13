import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-contract-formation',
  type: 'concept',
  category: 'contract-service',
  title: 'Contract Formation (offer, acceptance, consideration, intention)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'A binding contract in Barbados requires four elements under the inherited common law: (1) offer — a definite proposal capable of acceptance; (2) acceptance — unqualified agreement to the offer terms; (3) consideration — something of value moving from each party; and (4) intention to create legal relations. In commercial and consumer contracts, intention to create legal relations is presumed. For purely social or domestic arrangements, the presumption is reversed.',
  eli5Summary:
    'A contract is formed in Barbados when one person makes a clear offer, the other accepts it without conditions, both give something of value, and both intend the arrangement to be legally binding. In everyday commerce — a shop sale, a service booking, a hire of a contractor — that intention is assumed automatically. Once formed, both parties are legally bound to do what was agreed.',
  content: `Contract Formation — Barbados common law.

The common law of contract, as inherited and applied in Barbados, requires four elements for a valid and binding contract.

1. Offer. A definite proposal, capable of acceptance without further negotiation, made by the offeror to the offeree. An offer must be distinguished from an invitation to treat — a mere indication that a party is willing to receive offers. Displaying goods for sale, placing an advertisement, or issuing a price list is generally an invitation to treat, not an offer: the contract is concluded when the buyer presents the goods at a point of sale and the seller accepts the payment. An offer may be revoked by the offeror at any time before acceptance, provided revocation is communicated to the offeree. An offer lapses on the death of either party, on the expiry of any stated time limit, or after a reasonable time.

2. Acceptance. Acceptance must be unqualified agreement to the exact terms of the offer (the mirror-image rule). A purported acceptance that introduces new or different terms is a counter-offer, not an acceptance; a counter-offer destroys the original offer and substitutes new terms which the original offeror may then accept or reject. Acceptance must be communicated to the offeror; silence is not acceptance. Acceptance may be by words (oral or written) or by conduct. Where the parties deal on standard-form terms, the question of which party's terms govern the contract is determined by the common law principles on offer and acceptance applied to the sequence of their communications.

3. Consideration. Each party to a contract must provide consideration — something of value — in exchange for the other's promise. Consideration must be sufficient (it must have some value in law, even if it is not commercially adequate) but need not be adequate (courts do not police the fairness of the exchange under the consideration doctrine). Consideration must move from the promisee: the person seeking to enforce a promise must show that they provided something of value. Past consideration (an act done before the promise was made, and not in exchange for it) does not count. The doctrine of promissory estoppel may protect a party who has relied on a promise to forgo existing rights, but it generally operates as a defence rather than as a basis for an independent claim.

4. Intention to create legal relations. The parties must intend that their agreement be legally enforceable. In commercial and consumer transactions — including the purchase of goods, the hiring of services, and commercial agreements — this intention is presumed and need not be established by evidence; it can only be displaced by clear language to the contrary (for example, "subject to contract"). In purely social or domestic arrangements — agreements between family members or friends — the presumption is reversed: intention must be positively demonstrated.

Formality requirements. Most contracts in Barbados may be made orally, in writing, or by conduct; no writing is required as a matter of general contract law. However, certain transactions require writing or other formalities to be valid or enforceable — for example, transfers of land and interests in land, and certain credit or guarantee arrangements. Parties to contracts involving land, credit, or significant guarantees should consult laws.barbados.gov.bb for the applicable Barbados statutory requirements.

Capacity. Minors (persons below the age of majority), persons whose mental capacity is impaired, and persons who are intoxicated at the time of contracting have limited capacity to enter binding contracts. Certain contracts entered into by minors may be voidable at the minor's election; others may bind the minor (contracts for necessaries). The applicable Barbados provisions on capacity should be consulted for specific situations.

Foundational common law authorities applied in Barbados. The principles above reflect the inherited common law of contract applied in Barbados as a Commonwealth jurisdiction. Leading cases include: Carlill v Carbolic Smoke Ball Co [1893] 1 QB 256 (offer and acceptance; binding nature of public offers meeting specified conditions) — persuasive common law authority; and Balfour v Balfour [1919] 2 KB 571 (domestic arrangements lack presumed intention to be legally binding) — persuasive common law authority.`,
  tags: ['contract-formation', 'offer', 'acceptance', 'consideration', 'intention-to-create-legal-relations', 'barbados', 'common-law'],
};

export default doc;

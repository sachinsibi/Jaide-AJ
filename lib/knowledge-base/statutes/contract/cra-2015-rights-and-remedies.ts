import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-sale-of-goods-remedies',
  type: 'statute',
  category: 'contract-service',
  title: "Buyer's Remedies for Defective Goods — Barbados",
  jurisdiction: 'barbados',
  citation: 'Sale of Goods Act, Cap. 318 (Laws of Barbados); common law of contract',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown', 'eli5', 'references'],
  factSummary:
    'Under the Sale of Goods Act, Cap. 318 and the common law of contract as applied in Barbados, a buyer whose goods do not conform to the implied terms as to quality, description, or fitness may reject the goods and recover the price where the right to reject has not been lost, or claim damages for breach of the implied term. Consequential losses are recoverable subject to the remoteness principle in Hadley v Baxendale, which is persuasive common law authority applied in Barbados.',
  eli5Summary:
    'If goods bought in Barbados are defective, the buyer has legal remedies. Where the defect is discovered promptly and the right to reject has not been lost, the buyer may return the goods and recover the price. Where rejection is no longer available, the buyer may claim damages for the loss caused by the defect. Additional losses caused by the defect may also be claimable, provided they were a reasonably foreseeable result of the breach.',
  content: `Buyer's remedies for defective goods under Barbados law arise under the Sale of Goods Act, Cap. 318 and the general common law of contract.

Rejection and recovery of the price. Cap. 318 classifies the implied terms as to quality, description, fitness, and title as conditions. Breach of a condition entitles the buyer to treat the contract as repudiated and reject the goods. Upon valid rejection, the buyer is entitled to recover the price paid. Note: Cap. 318 may contain specific provisions on when the right to reject is lost (acceptance, lapse of time, or inconsistent act) — consult laws.barbados.gov.bb for the exact provisions.

Damages for breach of implied term (warranty measure). Where the buyer has accepted the goods, or the right to reject has otherwise been lost, Cap. 318 converts the breach of condition into a breach of warranty sounding in damages. The measure of damages is generally the difference between the value of the goods as delivered and their value if they had conformed to the contract (diminution in value).

Damages for consequential loss. Common law damages for breach of contract extend to consequential losses, subject to the remoteness test in Hadley v Baxendale (1854) 9 Ex 341 — persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Losses are recoverable if they arose naturally from the breach in the usual course of things, or were within the reasonable contemplation of both parties at the time of the contract as the probable result of breach.

Repair costs. Where the buyer has the goods repaired rather than rejecting them, the reasonable cost of repair is recoverable as damages for breach of the implied quality term.

Duty to mitigate. As a matter of common law applied in Barbados, a buyer must take reasonable steps to mitigate loss following the seller's breach. A buyer who fails to take reasonable mitigation steps may not recover the avoidable portion of the loss.

Currency note. All monetary amounts in Barbados are denominated in Barbados dollars (BBD). The BBD is pegged to the United States dollar at a fixed rate of 2 BBD to 1 USD.

Authoritative source: Laws of Barbados portal at laws.barbados.gov.bb. Cap. 318 should be consulted directly to confirm current provisions on acceptance, rejection, and damages.`,
  tags: ['Cap-318', 'sale-of-goods', 'rejection', 'buyer-remedies', 'damages', 'consequential-loss', 'barbados'],
};

export default doc;

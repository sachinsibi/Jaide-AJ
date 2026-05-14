import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-hadley-v-baxendale',
  type: 'case',
  category: 'contract-service',
  title: 'Hadley v Baxendale (1854) 9 Ex 341',
  jurisdiction: 'barbados',
  citation: 'Hadley v Baxendale (1854) 9 Ex 341 (Court of Exchequer)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Foundational authority on remoteness in contract damages. Damages for breach are recoverable where the loss either (a) arose naturally from the breach in the usual course of things, or (b) was reasonably in the contemplation of both parties at the time of the contract as the probable result of breach. Losses outside both limbs are too remote.',
  content: `Hadley v Baxendale (1854) 9 Ex 341 (Court of Exchequer, England).

Status in Barbados: Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. The remoteness rule in Hadley v Baxendale is part of the general common law of contract and is recognised and applied across Commonwealth Caribbean jurisdictions including Barbados. It is foundational to any assessment of recoverable contract damages in Barbados courts.

Facts: The Hadley brothers operated a flour mill. The mill's crankshaft broke and they engaged carriers to transport the broken shaft to Greenwich to serve as a pattern for a replacement. The carriers delayed delivery. As a result, the mill was idle for longer than it otherwise would have been, and the Hadleys claimed their lost profits for the additional period.

Held: The lost profits were not recoverable. The carriers had not been informed that the mill would remain idle until the shaft returned. The loss did not arise naturally from delayed transit (a mill might hold a spare shaft), and it was not within the carriers' reasonable contemplation as a probable consequence of delay because they had no knowledge of the special circumstances.

Alderson B's two-limb rule:

"Where two parties have made a contract which one of them has broken, the damages which the other party ought to receive in respect of such breach of contract should be such as may fairly and reasonably be considered either arising naturally, i.e. according to the usual course of things, from such breach of contract itself, or such as may reasonably be supposed to have been in the contemplation of both parties, at the time they made the contract, as the probable result of the breach of it."

Application in Barbados.

Limb 1 — Ordinary losses. Damages flowing in the ordinary course of things from the type of breach in question. In a Barbados consumer or commercial contract context, ordinary losses typically include: the cost of repair or replacement of defective goods; the refund of the price for non-conforming goods; the cost of obtaining substitute performance; and loss of the bargain value. These losses are presumed to be within the reasonable contemplation of the parties and are recoverable without further proof of knowledge.

Limb 2 — Special losses. Damages recoverable only where, at the time of contracting, the breaching party had actual or constructive knowledge of the special circumstances giving rise to the unusual loss. Examples: loss of a particular onward contract of which the other party was informed; specialist business loss notified at the time of agreement; unusual consequential damage arising from a specific use communicated to the seller or service provider.

The rule sets an objective standard of contemplation at the date of contract, not at the date of breach. A party that acquires knowledge of special circumstances after the contract is made does not thereby assume liability for losses flowing from those circumstances.

Practical significance in Barbados contract disputes. The rule limits the potentially open-ended liability that would otherwise flow from a single breach. A buyer or service recipient claiming consequential losses beyond the ordinary measure must demonstrate that the breaching party knew or ought to have known of the circumstances giving rise to those losses when the contract was made.`,
  tags: ['Hadley-v-Baxendale', 'remoteness', 'two-limb-rule', 'contemplation', 'ordinary-losses', 'special-losses', 'persuasive-authority', 'barbados'],
};

export default doc;

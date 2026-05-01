import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-hadley-v-baxendale',
  type: 'case',
  category: 'contract-service',
  title: 'Hadley v Baxendale (1854) 9 Ex 341',
  jurisdiction: 'england-wales',
  citation: 'Hadley v Baxendale (1854) 9 Ex 341',
  url: 'https://www.bailii.org/ew/cases/EWHC/Exch/1854/J70.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Foundational authority on remoteness in contract damages. Damages for breach are recoverable where the loss either (a) arose naturally from the breach in the usual course of things, or (b) was reasonably in the contemplation of both parties at the time of the contract as the probable result of breach. Losses outside both limbs are too remote.',
  content: `Hadley v Baxendale (1854) 9 Ex 341.

Facts: The Hadley brothers operated a flour mill at Gloucester. The mill's crankshaft broke. The Hadleys engaged the defendants, common carriers, to transport the broken shaft to Greenwich for use as a pattern in making a replacement. The carriers delayed delivery by several days. As a result, the mill was idle longer than it would otherwise have been, and the Hadleys claimed lost profits for the additional period of inactivity.

Held: The lost profits were not recoverable. The carriers had not been told that the mill would be idle pending the shaft's return. The loss did not arise naturally from delayed transit (mills could have spare shafts), and it was not within the carriers' reasonable contemplation as a probable consequence of delay because they had not been informed of the special circumstances.

Alderson B's two-limb rule:

"Where two parties have made a contract which one of them has broken, the damages which the other party ought to receive in respect of such breach of contract should be such as may fairly and reasonably be considered either arising naturally, i.e. according to the usual course of things, from such breach of contract itself, or such as may reasonably be supposed to have been in the contemplation of both parties, at the time they made the contract, as the probable result of the breach of it."

Modern application:

Limb 1 — Ordinary losses: damages flowing in the ordinary course of things from the breach. Examples: cost of repair or replacement; refund of price for non-conforming goods; cost of substitute performance; loss of bargain; ordinary loss of use.

Limb 2 — Special losses: damages within the parties' reasonable contemplation at contract because of special circumstances communicated. Requires actual or constructive knowledge by the breaching party of the special facts giving rise to the unusual loss. Examples: loss of an unusually lucrative onward contract; specialist business loss notified at time of contract.

Applied alongside Victoria Laundry v Newman [1949] 2 KB 528 (CA) — losses must be "reasonably foreseeable" as a "serious possibility" or "real danger"; The Heron II [1969] 1 AC 350 — the foreseeability standard in contract is stricter than in tort; and Transfield Shipping (The Achilleas) [2008] UKHL 48 — assumption of responsibility is a refinement of the second limb.`,
  tags: ['Hadley-v-Baxendale', 'remoteness', 'two-limb-rule', 'contemplation', 'ordinary-losses', 'special-losses'],
};

export default doc;

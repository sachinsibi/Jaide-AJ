import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-repudiation-test',
  type: 'test',
  category: 'contract-service',
  title: 'Repudiatory Breach Test — Barbados (when termination is permitted)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Termination of a contract in Barbados is permitted under the common law only where (a) a condition has been breached, (b) an innominate term has been breached in a way that deprives the innocent party of substantially the whole benefit of the contract (Hong Kong Fir Shipping — persuasive common law authority), or (c) the breaching party has unequivocally repudiated the contract. Breach of a warranty gives a right to damages only.',
  content: `Repudiatory Breach Test — Barbados common law.

This test determines when a party to a contract in Barbados is entitled to treat the contract as terminated (discharged) on the grounds of the other party's breach. The doctrine forms part of the common law of contract as inherited and applied in Barbados.

A party can terminate a contract only on one of three grounds.

Ground 1 — Breach of a condition. A condition is a term that goes to the root of the contract. Breach of a condition gives the innocent party an immediate right to treat the contract as discharged and to claim damages.

Conditions arise from: express contractual labelling (the parties designate a term a condition); applicable Barbados statute (for example, the implied conditions under the Sale of Goods Act, Cap. 318 as to title, description, quality, and fitness for purpose); or the nature of the term as revealed by the context and purpose of the contract.

Ground 2 — Breach of an innominate term with substantial deprivation. Where a term is neither an express condition nor a warranty, it is treated as innominate (intermediate). Whether a breach of an innominate term justifies termination depends not on the label of the term but on the actual consequences of the particular breach: Hong Kong Fir Shipping Co Ltd v Kawasaki Kisen Kaisha Ltd [1962] 2 QB 26 — persuasive common law authority applied in Barbados as a Commonwealth jurisdiction.

The test is: has the breach deprived the innocent party of substantially the whole benefit which it was intended that party should obtain from the contract?

Relevant factors in the assessment include: the proportion of the contractual benefit that has been lost; the likelihood of the breach continuing or recurring; the availability and cost of substitute performance; whether damages would be an adequate remedy; and the remaining duration or subject matter of the contract.

Ground 3 — Anticipatory repudiation. Where one party indicates clearly and unequivocally, by words or conduct, that they will not perform a fundamental obligation under the contract, the innocent party may elect to treat the contract as terminated immediately, without waiting for the date of performance. The repudiation must be unequivocal — a mere threat or expression of difficulty is not sufficient.

Critical risks in exercising the right to terminate.

(a) Wrongful termination is itself a repudiatory breach. A party that purports to terminate a contract on grounds that are later found by the court to be insufficient has itself committed a repudiatory breach and will be liable in damages to the other party. The right to terminate must be exercised with care.

(b) Election and affirmation. Once a party becomes aware of a breach entitling them to terminate, they must elect within a reasonable time either to terminate (accept the repudiation) or to affirm the contract (treat it as continuing). Affirmation forecloses later termination on the same breach. Acting under the contract or accepting further performance after discovering the breach may constitute affirmation.

(c) Damages remain available. Termination and damages are not mutually exclusive. A party who validly terminates following a repudiatory breach may still claim damages for the loss caused by the breach and the premature end of the contract.

Statutory rights of rejection in Barbados. In Barbados, the Sale of Goods Act, Cap. 318 provides a statutory right to reject goods where the implied conditions as to quality, description, fitness, or title have been breached and the right to reject has not been lost through acceptance. The statutory rejection right under Cap. 318 operates alongside (and may in practice be easier to establish than) the common law right to terminate for repudiatory breach, as it does not require a showing of substantial deprivation of the whole contractual benefit.`,
  tags: ['repudiation-test', 'Hong-Kong-Fir', 'condition', 'innominate-term', 'substantial-deprivation', 'wrongful-termination', 'barbados'],
};

export default doc;

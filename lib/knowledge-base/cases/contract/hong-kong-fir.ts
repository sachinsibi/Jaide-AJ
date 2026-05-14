import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-hong-kong-fir',
  type: 'case',
  category: 'contract-service',
  title: 'Hong Kong Fir Shipping v Kawasaki [1962] 2 QB 26 (CA)',
  jurisdiction: 'barbados',
  citation: 'Hong Kong Fir Shipping Co Ltd v Kawasaki Kisen Kaisha Ltd [1962] 2 QB 26 (Court of Appeal of England and Wales)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Established the category of innominate (intermediate) contractual terms. Whether a breach of an innominate term justifies termination depends on the gravity of its consequences, not on a label attached to the term. Termination is permitted only where the breach deprives the innocent party of substantially the whole benefit of the contract.',
  content: `Hong Kong Fir Shipping Co Ltd v Kawasaki Kisen Kaisha Ltd [1962] 2 QB 26 (Court of Appeal of England and Wales).

Status in Barbados: Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. The doctrine of innominate terms established in this case is part of the general common law of contract recognised and applied in Barbados and across Commonwealth Caribbean jurisdictions.

Facts: Charterers hired a vessel for a 24-month time charter. The contract required the vessel to be "in every way fitted for ordinary cargo service." The engines were unreliable and the engine-room crew incompetent. Breakdowns detained the vessel for approximately 20 weeks during the first seven months of the charter. The charterers purported to terminate. The shipowners sued for wrongful repudiation.

Held (Court of Appeal): The charterers were not entitled to terminate. The breach, though significant, did not deprive them of substantially the whole benefit of a 24-month charter. The remedy lay in damages, not termination.

Diplock LJ's framework — three categories of contractual term.

(1) Conditions. Terms that go to the root of the contract. Breach of a condition gives the innocent party an automatic right to terminate, regardless of the actual consequences of the breach. A term is a condition where the parties have expressly labelled it as such, where statute so provides, or where the court concludes from the nature and context of the contract that the parties intended any breach to entitle the innocent party to treat the contract as at an end.

(2) Warranties. Minor terms. Breach of a warranty sounds only in damages and does not entitle the innocent party to terminate.

(3) Innominate (intermediate) terms. Terms that can be breached in many ways, some trivial and some serious. The right to terminate depends not on the label attached to the term but on the actual consequences of the breach: does the breach deprive the innocent party of substantially the whole benefit that it was intended the innocent party should obtain from the contract?

Test for termination where an innominate term has been breached. The question is whether the breach has substantially deprived the innocent party of the whole benefit of the contract. Relevant factors include the proportion of the contractual benefit lost, the likelihood of continuing breach, the practicability and cost of substitute performance, the adequacy of damages as a remedy, and the remaining duration of the contract.

Application in Barbados contract law. In Barbados, as in other Commonwealth jurisdictions, most contractual terms that do not bear an express condition label are likely to be treated as innominate. The right to terminate therefore depends on a factual assessment of the actual gravity of the breach in question.

Risk of wrongful termination. A party that terminates a contract on grounds later found by the court to be insufficient is itself guilty of a repudiatory breach. The courts apply the doctrine of election: once aware of a breach, the innocent party must elect within a reasonable time either to terminate or to affirm the contract; affirmation forecloses later termination on the same breach.

Common law termination and statutory remedies in Barbados. In Barbados consumer and commercial contract disputes, the common law rules on termination for repudiatory breach operate alongside any applicable statutory remedies (such as rejection rights under the Sale of Goods Act, Cap. 318 and any relevant consumer protection provisions). Where a statutory remedy is available, it may provide a clearer route to rejection without requiring an assessment of substantial deprivation.`,
  tags: ['Hong-Kong-Fir', 'innominate-terms', 'repudiatory-breach', 'condition-warranty-innominate', 'substantial-deprivation', 'persuasive-authority', 'barbados'],
};

export default doc;

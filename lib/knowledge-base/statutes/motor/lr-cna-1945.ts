import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-contributory-negligence',
  type: 'statute',
  category: 'general',
  title: 'Contributory Negligence — Apportionment of Liability in Barbados',
  jurisdiction: 'barbados',
  citation: 'Common law of Barbados (Commonwealth inheritance); contributory negligence apportionment',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'property-damage', 'general-civil'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'As a Commonwealth jurisdiction, Barbados applies the principle that contributory negligence by the claimant reduces — but does not eliminate — the damages recoverable, with the court apportioning liability between the parties according to their respective degrees of fault. The historical common-law rule that contributory negligence was a complete defence has been abolished by statute in Barbados, as in other Commonwealth jurisdictions.',
  content: `Contributory negligence in Barbados civil law

As a Commonwealth jurisdiction that inherited English common law principles, Barbados applies the modern apportionment approach to contributory negligence. The historical common-law rule that any contributory fault by the claimant operated as a complete defence has been abolished by statute, following the approach taken across Commonwealth jurisdictions in the mid-twentieth century.

Current position: where a claimant's own negligence contributes to the damage they suffer, the court reduces the damages recoverable by a proportion reflecting the claimant's share of responsibility. The court assesses the relative fault of both parties and arrives at a just and equitable apportionment.

Application in motor accident claims: contributory negligence is most commonly raised in motor accident cases where the defendant insurer or driver alleges that the claimant driver also failed to take reasonable care — for example, by speeding, failing to observe traffic signals, or failing to wear a seatbelt. Where contributory negligence is established, the claimant's damages are reduced by the assessed percentage of their own fault.

Burden of proof: the burden of establishing contributory negligence lies on the defendant. The defendant must prove both that the claimant fell below the standard of care they owed to themselves, and that this failure contributed to the damage suffered.

Standard of care: the standard applied is that of the reasonable person. In a motor accident context, this includes observance of applicable road traffic rules and regulations in Barbados.

The principle does not affect the existence of the defendant's liability — it affects only the amount of damages recoverable. A 30% finding of contributory negligence against the claimant reduces a $10,000 award to $7,000.`,
  eli5Summary:
    'If both drivers were partly at fault in an accident, the court works out what percentage each person was to blame. If one driver was 70% at fault and the other was 30% at fault, the damages are split accordingly. Being partly responsible for an accident does not mean losing the whole case — it just reduces the amount that can be recovered.',
  tags: ['contributory-negligence', 'apportionment', 'fault', 'reduction-of-damages', 'Barbados', 'Commonwealth-law'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-cambridge-water-v-eastern-counties',
  type: 'case',
  category: 'property-damage',
  title: 'Cambridge Water Co v Eastern Counties Leather plc [1994] 2 AC 264 (HL)',
  jurisdiction: 'barbados',
  citation: 'Cambridge Water Co v Eastern Counties Leather plc [1994] 2 AC 264 (HL)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['contamination', 'chemicals', 'foreseeable damage', 'pollution', 'leak', 'escape', 'rylands'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Foreseeability of the type of damage is required for liability under the Rylands v Fletcher principle and in private nuisance, just as it is in negligence. Strict liability does not extend to wholly unforeseeable types of harm. The case confirmed that the Rylands v Fletcher principle is a sub-species of nuisance, not a free-standing strict-liability tort.',
  content: `Cambridge Water Co v Eastern Counties Leather plc [1994] 2 AC 264 (House of Lords).

Status in Barbados: Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. English House of Lords decisions are persuasive (not binding) in the courts of Barbados, which apply common law principles inherited from English law as developed in the Commonwealth.

Facts: The defendants operated a tannery and used the chlorinated solvent perchloroethylene (PCE). Over many years, small spillages occurred at the tannery and seeped into the soil, eventually reaching an aquifer that supplied the claimant water company's borehole 1.3 miles away. By the time the contamination was detected, regulatory limits on PCE in drinking water had been imposed that the borehole could no longer meet. The water company had to find an alternative supply at significant cost and sued in negligence, nuisance, and under the Rylands v Fletcher principle.

Held: The defendants were not liable. At the time of the spillages, the type of damage that resulted — long-distance aquifer contamination affecting a public water supply — was not reasonably foreseeable. Foreseeability of damage of the relevant type is required even under the Rylands v Fletcher principle.

Lord Goff's analysis:

(1) Foreseeability of the type of damage is a prerequisite of liability in nuisance and under the Rylands v Fletcher principle. Even a strict-liability rule does not extend to wholly unforeseen consequences.

(2) The Rylands v Fletcher principle is properly understood as an extension of the law of private nuisance to cases of an isolated escape, not as an independent strict-liability tort. The same foreseeability requirements apply.

(3) Imposing common-law strict liability for unforeseeable types of contamination is a matter for legislation, not judicial extension of the Rylands principle.

Doctrinal contribution:

- Foreseeability requirement: confirmed for the Rylands principle and private nuisance.
- Rylands confined within nuisance: it is a particular form of nuisance (isolated escape), not a separate tort.
- Distinguished from negligence: the Rylands principle does not require fault, but does require foreseeability of the type of damage that flows from the relevant escape.

Application in Barbados property-damage claims: claims invoking the Rylands v Fletcher principle must plead and demonstrate that damage of the type that occurred was reasonably foreseeable as a consequence of an escape of the relevant kind. Routine flooding, fire spread, and chemical contamination cases will ordinarily satisfy this requirement where the type of harm is plainly foreseeable. The principle has been applied in Barbados and other Caribbean Commonwealth courts as persuasive common law authority.`,
  tags: ['Cambridge-Water', 'Rylands-Fletcher', 'foreseeability', 'type-of-damage', 'nuisance', 'barbados', 'persuasive-authority'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-cambridge-water-v-eastern-counties',
  type: 'case',
  category: 'property-damage',
  title: 'Cambridge Water Co v Eastern Counties Leather plc [1994] 2 AC 264 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Cambridge Water Co v Eastern Counties Leather plc [1994] 2 AC 264 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1993/12.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['contamination', 'chemicals', 'foreseeable damage', 'pollution', 'leak', 'escape', 'rylands'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Foreseeability of the type of damage is required for liability under Rylands v Fletcher and in private nuisance, just as it is in negligence. Strict liability does not extend to wholly unforeseeable types of harm. Confirmed Rylands as a sub-species of nuisance, not a free-standing strict-liability tort.',
  content: `Cambridge Water Co v Eastern Counties Leather plc [1994] 2 AC 264 (House of Lords).

Facts: The defendants operated a tannery and used the chlorinated solvent perchloroethylene (PCE). Over many years, small spillages occurred at the tannery and seeped into the soil, eventually reaching an aquifer that supplied the claimant water company's borehole 1.3 miles away. By the time the contamination was detected, an EU Directive had imposed limits on PCE in drinking water that the borehole could no longer meet. The water company had to find an alternative supply at significant cost and sued in negligence, nuisance, and Rylands v Fletcher.

Held: The defendants were not liable. At the time of the spillages, the type of damage that resulted (long-distance aquifer contamination affecting a public water supply) was not reasonably foreseeable. Foreseeability of damage of the relevant type is required even under Rylands v Fletcher.

Lord Goff's analysis:

(1) Foreseeability of the type of damage is a prerequisite of liability in nuisance and in Rylands. Even a strict-liability rule does not extend to wholly unforeseen consequences.

(2) Rylands v Fletcher is properly understood as an extension of the law of private nuisance to cases of an isolated escape, not as an independent strict-liability tort. The same foreseeability requirements apply.

(3) Imposing common-law strict liability for unforeseeable types of contamination is properly a matter for legislation (such as the Environmental Protection Act 1990 and EU water-quality regulations), not for judicial extension of Rylands.

Doctrinal contribution:

- Foreseeability requirement: confirmed for Rylands and private nuisance.
- Confined Rylands within nuisance: it is a particular form of nuisance (isolated escape), not a separate tort.
- Distinguished from negligence: Rylands does not require fault, but does require foreseeability of the type of damage that flows from the relevant escape.

Application: in modern property-damage practice, Rylands claims must plead and prove that damage of the type that occurred was reasonably foreseeable as a consequence of an escape of the relevant kind. Routine flooding, fire spread, and chemical contamination cases will pass this test where the type of harm is plainly foreseeable.

Subsequent cases (Transco v Stockport MBC [2003] UKHL 61) confirmed Cambridge Water and tightened the "non-natural use" requirement to "extraordinary and unusual" use, narrowing Rylands further.`,
  tags: ['Cambridge-Water', 'Rylands-Fletcher', 'foreseeability', 'type-of-damage', 'nuisance'],
};

export default doc;

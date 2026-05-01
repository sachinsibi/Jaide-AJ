import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-rylands-v-fletcher',
  type: 'case',
  category: 'property-damage',
  title: 'Rylands v Fletcher (1868) LR 3 HL 330',
  jurisdiction: 'england-wales',
  citation: 'Rylands v Fletcher (1868) LR 3 HL 330',
  url: 'https://www.bailii.org/uk/cases/UKHL/1868/12.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A landowner who, for their own purposes, brings on to their land and keeps there anything likely to do mischief if it escapes, is strictly liable for damage caused by the natural consequences of its escape, where the use of the land was non-natural. The rule has since been confined within the law of nuisance and requires foreseeability of the type of damage (Cambridge Water).',
  content: `Rylands v Fletcher (1868) LR 3 HL 330 (House of Lords, affirming the Exchequer Chamber).

Facts: The defendants, mill owners, employed independent contractors to build a reservoir on their land. The contractors negligently failed to seal disused mineshafts beneath the site. When the reservoir was filled, water flooded through the shafts into the claimant's neighbouring colliery, causing significant damage. The defendants themselves were not negligent (the contractors were).

Held: Despite the absence of personal negligence, the defendants were strictly liable. Blackburn J in the Exchequer Chamber gave the foundational formulation:

"The person who for his own purposes brings on his lands and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and, if he does not do so, is prima facie answerable for all the damage which is the natural consequence of its escape."

The House of Lords (Lord Cairns) added the further requirement of "non-natural use" of the land — distinguishing ordinary domestic uses from artificial accumulations or industrial uses outside the ordinary character of land use in the locality.

Modern English law (Cambridge Water v Eastern Counties Leather [1994] 2 AC 264; Transco v Stockport MBC [2003] UKHL 61):

The rule is now treated as a sub-species of private nuisance, not a free-standing strict-liability tort. Five elements must be made out:
(1) The defendant brought something on their land and accumulated it.
(2) That thing was likely to do mischief if it escaped.
(3) The use of the land was non-natural ("extraordinary and unusual" in modern formulation, Transco).
(4) There was an escape from the defendant's land to land where the claimant has rights.
(5) Damage of a foreseeable type resulted (Cambridge Water requires foreseeability of type of damage).

Application: classic Rylands cases involve escape of water (reservoirs, tanks, swimming pools), fire from non-natural sources (LMS International v Styrene Packaging [2005]), accumulated chemicals, and gas. Tree-root encroachment is dealt with in nuisance, not Rylands.

Defences: Act of God; act of a stranger that the defendant could not have foreseen; statutory authority; consent of the claimant; default of the claimant.

Personal injury is not recoverable under Rylands (Transco). The cause of action is for property damage.`,
  tags: ['Rylands-Fletcher', 'strict-liability', 'escape', 'non-natural-use', 'foundational'],
};

export default doc;

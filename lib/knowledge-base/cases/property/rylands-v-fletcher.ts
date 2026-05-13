import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-rylands-v-fletcher',
  type: 'case',
  category: 'property-damage',
  title: 'Rylands v Fletcher (1868) LR 3 HL 330',
  jurisdiction: 'barbados',
  citation: 'Rylands v Fletcher (1868) LR 3 HL 330',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. A landowner who, for their own purposes, brings onto their land and keeps there anything likely to do mischief if it escapes, is strictly liable for damage caused by the natural consequences of its escape, where the use of the land was non-natural. The principle requires foreseeability of the type of damage (Cambridge Water) and has been applied in Barbados and other Caribbean Commonwealth jurisdictions.',
  content: `Rylands v Fletcher (1868) LR 3 HL 330 (House of Lords, affirming the Exchequer Chamber).

Status in Barbados: Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. The Rylands v Fletcher principle has been recognised and applied in Caribbean Commonwealth jurisdictions as part of the inherited common law governing strict liability for the escape of dangerous things from land.

Facts: The defendants, mill owners, employed independent contractors to build a reservoir on their land. The contractors negligently failed to seal disused mineshafts beneath the site. When the reservoir was filled, water flooded through the shafts into the claimant's neighbouring mine, causing significant damage. The defendants themselves were not personally negligent — the contractors were.

Held: Despite the absence of personal negligence, the defendants were strictly liable. Blackburn J in the Exchequer Chamber gave the foundational formulation:

"The person who for his own purposes brings on his lands and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and, if he does not do so, is prima facie answerable for all the damage which is the natural consequence of its escape."

The House of Lords added the further requirement of "non-natural use" of the land — distinguishing ordinary domestic uses from artificial accumulations or industrial uses outside the ordinary character of land use in the locality.

The principle as applied in Barbados (informed by Cambridge Water Co v Eastern Counties Leather [1994] 2 AC 264 and subsequent persuasive authority):

The Rylands principle is treated as a form of private nuisance, not a free-standing strict-liability tort. Five elements must be established:

(1) The defendant brought something onto their land and accumulated it there.
(2) That thing was likely to do mischief if it escaped.
(3) The use of the land was non-natural — that is, the accumulation involved an extraordinary or unusual use of the land, going beyond ordinary domestic or commercial use appropriate to the locality.
(4) There was an escape from the defendant's land to land where the defendant does not have control.
(5) Damage of a foreseeable type resulted — the type of harm must have been reasonably foreseeable as a consequence of an escape of the relevant kind (Cambridge Water, persuasive authority in Barbados).

What is not required: fault or negligence in the conduct of the activity. Liability is strict — the question is whether the other elements are met.

Application in Barbados: classic scenarios include escape of water from reservoirs, tanks, or swimming pools; fire spreading from a non-natural accumulation; accumulated chemicals; and gas. The principle is particularly relevant in Barbados where pooling water, irrigation systems, fuel storage, and other accumulations on adjacent properties can cause damage to neighbouring land during heavy rainfall or other events. The non-natural use requirement means ordinary domestic water supply and everyday household uses will not attract strict liability.

Defences: act of God (an extraordinary natural event that the defendant could not reasonably have foreseen or guarded against); act of a third-party stranger that the defendant could not have foreseen; consent of the claimant; default of the claimant; statutory authority.

Damages recoverable: physical property damage and consequential losses. Personal injury is not recoverable under the Rylands principle. Pure economic loss is not recoverable.

Limitation: the applicable Barbados limitation period (generally 6 years from the date of escape and resulting damage).`,
  tags: ['Rylands-Fletcher', 'strict-liability', 'escape', 'non-natural-use', 'foundational', 'barbados', 'persuasive-authority'],
};

export default doc;

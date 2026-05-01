import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-bolton-v-stone',
  type: 'case',
  category: 'motor-accident',
  title: 'Bolton v Stone [1951] AC 850 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Bolton v Stone [1951] AC 850 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1951/2.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['foreseeable', 'foreseeability', 'reasonably foreseeable', 'unforeseeable', 'remote', 'unlikely', 'risk'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A defendant is liable in negligence only for risks that are reasonably foreseeable. The mere possibility of harm is not enough; the risk must be substantial enough that a reasonable person in the defendant\'s position would take precautions against it.',
  content: `Bolton v Stone [1951] AC 850 (House of Lords).

Facts: The claimant, Miss Stone, was struck and injured by a cricket ball hit out of the defendant cricket club's ground while she was standing on the road outside her house. Evidence showed that balls had been hit out of the ground only on six occasions in the previous 30 years, and no one had previously been struck.

Held (HL): The defendant club was not liable. While the risk of a ball being hit out of the ground was not nil, it was so small that a reasonable person, balancing the risk against the cost of preventing it (raising the fence, ceasing to play cricket), would not have taken further precautions. The risk was foreseeable in the sense that it was not entirely impossible, but it was not such a substantial risk that the reasonable defendant should be expected to guard against it.

Lord Reid: "It is not enough that the event should be such as can reasonably be foreseen; the further question arises whether the risk of damage to a person on the road is so small that a reasonable person in the position of the appellants, considering the matter from the point of view of safety, would have thought it right to refrain from taking steps to prevent the danger."

The Bolton balance:

A reasonable person decides what precautions to take by balancing:
(a) the magnitude of the risk (likelihood × severity of harm);
(b) the cost / practicability of precautions;
(c) the social utility of the activity creating the risk.

Application in motor negligence: the risk from negligent driving is plainly substantial, so Bolton rarely defeats a motor claim outright. It structures marginal cases — extraordinarily sudden hazards (an unseen sinkhole), sudden latent mechanical failure without warning (Mansfield v Weetabix-style), "agony of the moment" emergency decisions — and sits alongside Wagon Mound No 1 [1961] AC 388 (remoteness) to define the foreseeability gateway.`,
  tags: ['Bolton-v-Stone', 'foreseeability', 'reasonable-risk', 'magnitude-of-risk', 'precautions'],
};

export default doc;

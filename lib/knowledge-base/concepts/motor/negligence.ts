import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-negligence',
  type: 'concept',
  category: 'general',
  title: 'Negligence (the four-element tort)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'property-damage', 'general-civil'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'The civil wrong of negligence has four elements: (1) duty of care; (2) breach of that duty by failing to meet the standard of the reasonable person; (3) factual causation (but-for test); (4) damage of a kind not too remote. The claimant must prove each element on the balance of probabilities.',
  eli5Summary:
    'Negligence is the legal name for "you weren\'t careful enough and that hurt me." To win a negligence claim you need to show four things: the other person owed you a duty to be careful, they weren\'t careful enough, that\'s what caused your loss, and the loss is the kind of thing that could be expected to happen.',
  content: `Negligence is the principal tort governing civil liability for unintended harm. To establish negligence the claimant must prove four elements, each on the balance of probabilities.

Element 1 — Duty of care. The defendant must have owed the claimant a legal duty to take care. In novel cases, the Caparo three-stage test applies (foreseeability + proximity + fairness/justice/reasonableness). In established categories (drivers to other road users, employers to employees, doctors to patients, occupiers to visitors), duty is treated as automatic.

Element 2 — Breach of duty. The defendant must have fallen below the standard of the reasonable person in the position of the defendant. The standard is objective (Nettleship v Weston [1971] 2 QB 691); the defendant is not judged by personal limitations or inexperience. Courts weigh the magnitude of risk, the cost of precautions, the social utility of the activity, and the circumstances (Bolton v Stone [1951] AC 850).

Element 3 — Factual causation. The breach must have caused the damage. The default test is "but-for" causation: would the damage have occurred but for the breach (Barnett v Chelsea & Kensington [1969] 1 QB 428)? Refinements: material contribution to indivisible injury (Bonnington Castings); successive causes (Baker v Willoughby; Jobling).

Element 4 — Damage and remoteness. The claimant must have suffered actual damage of a kind that was reasonably foreseeable (Wagon Mound No 1 [1961] AC 388). Damage may be physical injury, property damage, certain consequential economic losses, and (within strict limits) pure economic loss. The thin-skull rule applies: the defendant takes the victim as found; the extent of damage need not be foreseeable (Smith v Leech Brain).

Defences and reductions:

- Contributory negligence (Law Reform (Contributory Negligence) Act 1945) — apportionment of damages where the claimant's own fault contributed.
- Volenti non fit injuria — claimant freely consented to the risk. Rare in motor cases (cannot exclude liability for negligence to passengers — RTA 1988 s.149).
- Ex turpi causa — claimant's own illegality bars the claim; narrow exception, applied with caution.
- Limitation — six years for property damage; three years for personal injury (Limitation Act 1980).

Application in motor accidents: drivers owe duty to all reasonably foreseeable road users (duty rarely contested); breach is the principal contested element (objectively, did the driving fall below the standard of the reasonable driver?); causation usually obvious in collision cases; remoteness occasionally relevant for consequential losses.`,
  tags: ['negligence', 'four-elements', 'duty-of-care', 'breach', 'causation', 'remoteness', 'tort'],
};

export default doc;

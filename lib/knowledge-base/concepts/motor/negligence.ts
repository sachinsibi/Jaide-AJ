import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-negligence',
  type: 'concept',
  category: 'general',
  title: 'Negligence (the four-element tort)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'property-damage', 'general-civil'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'The civil wrong of negligence has four elements: (1) duty of care; (2) breach of that duty by failing to meet the standard of the reasonable person; (3) factual causation (but-for test); (4) damage of a kind not too remote. The claimant must prove each element on the balance of probabilities. These principles apply in Barbados as inherited common law.',
  eli5Summary:
    'Negligence is the legal name for "you weren\'t careful enough and that hurt me." To win a negligence claim you need to show four things: the other person owed you a duty to be careful, they weren\'t careful enough, that\'s what caused your loss, and the loss is the kind of thing that could be expected to happen.',
  content: `Negligence is the principal tort governing civil liability for unintended harm. Barbados applies the common law of negligence as a Commonwealth jurisdiction that inherited English common law principles. To establish negligence the claimant must prove four elements, each on the balance of probabilities.

Element 1 — Duty of care. The defendant must have owed the claimant a legal duty to take care. In novel cases, the three-stage test from Caparo Industries plc v Dickman [1990] 2 AC 605 (HL) — foreseeability, proximity, and fairness/justice/reasonableness — applies as persuasive common law authority. In established categories (drivers to other road users, employers to employees, occupiers to visitors), duty is treated as automatic and is not contested.

Element 2 — Breach of duty. The defendant must have fallen below the standard of the reasonable person in the position of the defendant. The standard is objective (Nettleship v Weston [1971] 2 QB 691, applied in Barbados as persuasive common law authority); the defendant is not judged by personal limitations or inexperience. Courts weigh the magnitude of risk, the cost of precautions, the social utility of the activity, and the circumstances (Bolton v Stone [1951] AC 850).

Element 3 — Factual causation. The breach must have caused the damage. The default test is "but-for" causation: would the damage have occurred but for the breach (Barnett v Chelsea & Kensington [1969] 1 QB 428, persuasive in Barbados)? Refinements include material contribution to indivisible injury and successive cause analysis — these are narrow extensions applied on the facts.

Element 4 — Damage and remoteness. The claimant must have suffered actual damage of a kind that was reasonably foreseeable (The Wagon Mound No 1 [1961] AC 388 (PC), applied in Barbados as persuasive common law authority). Damage may be physical injury, property damage, or certain consequential economic losses. The thin-skull rule applies: the defendant takes the victim as found; the extent of damage need not be foreseeable.

Defences and reductions applicable in Barbados:

- Contributory negligence — apportionment of damages where the claimant's own fault contributed to the damage. Barbados applies the apportionment principle as an inherited common law rule (the historical complete-bar position having been displaced by statute in Barbados, as in other Commonwealth jurisdictions).
- Volenti non fit injuria — claimant freely consented to the risk. Rarely applied in motor cases.
- Ex turpi causa — the claimant's own illegality may bar the claim in extreme circumstances; applied narrowly.
- Limitation — the applicable Barbados limitation period applies; consult the relevant Barbados limitation legislation for current periods.

Application in motor accidents: drivers owe a duty of care to all reasonably foreseeable road users (duty rarely contested); breach is the principal contested element (did the driving fall below the standard of the reasonable driver?); causation is usually obvious in collision cases; remoteness is occasionally relevant for consequential losses.`,
  tags: ['negligence', 'four-elements', 'duty-of-care', 'breach', 'causation', 'remoteness', 'tort', 'Barbados'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-donoghue-v-stevenson',
  type: 'case',
  category: 'general',
  title: 'Donoghue v Stevenson [1932] AC 562 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Donoghue v Stevenson [1932] AC 562 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1932/100.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'property-damage', 'general-civil'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Foundational authority for the modern tort of negligence. Lord Atkin\'s "neighbour principle": one must take reasonable care to avoid acts or omissions that one can reasonably foresee would be likely to injure one\'s neighbour — i.e., persons so closely and directly affected by the act that one ought reasonably to have them in contemplation.',
  content: `Donoghue v Stevenson [1932] AC 562 (House of Lords).

Facts: Mrs Donoghue was given a bottle of ginger beer at a café in Paisley. The bottle was opaque. After drinking part of it, she discovered the decomposed remains of a snail in the bottle. She fell ill. Because she had not bought the drink herself, she had no contract with either the café or the manufacturer (Stevenson) and could not sue in contract. She sued the manufacturer in negligence.

Held: The House of Lords (3:2) held that a manufacturer of products owes a duty of care in negligence to the ultimate consumer, even in the absence of a contractual relationship, where the product reaches the consumer in the form in which it left the manufacturer with no reasonable possibility of intermediate examination. The case established the modern tort of negligence as a free-standing cause of action.

Lord Atkin's "neighbour principle":

"You must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your neighbour. Who, then, in law, is my neighbour? The answer seems to be — persons who are so closely and directly affected by my act that I ought reasonably to have them in contemplation as being so affected when I am directing my mind to the acts or omissions which are called in question."

Application in motor accidents: Donoghue is the foundational authority for the duty of care element of every motor negligence claim. Drivers necessarily owe a duty of care to all reasonably foreseeable road users — other drivers, passengers, pedestrians, cyclists — because such persons are by their nature closely and directly affected by the manner in which a vehicle is driven.

The neighbour principle has been refined and structured in subsequent authorities (notably Caparo Industries plc v Dickman [1990] 2 AC 605, three-stage test of foreseeability + proximity + fairness/justice/reasonableness), but in road traffic the duty itself is rarely contested: it follows automatically from the facts. Argument almost always concentrates on the breach, causation, and quantum elements.`,
  tags: ['Donoghue-v-Stevenson', 'duty-of-care', 'neighbour-principle', 'foundational', 'tort-of-negligence'],
};

export default doc;

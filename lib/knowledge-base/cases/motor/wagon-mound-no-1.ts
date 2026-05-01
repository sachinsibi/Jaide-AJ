import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-wagon-mound-no-1',
  type: 'case',
  category: 'general',
  title: 'Overseas Tankship (UK) Ltd v Morts Dock & Engineering Co (The Wagon Mound No 1) [1961] AC 388 (PC)',
  jurisdiction: 'england-wales',
  citation: 'Overseas Tankship (UK) Ltd v Morts Dock & Engineering Co Ltd (The Wagon Mound No 1) [1961] AC 388 (PC)',
  url: 'https://www.bailii.org/uk/cases/UKPC/1961/1.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['remoteness', 'too remote', 'unforeseeable damage', 'consequential', 'type of damage', 'extent of damage', 'foreseeable'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Damages for negligence are recoverable only if the type (kind) of damage was reasonably foreseeable. The exact extent need not be foreseeable — the thin-skull rule survives — but damage of a different kind is too remote and not recoverable.',
  content: `Overseas Tankship (UK) Ltd v Morts Dock & Engineering Co Ltd (The Wagon Mound No 1) [1961] AC 388 (Privy Council, on appeal from New South Wales — adopted as English law by the House of Lords in subsequent cases).

Facts: The defendants negligently spilt a quantity of furnace oil from their ship into Sydney Harbour. The oil drifted to the claimants' wharf, where welding work was being undertaken. The claimants were initially advised that the oil could not be ignited by welding sparks on cold water. Two days later, the oil ignited (after molten metal fell on a piece of cotton waste floating in the oil) and a serious fire damaged the wharf and ships under repair.

Held (Privy Council): The defendants were not liable for the fire damage. Damages are recoverable only for harm of a type that was reasonably foreseeable. Foreseeable consequences (oil pollution / fouling of slipways) would have been recoverable; the fire was not, on the evidence, a foreseeable consequence of the spillage.

The Wagon Mound principle:

The previous direct-consequences test (Re Polemis [1921] 3 KB 560) was rejected. The correct test is reasonable foreseeability of the kind (type) of damage. The exact mechanism by which the damage occurred and its precise extent need not be foreseeable, but the kind of damage must be.

Refinements: type of damage, not mechanism — the precise way harm came about is irrelevant if the kind of harm was foreseeable (Hughes v Lord Advocate [1963] AC 837). Extent need not be foreseeable — the thin-skull rule survives (Smith v Leech Brain [1962] 2 QB 405). Pure economic loss is generally not recoverable absent special circumstances (Hedley Byrne).

Application in motor negligence:

1. Routine collision damage (repair, replacement vehicle hire, disruption) is plainly foreseeable.

2. Eggshell-skull cases: defendant takes the victim as found.

3. Consequential / pure economic losses (loss of contract, business goodwill) require careful pleading; direct loss of use is recoverable, but pure profit losses beyond ordinary use may be too remote.

4. Insurance excess, reasonable hire cost, recovery, storage, and post-accident inconvenience: ordinarily recoverable.`,
  tags: ['Wagon-Mound', 'remoteness', 'reasonable-foreseeability', 'type-of-damage', 'eggshell-skull'],
};

export default doc;

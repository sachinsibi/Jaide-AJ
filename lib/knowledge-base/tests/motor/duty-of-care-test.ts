import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-duty-of-care-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Duty of Care Test (Caparo three-stage)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage test for the existence of a duty of care in novel categories (Caparo Industries plc v Dickman [1990] 2 AC 605): (1) Was the damage reasonably foreseeable? (2) Was there sufficient proximity between claimant and defendant? (3) Is it fair, just, and reasonable to impose a duty? In motor negligence, all three are routinely satisfied; the duty of one road user to another is treated as established and the analytical work moves to breach and causation.',
  content: `Duty of Care Test (applied by courts in Barbados to determine whether a defendant owes a duty of care in negligence):

The leading persuasive authority is Caparo Industries plc v Dickman [1990] 2 AC 605 (House of Lords). The Caparo test is the analytical framework for determining duty in novel cases; in established categories (including motor accidents), the duty is treated as settled by common law and the test is not re-applied from first principles.

The three stages (as persuasive common law authority applied in Barbados):

Stage 1 — Foreseeability of damage. Was the damage to a claimant of this kind reasonably foreseeable as a consequence of the defendant's conduct? The test is objective: would a reasonable person in the defendant's position have foreseen that damage of this kind might occur to a person of this kind?

Stage 2 — Proximity. Was there a sufficient relationship of proximity between claimant and defendant? Proximity requires a relationship of legal closeness — the defendant's actions must have had the claimant directly in contemplation, or the claimant must be a member of an identifiable class likely to be affected.

Stage 3 — Fairness, justice, and reasonableness. Is it fair, just, and reasonable in all the circumstances to impose a duty of care? This stage allows the court to decline to recognise a duty on policy grounds.

Application in Barbados motor accident cases: the duty of one road user to another is so well-established as common law that the three-stage test is not analytically engaged in the ordinary motor case — duty is treated as automatic. The contested ground in routine motor claims is breach, causation, and quantum, not duty.

Non-standard duty scenarios: the test may be engaged in cases such as highway authority liability for road condition, police pursuit liability, or a vehicle manufacturer's duty for design defects. In these cases the Barbados courts would apply the three-stage analysis as persuasive common law guidance.

Statutory reinforcement: driver duties in Barbados are reinforced by the Road Traffic Act, Cap. 295, and associated regulations. Breach of a statutory traffic rule is relevant evidence of failure to meet the standard of the reasonable driver, though statutory breach alone does not establish civil liability without proof of all four elements of negligence.`,
  tags: ['Caparo-test', 'duty-of-care', 'three-stage-test', 'foreseeability', 'proximity'],
};

export default doc;

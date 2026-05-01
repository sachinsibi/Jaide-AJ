import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-duty-of-care-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Duty of Care Test (Caparo three-stage)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Three-stage test for the existence of a duty of care in novel categories (Caparo Industries plc v Dickman [1990] 2 AC 605): (1) Was the damage reasonably foreseeable? (2) Was there sufficient proximity between claimant and defendant? (3) Is it fair, just, and reasonable to impose a duty? In motor negligence, all three are routinely satisfied; the duty of one road user to another is treated as established and the analytical work moves to breach and causation.',
  content: `Duty of Care Test (applied by courts to determine whether a defendant owes a duty of care in negligence):

The leading authority is Caparo Industries plc v Dickman [1990] 2 AC 605 (House of Lords). Following Robinson v Chief Constable of West Yorkshire Police [2018] UKSC 4, the Caparo test is now properly understood as the analytical framework for determining duty in novel cases; in established categories (including motor accidents), the duty is treated as settled and the test is not re-applied from first principles.

The three stages:

Stage 1 — Foreseeability of damage. Was the damage to a claimant of this kind reasonably foreseeable as a consequence of the defendant's conduct? The test is objective: would a reasonable person in the defendant's position have foreseen that damage of this kind might occur to a person of this kind?

Stage 2 — Proximity. Was there a sufficient relationship of proximity between claimant and defendant? Proximity is not strictly geographical; it requires a relationship of legal closeness — the defendant's actions must have had the claimant directly in contemplation, or claimant must be a member of an identifiable class likely to be affected.

Stage 3 — Fairness, justice, and reasonableness. Is it fair, just, and reasonable in all the circumstances to impose a duty of care? This stage allows the court to refuse to recognise a duty on policy grounds — typically in cases involving public authorities, conflicting professional duties, the spectre of indeterminate liability, or where Parliament has chosen not to legislate.

Application: the duty of one road user to another is so well-established that Caparo is not analytically engaged in the ordinary motor case — duty is treated as automatic. The test may become engaged in non-standard scenarios: highway authority liability for road condition (Gorringe v Calderdale [2004] UKHL 15); police pursuit (Robinson); learner-instructor duty to other road users; vehicle manufacturer's duty for design defects.

Statutory framework: many driver duties are reinforced by RTA 1988 and the Highway Code (s.38(7) RTA 1988). In a routine claim, duty is conceded; the contested ground is breach, causation, and quantum.`,
  tags: ['Caparo-test', 'duty-of-care', 'three-stage-test', 'foreseeability', 'proximity'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-breach-reasonable-driver-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Breach of Duty Test — Reasonable Driver Standard',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A driver breaches the duty of care if the conduct fell below that of a reasonably competent and experienced driver. The standard is objective and uniform (Nettleship v Weston). Courts weigh: (a) magnitude of risk; (b) cost / practicability of avoidance; (c) social utility of activity; (d) circumstances. Highway Code breaches are admissible evidence of breach (RTA 1988 s.38(7)).',
  content: `Breach of Duty Test — Reasonable Driver Standard:

A motor-negligence claim succeeds on breach where the claimant proves, on the balance of probabilities, that the defendant's driving fell below the standard of the reasonably competent and experienced driver in the circumstances of the case.

Stage 1 — Identify the standard. The standard is objective and uniform (Nettleship v Weston [1971] 2 QB 691):
- Not the standard of a learner, novice, or beginner.
- Not modified by inexperience, age, fatigue (without medical incapacity), unfamiliarity with the vehicle, or self-induced impairment.
- Modified only by:
  - Genuine sudden medical incapacity arising without prior warning (Mansfield v Weetabix [1998] 1 WLR 1263).
  - Emergency / "agony of the moment" — what was reasonable given seconds to react.

Stage 2 — Identify the conduct: speed, lookout, distance/tailgating, failure to yield, mobile-phone use, signalling, improper overtaking, alcohol/drugs/fatigue, vehicle un-roadworthy.

Stage 3 — Compare to the standard. Court weighs (a) magnitude of risk (Bolton v Stone [1951] AC 850), (b) cost/practicability of avoidance, (c) social utility of activity, (d) circumstances (weather, visibility, traffic, road condition).

Stage 4 — Highway Code (RTA 1988 s.38(7)). Breaches are admissible evidence "tending to establish or negative" liability. "MUST"/"MUST NOT" rules track statutory offences and are highly probative; "should"/"should not" rules are advisory but significant.

Stage 5 — Statutory breaches (RTA 1988, Construction and Use Regulations) strongly indicate negligence; conviction is not necessary.

Prima facie breach patterns: rear-end collision (rearward driver, absent extraordinary circumstances); emerging from junction without adequate observation; collision with stationary vehicle; mobile-phone use at moment of collision. Rebuttable by evidence of unforeseeable circumstances or contributory fault.`,
  tags: ['breach-test', 'reasonable-driver', 'objective-standard', 'highway-code', 'magnitude-of-risk'],
};

export default doc;

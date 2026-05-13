import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-breach-reasonable-driver-test',
  type: 'test',
  category: 'motor-accident',
  title: 'Breach of Duty Test — Reasonable Driver Standard',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['legalBreakdown'],
  factSummary:
    'A driver breaches the duty of care if the conduct fell below that of a reasonably competent and experienced driver. The standard is objective and uniform (Nettleship v Weston). Courts weigh: (a) magnitude of risk; (b) cost/practicability of avoidance; (c) circumstances. Violations of road traffic rules under Cap. 295 are admissible as evidence of breach.',
  content: `Breach of Duty Test — Reasonable Driver Standard (Barbados):

A motor-negligence claim succeeds on breach where the claimant proves, on the balance of probabilities, that the defendant's driving fell below the standard of the reasonably competent and experienced driver in the circumstances of the case.

Stage 1 — Identify the standard. The standard is objective and uniform (Nettleship v Weston [1971] 2 QB 691, applied in Barbados as common law):
- Not modified by inexperience, age, fatigue (without medical incapacity), unfamiliarity with the vehicle, or self-induced impairment.
- Modified only by genuine sudden medical incapacity arising without prior warning, or emergency circumstances where only seconds were available to react.

Stage 2 — Identify the conduct. Relevant conduct includes: speed, lookout, failure to observe traffic signals, failure to yield right of way, tailgating, improper overtaking, mobile-phone use, impairment by alcohol or drugs, vehicle in un-roadworthy condition.

Stage 3 — Compare to the standard. Courts weigh: (a) magnitude and probability of risk (Bolton v Stone [1951] AC 850, persuasive in Barbados); (b) cost and practicability of avoidance; (c) circumstances including weather, visibility, traffic conditions, and road state.

Stage 4 — Road traffic regulations as evidence of breach. Violations of the Road Traffic Act, Cap. 295, and any subsidiary traffic regulations are admissible as evidence tending to establish or negative liability. Running a red light, failing to stop, speeding, and similar offences under Cap. 295 are highly probative of breach of the reasonable driver standard. A criminal conviction is not required to establish breach in civil proceedings.

Prima facie breach patterns (rebuttable): rear-end collision attributable to rearward driver absent extraordinary circumstances; emerging from junction without adequate observation; running a traffic signal; collision with a stationary vehicle. Each may be rebutted by evidence of unforeseeable circumstances or the claimant's own contributory fault.`,
  tags: ['breach-test', 'reasonable-driver', 'objective-standard', 'Cap-295', 'magnitude-of-risk', 'Barbados'],
};

export default doc;

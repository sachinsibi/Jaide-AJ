import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-pre-action-protocol-non-pi-motor',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Practice Direction on Pre-Action Conduct (motor property-damage claims)',
  jurisdiction: 'england-wales',
  citation: 'CPR Practice Direction on Pre-Action Conduct and Protocols',
  url: 'https://www.justice.gov.uk/courts/procedure-rules/civil/rules/pd_pre-action_conduct',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'For motor accident claims for property damage only (vehicle damage, hire costs, recovery, excess) where personal injury is not the primary claim, the general Practice Direction on Pre-Action Conduct applies. (The Pre-Action Protocol for Low Value Personal Injury Claims in Road Traffic Accidents and the OIC portal apply to PI claims, which are out of scope for this platform.)',
  content: `For non-PI motor claims (vehicle damage, hire-vehicle cost, recovery, storage, insurance excess, loss of use), there is no specific protocol. The general Practice Direction on Pre-Action Conduct and Protocols applies. (PI motor claims under £25,000 use the dedicated Pre-Action Protocol for Low Value PI Claims in RTAs and the Official Injury Claim portal — out of scope here.)

Pre-action steps:

1. Letter of claim to the at-fault driver and insurer setting out: parties (driver, keeper, insurer, claimant); date/time/location; factual narrative; basis of liability (negligence, breach of duty, contributory factors); damage and quantum (repair/write-off, hire, recovery, storage, excess, loss of use); enclosed documents and disclosure requested (insurance schedule, witness details, dashcam, telematics); reasonable response period (21 days acknowledgment, 90 days substantive).

2. Insurer engagement. The at-fault driver typically passes the letter to their insurer; correspondence proceeds on the same issues.

3. Disclosure and evidence: engineer's inspection; CCTV/dashcam preservation; police report; photos; witness statements; telematics; mobile-phone records where alleged; multiple repair quotes.

4. Negotiation. Insurers respond on liability (admit/partial/deny) and quantum. Consider Part 36 offers for cost pressure.

5. Subrogation. If the claimant's own insurer has paid out, it typically pursues the at-fault insurer in subrogation. The named claimant may be the policyholder or the insurer.

6. Issue. If unresolved, issue Claim Form N1 (or MCOL for liquidated sums under £100,000) at the County Court Money Claims Centre. Most non-PI claims are on the small claims track (≤£10,000), with very limited cost recovery — weigh representation costs against recovery.

Non-compliance with the PD may result in adverse cost orders or stays of proceedings.`,
  tags: ['pre-action-conduct', 'PD-pre-action', 'non-PI-motor', 'letter-of-claim', 'insurer-correspondence'],
};

export default doc;

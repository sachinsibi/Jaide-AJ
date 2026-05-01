import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-mib-uninsured-untraced',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Motor Insurers\' Bureau — Uninsured / Untraced Drivers\' Agreements',
  jurisdiction: 'england-wales',
  citation: 'Uninsured Drivers\' Agreement; Untraced Drivers\' Agreement (current versions on mib.org.uk)',
  url: 'https://www.mib.org.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['uninsured', 'untraced', 'no insurance', 'mib', 'hit and run', 'fled the scene', 'unidentified driver'],
  tabs: ['legalBreakdown', 'references'],
  factSummary:
    'Where the at-fault driver is uninsured or untraced (e.g., hit-and-run), the victim claims compensation from the Motor Insurers\' Bureau (MIB) under the Uninsured Drivers\' Agreement (UDA) or Untraced Drivers\' Agreement (UTA). The MIB stands behind the compulsory insurance regime under RTA 1988.',
  content: `The MIB is funded by levy on motor insurers and operates two compensation agreements with the Secretary of State that backstop compulsory insurance under Part VI RTA 1988.

Uninsured Drivers' Agreement (UDA): applies where the at-fault driver is identified but uninsured. Where the victim obtains an unsatisfied judgment, the MIB pays it.

Steps: (1) confirm via askMID.com that no policy is in force; (2) notify the MIB on the prescribed form within the time limit (currently 14 days from issue of proceedings — check current Agreement); (3) pursue civil proceedings as if insurance applied; (4) obtain judgment; (5) submit claim with judgment, evidence, proof of service; (6) MIB pays subject to verification.

Excluded (UDA): claimants who knew/ought to have known the vehicle was uninsured or stolen; vehicles not subject to compulsory insurance (private-land use without public-place element); subrogation claims by the claimant's own insurer for losses covered by that policy.

Untraced Drivers' Agreement (UTA): applies where the at-fault driver cannot be identified — typically hit-and-run.

Steps: (1) report to police (police reference required); (2) take reasonable steps to identify the driver (CCTV, witness inquiries, appeals); (3) apply to MIB on the prescribed form within strict deadlines — typically 9 months for property damage, longer for PI (check current Agreement); (4) provide police reference, witness details, evidence of damage and quantum; (5) MIB investigates and decides.

Limits: property damage under the UTA carries a £300 excess; UTA property-damage cover is available only where personal injury was also caused; an upper compensation limit applies (check mib.org.uk). MIB decisions are reviewable by an independent arbitrator under the Agreement.

Routing: where the policy is technically void (misrepresentation, breach of condition), s.151 RTA 1988 may compel the insurer to satisfy the third-party judgment, in which case MIB is not engaged. Use s.151 where insurance exists but is contested; MIB UDA where no insurance at all; MIB UTA where driver untraced.`,
  tags: ['MIB', 'uninsured-driver', 'untraced-driver', 'hit-and-run', 'compensation-of-last-resort'],
};

export default doc;

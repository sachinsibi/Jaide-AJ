import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-limitation-act-1980-s2',
  type: 'statute',
  category: 'property-damage',
  title: 'Limitation Act 1980, s.2 — Six-year limitation period for tort',
  jurisdiction: 'england-wales',
  citation: 'Limitation Act 1980, s.2',
  url: 'https://www.legislation.gov.uk/ukpga/1980/58/section/2',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'An action founded on tort cannot be brought after 6 years from the date on which the cause of action accrued. For property damage in negligence, nuisance, trespass, and Rylands v Fletcher, time runs from the date the damage is sustained. Latent damage cases have an alternative discoverability long-stop under s.14A.',
  content: `Section 2 of the Limitation Act 1980 provides: "An action founded on tort shall not be brought after the expiration of six years from the date on which the cause of action accrued."

Accrual rules for property-damage causes of action:

- Negligence: the cause of action accrues when damage is sustained, not when the negligent act occurred. For physical property damage this is usually obvious; for latent building damage the rule is modified by s.14A.

- Private nuisance: each act of nuisance gives a fresh cause of action. For continuing nuisance (e.g., tree-root encroachment, ongoing vibration), every day of continuance gives a new accrual, so limitation does not extinguish a remedy for damage caused by continuance after notice (Delaware Mansions v Westminster CC [2001] UKHL 55).

- Trespass to land: actionable per se on the date of the intrusion. Continuing trespass (e.g., overhanging structures) gives daily fresh accruals.

- Rylands v Fletcher: accrual on the date of escape and resulting damage.

Section 14A — latent damage in negligence (not for personal injury): where the claimant could not reasonably have discovered the damage at the date of accrual, the period is the later of (a) 6 years from accrual, and (b) 3 years from the date the claimant first had knowledge of the material facts (s.14A(4)). A 15-year long-stop applies (s.14B) running from the date of the negligent act.

Section 32 — extension for fraud, concealment, or mistake: where any fact relevant to the cause of action has been deliberately concealed by the defendant, time does not start running until the claimant has discovered the concealment or could with reasonable diligence have done so.

Disability extensions (s.28): time is suspended while the claimant is a minor or lacks capacity, until the disability ends.

Practical points:
1. The six-year clock is strict — late issue results in a complete bar (subject to s.14A / s.32 / s.28). Issue is the relevant act; serving the claim form afterwards is usually within CPR time limits.
2. For a continuing nuisance, the strategic question is whether to plead the historical damage (potentially time-barred) or only the post-notice continuing damage (always within time as fresh accruals).
3. Standstill agreements between solicitors are common where investigations need more time and limitation is approaching.

Personal injury (s.11) is 3 years and out of scope here. Contract (s.5) is 6 years from breach.`,
  tags: ['limitation-act', 'section-2', 'six-year-limitation', 'tort', 'section-14A-latent-damage'],
};

export default doc;

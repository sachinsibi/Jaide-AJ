import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-county-court-money-claim-rta',
  type: 'procedure',
  category: 'motor-accident',
  title: 'County Court Money Claim — RTA (Property Damage)',
  jurisdiction: 'england-wales',
  citation: 'Civil Procedure Rules, Part 7; CPR 26 (track allocation); CPR 27 (small claims)',
  url: 'https://www.gov.uk/make-court-claim-for-money',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'For an unresolved RTA property-damage claim, issue at the County Court Money Claims Centre on Form N1 or via Money Claim Online (MCOL) for liquidated sums up to £100,000. Most non-PI motor claims fall on the small claims track (≤£10,000); some on fast track (£10,000–£25,000); rarely multi-track.',
  content: `Forum: County Court Money Claims Centre (CCMCC) at Salford, with hearings allocated to a local hearing centre.

Issue routes:
(a) Money Claim Online (MCOL) — liquidated sums up to £100,000 against up to two defendants; best for specified-sum claims.
(b) Form N1 — paper, for unspecified-sum claims, more than two defendants, or non-money relief.

Issue fees are banded by claim value (gov.uk/court-fees; confirm current rates before issue).

Particulars of Claim: parties and capacity (driver, keeper, vicarious employer); date/time/location, vehicles, brief factual narrative; cause of action (negligence with duty-breach-causation pleading) and statutory bases (RTA 1988 breaches as evidence); itemised damages (repair/write-off PAV, hire, recovery, storage, excess, loss of use); interest under s.69 County Courts Act 1984; costs.

Track allocation (CPR 26):
- Small claims — up to £10,000. Most non-PI claims. Cost recovery very limited (court fees, fixed costs, expert fees up to £750, modest travel/lost-earnings).
- Fast track — £10,000–£25,000. Standard cost recovery.
- Multi-track — over £25,000 or where complex.

Defence: defendant has 14 days to acknowledge or defend; with acknowledgment, defence in 28 days. Default judgment available.

Directions and trial: small claims often a one-day-or-less hearing with limited disclosure. Judge hears claimant, witnesses, engineer; gives judgment on liability (with any contributory reduction) and quantum.

Enforcement: warrant of control; attachment of earnings; third-party debt order; charging order; insurer's s.151 RTA 1988 obligation against the insured driver's insurer (subject to s.152 notification within 7 days of issue).

Where the at-fault driver is uninsured or untraced, recovery is via the Motor Insurers' Bureau (UDA or UTA), not direct enforcement.`,
  tags: ['CPR-Part-7', 'County-Court', 'small-claims', 'MCOL', 'track-allocation', 'enforcement'],
};

export default doc;

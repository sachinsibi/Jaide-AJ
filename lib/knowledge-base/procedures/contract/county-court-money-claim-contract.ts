import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-county-court-money-claim-contract',
  type: 'procedure',
  category: 'contract-service',
  title: 'County Court Money Claim — Contract / Consumer',
  jurisdiction: 'england-wales',
  citation: 'Civil Procedure Rules, Part 7; CPR 26 (track allocation); CPR 27 (small claims)',
  url: 'https://www.gov.uk/make-court-claim-for-money',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'For unresolved consumer / contract disputes, issue a Claim Form N1 at the County Court Money Claims Centre, or use Money Claim Online (MCOL) for liquidated sums up to £100,000. Most consumer claims fall on the small claims track (≤£10,000), with very limited cost recovery — favouring self-representation or the small-claims mediation service.',
  content: `Forum: County Court Money Claims Centre (CCMCC) at Salford; hearings allocated to a local hearing centre.

Issue routes:
(a) Money Claim Online (MCOL) — online liquidated sums up to £100,000 against up to two defendants. Best for refunds, defined damages, retained deposits, unpaid invoices.
(b) Form N1 — paper, for unspecified-sum claims, >2 defendants, or non-money relief (specific performance, injunction).

Issue fees are banded by claim value (gov.uk/court-fees). Fee remission via Help with Fees for claimants on benefits or low income.

Particulars of Claim: parties; contract (date, subject matter, key terms); implied terms relied on (CRA 2015 ss.9–11 / s.49); breach with dates and specifics; itemised loss (refund, repair/replacement, consequential losses with remoteness justification); mitigation steps; interest under s.69 County Courts Act 1984; costs.

Track allocation (CPR 26):
- Small claims — up to £10,000. Default for most consumer claims. Limited disclosure, simplified evidence, hearings in chambers, very limited cost recovery.
- Fast track — £10,000–£25,000. Standard cost recovery; one-day trial; usually a single joint expert.
- Multi-track — over £25,000 or where complex.

Defence: 14 days to acknowledge or defend; with acknowledgment, defence in 28 days. Default judgment available.

Small Claims Mediation Service: free telephone mediation once a defence is filed; often resolves in a single hour-long call. Recommended before any contested hearing.

Trial (small claims): informal, judge-led; relaxed evidence rules; reasoned decision and costs ruling.

Enforcement: warrant of control; attachment of earnings; third-party debt order; charging order. Statutory demand / winding-up rarely proportionate for consumer debts.

Strategy: under £10,000, legal representation rarely cost-effective; self-represent with Citizens Advice / Trading Standards support. Exhaust ADR/ombudsman first. Limitation: 6 years from breach (LA 1980 s.5).`,
  tags: ['CPR-Part-7', 'County-Court', 'small-claims', 'MCOL', 'consumer-claim', 'small-claims-mediation'],
};

export default doc;

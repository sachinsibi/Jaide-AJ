import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-gov-uk-money-claim',
  type: 'resource',
  category: 'general',
  title: 'gov.uk — Make a Court Claim for Money',
  jurisdiction: 'england-wales',
  url: 'https://www.gov.uk/make-court-claim-for-money',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'contract-service', 'employment', 'property-damage', 'general-civil'],
  tabs: ['references'],
  factSummary:
    'Official UK government guidance on making a money claim through the County Court, including links to Money Claim Online (MCOL) for liquidated sums up to £100,000, current court fees, and step-by-step procedural guidance.',
  content: `gov.uk Make a Court Claim for Money (https://www.gov.uk/make-court-claim-for-money) is the official entry point for self-represented claimants seeking to recover money through the County Court of England and Wales.

What the page provides:

- Eligibility criteria — what types of claim are suitable for Money Claim Online (MCOL): liquidated (specified) sums up to £100,000, no more than two defendants, England & Wales address.
- Link to Money Claim Online — the online claim issue service.
- Fees — banded by claim value. Issue fee, hearing fee, and enforcement fee tables.
- Help with fees — eligibility for fee remission for claimants on certain benefits or low income.
- Form N1 — the paper claim form for cases that don't fit MCOL (unspecified-sum claims, more than two defendants, non-money relief).
- Service guidance — how the defendant is served once the claim is issued.
- Defendant response — what happens after issue: 14 days to acknowledge or defend.
- Default judgment — what to do if the defendant does not respond.
- Track allocation — small claims (≤£10,000), fast track (£10,000–£25,000), multi-track (>£25,000).
- Hearing — what to expect at the County Court hearing.
- Enforcement — how to collect a judgment if the defendant does not pay (warrant of control, attachment of earnings, third-party debt order, charging order).

Adjacent gov.uk resources:

- gov.uk/court-fees — current banded fees.
- gov.uk/find-court-tribunal — locate the relevant hearing centre.
- gov.uk/government/publications/n1-claim-form — Form N1 (paper).
- gov.uk/government/publications/n9b-defence-and-counterclaim — Form N9B for defendants.
- gov.uk/help-with-court-fees — fee remission.

This is the canonical procedural reference for any non-tribunal civil money claim in England & Wales — used across motor-accident property-damage claims, contract / consumer disputes, debt recovery, employment money claims (where Employment Tribunal is not the correct forum), and general civil money claims.`,
  tags: ['gov-uk', 'money-claim-online', 'MCOL', 'court-fees', 'small-claims', 'cross-category'],
};

export default doc;

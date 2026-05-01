import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-county-court-money-claim-property',
  type: 'procedure',
  category: 'property-damage',
  title: 'County Court Money Claim — Property Damage',
  jurisdiction: 'england-wales',
  citation: 'Civil Procedure Rules, Part 7; CPR 26 (track allocation); CPR 35 (experts)',
  url: 'https://www.gov.uk/make-court-claim-for-money',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'For unresolved property-damage claims, issue a Claim Form N1 at the County Court Money Claims Centre, or use Money Claim Online (MCOL) for liquidated sums up to £100,000. Most domestic claims fall on the small claims (≤£10,000) or fast track (£10,000–£25,000). Multi-track for complex/high-value matters. Expert evidence (surveyor, structural engineer) usually required and subject to court permission.',
  content: `Forum: County Court Money Claims Centre (CCMCC) for issue; hearings at the local centre serving the defendant's address.

Issue routes:
(a) Money Claim Online (MCOL) — online liquidated sums up to £100,000 against up to two defendants. Suited to defined-sum claims (specified repair invoices already paid; insurer subrogation claims).
(b) Form N1 — paper, for unspecified-sum claims, more than two defendants, or non-money relief (mandatory injunction to remove an encroachment, prohibitory injunction restraining a continuing nuisance).

Issue fees are banded by claim value (gov.uk/court-fees). Help with Fees remission for low-income claimants.

Particulars of Claim: parties (with the proprietary interest establishing standing — Hunter v Canary Wharf); the property; the cause of action (negligence, private nuisance, Rylands, trespass, statutory duty); dates and mechanism of damage; itemised loss with documentary backing; mitigation steps; interest under s.69 County Courts Act 1984.

Track allocation (CPR 26):
- Small claims — up to £10,000. Default for low-value property-damage claims. Limited disclosure, simplified evidence, hearings in chambers, very limited cost recovery. Single joint expert sometimes permitted for low-value technical questions.
- Fast track — £10,000–£25,000. Standard cost recovery; single trial day; usually a single joint expert for surveyor/engineering issues.
- Multi-track — over £25,000 or where complex (multiple defendants, complex causation, large consequential losses). Detailed case management, more extensive expert evidence permitted.

Expert evidence (CPR 35): court permission required. Typical experts for property-damage claims: building surveyor / structural engineer (cause and remedial cost); arboriculturist (tree-root or tree-fall claims); valuer (diminution-in-value head); highway engineer (s.41 Highways Act claims, occasional).

Defence: 14 days to acknowledge or defend; with acknowledgment, defence in 28 days. Default judgment for non-response.

Small Claims Mediation Service: free telephone mediation once a defence is filed; resolves a meaningful proportion of low-value property claims.

Trial (small claims): informal, judge-led; relaxed evidence rules; reasoned decision and costs ruling on the day.

Enforcement: warrant of control; attachment of earnings; third-party debt order; charging order on the defendant's property — particularly relevant where the defendant is a neighbouring owner.

Strategy: under £10,000 self-represent with insurer / surveyor support. Exhaust ADR before issue. For continuing nuisance, consider injunctive relief in addition to damages — small-claims track is typically not used for injunctions.`,
  tags: ['CPR-Part-7', 'County-Court', 'small-claims', 'fast-track', 'expert-evidence', 'property-damage'],
};

export default doc;

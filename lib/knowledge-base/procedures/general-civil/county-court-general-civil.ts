import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-county-court-general-civil',
  type: 'procedure',
  category: 'general-civil',
  title: 'County Court — general civil claims (money and injunctions)',
  jurisdiction: 'england-wales',
  citation: 'Civil Procedure Rules, Parts 7, 26, 35',
  url: 'https://www.gov.uk/make-court-claim-for-money',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'General civil claims for money and/or injunctions are issued in the County Court. Money Claim Online (MCOL) for liquidated sums ≤£100,000; Form N1 for unliquidated or injunctive claims. Track allocation: small claims (≤£10,000); fast track (£10,000–£25,000); multi-track (£25,000+). Defamation: typically multi-track; high-value cases may go to the Media and Communications List in the King\'s Bench Division.',
  content: `Forum: County Court Money Claims Centre (CCMCC) for money claims. Local County Court hearing centre for hearings and injunctions.

Issue routes:
(a) Money Claim Online (MCOL): liquidated sums ≤£100,000 against up to 2 defendants. Suitable for defined-sum harassment damages or data breach compensation.
(b) Form N1: unspecified-sum claims (harassment, defamation, privacy where damages not yet quantified), more than 2 defendants, or where injunctive relief is also sought.

Track allocation (CPR 26):
- Small claims — ≤£10,000. Informal hearings in chambers; no legal cost recovery. Low-value harassment or contract disputes.
- Fast track — £10,000–£25,000. Standard cost recovery; single trial day; expert evidence by permission.
- Multi-track — £25,000+ or complex. Full disclosure, witness statements, expert evidence, case management conferences. Most defamation, privacy, and data protection cases will be multi-track regardless of value due to legal complexity.

High Court option: defamation and privacy claims may be issued in the King's Bench Division / Media and Communications List where the claim is of sufficient importance or involves a High Court point. Minimum value not specified but costs exposure is high — appropriate only for substantial claims.

Injunctions (County Court jurisdiction, s.38 County Courts Act 1984): the County Court can grant prohibitory injunctions (restraining harassment, publication) and mandatory injunctions. For anti-harassment injunctions under PHA 1997 s.3, the County Court has full jurisdiction.

Interim injunctions: American Cyanamid test — serious question to be tried; damages would not be an adequate remedy; balance of convenience. Applicant gives undertaking in damages.

Defence: 14 days to acknowledge service; 28 days to serve defence (with acknowledgment). Default judgment available for non-response.

Enforcement: warrant of control; attachment of earnings; third-party debt order; charging order.`,
  tags: ['County-Court', 'CPR', 'small-claims', 'fast-track', 'multi-track', 'injunction', 'general-civil'],
};

export default doc;

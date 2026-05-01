import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-adr-and-ombudsman',
  type: 'procedure',
  category: 'contract-service',
  title: 'ADR and Ombudsman Routes for Consumer Disputes',
  jurisdiction: 'england-wales',
  citation: 'Alternative Dispute Resolution for Consumer Disputes (Competent Authorities and Information) Regulations 2015 (SI 2015/542)',
  url: 'https://www.gov.uk/government/publications/alternative-dispute-resolution-for-consumers',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Before or instead of court proceedings, consumers can use ADR — mediation, sectoral ombudsmen (FOS for financial services; Energy Ombudsman; Housing Ombudsman; Property Ombudsman), trade-association schemes (e.g., Furniture Ombudsman, Motor Ombudsman), and CMA-approved ADR providers. Many sectors mandate ombudsman membership for traders.',
  content: `Consumer ADR runs in parallel to (and is often preferred over) County Court litigation. The ADR for Consumer Disputes Regulations 2015 require traders, on receiving a complaint they cannot resolve, to tell the consumer of the relevant ADR provider and whether they will use it.

Major sectoral ombudsmen (free to consumers; binding on member traders):

- Financial Ombudsman Service (FOS) — banks, insurers, mortgages, credit, investments, pensions. Mandatory for FCA-regulated firms. Current cap on fos.org.uk. 6-month escalation window from final response.
- Energy Ombudsman — gas/electricity supply, billing, switching. Mandatory for licensed suppliers.
- Communications Ombudsman / CISAS — telecoms, internet, mobile. Ofcom requires ADR membership.
- Housing Ombudsman (social) / Property Ombudsman / Property Redress Scheme (lettings, estate agents).
- Motor Ombudsman — voluntary for sales, servicing, repair under the codes.
- Furniture & Home Improvement Ombudsman — voluntary.
- Pensions Ombudsman — occupational/personal pensions.
- Legal Ombudsman — regulated legal service providers.

Other ADR routes:

- Mediation — voluntary, confidential. Civil Mediation Council (civilmediation.org) lists accredited mediators.
- HMCTS Small Claims Mediation Service — free telephone mediation for small claims (≤£10,000), available once a defence is filed; often a single one-hour call.
- CMA-approved ADR providers under SI 2015/542 — must meet process and quality standards.

Procedural mechanics: trader internal complaint (8 weeks to final response); 6-month escalation window to ADR/ombudsman; provider investigates on documents (may take statements / hold a hearing); decision binding on the trader if accepted by the consumer; not binding on the consumer (who retains litigation rights). Awards: refunds, compensation, apology, corrective action.

Strategic: ADR/ombudsman is usually preferable to court — free, faster, often equivalent outcomes. Unjustified refusal to engage with ADR is a cost-relevant factor (Halsey v Milton Keynes [2004] EWCA Civ 576).`,
  tags: ['ADR', 'ombudsman', 'mediation', 'FOS', 'Small-Claims-Mediation', 'Halsey', 'consumer-redress'],
};

export default doc;

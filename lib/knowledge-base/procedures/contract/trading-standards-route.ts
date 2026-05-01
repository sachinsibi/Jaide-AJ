import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-trading-standards-route',
  type: 'procedure',
  category: 'contract-service',
  title: 'Trading Standards / Consumer Protection Enforcement Route',
  jurisdiction: 'england-wales',
  citation: 'Consumer Protection from Unfair Trading Regulations 2008 (SI 2008/1277); Enterprise Act 2002, Pt 8',
  url: 'https://www.tradingstandards.uk/consumers',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['scam', 'rogue trader', 'misleading', 'aggressive sales', 'doorstep', 'unfair commercial practice', 'counterfeit', 'misdescription'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Local-authority Trading Standards services enforce consumer-protection law against traders who engage in unfair commercial practices, misleading advertising, aggressive sales, or sale of unsafe / counterfeit goods. Tenants of consumer rights funnelled through Citizens Advice (the consumer service) which refers serious cases to Trading Standards.',
  content: `Trading Standards is the local-authority service that enforces consumer-protection law against traders. It is a public-law enforcement track distinct from the consumer's private civil remedies under CRA 2015.

Reporting:
1. Citizens Advice consumer service (0808 223 1133) is the front-line referral channel. Triages reports and refers serious/systemic/criminal cases to local Trading Standards.
2. Local Trading Standards (trader's or consumer's authority) investigates under:
   - CPUTR 2008 (SI 2008/1277) — misleading actions/omissions, aggressive practices, 31 banned practices in Sch.1.
   - CRA 2015 public enforcement.
   - Enterprise Act 2002 Pt 8 — court enforcement orders against persistent infringers.
   - Sector-specific law (food safety, weights and measures, age-restricted goods, product safety).

Powers: investigations and information demands; improvement and seizure notices; criminal prosecutions for CPUTR offences; EA 2002 Pt 8 court orders; coordination with CMA and other regulators.

NOT powers: cannot award compensation, cannot compel refunds to a specific consumer, cannot investigate every complaint (stretched resources prioritise serious / repeat / vulnerable-victim cases).

Strategic value to consumer: Trading Standards pressure often produces individual settlement; a criminal conviction or enforcement notice is strong evidence in any civil claim; complaint patterns inform sectoral regulator action.

Adjacent enforcement: CMA (markets-level cases); ASA (misleading advertising); sector regulators (Ofcom, Ofgem, Ofwat, FCA); Action Fraud (police-affiliated; outright fraud/scams).

A consumer pursuing civil redress should file a parallel Citizens Advice / Trading Standards report where the conduct engages CPUTR or sector law — pressure plus evidence improves outcomes.`,
  tags: ['Trading-Standards', 'CPUTR-2008', 'Citizens-Advice-consumer', 'public-enforcement', 'misleading-practices'],
};

export default doc;

import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-trading-standards',
  type: 'resource',
  category: 'contract-service',
  title: 'Trading Standards / Citizens Advice consumer service',
  jurisdiction: 'england-wales',
  url: 'https://www.tradingstandards.uk/consumers',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['references'],
  factSummary:
    'Local-authority Trading Standards services enforce consumer-protection law (CPUTR 2008, CRA 2015 public enforcement, sector-specific safety law). The front-line referral channel is the Citizens Advice consumer service (0808 223 1133), which triages reports and refers serious cases to the relevant Trading Standards team.',
  content: `Trading Standards (https://www.tradingstandards.uk/consumers) is the umbrella name for the network of local-authority consumer-protection enforcement teams across England and Wales. Each local authority has its own service; complaints are usually routed through a single national first-line:

- Citizens Advice consumer service: 0808 223 1133 (England) / 0808 223 1144 (Welsh-language). Free, independent. Takes consumer reports, gives self-help advice, and refers serious / systemic / criminal cases to the relevant local Trading Standards team.

What Trading Standards enforces:

- Consumer Protection from Unfair Trading Regulations 2008 (criminal offences for misleading actions, misleading omissions, aggressive practices, and 31 specifically banned practices).
- Consumer Rights Act 2015 (public enforcement under Sch.5).
- Enterprise Act 2002, Pt 8 (court-ordered enforcement against persistent infringers).
- Sector-specific consumer safety: food safety, weights and measures, age-restricted goods, product safety.
- Counterfeit goods (Trade Marks Act 1994).
- Doorstep crime, scams, rogue traders.

What it does NOT do:

- Award compensation to individual consumers — that is the role of civil claims, ombudsmen, and ADR providers.
- Force a trader to give a refund to a particular consumer (though pressure often produces this in practice).
- Investigate every individual complaint — resources are stretched and prioritisation focuses on serious / repeat / vulnerable-victim cases.

Adjacent enforcement:

- Competition and Markets Authority (CMA) — markets-level consumer law cases against major traders; chairs the consumer enforcement network.
- Advertising Standards Authority (ASA) — misleading or aggressive advertising (UK Code of Non-broadcast Advertising; UK Code of Broadcast Advertising).
- Sector regulators (Ofcom, Ofgem, Ofwat, FCA) — for regulated industries.
- Action Fraud — police-affiliated reporting service for outright fraud.

When to use:

- File a Trading Standards report when a trader's conduct shows misleading practices, aggressive sales, doorstep crime, sale of unsafe / counterfeit goods, or persistent disregard of consumer rights.
- File in parallel with any civil claim — it is free, signals seriousness, and may produce evidence (criminal conviction; formal enforcement notice) usable at court or ombudsman.
- The Citizens Advice consumer line is also useful for self-help advice on whether you have a viable claim before deciding whether to litigate.`,
  tags: ['Trading-Standards', 'Citizens-Advice-consumer', 'CPUTR-2008', 'public-enforcement', 'helpline'],
};

export default doc;

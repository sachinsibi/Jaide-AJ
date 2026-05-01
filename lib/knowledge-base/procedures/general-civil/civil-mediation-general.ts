import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-civil-mediation-general',
  type: 'procedure',
  category: 'general-civil',
  title: 'Civil Mediation — ADR in general civil disputes',
  jurisdiction: 'england-wales',
  citation: 'CPR PD Pre-Action Conduct; Halsey v Milton Keynes [2004]; PGF II SA v OMFS [2013]',
  url: 'https://www.civilmediation.org',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Parties to civil disputes must consider ADR before and during litigation. Unreasonable refusal to mediate is a costs risk even for the winning party. The HMCTS Small Claims Mediation Service provides free telephone mediation for claims ≤£10,000 once a defence is filed. Civil Mediation Council-accredited mediators handle larger disputes.',
  content: `Types of ADR available in civil disputes:

Facilitative mediation: a neutral mediator helps the parties reach their own settlement. The mediator has no power to impose an outcome. Confidential — what is said in mediation cannot be used as evidence if proceedings continue. Most common form.

HMCTS Small Claims Mediation Service: free telephone mediation for claims ≤£10,000 where a defence has been filed. Arranged by the court automatically; conducted by telephone. No cost to either party.

Civil Mediation Council (CMC)-accredited mediators: private mediators for higher-value disputes. Costs typically £100–£500 per party for a half-day; substantially more for complex commercial cases. Mediator selection via civilmediation.org.

Online Dispute Resolution (ODR): available for low-value disputes; some providers offer free online mediation for consumer-type claims.

Costs obligations:

Pre-action: the PD on Pre-Action Conduct requires parties to consider ADR before issuing. Failure to do so is taken into account on costs.

During proceedings: Halsey v Milton Keynes General NHS Trust [2004] EWCA Civ 576 — a successful party may be deprived of costs if they unreasonably refused to mediate. PGF II SA v OMFS Co [2013] EWCA Civ 1288 — silence in response to an ADR invitation is itself unreasonable refusal; the court need not examine reasons if none were given.

Outcome of successful mediation: a settlement is recorded in a Tomlin Order (consent order staying proceedings, with settlement terms in a confidential schedule) or a consent order. Either is enforceable as a court judgment without further proceedings.

Limits: neither party can be compelled to settle. If mediation fails, proceedings continue from where they were. The Limitation Act is not suspended by mediation unless the parties expressly agree (s.33 LA 1980 discretion does not apply to ordinary limitation).`,
  tags: ['mediation', 'ADR', 'CMC', 'small-claims-mediation', 'Tomlin-order', 'costs', 'Halsey'],
};

export default doc;

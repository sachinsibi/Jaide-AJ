import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-tenancy-rent-assessment',
  type: 'statute',
  category: 'tenancy',
  title: 'Rent Assessment and Dispute Resolution Mechanisms — Barbados',
  jurisdiction: 'barbados',
  citation: 'Landlord and Tenant Act, Cap. 230; Magistrates\' Court Act, Cap. 116A; Supreme Court of Judicature Act, Cap. 117 (Laws of Barbados)',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  triggers: ['rent increase', 'rent dispute', 'rent tribunal', 'rent board', 'excessive rent', 'fair rent', 'rent assessment'],
  factSummary:
    'In Barbados, rent disputes in residential tenancies are determined by the Magistrates\' Court or the High Court of Barbados, depending on the value of the claim. There is no equivalent to the English First-tier Tribunal (Property Chamber). Where a rent assessment mechanism exists under Barbados law, disputes as to fair or excessive rent may be referred to that body.',
  content: `Rent Assessment and Dispute Resolution Mechanisms — Barbados:

In Barbados, there is no equivalent to England's First-tier Tribunal (Property Chamber) for residential property disputes. Rent disputes and other tenancy-related civil claims are determined by the civil courts of Barbados.

Court jurisdiction for rent disputes:

(a) Magistrates' Court (Cap. 116A — Magistrates' Court Act): the Magistrates' Court has civil jurisdiction for tenancy disputes falling within its monetary jurisdiction. Rent disputes where the amount claimed falls within the applicable limit may be heard in the Magistrates' Court.

(b) High Court of Barbados (Cap. 117 — Supreme Court of Judicature Act): the High Court has unlimited civil jurisdiction and hears rent disputes and other tenancy claims where the amount at issue exceeds the Magistrates' Court jurisdiction, or where the legal or factual complexity of the case warrants it.

Rent increases: in residential tenancies in Barbados, rent increases are generally governed by the terms of the tenancy agreement. Any rent increase mechanism, notice requirements, and the frequency with which rent may be varied are matters to be determined by reference to the express terms of the lease and the applicable provisions of Cap. 230.

Rent assessment mechanisms: where a rent assessment or rent board mechanism exists under Barbados law for certain categories of residential tenancy, disputes as to whether rent is fair or excessive may be referred to that body in accordance with its applicable procedures. Parties uncertain whether such a mechanism applies to their tenancy should seek advice from the Barbados Bar Association (barbadosbar.org) or consult the Laws of Barbados portal (laws.barbados.gov.bb) for current legislation.

Rent Repayment Orders: Barbados does not have a statutory rent repayment order regime equivalent to that established by the Housing and Planning Act 2016 in England. Civil claims for the recovery of rent paid under duress, or for unlawful overcharging, would be pursued as ordinary contractual or restitutionary claims before the appropriate court.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['rent-assessment', 'rent-dispute', 'Cap-230', 'Magistrates-Court', 'High-Court', 'Barbados', 'rent-board'],
};

export default doc;

import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-barbados-magistrates-court',
  type: 'resource',
  category: 'general',
  title: 'Court Filing and Civil Claims — Barbados',
  jurisdiction: 'barbados',
  url: 'https://supremecourt.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'contract-service', 'employment', 'property-damage', 'general-civil'],
  tabs: ['references'],
  factSummary:
    'Civil money claims in Barbados are filed in the Magistrates\' Court (for amounts up to $10,000 BBD) or the High Court of Barbados (for amounts above $10,000 BBD). The BBD is pegged at approximately 2:1 to the US Dollar. The Barbados Supreme Court website (supremecourt.gov.bb) provides information on court procedure.',
  content: `Civil court proceedings in Barbados:

Magistrates' Court (Cap. 116A — Magistrates' Court Act): the Magistrates' Court handles civil money claims up to $10,000 BBD. This is the appropriate forum for smaller money disputes including consumer claims, minor contract disputes, property damage claims, and motor accident claims below the threshold. Procedure is more informal and less costly than the High Court.

High Court of Barbados (Cap. 117 — Supreme Court of Judicature Act): the High Court has jurisdiction for civil claims above $10,000 BBD, and for all claims involving injunctions, complex legal issues, defamation, privacy, employment matters beyond Magistrates' Court jurisdiction, and substantial damages claims. The High Court is also the appropriate forum for claims of any value that involve equitable relief.

Currency: all monetary claims and judgments in Barbados civil proceedings are expressed in Barbados Dollars (BBD). The BBD is pegged at approximately 2:1 to the US Dollar. A claim for $5,000 USD would be approximately $10,000 BBD.

How to commence a civil claim:
- Identify the correct court (Magistrates' Court or High Court) based on the value and nature of the claim.
- Prepare a claim form and statement of claim setting out the facts, legal basis, and remedy sought.
- File the claim form with the relevant court registry and pay the applicable court fees.
- Serve the claim on the defendant in accordance with court rules.

Barbados Supreme Court (https://supremecourt.gov.bb): the official website of the High Court and Court of Appeal of Barbados. Provides procedural guidance, cause lists, and contact information for the court registry.

Laws of Barbados portal (https://laws.barbados.gov.bb): access to the Magistrates' Court Act (Cap. 116A) and the Supreme Court of Judicature Act (Cap. 117).

Note: gov.uk Money Claim Online (MCOL) is an England and Wales service and has no application in Barbados.`,
  tags: ['Magistrates-Court', 'High-Court-Barbados', 'civil-claim', 'BBD', 'court-filing', 'Barbados', 'cross-category'],
};

export default doc;

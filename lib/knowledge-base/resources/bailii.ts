import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-bailii',
  type: 'resource',
  category: 'general',
  title: 'BAILII — British and Irish Legal Information Institute',
  jurisdiction: 'barbados',
  url: 'https://www.bailii.org',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy', 'employment', 'contract-service', 'general-civil', 'motor-accident', 'property-damage'],
  tabs: ['references'],
  factSummary:
    'BAILII (British and Irish Legal Information Institute) hosts judgments from UK courts and Commonwealth jurisdictions. Barbados courts may refer to UK decisions as persuasive common law authority. BAILII is a useful resource for identifying relevant common law precedents applicable in Barbados.',
  content: `BAILII (https://www.bailii.org) is the principal free, open-access database of legal materials for the United Kingdom, Ireland, and related jurisdictions. Operated by a registered charity, it publishes the full text of judgments handed down by UK courts and selected Commonwealth courts.

Relevance to Barbados: Barbados is a Commonwealth jurisdiction whose courts apply the common law inherited from English law and may refer to decisions of UK courts (particularly the House of Lords, UK Supreme Court, Court of Appeal, and Privy Council) as persuasive authority. BAILII is a useful resource for identifying common law precedents that may be applied or referred to in Barbados proceedings.

Coverage relevant to Barbados civil practice:
- UK Supreme Court and historic House of Lords decisions — the highest level of persuasive common law authority.
- Court of Appeal (Civil Division) — extensive coverage of common law and equitable principles.
- Privy Council decisions — particularly relevant as the Privy Council has historically been the final appellate court for many Commonwealth jurisdictions, including Barbados.
- High Court decisions (Queen's/King's Bench Division, Chancery Division).
- Older case law, including foundational common law decisions applicable across Commonwealth jurisdictions.

Searching and citation:
- The standard URL pattern uses neutral citations: bailii.org/uk/cases/UKHL/[year]/[number].html, bailii.org/ew/cases/UKSC/[year]/[number].html, etc.
- BAILII supports keyword search across full judgment text.
- Most BAILII pages include both the neutral citation (official) and the Law Reports citation where one exists.

Limits:
- BAILII does not cover Barbados court decisions directly. For Barbados case law, the Barbados Supreme Court (supremecourt.gov.bb) and official Barbados legal databases should be consulted.
- UK decisions cited from BAILII are persuasive, not binding, in Barbados courts.
- BAILII does not provide editorial commentary; for that, paid services are needed.

In a JAIDE Barbados context, BAILII is the appropriate citation source for common law case law from UK courts referenced as persuasive authority.`,
  tags: ['bailii', 'case-law', 'judgments', 'free-access', 'neutral-citation'],
};

export default doc;

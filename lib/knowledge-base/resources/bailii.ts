import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-bailii',
  type: 'resource',
  category: 'general',
  title: 'BAILII — British and Irish Legal Information Institute',
  jurisdiction: 'england-wales',
  url: 'https://www.bailii.org',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy', 'employment', 'contract-service', 'general-civil', 'motor-accident', 'property-damage'],
  tabs: ['references'],
  factSummary:
    'Free, open-access database of judgments and decisions from courts and tribunals across the United Kingdom and Ireland. The standard reference for case law citations in legal-information contexts.',
  content: `BAILII (https://www.bailii.org) is the principal free, open-access database of legal materials for the United Kingdom, Ireland, and the European jurisdictions. Operated by a registered charity, it publishes the full text of judgments handed down by the courts and tribunals it covers.

Coverage relevant to civil practice in England & Wales:
- Supreme Court of the United Kingdom (and historic House of Lords decisions).
- Court of Appeal (Civil Division).
- High Court (Queen's/King's Bench Division, Chancery Division, Family Division, Administrative Court).
- Specialist courts (Patents Court, Technology and Construction Court, Commercial Court).
- First-tier Tribunal and Upper Tribunal (selected decisions).
- Employment Tribunal and Employment Appeal Tribunal.
- Older case law including significant House of Lords decisions back to the 19th century in selected coverage.

Searching and citation:
- The standard URL pattern uses neutral citations: bailii.org/uk/cases/UKHL/[year]/[number].html, bailii.org/ew/cases/EWCA/Civ/[year]/[number].html, etc.
- BAILII supports keyword search across full judgment text.
- Most BAILII pages include both the neutral citation (official) and the Law Reports citation where one exists.

Limits:
- BAILII is not a fully consolidated archive — coverage of older county-court and lower-tribunal decisions is patchy.
- It does not provide editorial commentary; for that, paid services (Westlaw, LexisNexis, Practical Law) are needed.
- For a binding case the user intends to rely on at hearing, always check the latest version against BAILII or another authoritative source for any subsequent appeal or distinguishing.

In a JAIDE-style triage context, BAILII is the appropriate citation for case law links — both because it is free and because the URL pattern is stable.`,
  tags: ['bailii', 'case-law', 'judgments', 'free-access', 'neutral-citation'],
};

export default doc;

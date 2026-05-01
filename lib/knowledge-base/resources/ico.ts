import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-ico',
  type: 'resource',
  category: 'general',
  title: 'Information Commissioner\'s Office (ICO)',
  jurisdiction: 'england-wales',
  url: 'https://ico.org.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['general-civil'],
  tabs: ['references'],
  factSummary:
    'The ICO (ico.org.uk) is the UK\'s independent data protection regulator. It accepts free complaints from individuals about organisations that may have breached data protection law. An ICO complaint runs independently of any civil court claim and can result in enforcement action and fines against the organisation.',
  content: `The Information Commissioner's Office (ICO) is the UK's supervisory authority for data protection under the Data Protection Act 2018 and UK GDPR.

Who can complain: any individual who believes an organisation has mishandled their personal data — including failure to respond to a Subject Access Request (SAR), unlawful disclosure, excessive retention, security breaches, or failure to comply with deletion requests.

How to complain: submit online at ico.org.uk/make-a-complaint. The complaint is free. The ICO typically requires the complainant to have raised the issue with the organisation first and to have allowed 3 months for a response.

What the ICO can do: investigate the complaint; issue enforcement notices requiring the organisation to comply with data protection law; issue fines (up to £17.5 million or 4% of global annual turnover for serious breaches); publish enforcement decisions (useful as evidence in civil proceedings).

What the ICO cannot do: award compensation to the individual complainant. The ICO is a regulator, not a court. For compensation, the individual must bring a civil claim under Article 82 UK GDPR / DPA 2018 s.169 in the County Court or High Court.

ICO and civil claims: an ICO complaint and a civil claim can run in parallel. An ICO enforcement notice or finding of a breach can support (but is not required for) a civil claim. The civil court makes its own findings independently.

Timeframe: ICO investigations can take several months. Where urgent relief is needed (e.g., ongoing unlawful processing causing harm), a civil injunction is the faster route.`,
  tags: ['ICO', 'data-protection', 'UK-GDPR', 'DPA-2018', 'regulator', 'complaint'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-data-protection-act-2018',
  type: 'statute',
  category: 'general-civil',
  title: 'Data Protection Act 2018 / UK GDPR — rights and civil claims',
  jurisdiction: 'england-wales',
  citation: 'Data Protection Act 2018, s.169; UK GDPR (retained EU law), Arts.15, 17, 82',
  url: 'https://www.legislation.gov.uk/ukpga/2018/12/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['data protection', 'personal data', 'ICO', 'right of access', 'GDPR', 'data breach', 'personal information shared', 'subject access'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'The DPA 2018, read with the UK GDPR, gives individuals rights over their personal data and a cause of action for damages (material or non-material, including distress) where a controller or processor fails to comply. The ICO is the supervisory authority for regulatory complaints. A civil claim in court runs in parallel and is not contingent on an ICO decision.',
  content: `UK GDPR applies to the processing of personal data by controllers and processors established in the UK or targeting UK data subjects.

Key data subject rights:
- Art.15 — Right of access (Subject Access Request): the controller must provide a copy of personal data held, free of charge, within 1 month (extendable to 3 months for complex or numerous requests).
- Art.16 — Right to rectification: correct inaccurate data without undue delay.
- Art.17 — Right to erasure ("right to be forgotten"): erase data where it is no longer necessary, consent withdrawn, or unlawfully processed.
- Art.21 — Right to object: object to processing on legitimate-interests grounds; object to direct marketing (absolute right).
- Art.22 — Automated decision-making: right not to be subject to solely automated decisions with legal or significant effects.

Civil claim for damages:
Art.82 UK GDPR / DPA 2018 s.169: any person who has suffered material or non-material damage as a result of an infringement of UK GDPR has the right to receive compensation from the controller or processor. "Non-material damage" includes distress — it is not necessary to prove financial loss (Vidal-Hall v Google [2015] EWCA Civ 311). Limitation: 6 years.

Regulatory route (ICO):
The Information Commissioner's Office (ico.org.uk) accepts complaints from data subjects. The ICO can investigate, issue enforcement notices, and impose fines (up to £17.5m or 4% of global turnover for serious infringements). An ICO complaint is free and runs independently of any civil claim. A civil claim is not contingent on an ICO finding.

Common civil scenarios: unlawful disclosure of personal data to third parties; sharing private images without consent; excessive data retention; failure to respond to a Subject Access Request.`,
  tags: ['data-protection', 'UK-GDPR', 'DPA-2018', 'right-of-access', 'SAR', 'ICO', 'non-material-damage'],
};

export default doc;

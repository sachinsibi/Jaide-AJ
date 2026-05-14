import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-barbados-legal-aid',
  type: 'resource',
  category: 'general',
  title: 'Legal Aid and Legal Advice in Barbados',
  jurisdiction: 'barbados',
  url: 'https://www.barbadosbar.org',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy', 'employment', 'contract-service', 'general-civil', 'motor-accident', 'property-damage'],
  tabs: ['references'],
  factSummary:
    'Barbados has legal aid provisions for qualifying individuals. The Barbados Bar Association (barbadosbar.org) maintains a directory of licensed attorneys. Individuals with limited means should enquire about legal aid eligibility through the court system or the Bar Association.',
  content: `Legal aid and legal advice in Barbados:

Barbados Bar Association (https://www.barbadosbar.org): the professional association for attorneys admitted to practise law in Barbados. The Bar Association maintains a directory of licensed attorneys that can be used by individuals seeking legal representation across all areas of civil law, including tenancy, employment, contract disputes, defamation, and personal matters.

Legal aid: Barbados has legal aid provisions for individuals who qualify based on financial means. Eligibility criteria and the scope of legal aid available should be verified through the Barbados court system or the Barbados Bar Association. Individuals with limited financial means should enquire about legal aid availability before engaging private legal representation.

What legal advice can provide: a qualified Barbados attorney can advise on the legal merits of a civil claim, assist in drafting letters before action, represent a party in court proceedings before the Magistrates' Court or High Court of Barbados, negotiate settlements, and advise on procedural requirements.

Self-representation: individuals may represent themselves in the Magistrates' Court and the High Court of Barbados. However, legal proceedings involve procedural requirements and rules of evidence that can affect the outcome; legal advice is recommended wherever possible.

Note: Citizens Advice (England) does not operate in Barbados and has no relevance to civil claims in the Barbados jurisdiction.`,
  tags: ['legal-aid', 'Barbados-Bar-Association', 'attorney', 'legal-advice', 'Barbados', 'cross-category'],
};

export default doc;

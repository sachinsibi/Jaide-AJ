import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-barbados-legal',
  type: 'resource',
  category: 'general',
  title: 'Barbados Legal Resources',
  jurisdiction: 'barbados',
  url: 'https://laws.barbados.gov.bb',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident', 'tenancy', 'employment', 'contract-service', 'property-damage', 'general-civil'],
  tabs: ['references'],
  factSummary:
    'Key Barbados legal institutions and resources: Laws of Barbados online portal (laws.barbados.gov.bb), Financial Services Commission (fsc.gov.bb), Barbados Bar Association (barbadosbar.org), and the Barbados Supreme Court (supremecourt.gov.bb).',
  content: `Key legal resources for Barbados civil matters:

Laws of Barbados (https://laws.barbados.gov.bb): the official online portal for legislation of Barbados, including the Revised Laws and subsidiary legislation. Primary reference for statutory text.

Financial Services Commission of Barbados (https://www.fsc.gov.bb): the statutory regulator for the insurance, securities, and pensions sectors in Barbados. Relevant for complaints about insurer conduct under the Insurance Act, Cap. 310. The FSC's role is supervisory and regulatory; it does not operate as an adjudicative ombudsman service.

Barbados Bar Association (https://www.barbadosbar.org): the professional association for attorneys admitted to practise in Barbados. Maintains a directory that can be used to locate qualified legal representation.

Barbados Supreme Court (https://www.supremecourt.gov.bb): information about the High Court and Court of Appeal of Barbados, including cause lists and procedural guidance.`,
  tags: ['Barbados', 'legislation', 'FSC', 'Bar-Association', 'Supreme-Court', 'laws-portal'],
};

export default doc;

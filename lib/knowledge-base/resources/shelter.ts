import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-barbados-housing-assistance',
  type: 'resource',
  category: 'general',
  title: 'Housing Assistance in Barbados',
  jurisdiction: 'barbados',
  url: 'https://www.barbadosbar.org',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['references'],
  factSummary:
    'Housing assistance and homelessness services in Barbados are provided through government social services. Tenants facing eviction or housing difficulty should contact the Barbados Social Care Department or equivalent government body for assistance. Legal advice on tenancy matters is available through attorneys listed with the Barbados Bar Association (barbadosbar.org).',
  content: `Housing assistance in Barbados:

Government social services: housing assistance and support for individuals facing homelessness or housing difficulty in Barbados is provided through the Barbados Social Care Department (or equivalent government ministry responsible for social services). Individuals in urgent housing need should contact the relevant government social services department. Contact details should be verified through official Barbados government sources.

Tenancy law advice: individuals with tenancy disputes — including unlawful eviction, disrepair, or deposit disputes — should seek legal advice from a Barbados attorney. The Barbados Bar Association (https://www.barbadosbar.org) maintains a directory of licensed attorneys who can advise on tenancy and housing matters under Barbados law.

Unlawful eviction: where a landlord is attempting to evict a tenant without following the proper legal process, the tenant may have grounds for civil proceedings in the Magistrates' Court or High Court of Barbados. Legal advice should be sought promptly.

Tenancy legislation: the primary Barbados legislation governing landlord and tenant relationships is the Landlord and Tenant Act, Cap. 230 (Laws of Barbados). The full text is available at laws.barbados.gov.bb.

Note: Shelter England (england.shelter.org.uk) is an English housing charity and has no application in Barbados. Barbados tenants should use Barbados-specific resources and legal advice.`,
  tags: ['housing-assistance', 'homelessness', 'tenancy', 'Barbados', 'social-services', 'eviction'],
};

export default doc;

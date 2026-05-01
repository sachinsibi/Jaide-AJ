import type { KnowledgeDocument } from '../schema';

const doc: KnowledgeDocument = {
  id: 'resource-legislation-gov-uk',
  type: 'resource',
  category: 'general',
  title: 'legislation.gov.uk',
  jurisdiction: 'england-wales',
  url: 'https://www.legislation.gov.uk',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy', 'employment', 'contract-service', 'general-civil', 'motor-accident', 'property-damage'],
  tabs: ['references'],
  factSummary:
    'The official UK government source for legislation. Provides full text of Acts of Parliament, Statutory Instruments, and Welsh and Northern Ireland legislation, with as-enacted, current, and version-history views.',
  content: `legislation.gov.uk (https://www.legislation.gov.uk) is the UK government's official online database of legislation, managed by The National Archives. It is the canonical source for the text of any UK statute or statutory instrument.

What it provides:
- Full text of Acts of Parliament (UK, England, Wales, Scotland, Northern Ireland).
- Full text of Statutory Instruments (regulations made under Act-conferred powers).
- "As enacted" version (the original text passed by Parliament).
- "Latest available" version (current text as in force, incorporating amendments — coverage is good but not 100% real-time; the site marks where consolidation is incomplete).
- Schedules and section-by-section navigation.
- Tables of contents for long statutes.
- Commencement information for newer Acts (the dates on which provisions come into force).
- Historical versions (point-in-time view for many statutes).

How to use:
- Cite a statute by its short title and year ("Landlord and Tenant Act 1985"), then a section number ("s.11").
- The URL pattern is predictable: legislation.gov.uk/ukpga/[year]/[chapter]/section/[n] for UK Public General Acts.
- For statutory instruments: legislation.gov.uk/uksi/[year]/[number].
- The "Show timeline of changes" link provides amendment history.

Caveat: while legislation.gov.uk consolidates most amendments, it is occasionally behind for very recent commencements. Where the precise current state matters (e.g., commencement of the Renters' Rights Act 2024), cross-check against gov.uk and against the originating department's pages.`,
  tags: ['legislation-gov-uk', 'official-statute', 'statutory-instrument', 'as-enacted', 'national-archives'],
};

export default doc;

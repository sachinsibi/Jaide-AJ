import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-renters-rights-2024-status',
  type: 'statute',
  category: 'tenancy',
  title: 'Renters\' Rights Act 2024 — commencement status placeholder',
  jurisdiction: 'england-wales',
  citation: 'Renters\' Rights Act 2024 (commencement status pending verification)',
  url: 'https://www.legislation.gov.uk/ukpga/2024',
  inForce: false,
  inForceNote:
    'PENDING — placeholder doc. Commencement status of the Renters\' Rights Act 2024 has not been verified against gov.uk / legislation.gov.uk by the maintainer. While inForce is false, this doc is excluded from retrieval. Once status is confirmed, replace with a successor doc describing the regime that has actually come into force, and flip housing-act-1988-s21 / deregulation-2015-s33 inForce flags accordingly.',
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  tabs: ['references'],
  factSummary:
    'Placeholder. The Renters\' Rights Act 2024 is expected to abolish s.21 no-fault possession, convert ASTs to periodic tenancies, restrict in-tenancy rent increases, and overhaul possession grounds. Commencement schedule unverified at the date of this doc — verify against gov.uk before relying on or referencing this regime.',
  content: `Placeholder document. The Renters' Rights Act 2024 (commencement provisions and saving provisions to be verified on legislation.gov.uk) is expected to:

- Abolish the s.21 "no-fault" possession route under the Housing Act 1988.
- Convert all assured shorthold tenancies (and remaining assured tenancies) to a single periodic-tenancy form, with no fixed term.
- Reform Schedule 2 possession grounds, including new mandatory grounds for serious rent arrears and landlord/family occupation, and revised discretionary grounds for anti-social behaviour and breach.
- Restrict in-tenancy rent increases to one increase per year by s.13 Housing Act 1988 notice, with FTT challenge route.
- Establish a Private Rented Sector Database (landlord register) and a single Ombudsman scheme.
- Strengthen tenant rights to keep pets and tighten rules on bidding wars and discrimination against benefit recipients / families with children.

This document is intentionally inForce: false to keep it out of retrieval. The maintainer should:

1. Confirm commencement status on legislation.gov.uk and gov.uk.
2. If the Act (or specific provisions) is in force, replace this placeholder with a successor doc describing the operative regime, with inForce: true and a verified lastVerified date.
3. At the same time, flip statute-housing-act-1988-s21 and statute-deregulation-2015-s33 to inForce: false (with inForceNote citing the supersession), unless transitional / saving provisions preserve their effect.

Until that work is done, downstream analysis treats s.21 as in force with the existing PENDING caveats on those documents.`,
  tags: ['renters-rights-act-2024', 'commencement-pending', 'placeholder', 's21-abolition'],
};

export default doc;

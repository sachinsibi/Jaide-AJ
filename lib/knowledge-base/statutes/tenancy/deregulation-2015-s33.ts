import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-deregulation-2015-s33',
  type: 'statute',
  category: 'tenancy',
  title: 'Deregulation Act 2015, s.33 — Retaliatory eviction',
  jurisdiction: 'england-wales',
  citation: 'Deregulation Act 2015, s.33',
  url: 'https://www.legislation.gov.uk/ukpga/2015/20/section/33',
  inForce: true,
  inForceNote:
    'PENDING — verify against gov.uk. Tied to Housing Act 1988 s.21; if the Renters\' Rights Act 2024 has abolished s.21, the s.33 retaliatory-eviction protection will have been superseded by the new regime\'s own protections.',
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['retaliatory', 'retaliation', 'complained', 'complaint', 'environmental health', 'improvement notice', 'evict'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Where a tenant has complained in writing to the landlord about a disrepair condition and the local authority has subsequently served a relevant notice (improvement notice or emergency remedial action notice), a s.21 notice served within 6 months of the local authority notice is invalid. Protects tenants against retaliatory eviction.',
  content: `Section 33 of the Deregulation Act 2015 invalidates a s.21 notice served by a landlord where:

(a) before the s.21 notice was served, the tenant made a complaint in writing to the landlord regarding the condition of the dwelling-house or any common parts; and

(b) the landlord either (i) failed to give a response within 14 days containing a description of the action proposed and a reasonable timescale, (ii) gave a response that was inadequate, or (iii) gave a s.21 notice in response; and

(c) the tenant subsequently complained to the relevant local housing authority about the same or substantially the same matter; and

(d) the local housing authority served a "relevant notice" — defined as either:
   - an improvement notice under s.11 or s.12 of the Housing Act 2004 (Pt 1 HHSRS), or
   - a notice under s.40(7) Housing Act 2004 of emergency remedial action.

Effect: any s.21 notice given within 6 months beginning with the day on which the relevant notice was served is invalid (s.33(1)). Equally, a s.21 notice given before the relevant notice but where possession proceedings have not yet been issued is similarly invalidated by the subsequent service of the relevant notice (s.33(2)).

Section 34 disapplies the protection in narrow circumstances: where the property is genuinely on the market for sale; where the tenant's breach has caused the disrepair; or where the landlord is a private registered provider of social housing.

Section 33 sits behind the s.21 prerequisites — it is a discrete invalidating event triggered by local-authority involvement. A tenant who complains in writing to the landlord and then gets a council inspection that produces an improvement notice has a 6-month moratorium on possession.

Status caveat: this protection is anchored to s.21. If the Renters' Rights Act 2024 has abolished s.21, the s.33 mechanism has been superseded; verify before advising.`,
  tags: ['retaliatory-eviction', 'section-33', 'Deregulation-Act-2015', 'improvement-notice', 'section-21'],
};

export default doc;

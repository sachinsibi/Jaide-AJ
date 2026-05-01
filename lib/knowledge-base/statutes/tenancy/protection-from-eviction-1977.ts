import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-protection-from-eviction-1977',
  type: 'statute',
  category: 'tenancy',
  title: 'Protection from Eviction Act 1977',
  jurisdiction: 'england-wales',
  citation: 'Protection from Eviction Act 1977, ss.1, 3, 5',
  url: 'https://www.legislation.gov.uk/ukpga/1977/43/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: [
    'eviction',
    'evict',
    'lock change',
    'lockout',
    'locked out',
    'harassment',
    'harass',
    'illegal eviction',
    'unlawful eviction',
    'kicked out',
    'thrown out',
    'changed the locks',
  ],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Criminalises unlawful eviction and harassment of residential occupiers (s.1), requires a court order before evicting most residential occupiers (s.3), and prescribes minimum 4 weeks\' written notice to quit containing prescribed information (s.5).',
  content: `The Protection from Eviction Act 1977 (PEA 1977) is the principal statute protecting residential occupiers from being removed without due process.

Section 1 — Unlawful eviction and harassment offences:
- s.1(2): it is a criminal offence to unlawfully deprive the residential occupier of any premises of his occupation, unless the person can prove a reasonable belief that the occupier had ceased to reside.
- s.1(3) and (3A): it is a criminal offence to do acts likely to interfere with the peace or comfort of the residential occupier (or members of his household), or persistently to withdraw or withhold services reasonably required for occupation, with intent (or, under s.1(3A), knowing or having reasonable cause to believe) that the conduct will cause the occupier to give up occupation or refrain from exercising any right or remedy.

Liability is criminal (prosecution by local authority or CPS) and civil (damages under Housing Act 1988 ss.27–28, calculated by reference to the difference in value of the landlord's interest with and without the occupier in possession — often substantial).

Section 3 — Court order required:
- Where any premises have been let as a dwelling under a tenancy that is neither a statutorily protected tenancy nor an excluded tenancy, the right to recover possession is enforceable only by court proceedings. Self-help eviction (changing locks, removing belongings, physically removing the occupier) is therefore unlawful even where the tenancy has technically expired.

Section 5 — Notice to quit:
- A notice to quit by either landlord or tenant of premises let as a dwelling is invalid unless it is in writing, gives at least four weeks' notice expiring at the end of a period of the tenancy, and contains the information prescribed by the Notices to Quit etc. (Prescribed Information) Regulations 1988 (SI 1988/2201).

Excluded tenancies/licences (s.3A) — primarily lodgers sharing accommodation with the owner — fall outside the s.3 court-order requirement, but the s.1 harassment offences still apply.`,
  tags: ['unlawful-eviction', 'harassment', 'PEA-1977', 'notice-to-quit', 'court-order'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-quiet-enjoyment',
  type: 'concept',
  category: 'tenancy',
  title: 'Quiet Enjoyment (implied covenant)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'An implied common-law covenant in every lease that the landlord (or anyone claiming under the landlord) will not substantially interfere with the tenant\'s possession or enjoyment of the demised premises during the term.',
  eli5Summary:
    'When you rent a home, the law gives you a right to live there peacefully without the landlord constantly bothering you. The landlord cannot turn up unannounced, harass you, or stop your gas and electricity to push you out. You don\'t get this right by signing anything — it\'s built into every tenancy automatically.',
  content: `Quiet enjoyment is a fundamental tenant protection implied at common law into every lease (whether or not the written tenancy agreement mentions it). It is the lessor's covenant that the lessee shall be left in peaceful possession of the demised premises during the term, without substantial interference by the lessor or anyone lawfully claiming under the lessor.

Scope:

- The covenant is prospective. It addresses interference during the term, not the inherent state of the premises at the start of the tenancy (Southwark LBC v Mills [2001] 1 AC 1).

- The interference must be substantial. Trivial or de minimis interference is not actionable.

- Conduct that breaches the covenant includes: unauthorised entry; persistent harassment, intimidation, or threats; cutting off utilities (McCall v Abelesz [1976] QB 585); building works rendering the premises uninhabitable; surveillance; persistent calls or visits at unreasonable times.

- The covenant binds the landlord and anyone claiming under the landlord (managing agent, employee, contractor) acting in scope, but does NOT extend to third parties (e.g., neighbours) over whom the landlord has no contractual or property control — unless the landlord has authorised, encouraged, or permitted the conduct.

Defences:

- Lawful exercise of express rights of entry (with reasonable notice and at reasonable times) does not breach.
- Statutory rights of entry (e.g., gas safety inspections under the Gas Safety (Installation and Use) Regulations 1998) do not breach.

Remedies:

- General damages for loss of enjoyment, distress, and inconvenience.
- Aggravated and exemplary damages where the conduct is high-handed, oppressive, or motivated by gain (Drane v Evangelou [1978] 1 WLR 455).
- Injunction restraining further interference.
- Where the conduct also amounts to "unlawful eviction" or harassment under PEA 1977, statutory damages under HA 1988 ss.27–28 (calculated as the difference in value of the landlord's interest with vs without the occupier).

Quiet enjoyment overlaps significantly with PEA 1977 s.1 harassment offences but is itself a civil cause of action available without need for a criminal prosecution.`,
  tags: ['quiet-enjoyment', 'implied-covenant', 'common-law', 'derogation-from-grant', 'PEA-1977'],
};

export default doc;

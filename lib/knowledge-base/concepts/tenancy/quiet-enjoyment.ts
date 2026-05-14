import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-quiet-enjoyment',
  type: 'concept',
  category: 'tenancy',
  title: 'Quiet Enjoyment (implied covenant)',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['tenancy'],
  tabs: ['legalBreakdown', 'eli5'],
  triggers: ['quiet enjoyment', 'peaceful', 'interference', 'entering without permission', 'harassment', 'disturbing', 'landlord visits'],
  factSummary:
    'An implied common law covenant in every residential lease in Barbados that the landlord (or anyone claiming under the landlord) will not substantially interfere with the tenant\'s possession or enjoyment of the premises during the tenancy. This is a fundamental common law right applicable in Barbados as a Commonwealth jurisdiction.',
  eli5Summary:
    'Every tenant in Barbados has the right to live in their rented home peacefully. The landlord cannot constantly come in unannounced, harass the tenant, cut off utilities to push them out, or do building works that make the home uninhabitable. This right is automatically part of every tenancy under Barbados common law — it does not need to be written into the lease.',
  content: `Quiet Enjoyment — Barbados Residential Tenancies:

The implied covenant for quiet enjoyment is a fundamental common law right recognised in Barbados as a Commonwealth jurisdiction. It is implied into every residential lease, whether or not the written tenancy agreement mentions it. The covenant provides that the landlord (and anyone lawfully claiming under the landlord) will not substantially interfere with the tenant's possession or enjoyment of the demised premises during the tenancy.

Scope:

- The covenant is prospective. It addresses interference with the tenant's possession during the term, not the inherent state of the premises at the start of the tenancy. A tenant who takes premises in a particular pre-existing condition cannot rely on quiet enjoyment alone to complain about that pre-existing state (Southwark LBC v Mills [2001] 1 AC 1, persuasive common law authority).

- The interference must be substantial. Trivial or minor inconvenience does not breach the covenant. The question is whether the landlord's conduct, viewed objectively, substantially interferes with the tenant's reasonable enjoyment of the premises.

- Conduct that may breach the covenant includes: persistent unauthorised entry; harassment, intimidation, or threats directed at the tenant; deliberate cutting off or interference with utilities such as water or electricity (McCall v Abelesz [1976] QB 585, persuasive common law authority); building or renovation works that render the premises uninhabitable; surveillance or persistent contact at unreasonable times.

- The covenant binds the landlord and anyone acting under the landlord's authority (including managing agents and contractors acting within scope). It does not extend to entirely independent third parties — such as neighbours — over whom the landlord has no control, unless the landlord has authorised, encouraged, or unreasonably failed to prevent the conduct.

Defences:

- Lawful exercise of express rights of entry included in the tenancy agreement (with reasonable notice and at reasonable times) does not breach the covenant.
- Entry for genuine emergency purposes does not breach the covenant.

Remedies available in Barbados:

- General damages for loss of enjoyment, distress, and inconvenience suffered during the period of breach.
- Aggravated damages where the landlord's conduct has been high-handed or oppressive.
- An injunction from the Magistrates' Court or the High Court of Barbados restraining further interference.

Relationship with other claims: quiet enjoyment overlaps with and complements the habitability and repair obligations under Barbados common law and Cap. 230. Where conduct also amounts to harassment or unlawful exclusion, it may give rise to additional civil and potentially criminal liability.`,
  tags: ['quiet-enjoyment', 'implied-covenant', 'common-law', 'Barbados', 'harassment', 'interference'],
};

export default doc;

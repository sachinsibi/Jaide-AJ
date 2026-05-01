import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-hunter-v-canary-wharf',
  type: 'case',
  category: 'property-damage',
  title: 'Hunter v Canary Wharf Ltd [1997] AC 655 (HL)',
  jurisdiction: 'england-wales',
  citation: 'Hunter v Canary Wharf Ltd [1997] AC 655 (HL)',
  url: 'https://www.bailii.org/uk/cases/UKHL/1997/14.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['property-damage'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Private nuisance is a tort against land. Only persons with a legal interest in the affected land — owners, tenants, those with exclusive possession — have standing to sue. Mere occupiers (children, lodgers, family members without proprietary interest) do not. Interference with a purely recreational amenity (e.g., TV reception) is not actionable as private nuisance.',
  content: `Hunter v Canary Wharf Ltd [1997] AC 655 (House of Lords).

Facts: Construction of Canary Wharf Tower interfered with television reception in nearby homes for several years; dust and noise also affected residents. Several hundred claimants — many spouses, children, or lodgers rather than proprietary owners or tenants — sued in private nuisance.

Held: (1) Loss of TV reception caused by the mere presence of a building is not actionable as private nuisance. (2) Only persons with a legal interest in the affected land have standing to sue. The action by claimants without proprietary interest failed.

Lord Goff: "...the action in private nuisance lies only at the suit of a person who has a right to the land affected... it is now well established that an action in private nuisance will only lie at the suit of a person who has a right to the land affected."

Doctrinal contribution:

(1) Standing in private nuisance is restricted to those with a proprietary interest — freehold owners; leaseholders / tenants with exclusive possession; those with a legal interest in the land (e.g., grantee of an affected easement). NOT licensees, household members without a tenancy, lodgers, employees. Reaffirmed in Dobson v Thames Water [2009] EWCA Civ 28; the proper claim for occupants without proprietary interest is in negligence (for damaged chattels), not nuisance.

(2) TV reception: the mere fact that a new building interferes with line-of-sight television-signal transmission is not, of itself, actionable. By analogy: blocking a view, blocking light (subject to easements of light), preventing reception of signals — none amount to nuisance from a building's mere existence.

Application: the proper claimant for damage to a leasehold property is the tenant in possession; a sub-tenant or licensee usually cannot sue in nuisance. For damage to property of household members without proprietary interest, the cause of action is in negligence (Donoghue framework), not nuisance. Where multiple parties have proprietary interests (joint owners, head-tenant + sub-tenant, mortgagee), each may have a claim measured by their respective interest.

Strategic point: get standing right at letter-of-claim stage. The named claimant must hold the proprietary interest in the affected land; a household member's claim for damaged chattels is a separate negligence head, pleaded in addition.`,
  tags: ['Hunter-Canary-Wharf', 'standing', 'private-nuisance', 'proprietary-interest', 'TV-reception'],
};

export default doc;

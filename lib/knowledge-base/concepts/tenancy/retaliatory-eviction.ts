import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-retaliatory-eviction',
  type: 'concept',
  category: 'tenancy',
  title: 'Retaliatory Eviction',
  jurisdiction: 'england-wales',
  inForce: true,
  inForceNote:
    'PENDING — verify against gov.uk. The s.33 Deregulation Act 2015 protection is anchored to s.21; if the Renters\' Rights Act 2024 has abolished s.21, the concept survives in different form under the new regime.',
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['retaliatory', 'retaliation', 'complained', 'after I complained', 'evict', 'eviction'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'A landlord serving a possession notice in response to a tenant\'s legitimate complaint about disrepair, where the local authority subsequently serves an improvement or emergency remedial action notice. Statutorily restricted by Deregulation Act 2015 s.33: any s.21 notice within 6 months of the local-authority notice is invalid.',
  eli5Summary:
    'If you complain to your landlord about a serious problem with the home (like damp or unsafe wiring) and they try to evict you because of your complaint, the law steps in. Once the council inspects and tells the landlord to fix the problem, the landlord cannot use the no-fault eviction route for 6 months.',
  content: `Retaliatory Eviction:

The concept addresses the imbalance of power that arises when a tenant who complains about housing conditions risks losing the home for raising the complaint. English law has a partial statutory protection in Deregulation Act 2015 s.33 (subject to verification of current status given the Renters' Rights Act 2024).

The s.33 mechanism (England, AST tenancies):

A s.21 notice is invalidated where:

(a) the tenant first complains in writing to the landlord about the condition of the dwelling or any common parts; AND

(b) the landlord either (i) fails to respond within 14 days with a description of action proposed and a reasonable timescale; (ii) gives an inadequate response; or (iii) responds by serving a s.21 notice; AND

(c) the tenant subsequently complains to the local housing authority about substantially the same matter; AND

(d) the local authority serves a "relevant notice":
   - an improvement notice under HA 2004 ss.11 or 12, or
   - a notice under HA 2004 s.40(7) of emergency remedial action.

Effect: any s.21 notice served within 6 months beginning with the day the relevant notice is served is invalid (s.33(1)). A pre-existing s.21 notice on which possession proceedings have not yet been issued is similarly invalidated by service of the relevant notice (s.33(2)).

Limits and exceptions (s.34):

- Property genuinely on the market for sale.
- Tenant's own breach has caused the disrepair complained of.
- Landlord is a private registered provider of social housing.

Practical sequence for the tenant:

1. Put the complaint in writing to the landlord (email, letter — keep proof).
2. Allow at least 14 days for response.
3. If the response is missing or inadequate, complain to the local authority's Environmental Health team.
4. Cooperate with the council inspection.
5. If a relevant notice is served, the s.33 protection bites for 6 months.

Conceptually broader than the s.33 mechanism: even outside its strict scope, deliberate retaliation may surface as evidence of bad faith (relevant to discretionary grounds under s.8 HA 1988, public-law defences against social landlords, and Equality Act 2010 reasonable-adjustment defences).`,
  tags: ['retaliatory-eviction', 'section-33', 'Deregulation-Act-2015', 'improvement-notice', 'tenant-protection'],
};

export default doc;

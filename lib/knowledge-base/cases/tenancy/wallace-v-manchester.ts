import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-wallace-v-manchester',
  type: 'case',
  category: 'tenancy',
  title: 'Wallace v Manchester City Council (1998) 30 HLR 1111 (CA)',
  jurisdiction: 'england-wales',
  citation: 'Wallace v Manchester City Council (1998) 30 HLR 1111 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1998/1166.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['damages', 'compensation', 'diminution', 'rent reduction', 'discomfort', 'disrepair'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Damages for breach of repairing obligations are assessed either by (a) the diminution in value of the tenancy to the tenant, or (b) by aggregating notional rent reduction with general damages for inconvenience and discomfort. The two methods should not be combined to avoid double recovery, and the result should reflect the true loss to the tenant.',
  content: `Wallace v Manchester City Council (1998) 30 HLR 1111 (Court of Appeal).

Facts: The tenant of a Manchester council flat suffered prolonged disrepair (damp, broken heating, structural issues). She claimed damages under s.11 LTA 1985 for the period of disrepair.

Held: Morritt LJ identified the two principal methods of assessing tenant damages for breach of the repairing covenant:

(1) Diminution in value method — the difference between the rental value of the flat in repair and the rental value in disrepair, multiplied by the period of disrepair. This is sometimes called "global award by reference to rent."

(2) Aggregate method — a sum representing notional rent abatement for the period of disrepair, plus general damages for the discomfort, inconvenience and ill-health suffered by the tenant and household.

Either method may be used; they should not be combined (to avoid double-counting). In modern practice, particularly in the County Court, judges frequently use the second (aggregate) method because it tracks the tenant's actual experience more transparently.

Quantum guidance:
- Awards typically range from a small percentage to (rarely) 100% of the rent for the period, depending on severity.
- Severe disrepair affecting habitability has supported awards approaching or exceeding the full rent.
- Aggravated and exemplary damages are available where the landlord's conduct has been high-handed or oppressive (Drane v Evangelou [1978] 1 WLR 455).
- Special damages are available for proven loss (damaged possessions, increased heating costs, medical expenses).

Application: Wallace remains the standard reference for quantification of tenant disrepair damages, applied across s.11 LTA 1985 and (since 2019/20) s.9A LTA 1985 fitness claims. It guides both negotiation and judicial assessment.`,
  tags: ['Wallace-v-Manchester', 'damages', 'diminution-in-value', 'section-11', 'quantum'],
};

export default doc;

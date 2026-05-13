import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-wallace-v-manchester',
  type: 'case',
  category: 'tenancy',
  title: 'Wallace v Manchester City Council (1998) 30 HLR 1111 (CA)',
  jurisdiction: 'barbados',
  citation: 'Wallace v Manchester City Council (1998) 30 HLR 1111 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1998/1166.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['damages', 'compensation', 'diminution', 'rent reduction', 'discomfort', 'disrepair', 'quantum', 'how much'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. Damages for breach of landlord repairing obligations may be assessed either by the diminution in value of the tenancy during the period of disrepair, or by aggregating a notional rent reduction with general damages for inconvenience and discomfort. The two methods should not be combined.',
  content: `Wallace v Manchester City Council (1998) 30 HLR 1111 (Court of Appeal).

Status: persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. This is an English Court of Appeal decision and is not binding Barbados law; it is applied as a statement of common law principle for the assessment of damages in landlord repair cases.

Facts: the tenant of a council flat suffered prolonged disrepair (damp, broken heating, structural issues). She claimed damages for breach of the implied repairing obligation for the period of disrepair.

Held: Morritt LJ identified two principal methods of assessing damages for breach of a landlord's repairing obligation:

(1) Diminution in value method — the difference between the rental value of the premises in proper repair and the rental value in the condition of disrepair, multiplied by the period during which the disrepair persisted.

(2) Aggregate method — a sum representing a notional rent abatement for the period of disrepair, plus general damages for the discomfort, inconvenience, and ill-health suffered by the tenant and members of the household.

Either method may be used; they should not be combined, as this would result in double recovery. In practice, courts frequently use the aggregate method because it more transparently reflects the tenant's actual experience.

Quantum guidance: awards typically represent a percentage of the rent for the period of disrepair, calibrated to the severity and nature of the conditions. Severe disrepair substantially affecting habitability may support higher awards. Special damages are also available for proven financial loss directly caused by the disrepair, such as damage to personal belongings, increased utility costs, and medical expenses.

Application in Barbados: the Wallace approach to damages is the relevant persuasive authority for Barbados courts assessing compensation in a landlord disrepair or habitability case. A claimant in the Magistrates' Court or High Court of Barbados may seek:

(a) general damages assessed by the diminution-in-value or aggregate method;
(b) special damages for specific proven losses;
(c) where the landlord's conduct has been oppressive or high-handed, aggravated damages may also be available.

All monetary amounts in claims before Barbados courts are expressed in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['Wallace-v-Manchester', 'damages', 'diminution-in-value', 'quantum', 'Barbados', 'persuasive-authority', 'disrepair'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-party-wall-act-1996',
  type: 'statute',
  category: 'property-damage',
  title: 'Party Wall etc. Act 1996',
  jurisdiction: 'england-wales',
  citation: 'Party Wall etc. Act 1996',
  url: 'https://www.legislation.gov.uk/ukpga/1996/40/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['party wall', 'neighbour building', 'extension next door', 'foundations', 'shared wall', 'boundary wall', 'excavation'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Governs notifiable works to party walls, party structures, boundary walls, and excavations near neighbouring buildings. Building owners must serve statutory notice; where the adjoining owner dissents or fails to respond, a "dispute" arises that is resolved by party wall surveyors who issue a binding award. The Act imposes liability for damage caused by notifiable works.',
  content: `The Party Wall etc. Act 1996 regulates works to (a) party walls and party structures (s.2), (b) new walls at or astride the line of junction (s.1), and (c) excavations within 3 m or 6 m of a neighbouring building below specified depths (s.6).

Notice requirements:
- Section 1 (line-of-junction): 1 month's notice to the adjoining owner.
- Section 2 (works to existing party walls / structures — cutting in, raising, underpinning, removing chimney breasts, inserting beams): 2 months' notice.
- Section 6 (excavations near neighbouring buildings): 1 month's notice with section drawings.

The notice must describe the proposed works, indicate start date, and offer particulars. The adjoining owner has 14 days to respond. Silence after 14 days is treated as dissent (s.5), and a dispute is deemed to arise.

Dispute resolution (s.10): where a dispute arises, parties either (a) agree on a single "agreed surveyor", or (b) each appoint their own surveyor, who together select a third surveyor as referee. The surveyor(s) issue a written "award" determining the right to do the work, the time and manner of execution, and any matter incidental to or arising out of the dispute (including security for expenses, working hours, protection of the adjoining property, and compensation).

Awards are binding subject to a 14-day right of appeal to the County Court (s.10(17)). The award is conclusive and not, save on appeal, open to challenge.

Liability and damage: s.7(2) imposes a statutory obligation on the building owner to compensate the adjoining owner for any loss or damage which may result from notifiable works. This is a strict liability for damage caused by the works — the adjoining owner does not need to prove negligence. Cost of repair, loss of rental income during reinstatement, and surveyor fees fall within compensable loss.

Failure to serve notice: working without notice is a breach actionable in trespass and in common-law nuisance/negligence; the adjoining owner can apply for an injunction restraining further works (Roadrunner Properties v Dean [2003] EWCA Civ 1816).

Surveyor fees: the building owner ordinarily pays both surveyors' reasonable fees (s.10(13)). This makes the Act the cheapest neighbour-construction-dispute pathway and the route of first resort.`,
  tags: ['party-wall', 'PWA-1996', 'notifiable-works', 'surveyor-procedure', 'compensation'],
};

export default doc;

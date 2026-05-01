import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-party-wall-surveyor-procedure',
  type: 'procedure',
  category: 'property-damage',
  title: 'Party Wall Act 1996 — Surveyor Procedure and Award',
  jurisdiction: 'england-wales',
  citation: 'Party Wall etc. Act 1996, ss.10, 7(2)',
  url: 'https://www.gov.uk/guidance/party-wall-etc-act-1996-guidance',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['party wall', 'neighbour building works', 'extension next door', 'shared wall', 'boundary wall', 'adjoining owner'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Where a building owner gives statutory notice of notifiable works and a dispute arises, s.10 requires resolution by surveyor(s) — either an "agreed surveyor" or each owner\'s appointed surveyor with a third surveyor as referee. The surveyor(s) issue a binding "award" determining how the works proceed and any compensation. The award is appealable to the County Court within 14 days; otherwise binding.',
  content: `Forum: party wall surveyors under PWA 1996, s.10.

Step 1 — Statutory notice. Building owner serves notice:
- s.1 (line-of-junction wall): 1 month's notice.
- s.2 (works to existing party walls / structures): 2 months' notice.
- s.6 (excavation within 3 m or 6 m of neighbouring building): 1 month's notice with section drawings.

Step 2 — Adjoining owner's response (within 14 days):
(a) Consent: works proceed; no surveyor needed unless damage occurs.
(b) Dissent / silence: a "dispute" is deemed to arise (s.5). Surveyor route engaged.

Step 3 — Surveyor appointment (s.10):
Option A — agreed surveyor (single neutral, both owners appoint).
Option B — each owner appoints their own; the two select a third as referee.

Step 4 — Schedule of condition. Surveyor(s) inspect and record the adjoining property's pre-works condition. This is the baseline for any damage claim.

Step 5 — Award (s.10(12)). A written award determines: the right to do the proposed work; time and manner of execution (working hours, sequence, precautions); protective measures (shoring, weather-tight covers, monitoring); security for expenses; compensation for loss or damage — s.7(2) imposes strict liability, no negligence required; surveyor fees ordinarily borne by the building owner (s.10(13)).

Step 6 — Appeal. Either party may appeal to the County Court within 14 days of service (s.10(17)). Without appeal the award is binding.

Step 7 — Damage claim. Adjoining owner notifies surveyor(s); they reconvene and determine reinstatement cost or diminution, included in or supplementing the original award.

Notes: failing to serve statutory notice exposes the building owner to common-law liability (trespass, nuisance, negligence) and potential injunction (Roadrunner Properties v Dean [2003]). The Act covers only party structures, line-of-junction walls, and excavations near neighbouring buildings — works wholly within the building owner's land beyond the excavation thresholds fall outside.`,
  tags: ['party-wall', 'PWA-1996', 'surveyor-award', 'section-10', 'neighbour-construction'],
};

export default doc;

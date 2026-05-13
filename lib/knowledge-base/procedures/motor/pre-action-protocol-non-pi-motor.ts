import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-pre-action-motor',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Pre-Litigation Steps for Motor Property Damage Claims — Barbados',
  jurisdiction: 'barbados',
  citation: 'General civil litigation practice; Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166 (Barbados)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Before issuing court proceedings for motor vehicle property damage in Barbados, the claimant typically exhausts the insurance route, then corresponds formally with the at-fault driver and their insurer setting out the claim, the evidence, and the amount sought. This pre-litigation engagement allows disputes to be resolved without court proceedings and demonstrates reasonableness if proceedings are later issued.',
  content: `Pre-litigation steps for motor accident property damage claims in Barbados

Before issuing civil court proceedings, the standard sequence is to pursue the insurance route and engage formally with the opposing party.

Step 1 — Insurance notification: notify own insurer and/or correspond directly with the at-fault driver's insurer as described in the insurer notification procedure. Provide all relevant documentation: police report, photographs, repair estimates, and a factual account.

Step 2 — Formal letter of claim: where the insurer route does not resolve the dispute, a formal letter of claim is sent to the at-fault driver and, where applicable, their insurer. The letter should set out:
- The identity of the parties and the date, time, and location of the accident.
- A factual narrative of the accident and the basis of the at-fault driver's liability.
- The losses claimed and the amounts: vehicle repair or write-off value, alternative transport costs, any other consequential losses.
- The evidence relied upon (enclosed or offered for inspection).
- A reasonable period for the recipient to respond — typically 21 days to acknowledge, with a further period for a substantive response.
- A statement that proceedings will be issued if the claim is not resolved.

Step 3 — Disclosure and evidence gathering: during pre-litigation correspondence, evidence should be preserved and organised. This includes photographs, the police report, witness contact details, repair estimates or engineer reports, and any dashcam or CCTV footage. CCTV footage in particular may be overwritten within days — prompt preservation is important.

Step 4 — Negotiation: the at-fault driver or their insurer may respond with a counter-position on liability or quantum. A negotiated settlement avoids the cost and delay of court proceedings.

Step 5 — Issuing proceedings: if pre-litigation steps do not resolve the dispute, proceedings are issued in the appropriate Barbados court. Claims up to $10,000 BBD are brought in the Magistrates' Court; claims above that threshold are brought in the High Court of Barbados. The claim form sets out the particulars described in the civil court procedure document.

Limitation: civil claims in Barbados are subject to limitation periods. The relevant period for a tort claim (negligence) should be considered early; allowing a claim to become time-barred extinguishes the right to bring proceedings.`,
  tags: ['pre-litigation', 'letter-of-claim', 'motor-accident', 'Barbados', 'Cap-166', 'evidence', 'negotiation'],
};

export default doc;

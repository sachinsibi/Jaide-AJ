import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-barbados-civil-court-motor-claim',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Civil Court Proceedings for Motor Vehicle Property Damage — Barbados',
  jurisdiction: 'barbados',
  citation: 'Magistrates\' Court Act, Cap. 116A; Supreme Court of Judicature Act, Cap. 117 (Barbados)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'In Barbados, civil motor accident claims for property damage are heard in the Magistrates\' Court (for amounts up to $10,000 BBD) or the High Court of Barbados (for amounts exceeding $10,000 BBD). Proceedings are commenced by filing a claim in the appropriate court after pre-litigation steps have been exhausted.',
  content: `Civil Court Proceedings for Motor Vehicle Property Damage Claims in Barbados

Court jurisdiction by claim value:

Magistrates' Court: has civil jurisdiction over claims where the amount in dispute does not exceed $10,000 BBD. A motor accident property damage claim for vehicle damage in that range — for example, a $8,000 BBD repair estimate — would typically be brought in the Magistrates' Court. The process is generally more accessible and less costly than High Court proceedings.

High Court of Barbados: has jurisdiction over claims exceeding $10,000 BBD, or where the nature of the claim or the relief sought requires it. Vehicle damage claims in higher ranges, or claims combining property damage with other heads of loss, may fall in the High Court.

Pre-litigation steps: before commencing proceedings, the claimant typically corresponds with the at-fault driver and their insurer, sets out the basis of the claim and the losses claimed, provides supporting evidence (photographs, repair estimates, police report), and allows a reasonable period for response and settlement. Failure to engage in pre-litigation correspondence may be taken into account by the court.

Particulars of claim: the statement of claim sets out the parties, the date and circumstances of the accident, the basis of the defendant's liability (negligence — duty, breach, causation, damage), the heads of loss claimed (vehicle repair or write-off value, alternative transport costs, any other consequential losses), and the amount sought.

Contributory negligence: where the defendant alleges that the claimant's own driving contributed to the accident, the court apportions liability and reduces the award accordingly.

Evidence: key evidence includes the police report, photographs of the scene and vehicle damage, witness statements, repair estimates or engineer's assessments, and any dashcam or CCTV footage.

Enforcement: a judgment of the Magistrates' Court or High Court is enforceable through the court's enforcement mechanisms. Where the defendant has insurance, the judgment may be satisfied by the insurer under Cap. 166.`,
  tags: ['Magistrates-Court', 'High-Court', 'Barbados', 'civil-claim', 'motor-accident', 'property-damage', 'Cap-116A'],
};

export default doc;

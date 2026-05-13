import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-rta-road-traffic-regulations',
  type: 'statute',
  category: 'motor-accident',
  title: 'Road Traffic Act, Cap. 295 — Road Traffic Regulations as Evidence of the Standard of Care',
  jurisdiction: 'barbados',
  citation: 'Road Traffic Act, Cap. 295 (Barbados); Road Traffic Regulations (Barbados)',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['traffic rules', 'red light', 'speeding', 'overtaking', 'lane', 'road rules', 'traffic law', 'road safety'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Breach of Barbados road traffic rules and regulations is relevant evidence in establishing whether a driver fell below the standard of care required by the law of negligence. A breach does not automatically mean the driver is liable — civil liability depends on proving duty, breach, causation, and damage — but it is powerful evidence of negligence.',
  content: `Road Traffic Act, Cap. 295 and the standard of care in Barbados motor accident claims

The Road Traffic Act, Cap. 295, together with Regulations made under it, governs the conduct of drivers on Barbados roads. These include requirements relating to speed, traffic signals, road markings, lane discipline, overtaking, and other aspects of road use.

Role in civil claims: breach of a statutory road traffic rule does not automatically give rise to civil liability. However, it constitutes significant evidence in the context of a negligence claim. A driver who contravenes an applicable traffic rule is likely to be found to have fallen below the standard of the reasonable driver, which is the civil standard of care.

Standard of care in motor negligence: the civil law standard for drivers in Barbados, as in other Commonwealth jurisdictions applying English common law principles, is that of the reasonably competent driver. The court considers how a reasonable driver would have conducted themselves in the same circumstances and whether the defendant's conduct fell short of that standard.

Common traffic rule breaches relevant to civil claims:
- Failing to stop at a red traffic signal
- Failing to give way at a junction or roundabout
- Exceeding the applicable speed limit
- Using a mobile phone while driving
- Failing to maintain a safe following distance
- Overtaking where prohibited or where it was unsafe to do so

Evidence of breach: where a traffic rule breach is in issue, relevant evidence includes the police report, witness accounts, photographic evidence, CCTV footage, and dashcam recordings. Where a driver has been charged with or convicted of a traffic offence arising from the same incident, this may be admissible and highly probative in the civil proceedings.`,
  tags: ['Road-Traffic-Act', 'Cap-295', 'traffic-regulations', 'standard-of-care', 'negligence', 'Barbados'],
};

export default doc;

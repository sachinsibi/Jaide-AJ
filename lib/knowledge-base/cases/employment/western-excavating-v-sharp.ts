import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-western-excavating-v-sharp',
  type: 'case',
  category: 'employment',
  title: 'Western Excavating (ECC) Ltd v Sharp [1978] QB 761 (CA)',
  jurisdiction: 'england-wales',
  citation: 'Western Excavating (ECC) Ltd v Sharp [1978] QB 761 (CA)',
  url: 'https://www.bailii.org/ew/cases/EWCA/Civ/1977/2.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['constructive dismissal', 'forced to resign', 'no choice but to leave', 'last straw', 'breach of contract', 'breach of trust', 'forced out'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Establishes that constructive dismissal under what is now s.95(1)(c) ERA 1996 requires a contractual breach by the employer, not mere unreasonable conduct. The employer must commit a repudiatory breach (going to the root of the contract); the employee must resign in response; and the resignation must occur without unreasonable delay (no affirmation).',
  content: `Western Excavating (ECC) Ltd v Sharp [1978] QB 761 (Court of Appeal).

Facts: Mr Sharp was suspended without pay after taking time off work. He requested an advance against accrued holiday pay; the employer refused. He resigned and claimed constructive dismissal. The tribunal applied a "reasonable conduct" test (was the employer's behaviour such that the employee could reasonably resign?). The Court of Appeal rejected that approach and substituted a contractual test.

Held (CA): the test for constructive dismissal is contractual. Lord Denning MR:

"If the employer is guilty of conduct which is a significant breach going to the root of the contract of employment, or which shows that the employer no longer intends to be bound by one or more of the essential terms of the contract, then the employee is entitled to treat himself as discharged from any further performance. If he does so, then he terminates the contract by reason of the employer's conduct. He is constructively dismissed."

The four elements (the Western Excavating test):

(1) Repudiatory breach. The employer must commit a breach of contract going to the root of the contract — a fundamental breach of an express or implied term.

(2) Material cause of resignation. The employee must resign at least in part in response to the breach. Mixed motives do not defeat the claim if the breach was a real cause.

(3) No affirmation / waiver. The employee must resign within a reasonable time of the breach (or last straw); delay can amount to affirmation, treating the contract as continuing.

(4) Resignation. The employee must in fact resign — not merely complain.

Modern application:

Common breaches: implied term of mutual trust and confidence (Malik v BCCI [1998] AC 20 — unilateral changes, humiliation, failure to investigate grievances, bullying, setting up to fail); duty to provide a safe system of work; duty to pay agreed wages.

The "last straw" doctrine (Omilaju v Waltham Forest LBC [2004] EWCA Civ 1493): a series of acts may cumulatively breach trust and confidence; the final act must contribute — even slightly — to the breach; an entirely innocuous act cannot be the last straw.

Effect: a constructive dismissal is a "dismissal" under s.95(1)(c) ERA 1996, supporting unfair-dismissal, redundancy, and wrongful-dismissal claims. Will normally also be unfair.`,
  tags: ['Western-Excavating', 'constructive-dismissal', 'repudiatory-breach', 'mutual-trust-and-confidence', 'last-straw-doctrine'],
};

export default doc;

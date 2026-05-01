import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-limitation-act-1980-contract',
  type: 'statute',
  category: 'contract-service',
  title: 'Limitation Act 1980, ss.5 and 8 — Limitation periods for contract claims',
  jurisdiction: 'england-wales',
  citation: 'Limitation Act 1980, ss.5 and 8',
  url: 'https://www.legislation.gov.uk/ukpga/1980/58',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['contract-service'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'A claim for breach of a simple contract must be brought within 6 years of the date of breach (s.5). For a contract under deed, the period is 12 years (s.8). The clock runs from breach (not discovery), subject to fraud, deliberate concealment, and mistake exceptions (s.32).',
  content: `Section 5 Limitation Act 1980 sets a six-year limitation period for actions founded on a simple contract:

"An action founded on simple contract shall not be brought after the expiration of six years from the date on which the cause of action accrued."

Section 8 sets a longer twelve-year period for actions on a deed (a contract under seal). To qualify, the document must be made as a deed (signed, witnessed, and delivered as a deed under the formalities of s.1 Law of Property (Miscellaneous Provisions) Act 1989).

When does time run? The cause of action accrues at the date of breach itself, not the date of loss or discovery. This contrasts with tort negligence (clock from damage).

Examples: defective goods delivered 1 May 2020 — limitation expires 1 May 2026. Service performed negligently — six years from the last act of breach. Anticipatory repudiation — six years from acceptance.

Exceptions extending time (s.32):
(a) Fraud — period runs from discovery (or when discoverable with reasonable diligence).
(b) Deliberate concealment — period runs from discovery of the concealment.
(c) Mistake — period runs from discovery of the mistake.

Acknowledgment / part payment (s.29): time restarts when the debtor acknowledges the debt or makes a part payment.

Personal injury arising from breach of contract has a shorter 3-year period (s.11) — relevant for holiday/treatment contracts that cause injury.

Practical implication: identify the date of breach and check whether six (or twelve) years have expired. After expiry the defence is absolute, unless an exception applies.`,
  tags: ['Limitation-Act-1980', 'six-year-limit', 'twelve-year-limit', 'deed', 'fraud', 'concealment'],
};

export default doc;

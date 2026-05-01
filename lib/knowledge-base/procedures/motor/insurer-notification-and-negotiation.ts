import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'procedure-insurer-notification-and-negotiation',
  type: 'procedure',
  category: 'motor-accident',
  title: 'Insurer Notification and Negotiation Procedure',
  jurisdiction: 'england-wales',
  citation: 'Insurance policy condition; FCA Insurance: Conduct of Business sourcebook (ICOBS)',
  url: 'https://www.fca.org.uk/firms/insurance-business-conduct',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  pinFor: ['motor-accident'],
  tabs: ['overview', 'legalBreakdown'],
  factSummary:
    'Practical sequence: notify own insurer within policy timeframe (typically 7–14 days, often "as soon as reasonably practicable"); cooperate with insurer\'s claims handler; either let own insurer pursue subrogation or claim direct against the at-fault insurer; consider FOS complaint if insurer mishandles the claim.',
  content: `Step 1 — Notify own insurer. Policies usually require notification "as soon as reasonably practicable" or within a window (commonly 7 days). Late notification may breach a policy condition and void cover. Provide: date/time/location; vehicles and drivers; photos and witness contacts; a factual account (without admitting liability — most policies prohibit admission); police reference if reported under RTA 1988 s.170.

Step 2 — Decide who claims:
(a) Through own insurer (comprehensive). Insurer pays repair/write-off (subject to excess) and pursues subrogation against the at-fault insurer; claimant recovers the excess separately.
(b) Direct against at-fault insurer (third-party-only policy, or to protect no-claims discount). Claimant or solicitor corresponds directly.

Step 3 — Liability investigation. Insurer appoints a claims handler; an engineer inspects/values the vehicle, driving the repair/write-off decision and pre-accident value (PAV).

Step 4 — Hire / loss-of-use. Where liability is admitted or strongly arguable, claimants may take a "credit hire" replacement on basis that costs will be recovered from the at-fault insurer. Credit-hire rates are scrutinised: reasonable need (Lagden v O'Connor [2003] UKHL 64) and reasonable rate (basic hire vs credit hire — Stevens v Equity Syndicate Management [2015] EWCA Civ 93; GTA framework).

Step 5 — Settlement. Watch for full-and-final clauses (extinguish later-emerging losses); use Part 36 offers strategically; reserve the right to pursue excess separately if settling via own insurer.

Step 6 — Escalation if insurer mishandles: internal complaint (8-week final response); Financial Ombudsman Service within 6 months of final response (current cap on fos.org.uk); GTA / ABI mechanisms for credit hire disputes between insurers — claimant uses litigation.

Step 7 — Move to letter of claim under the PD Pre-Action Conduct, then County Court issue.

Common pitfalls: late notification; scene admissions; accepting low write-off valuations; accepting first hire offer without GTA/basic-hire comparators; settling without sufficient evidence.`,
  tags: ['insurer-notification', 'subrogation', 'credit-hire', 'pre-accident-value', 'FOS', 'claims-handling'],
};

export default doc;

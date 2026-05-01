import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-dgft-v-first-national-bank',
  type: 'case',
  category: 'contract-service',
  title: 'Director General of Fair Trading v First National Bank [2001] UKHL 52',
  jurisdiction: 'england-wales',
  citation: 'Director General of Fair Trading v First National Bank plc [2001] UKHL 52, [2002] 1 AC 481',
  url: 'https://www.bailii.org/uk/cases/UKHL/2001/52.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['unfair term', 'small print', 'penalty', 'cancellation fee', 'standard terms', 'good faith', 'imbalance'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Leading authority on the unfair-terms test. A term is unfair if, contrary to the requirement of good faith, it causes a significant imbalance in the parties\' rights and obligations to the consumer\'s detriment. "Good faith" is an objective standard of fair and open dealing; "significant imbalance" requires a substantive disadvantage to the consumer.',
  content: `Director General of Fair Trading v First National Bank [2001] UKHL 52 (House of Lords).

Facts: First National Bank's standard-form consumer loan agreement contained a term entitling the bank to continue charging contractual interest on overdue sums even after a court judgment had been obtained. Without the term, the only interest payable post-judgment would have been the statutory rate (then 8%). The Director General challenged the term as unfair under the Unfair Terms in Consumer Contracts Regulations 1999.

Held (HL): the term was not unfair. The bank had a legitimate interest in continuing to charge contractual interest on a long-running debt, the rate was not concealed, and the burden of paying interest reflected the substantive bargain. The transparency and substantive fairness of the term, considered together, made it not unfair.

Test for unfairness (now reproduced in CRA 2015 s.62):

Unfair = "contrary to the requirement of good faith, [the term] causes a significant imbalance in the parties' rights and obligations arising under the contract, to the detriment of the consumer."

Lord Bingham — good faith: looks to "good standards of commercial morality and practice"; requires "fair and open dealing." Openness — terms expressed fully, clearly, legibly, no concealed pitfalls. Fair dealing — supplier must not exploit consumer's necessity, indigence, lack of experience, unfamiliarity, or weak bargaining position.

Lord Steyn — significant imbalance: a term so weighted toward the supplier that it tilts the parties' rights significantly. The court compares the position with vs without the term.

Modern application (CRA 2015 ss.62 and 64):

- Substantive plus procedural fairness — court weighs both content and manner of incorporation (transparency, prominence, negotiation).
- Schedule 2 grey list (s.63) — terms in the indicative list are red flags, not automatically unfair.
- Main-subject-matter exception (s.64) — fairness test excluded for the main subject matter or price-vs-value, provided transparent and prominent.
- Effect — unfair term not binding (s.62(1)); rest of contract continues if practicable (s.67).`,
  tags: ['DGFT-v-First-National-Bank', 'unfair-terms', 'good-faith', 'significant-imbalance', 'CRA-section-62'],
};

export default doc;

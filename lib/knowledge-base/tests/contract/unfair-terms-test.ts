import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-unfair-terms-test',
  type: 'test',
  category: 'contract-service',
  title: 'Unfair Contract Terms Test — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['unfair term', 'small print', 'exclusion clause', 'penalty', 'cancellation fee', 'standard terms', 'good faith', 'imbalance'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The enforceability of unfair contract terms in Barbados is assessed under common law doctrines on exclusion and limitation clauses and any relevant Barbados statutory provisions governing unfair contract terms (consult laws.barbados.gov.bb). The analytical framework — whether a term causes a significant imbalance contrary to good faith — reflects principles of general common law applicable in Commonwealth jurisdictions including Barbados.',
  content: `Unfair Contract Terms Test — Barbados.

This test is applied when assessing whether an exclusion clause, limitation clause, penalty clause, or other one-sided term in a Barbados contract is enforceable. The applicable framework draws on common law doctrines and any Barbados statutory provisions governing unfair contract terms. Consult laws.barbados.gov.bb for the current legislative position.

Stage 1 — Incorporation. The term must have been validly incorporated into the contract before it can be enforced. A term in standard-form conditions, small print, or a separate document is only incorporated if it was brought to the other party's attention before or at the time of contracting. An unusual or onerous term requires a higher degree of notice before it will be treated as having been agreed.

Stage 2 — Construction. If incorporated, the term is construed narrowly against the party seeking to rely on it (contra proferentem). Ambiguous language in an exclusion or limitation clause is resolved against the drafter. A clause that purports to exclude liability for the party's own negligence must use clear and express language to achieve that effect.

Stage 3 — Statutory controls. Barbados law governing unfair contract terms may void or render unenforceable certain exclusion or limitation clauses, particularly in consumer contracts. The relevant provisions should be confirmed at laws.barbados.gov.bb. Terms that exclude or restrict liability under the Sale of Goods Act, Cap. 318 may be subject to specific statutory controls.

Stage 4 — Common law fairness principles. Under the common law as applied in Barbados and other Commonwealth jurisdictions, courts may decline to enforce a term that is unconscionable or that operates in a manner grossly contrary to the reasonable expectations of the parties. The general framework of good faith and significant imbalance — articulated in Director General of Fair Trading v First National Bank [2001] UKHL 52 (persuasive common law authority) — provides the following analytical structure:

(a) Good faith. The term must not have been introduced in a manner contrary to the requirement of fair and open dealing. Relevant considerations: whether the term was expressed clearly and prominently; whether the other party had a real opportunity to understand its effect; and whether the term exploits the other party's weaker bargaining position, limited experience, or lack of legal knowledge.

(b) Significant imbalance. The term must not create a material tilt in the parties' rights and obligations in favour of the drafter and to the detriment of the other party. The comparison is between the position the other party holds under the contract and the position they would hold under the general law without the term.

(c) Detriment. The imbalance must work against the party who did not draft the term.

Stage 5 — Effect of an unenforceable term. A term found to be unenforceable under Barbados statute or common law is treated as void or of no effect. The remainder of the contract continues in force to the extent practicable without the offending term.

Examples of terms likely to attract scrutiny.
- Blanket exclusions of liability for defects in goods or services.
- Disproportionate cancellation fees that bear no relation to actual loss.
- Unilateral variation clauses allowing the trader to change material terms without notice.
- Terms restricting the other party's right to bring a civil claim or seek redress.
- Automatic renewal terms without adequate notice provisions.

Special note. Regardless of any term in a contract, the implied conditions under the Sale of Goods Act, Cap. 318 as to title, description, quality, and fitness for purpose may not be excluded or restricted in a manner inconsistent with the applicable Barbados statutory provisions governing consumer protection.`,
  tags: ['unfair-terms-test', 'good-faith', 'significant-imbalance', 'contra-proferentem', 'incorporation', 'construction', 'barbados'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-constructive-dismissal',
  type: 'concept',
  category: 'employment',
  title: 'Constructive Dismissal',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['constructive dismissal', 'forced to resign', 'no choice but to leave', 'last straw', 'breach of trust', 'forced out', 'resigned because'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Under Barbados employment law, a resignation may constitute a dismissal — known as constructive dismissal — where the employer committed a fundamental breach of the employment contract and the employee resigned in response to that breach without unreasonable delay. The test is contractual and derives from common law applied in Barbados: the employer must have repudiated the contract, not merely acted unreasonably. Cap. 23 (Employment Rights Act, Barbados) and common law together govern the right.',
  eli5Summary:
    'In Barbados, if an employer treats an employee so seriously badly — by doing something that fundamentally breaks the employment contract — and the employee has no real choice but to resign, the law can treat that resignation as a dismissal. This is called constructive dismissal. The employer must have done something that fundamentally breaks the contract, not simply acted unfairly or unreasonably. The employee must also resign promptly — waiting too long without complaining can mean the right is lost.',
  content: `Constructive Dismissal under Barbados Employment Law:

Constructive dismissal arises where an employee resigns in circumstances that count as a dismissal in law — because the employer committed a repudiatory breach of contract that entitled the employee to treat the employment relationship as terminated.

The legal basis in Barbados is a combination of Cap. 23 (Employment Rights Act, Barbados) and common law principles applied in Barbados civil courts. The leading persuasive common law authority on the contractual test is Western Excavating (ECC) Ltd v Sharp [1978] QB 761 (Court of Appeal, England and Wales), which is applied as persuasive authority in Barbados as a Commonwealth jurisdiction.

The test for constructive dismissal:

(1) Repudiatory breach by the employer. The employer must have committed a fundamental breach of contract — a breach going to the root of the employment relationship. A breach of an express term (such as unilaterally reducing pay or removing a key contractual benefit without authority) or a breach of the implied term of mutual trust and confidence will satisfy this element. Mere unreasonable or unkind conduct by the employer, without an underlying contractual breach, is not sufficient.

(2) Causation. The employee must resign at least in part because of the employer's breach. Mixed motives do not defeat the claim if the breach was a genuine cause of the decision to resign.

(3) No affirmation. The employee must not delay unreasonably after becoming aware of the breach before resigning. Continuing to work for an extended period without objecting to the breach may amount to affirmation of the contract — treating the contract as continuing and losing the right to rely on the breach as a basis for resignation. Raising a formal grievance and allowing the employer a reasonable opportunity to remedy the breach is generally consistent with preserving the right; it does not constitute affirmation.

(4) Resignation. The employee must in fact resign — a threat to resign or a complaint without resignation is not sufficient.

Common contractual breaches capable of supporting constructive dismissal in Barbados:

- Unilateral reduction in pay or removal of a contractual benefit without the employee's consent and without contractual authority.
- Fundamental and unilateral change to the nature of the role, working hours, or place of work.
- Sustained bullying, humiliation, or harassment by the employer or management — breaching the implied term of mutual trust and confidence.
- Failure to investigate a serious grievance raised by the employee — particularly as part of a wider course of conduct.
- Demotion without contractual authority or fair process.
- Failure to provide a safe working environment where the employer is aware of a serious and persistent risk.
- Setting unrealistic targets or performance standards with the purpose of engineering a dismissal.

The "last straw" doctrine:

A series of acts by the employer, each individually insufficient to amount to a repudiatory breach, may cumulatively amount to a breach of the implied term of mutual trust and confidence. The final act in the series — the "last straw" — need only be a further contribution to the cumulative breach; it need not itself be serious. However, a wholly innocuous act cannot revive an otherwise concluded or affirmed position.

Effect:

Where constructive dismissal is established, the resignation counts as a dismissal under Barbados employment law. The dismissal will generally also be unfair. Claims may be pursued through the Labour Department (Chief Labour Officer) for conciliation or through the civil courts:
- Magistrates' Court: claims up to $10,000 BBD (approximately $5,000 USD at the 2:1 BBD/USD peg).
- High Court of Barbados: claims above $10,000 BBD.`,
  tags: ['constructive-dismissal', 'Western-Excavating', 'mutual-trust-and-confidence', 'last-straw', 'repudiatory-breach', 'Barbados', 'Cap-23'],
};

export default doc;

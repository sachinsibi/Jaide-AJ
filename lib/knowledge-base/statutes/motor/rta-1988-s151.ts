import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-mvit-cap-166-insurer-obligations',
  type: 'statute',
  category: 'motor-accident',
  title: 'Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166 — Insurer\'s Obligations to Third Parties',
  jurisdiction: 'barbados',
  citation: 'Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166; Insurance Act, Cap. 310',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['insurer dispute', 'insurer refused', 'policy void', 'denied claim', 'third party rights', 'judgment'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Cap. 166 requires that a third-party motor insurer satisfy judgments obtained against an insured in respect of liabilities covered by compulsory insurance, subject to the terms of the Act. Disputes about insurer conduct may be escalated to the Financial Services Commission of Barbados, which regulates the insurance sector under the Insurance Act, Cap. 310, though the Commission\'s role is supervisory rather than adjudicative.',
  content: `Under the Motor Vehicles Insurance (Third-Party Risks) Act, Cap. 166, insurers are subject to obligations to third parties that limit the extent to which policy defences can be used to defeat third-party claims.

Insurer's obligation to third parties: where a liability falls within the scope of compulsory cover under Cap. 166, an insurer that has issued a compliant policy is generally required to satisfy a judgment obtained against the insured, even if the insurer has grounds to dispute the policy with its own insured.

This principle reflects the purpose of Cap. 166: to ensure that third-party victims are not left without recourse because of disputes internal to the insurer-insured relationship.

Financial Services Commission: the insurance sector in Barbados is regulated by the Financial Services Commission under the Insurance Act, Cap. 310. Where an insurer disputes liability or is alleged to have acted improperly, a complaint may be directed to the FSC. The FSC's functions are primarily supervisory and regulatory — it can investigate and take regulatory action against insurers — but it does not operate as an independent adjudicative complaints body in the way that a financial ombudsman service would. Regulatory complaints and civil claims are separate routes.

Insurer denial of liability: where an insurer denies a third-party claim on the basis that the accident was the fault of the claimant, or on the basis of contributory negligence, those disputes are determined by the civil courts applying the law of negligence and contributory negligence. The insurer stands in the position of the at-fault driver for the purpose of the civil dispute.

Where there is no insurance at all: where the at-fault driver is uninsured, Cap. 166 cannot bind an insurer that has no policy. In that situation, the claim is brought directly against the at-fault driver as an individual in the civil courts.`,
  tags: ['Cap-166', 'insurer-obligations', 'third-party-rights', 'FSC', 'Insurance-Act-Cap-310', 'Barbados'],
};

export default doc;

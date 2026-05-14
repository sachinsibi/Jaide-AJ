import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-habitability-disrepair-test',
  type: 'test',
  category: 'tenancy',
  title: 'Habitability and Disrepair Test — Barbados',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['disrepair', 'repair', 'broken', 'leak', 'leaking', 'damp', 'heating', 'water', 'structure', 'habitability', 'unfit'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Four-stage test for landlord liability in a Barbados residential tenancy disrepair or habitability claim: (1) does the defect fall within the scope of the landlord\'s implied obligations under Cap. 230 and common law; (2) does the condition constitute disrepair or a habitability defect; (3) did the landlord have actual or constructive notice; (4) has reasonable time elapsed since notice for the repair to be carried out?',
  content: `Habitability and Disrepair Test — Barbados Residential Tenancies:

This test applies to civil claims brought in the Magistrates' Court (Cap. 116A) or the High Court of Barbados (Cap. 117) for breach of a landlord's repairing and habitability obligations under the Landlord and Tenant Act, Cap. 230 and Barbados common law.

Stage 1 — Scope of the landlord's obligation. Does the defect or condition fall within the scope of what the landlord is obliged to maintain under Cap. 230 and common law? The implied obligations generally extend to:
(a) the structure and exterior of the premises (roof, walls, floors, foundations, external drainage);
(b) installations for the supply of water and sanitation (pipework, basins, sinks, toilets);
(c) electrical installations forming part of the premises;
(d) any heating or hot-water installation forming part of the demised premises.
Matters outside scope — such as the tenant's own furnishings, fittings supplied by the tenant, or decorative items — are generally not within the landlord's implied obligation.

Stage 2 — Disrepair or habitability defect. Is the condition one of:
(a) Disrepair: damage to or deterioration of something that was previously in a sound state (following the persuasive common law principle in Quick v Taff-Ely BC [1986] QB 809). Pure inherent design defects, with no element of physical deterioration, may fall outside a strict repairing obligation; or
(b) A habitability defect: even where disrepair in the strict sense is absent, conditions that render the premises unfit for human habitation — such as health-threatening damp, defective sanitation, dangerous installations, or vermin infestation — may give rise to a habitability claim under Barbados common law and Cap. 230. The habitability obligation is broader than a strict disrepair obligation and may capture design-defect conditions that cause harm to health or safety.

Stage 3 — Notice. Did the landlord have actual or constructive notice of the defect or condition (following the persuasive common law principle in O'Brien v Robinson [1973] AC 912)? The landlord's obligation to remedy crystallises on notice:
- Actual notice: the tenant communicated the defect to the landlord directly, preferably in writing with proof of receipt.
- Constructive notice: the circumstances were such that a reasonable landlord would have been aware of the problem (for example, a defect visible on inspection, or one that the landlord's contractor would have encountered during other works on the premises).
There is no general implied obligation on the landlord to inspect the premises in search of latent defects.

Stage 4 — Reasonable time to remedy. After notice, has a reasonable time elapsed for the landlord to inspect and carry out the repair? What is reasonable depends on the nature, severity, and urgency of the defect:
- Emergency conditions — no water supply, sewage ingress, structural danger, dangerous electrical installation — require prompt response, potentially within hours or days.
- Serious but non-emergency conditions — persistent damp, failing heating — require response within a matter of weeks.
- Minor defects — cosmetic damage, minor dripping — may allow a longer period.

A claim succeeds if all four stages are satisfied. Failure on any one stage may defeat the claim on the primary basis, though a claim framed in habitability (Stage 2(b)) may survive where a strict disrepair claim (Stage 2(a)) fails.

Currency note: all monetary thresholds in Barbados Dollars (BBD). The BBD is pegged at 2:1 to the United States Dollar (USD).`,
  tags: ['disrepair-test', 'habitability-test', 'four-stage-test', 'notice', 'reasonable-time', 'Cap-230', 'Barbados'],
};

export default doc;

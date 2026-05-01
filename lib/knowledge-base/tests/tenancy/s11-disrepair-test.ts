import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-s11-disrepair-test',
  type: 'test',
  category: 'tenancy',
  title: 'Section 11 Disrepair Test',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['disrepair', 'repair', 'section 11', 's.11', 'broken', 'leak', 'damp', 'heating', 'water', 'structure'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Four-stage test for liability under s.11 LTA 1985: (1) does the defect fall within "structure and exterior" or "installations"; (2) is it disrepair (deterioration from a sound state) rather than inherent design; (3) did the landlord have actual or constructive notice; (4) has reasonable time elapsed for repair?',
  content: `The Section 11 Disrepair Test (applied by County Court judges in tenant claims under the Landlord and Tenant Act 1985, s.11):

Stage 1 — Scope of the obligation. Does the defect fall within:
(a) the "structure and exterior" of the dwelling-house (s.11(1)(a)), or
(b) "installations for the supply of water, gas, electricity and for sanitation" (s.11(1)(b)), or
(c) "installations for space heating and water heating" (s.11(1)(c))?
Items outside scope (e.g., decorative finishes, the tenant's own furnishings, fixtures and appliances supplied by the tenant) are not within s.11.

Stage 2 — Disrepair gateway. Is there disrepair, i.e., damage to or deterioration of something that was previously in a sound state? Pure inherent design defects, with no element of physical deterioration, fall outside s.11 (Quick v Taff-Ely BC [1986] QB 809). Where damp or condensation arises partly from disrepair (e.g., failed plaster, rotted timber, defective rendering) and partly from design, the disrepair element is actionable; the design element is not. Note: claims that fail this gateway may still proceed under s.9A LTA 1985 (Fitness for Habitation Act 2018), which has no disrepair gateway.

Stage 3 — Notice. Did the landlord have actual or constructive notice of the defect (O'Brien v Robinson [1973] AC 912)? Constructive notice arises from circumstances from which a reasonable landlord would infer the defect. The duty crystallises on notice; there is no general duty to inspect.

Stage 4 — Reasonable time. After notice, has a reasonable time elapsed for the landlord to inspect and repair? "Reasonable" depends on severity, urgency, and accessibility. Emergency repairs (no heating in winter, sewage backup, dangerous electrics) demand same-day or next-day response; lesser defects may attract weeks.

Application: a claim succeeds only if all four stages are satisfied. Failure on any stage defeats the s.11 claim, though parallel claims under s.9A LTA 1985 (fitness), s.4 Defective Premises Act 1972, contract, or nuisance may still survive.`,
  tags: ['section-11-test', 'disrepair', 'four-stage-test', 'notice', 'reasonable-time'],
};

export default doc;

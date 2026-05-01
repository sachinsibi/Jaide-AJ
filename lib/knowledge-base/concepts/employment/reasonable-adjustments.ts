import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'concept-reasonable-adjustments',
  type: 'concept',
  category: 'employment',
  title: 'Reasonable Adjustments (disability, Equality Act 2010 s.20)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['reasonable adjustments', 'disability', 'disabled', 'long-term condition', 'mental health', 'chronic illness', 'auxiliary aid', 'workplace adjustment', 'access to work'],
  tabs: ['legalBreakdown', 'eli5'],
  factSummary:
    'Section 20 EA 2010 imposes a duty on employers to make reasonable adjustments where a provision, criterion, or practice (PCP), a physical feature, or the absence of an auxiliary aid puts a disabled employee at a substantial disadvantage compared to non-disabled employees. The duty is anticipatory in some contexts and reactive in employment; failure to comply is itself a form of disability discrimination (s.21).',
  eli5Summary:
    'If you have a disability — including long-term mental-health conditions, chronic illness, or a physical impairment — your employer has a legal duty to make reasonable changes to remove barriers at work. This might mean changing your duties, your equipment, your workplace, or your hours. The cost and disruption have to be reasonable for the employer\'s size, but the duty is real and failing it is itself unlawful disability discrimination.',
  content: `Reasonable Adjustments:

Section 20 EA 2010 imposes the duty in three forms — where:

(a) a PCP (provision, criterion, or practice) of the employer puts a disabled person at a substantial disadvantage compared to non-disabled persons;

(b) a physical feature of the workplace puts a disabled person at a substantial disadvantage; or

(c) a disabled person would, but for the provision of an auxiliary aid, be put at a substantial disadvantage.

In each case, the employer must take such steps as it is reasonable to take to avoid the disadvantage (limb (a)/(b)) or to provide the auxiliary aid (limb (c)).

Substantial disadvantage means more than minor or trivial (s.212(1) EA 2010).

What is "reasonable"? The Equality and Human Rights Commission's Employment Statutory Code of Practice provides guidance on factors:

- The effectiveness of the adjustment in removing the disadvantage.
- The practicability of the step.
- The financial and other costs to the employer, including disruption.
- The size and resources of the employer.
- The availability of financial or other assistance (e.g., Access to Work funding).

Common adjustments:

- Modified duties or job redesign.
- Reduced or flexible hours; phased return after sickness absence.
- Adjusted attendance triggers under absence-management policies.
- Reallocating non-essential duties.
- Remote / hybrid working.
- Modified equipment (specialist chairs, screen readers, voice-recognition software).
- Workplace adjustments (ramps, accessible toilets, signage).
- Adjusting recruitment processes — extended time, alternative format, sign language interpreter.
- Adjusting performance / capability assessments.
- Counselling / mentoring / mental-health support.
- Phased return after a mental-health crisis.

Process expectations:

1. Consider Occupational Health input — the employer should obtain medical evidence on disability status and the impact at work.
2. Consult the employee — the employee is best placed to identify barriers and effective adjustments.
3. Document the adjustments considered, agreed, and rejected with reasons.
4. Review periodically — what is reasonable changes over time.

Failure to make reasonable adjustments is itself disability discrimination (s.21 EA 2010), actionable in the Employment Tribunal. Compensation includes Vento bands for injury to feelings, financial loss, and (where relevant) lost-opportunity damages. There is no qualifying period and no compensation cap.

Many adjustments cost little or nothing — the duty does not require employers to "improve" the role, only to remove disadvantage.`,
  tags: ['reasonable-adjustments', 'EA-2010-s20', 'disability', 'PCP', 'auxiliary-aid', 'substantial-disadvantage'],
};

export default doc;

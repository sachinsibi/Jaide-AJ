import type { KnowledgeDocument } from './schema';

import era1996s94 from './statutes/employment/era-1996-s94-unfair-dismissal';
import era1996s98 from './statutes/employment/era-1996-s98-fair-reasons';
import era1996Redundancy from './statutes/employment/era-1996-redundancy';
import equalityAct2010 from './statutes/employment/equality-act-2010';
import nmwaAndWtr from './statutes/employment/nmwa-and-wtr';

import bhsVBurchell from './cases/employment/bhs-v-burchell';
import icelandFrozenFoods from './cases/employment/iceland-frozen-foods';
import polkeyVDayton from './cases/employment/polkey-v-dayton';
import westernExcavating from './cases/employment/western-excavating-v-sharp';
import williamsVCompairMaxam from './cases/employment/williams-v-compair-maxam';
import ventoVChiefConstable from './cases/employment/vento-v-chief-constable';

import unfairDismissalTest from './tests/employment/unfair-dismissal-test';
import constructiveDismissalTest from './tests/employment/constructive-dismissal-test';
import discriminationTest from './tests/employment/discrimination-test';
import redundancyFairnessTest from './tests/employment/redundancy-fairness-test';

import acasEarlyConciliation from './procedures/employment/acas-early-conciliation';
import internalGrievanceAndDisciplinary from './procedures/employment/internal-grievance-and-disciplinary';
import employmentTribunalProcedure from './procedures/employment/employment-tribunal-procedure';
import settlementAgreements from './procedures/employment/settlement-agreements';

import constructiveDismissalConcept from './concepts/employment/constructive-dismissal';
import reasonableAdjustments from './concepts/employment/reasonable-adjustments';
import whistleblowing from './concepts/employment/whistleblowing';

export const employmentDocuments: KnowledgeDocument[] = [
  era1996s94,
  era1996s98,
  era1996Redundancy,
  equalityAct2010,
  nmwaAndWtr,

  bhsVBurchell,
  icelandFrozenFoods,
  polkeyVDayton,
  westernExcavating,
  williamsVCompairMaxam,
  ventoVChiefConstable,

  unfairDismissalTest,
  constructiveDismissalTest,
  discriminationTest,
  redundancyFairnessTest,

  acasEarlyConciliation,
  internalGrievanceAndDisciplinary,
  employmentTribunalProcedure,
  settlementAgreements,

  constructiveDismissalConcept,
  reasonableAdjustments,
  whistleblowing,
];

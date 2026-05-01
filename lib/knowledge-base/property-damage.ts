import type { KnowledgeDocument } from './schema';

import dpa1972s4 from './statutes/property/defective-premises-act-1972-s4';
import partyWallAct1996 from './statutes/property/party-wall-act-1996';
import highwaysAct1980s41 from './statutes/property/highways-act-1980-s41';
import limitationAct1980s2 from './statutes/property/limitation-act-1980-s2';
import occupiersLiabilityAct1957 from './statutes/property/occupiers-liability-act-1957';

import rylandsVFletcher from './cases/property/rylands-v-fletcher';
import sedleighDenfield from './cases/property/sedleigh-denfield-v-ocallaghan';
import leakeyVNationalTrust from './cases/property/leakey-v-national-trust';
import cambridgeWater from './cases/property/cambridge-water-v-eastern-counties';
import hunterVCanaryWharf from './cases/property/hunter-v-canary-wharf';
import delawareMansions from './cases/property/delaware-mansions-v-westminster';

import privateNuisanceTest from './tests/property/private-nuisance-test';
import rylandsFletcherTest from './tests/property/rylands-fletcher-test';
import trespassToLandTest from './tests/property/trespass-to-land-test';
import propertyDamagesMeasureTest from './tests/property/property-damages-measure-test';

import pdPreActionConductProperty from './procedures/property/pd-pre-action-conduct-property';
import partyWallSurveyorProcedure from './procedures/property/party-wall-surveyor-procedure';
import countyCourtMoneyClaimProperty from './procedures/property/county-court-money-claim-property';
import insurerNotificationProperty from './procedures/property/insurer-notification-property';

import privateNuisanceConcept from './concepts/property/private-nuisance';
import trespassToLandConcept from './concepts/property/trespass-to-land';
import measureOfDamagesProperty from './concepts/property/measure-of-damages-property';

export const propertyDamageDocuments: KnowledgeDocument[] = [
  dpa1972s4,
  partyWallAct1996,
  highwaysAct1980s41,
  limitationAct1980s2,
  occupiersLiabilityAct1957,

  rylandsVFletcher,
  sedleighDenfield,
  leakeyVNationalTrust,
  cambridgeWater,
  hunterVCanaryWharf,
  delawareMansions,

  privateNuisanceTest,
  rylandsFletcherTest,
  trespassToLandTest,
  propertyDamagesMeasureTest,

  pdPreActionConductProperty,
  partyWallSurveyorProcedure,
  countyCourtMoneyClaimProperty,
  insurerNotificationProperty,

  privateNuisanceConcept,
  trespassToLandConcept,
  measureOfDamagesProperty,
];

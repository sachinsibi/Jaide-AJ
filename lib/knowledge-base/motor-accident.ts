import type { KnowledgeDocument } from './schema';

import rta1988s170 from './statutes/motor/rta-1988-s170';
import rta1988s143 from './statutes/motor/rta-1988-s143';
import rta1988s151 from './statutes/motor/rta-1988-s151';
import lrCna1945 from './statutes/motor/lr-cna-1945';
import highwayCodeRtaS38 from './statutes/motor/highway-code-rta-s38';

import donoghueVStevenson from './cases/motor/donoghue-v-stevenson';
import nettleshipVWeston from './cases/motor/nettleship-v-weston';
import froomVButcher from './cases/motor/froom-v-butcher';
import boltonVStone from './cases/motor/bolton-v-stone';
import barnettVChelsea from './cases/motor/barnett-v-chelsea';
import wagonMoundNo1 from './cases/motor/wagon-mound-no-1';

import dutyOfCareTest from './tests/motor/duty-of-care-test';
import breachReasonableDriverTest from './tests/motor/breach-reasonable-driver-test';
import causationRemotenessTest from './tests/motor/causation-remoteness-test';
import contributoryNegligenceTest from './tests/motor/contributory-negligence-test';

import preActionProtocolNonPiMotor from './procedures/motor/pre-action-protocol-non-pi-motor';
import insurerNotificationAndNegotiation from './procedures/motor/insurer-notification-and-negotiation';
import countyCourtMoneyClaimRta from './procedures/motor/county-court-money-claim-rta';
import mibUninsuredUntraced from './procedures/motor/mib-uninsured-untraced';

import negligenceConcept from './concepts/motor/negligence';
import contributoryNegligenceConcept from './concepts/motor/contributory-negligence';
import vicariousLiabilityConcept from './concepts/motor/vicarious-liability';

export const motorAccidentDocuments: KnowledgeDocument[] = [
  rta1988s170,
  rta1988s143,
  rta1988s151,
  lrCna1945,
  highwayCodeRtaS38,

  donoghueVStevenson,
  nettleshipVWeston,
  froomVButcher,
  boltonVStone,
  barnettVChelsea,
  wagonMoundNo1,

  dutyOfCareTest,
  breachReasonableDriverTest,
  causationRemotenessTest,
  contributoryNegligenceTest,

  preActionProtocolNonPiMotor,
  insurerNotificationAndNegotiation,
  countyCourtMoneyClaimRta,
  mibUninsuredUntraced,

  negligenceConcept,
  contributoryNegligenceConcept,
  vicariousLiabilityConcept,
];

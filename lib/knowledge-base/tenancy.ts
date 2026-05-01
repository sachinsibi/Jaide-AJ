import type { KnowledgeDocument } from './schema';

import lta1985s11 from './statutes/tenancy/lta-1985-s11';
import fitness2018 from './statutes/tenancy/fitness-for-habitation-2018';
import housingAct1988s21 from './statutes/tenancy/housing-act-1988-s21';
import housingAct2004s213 from './statutes/tenancy/housing-act-2004-s213';
import protectionFromEviction1977 from './statutes/tenancy/protection-from-eviction-1977';
import deregulation2015s33 from './statutes/tenancy/deregulation-2015-s33';
import housingAct2004pt1Hhsrs from './statutes/tenancy/housing-act-2004-pt1-hhsrs';
import housingPlanningAct2016Rro from './statutes/tenancy/housing-planning-act-2016-rro';
import rentersRights2024Status from './statutes/tenancy/renters-rights-2024-status';

import quickVTaffEly from './cases/tenancy/quick-v-taff-ely';
import liverpoolVIrwin from './cases/tenancy/liverpool-v-irwin';
import southwarkVMills from './cases/tenancy/southwark-v-mills';
import wallaceVManchester from './cases/tenancy/wallace-v-manchester';
import mccallVAbelesz from './cases/tenancy/mccall-v-abelesz';
import obrienVRobinson from './cases/tenancy/obrien-v-robinson';

import s11DisrepairTest from './tests/tenancy/s11-disrepair-test';
import s21ValidityTest from './tests/tenancy/s21-validity-test';
import quietEnjoymentTest from './tests/tenancy/quiet-enjoyment-test';

import preActionProtocol from './procedures/tenancy/pre-action-protocol-housing-conditions';
import environmentalHealthHhsrs from './procedures/tenancy/environmental-health-hhsrs-route';
import countyCourtDisrepairClaim from './procedures/tenancy/county-court-disrepair-claim';
import cprPart55PossessionDefence from './procedures/tenancy/cpr-part-55-possession-defence';
import firstTierTribunalPropertyChamber from './procedures/tenancy/first-tier-tribunal-property-chamber';

import quietEnjoymentConcept from './concepts/tenancy/quiet-enjoyment';
import assuredShortholdTenancy from './concepts/tenancy/assured-shorthold-tenancy';
import retaliatoryEvictionConcept from './concepts/tenancy/retaliatory-eviction';

export const tenancyDocuments: KnowledgeDocument[] = [
  lta1985s11,
  fitness2018,
  housingAct1988s21,
  housingAct2004s213,
  protectionFromEviction1977,
  deregulation2015s33,
  housingAct2004pt1Hhsrs,
  housingPlanningAct2016Rro,
  rentersRights2024Status,

  quickVTaffEly,
  liverpoolVIrwin,
  southwarkVMills,
  wallaceVManchester,
  mccallVAbelesz,
  obrienVRobinson,

  s11DisrepairTest,
  s21ValidityTest,
  quietEnjoymentTest,

  preActionProtocol,
  environmentalHealthHhsrs,
  countyCourtDisrepairClaim,
  cprPart55PossessionDefence,
  firstTierTribunalPropertyChamber,

  quietEnjoymentConcept,
  assuredShortholdTenancy,
  retaliatoryEvictionConcept,
];

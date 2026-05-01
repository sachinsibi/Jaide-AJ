import type { KnowledgeDocument } from './schema';

import cra2015GoodsQuality from './statutes/contract/cra-2015-goods-quality';
import cra2015RightsAndRemedies from './statutes/contract/cra-2015-rights-and-remedies';
import cra2015Services from './statutes/contract/cra-2015-services';
import cra2015UnfairTerms from './statutes/contract/cra-2015-unfair-terms';
import limitationAct1980Contract from './statutes/contract/limitation-act-1980-contract';

import hadleyVBaxendale from './cases/contract/hadley-v-baxendale';
import britishWestinghouse from './cases/contract/british-westinghouse';
import hongKongFir from './cases/contract/hong-kong-fir';
import icsVWestBromwich from './cases/contract/ics-v-west-bromwich';
import bramhillVEdwards from './cases/contract/bramhill-v-edwards';
import dgftVFirstNationalBank from './cases/contract/dgft-v-first-national-bank';

import remotenessAndMitigationTest from './tests/contract/remoteness-and-mitigation-test';
import repudiationTest from './tests/contract/repudiation-test';
import craSatisfactoryQualityTest from './tests/contract/cra-satisfactory-quality-test';
import unfairTermsTest from './tests/contract/unfair-terms-test';

import preActionConductPdContract from './procedures/contract/pre-action-conduct-pd';
import adrAndOmbudsman from './procedures/contract/adr-and-ombudsman';
import countyCourtMoneyClaimContract from './procedures/contract/county-court-money-claim-contract';
import tradingStandardsRoute from './procedures/contract/trading-standards-route';

import contractFormation from './concepts/contract/contract-formation';
import misrepresentation from './concepts/contract/misrepresentation';
import impliedTerms from './concepts/contract/implied-terms';

export const contractServiceDocuments: KnowledgeDocument[] = [
  cra2015GoodsQuality,
  cra2015RightsAndRemedies,
  cra2015Services,
  cra2015UnfairTerms,
  limitationAct1980Contract,

  hadleyVBaxendale,
  britishWestinghouse,
  hongKongFir,
  icsVWestBromwich,
  bramhillVEdwards,
  dgftVFirstNationalBank,

  remotenessAndMitigationTest,
  repudiationTest,
  craSatisfactoryQualityTest,
  unfairTermsTest,

  preActionConductPdContract,
  adrAndOmbudsman,
  countyCourtMoneyClaimContract,
  tradingStandardsRoute,

  contractFormation,
  misrepresentation,
  impliedTerms,
];

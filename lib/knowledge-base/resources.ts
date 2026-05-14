import type { KnowledgeDocument } from './schema';

import shelter from './resources/shelter';
import citizensAdvice from './resources/citizens-advice';
import govUkEviction from './resources/gov-uk-eviction';
import legislationGovUk from './resources/legislation-gov-uk';
import bailii from './resources/bailii';
import mib from './resources/mib';
import govUkMoneyClaim from './resources/gov-uk-money-claim';
import tradingStandards from './resources/trading-standards';
import acas from './resources/acas';
import ico from './resources/ico';
import barbadosLegalResources from './resources/barbados-legal-resources';

export const resourceDocuments: KnowledgeDocument[] = [
  barbadosLegalResources,
  mib,
  bailii,
  shelter,
  citizensAdvice,
  govUkEviction,
  legislationGovUk,
  govUkMoneyClaim,
  tradingStandards,
  acas,
  ico,
];

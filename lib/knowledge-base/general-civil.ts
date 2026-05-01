import type { KnowledgeDocument } from './schema';

// Statutes
import defamationAct2013 from './statutes/general-civil/defamation-act-2013';
import protectionFromHarassmentAct1997 from './statutes/general-civil/protection-from-harassment-act-1997';
import limitationAct1980General from './statutes/general-civil/limitation-act-1980-general';
import dataProtectionAct2018 from './statutes/general-civil/data-protection-act-2018';

// Cases
import lachauxVIndependentPrint from './cases/general-civil/lachaux-v-independent-print';
import hayesVWilloughby from './cases/general-civil/hayes-v-willoughby';
import campbellVMgn from './cases/general-civil/campbell-v-mgn';
import gulatiVMgn from './cases/general-civil/gulati-v-mgn';

// Tests
import defamationTest from './tests/general-civil/defamation-test';
import harassmentPhaTest from './tests/general-civil/harassment-pha-test';
import misusePrivateInformationTest from './tests/general-civil/misuse-private-information-test';

// Procedures
import pdPreActionConductGeneralCivil from './procedures/general-civil/pd-pre-action-conduct-general-civil';
import countyCourtGeneralCivil from './procedures/general-civil/county-court-general-civil';
import civilMediationGeneral from './procedures/general-civil/civil-mediation-general';

// Concepts
import civilStandardOfProof from './concepts/general-civil/civil-standard-of-proof';
import damagesCivil from './concepts/general-civil/damages-civil';
import injunctionsCivil from './concepts/general-civil/injunctions-civil';

export const generalCivilDocuments: KnowledgeDocument[] = [
  // Statutes
  defamationAct2013,
  protectionFromHarassmentAct1997,
  limitationAct1980General,
  dataProtectionAct2018,
  // Cases
  lachauxVIndependentPrint,
  hayesVWilloughby,
  campbellVMgn,
  gulatiVMgn,
  // Tests
  defamationTest,
  harassmentPhaTest,
  misusePrivateInformationTest,
  // Procedures
  pdPreActionConductGeneralCivil,
  countyCourtGeneralCivil,
  civilMediationGeneral,
  // Concepts
  civilStandardOfProof,
  damagesCivil,
  injunctionsCivil,
];

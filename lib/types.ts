export type IncidentCategory =
  | 'tenancy'
  | 'motor-accident'
  | 'contract-service'
  | 'employment'
  | 'property-damage'
  | 'general-civil'
  | 'personal-injury';

export interface CaseData extends Record<string, string> {
  scenario: string;
  category: IncidentCategory;
}

export interface ClassifyRequest {
  userInput: string;
}

export interface ClassifyResponse {
  category: IncidentCategory;
  confidence: 'high' | 'medium' | 'low';
  reasoning: string;
}

export type AnalysisTab = 'overview' | 'legalBreakdown' | 'eli5' | 'references';

export interface AnalysisRequest {
  userInput: string;
  category: IncidentCategory;
  caseData: Record<string, string>;
  tab: AnalysisTab;
}

export interface CaselawItem {
  name: string;
  citation: string;
  principle: string;
}

export interface LegalTestItem {
  test: string;
  application: string;
}

export interface TermItem {
  term: string;
  definition: string;
}

export interface ReferenceItem {
  title: string;
  description: string;
  url: string;
  type: 'statute' | 'guidance' | 'agency' | 'tribunal' | 'resource' | 'caselaw';
}

export interface AnalysisOutput {
  overview: {
    legalArea: string;
    applicableDuties: string[];
    keyLegalQuestions: string[];
    typicalPathway: string;
    timeframeStructure: string;
    costStructure: string;
  };
  legalBreakdown: {
    doctrines: string[];
    caselaw: CaselawItem[];
    legalTests: LegalTestItem[];
    procedures: string[];
    evidenceStandards: string;
    precedentPatterns: string;
    keyTerminology: TermItem[];
  };
  eli5: {
    whatIsThisAreaOfLaw: string;
    howDoesTheLawWork: string;
    whatAreTheRules: string[];
    howDoCourtsDecide: string;
    whatCanHappen: string;
  };
  references: ReferenceItem[];
}

export interface OnboardingQuestion {
  id: string;
  question: string;
  placeholder: string;
  type: 'text' | 'textarea' | 'date';
}

export interface Lawyer {
  id: string;
  name: string;
  firm: string;
  specialisms: IncidentCategory[];
  location: string;
  phone: string;
  email: string;
  website: string;
}

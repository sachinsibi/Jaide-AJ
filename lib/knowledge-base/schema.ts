import type { IncidentCategory } from '../types';

export type DocType = 'statute' | 'case' | 'test' | 'procedure' | 'concept' | 'resource';
export type Tab = 'overview' | 'legalBreakdown' | 'eli5' | 'references';

export interface KnowledgeDocument {
  id: string;
  type: DocType;
  category: IncidentCategory | 'general';
  title: string;
  jurisdiction: 'england-wales';

  citation?: string;
  url?: string;
  inForce: boolean;
  inForceNote?: string;
  lastVerified: string;
  version: string;

  pinFor?: (IncidentCategory | 'general')[];
  triggers?: string[];
  tabs: Tab[];

  factSummary: string;
  eli5Summary?: string;
  content: string;

  tags: string[];
}

export const TAB_TYPE_ALLOWLIST: Record<Tab, DocType[]> = {
  overview: ['statute', 'procedure'],
  legalBreakdown: ['statute', 'case', 'test', 'procedure', 'concept'],
  eli5: ['concept', 'statute'],
  references: ['statute', 'resource'],
};

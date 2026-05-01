import type { IncidentCategory } from '../types';
import type { KnowledgeDocument } from './schema';
import { tenancyDocuments } from './tenancy';
import { motorAccidentDocuments } from './motor-accident';
import { contractServiceDocuments } from './contract-service';
import { employmentDocuments } from './employment';
import { propertyDamageDocuments } from './property-damage';
import { generalCivilDocuments } from './general-civil';
import { resourceDocuments } from './resources';

export const knowledgeBase: KnowledgeDocument[] = [
  ...tenancyDocuments,
  ...motorAccidentDocuments,
  ...contractServiceDocuments,
  ...employmentDocuments,
  ...propertyDamageDocuments,
  ...generalCivilDocuments,
  ...resourceDocuments,
];

export function getDocumentsByCategory(
  category: IncidentCategory | 'general'
): KnowledgeDocument[] {
  return knowledgeBase.filter(doc => doc.category === category || doc.category === 'general');
}

export function getDocumentById(id: string): KnowledgeDocument | undefined {
  return knowledgeBase.find(doc => doc.id === id);
}

export function getAllDocuments(): KnowledgeDocument[] {
  return knowledgeBase;
}

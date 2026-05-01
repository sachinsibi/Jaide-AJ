import type { IncidentCategory } from '../types';
import type { KnowledgeDocument, Tab } from '../knowledge-base/schema';
import { getDocumentsByCategory } from '../knowledge-base/registry';
import { embedQuery, getDocumentEmbeddings } from './embeddings';
import { retrieveTopK } from './retriever';

export async function retrieve(
  query: string,
  category: IncidentCategory,
  tab: Tab,
  topK?: number
): Promise<KnowledgeDocument[]> {
  const all = getDocumentsByCategory(category)
    .filter(d => d.inForce)
    .filter(d => d.tabs.includes(tab));

  const pinned = all.filter(d => d.pinFor?.includes(category));

  const lower = query.toLowerCase();
  const eligible = all.filter(
    d =>
      !pinned.includes(d) &&
      (!d.triggers?.length || d.triggers.some(t => lower.includes(t.toLowerCase())))
  );

  const limit = topK ?? Math.max(0, eligible.length);

  let ranked: KnowledgeDocument[];
  if (!process.env.VOYAGE_API_KEY) {
    ranked = eligible.slice(0, limit);
  } else {
    try {
      const queryEmbedding = await embedQuery(query);
      const docEmbeddings = getDocumentEmbeddings();
      ranked = retrieveTopK(queryEmbedding, eligible, docEmbeddings, limit);
    } catch (err) {
      console.warn('[rag] embedding rank failed, falling back to order', err);
      ranked = eligible.slice(0, limit);
    }
  }

  return [...pinned, ...ranked];
}

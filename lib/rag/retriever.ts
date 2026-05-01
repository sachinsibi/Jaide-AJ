import type { KnowledgeDocument } from '../knowledge-base/schema';

export function dot(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

export function embeddingKey(doc: KnowledgeDocument): string {
  return `${doc.id}@${doc.version}`;
}

export function retrieveTopK(
  queryEmbedding: number[],
  documents: KnowledgeDocument[],
  embeddings: Record<string, number[]>,
  topK: number
): KnowledgeDocument[] {
  const scored = documents
    .filter(doc => embeddings[embeddingKey(doc)])
    .map(doc => ({
      doc,
      score: dot(queryEmbedding, embeddings[embeddingKey(doc)]),
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, topK).map(s => s.doc);
}

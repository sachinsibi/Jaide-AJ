import precomputed from '../knowledge-base/embeddings.json';

function normalise(v: number[]): number[] {
  let sumSq = 0;
  for (const x of v) sumSq += x * x;
  const norm = Math.sqrt(sumSq);
  if (norm === 0) return v;
  return v.map(x => x / norm);
}

async function getVoyageClient() {
  const { VoyageAIClient } = await import('voyageai');
  return new VoyageAIClient({ apiKey: process.env.VOYAGE_API_KEY });
}

export async function embedQuery(text: string): Promise<number[]> {
  const client = await getVoyageClient();
  const result = await client.embed({
    input: text,
    model: 'voyage-3.5',
  });
  const vec = (result.data?.[0]?.embedding ?? []) as number[];
  return normalise(vec);
}

export function getDocumentEmbeddings(): Record<string, number[]> {
  return precomputed as Record<string, number[]>;
}

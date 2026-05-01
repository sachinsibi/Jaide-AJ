import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { VoyageAIClient } from 'voyageai';
import { knowledgeBase } from '../lib/knowledge-base/registry';

function normalise(v: number[]): number[] {
  let sumSq = 0;
  for (const x of v) sumSq += x * x;
  const norm = Math.sqrt(sumSq);
  if (norm === 0) return v;
  return v.map(x => x / norm);
}

const BATCH_SIZE = 5;
const DELAY_MS = 21_000;

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

function embeddingKey(id: string, version: string): string {
  return `${id}@${version}`;
}

function sortedJson(obj: Record<string, number[]>): string {
  const keys = Object.keys(obj).sort();
  const out: Record<string, number[]> = {};
  for (const k of keys) out[k] = obj[k];
  return JSON.stringify(out);
}

async function main() {
  if (!process.env.VOYAGE_API_KEY) {
    console.error('VOYAGE_API_KEY not set. Add it to .env.local.');
    process.exit(1);
  }

  const outPath = resolve(process.cwd(), 'lib/knowledge-base/embeddings.json');

  let existing: Record<string, number[]> = {};
  if (existsSync(outPath)) {
    try {
      existing = JSON.parse(readFileSync(outPath, 'utf8')) as Record<string, number[]>;
    } catch {
      console.warn('Could not parse existing embeddings.json, starting fresh.');
      existing = {};
    }
  }

  const liveKeys = new Set(knowledgeBase.map(d => embeddingKey(d.id, d.version)));
  const carriedOver: Record<string, number[]> = {};
  for (const k of Object.keys(existing)) {
    if (liveKeys.has(k)) carriedOver[k] = existing[k];
  }

  const toEmbed = knowledgeBase.filter(d => !carriedOver[embeddingKey(d.id, d.version)]);

  if (toEmbed.length === 0) {
    writeFileSync(outPath, sortedJson(carriedOver));
    console.log(
      `No new docs to embed. ${Object.keys(carriedOver).length} entries retained, ${Object.keys(existing).length - Object.keys(carriedOver).length} stale entries pruned.`
    );
    return;
  }

  const client = new VoyageAIClient({ apiKey: process.env.VOYAGE_API_KEY });
  const batches = Math.ceil(toEmbed.length / BATCH_SIZE);

  console.log(
    `Embedding ${toEmbed.length} new/changed docs in ${batches} batch(es) of ${BATCH_SIZE} via voyage-3.5… (${Object.keys(carriedOver).length} unchanged docs reused from existing embeddings.json)`
  );

  const embeddings: Record<string, number[]> = { ...carriedOver };

  for (let i = 0; i < toEmbed.length; i += BATCH_SIZE) {
    const batch = toEmbed.slice(i, i + BATCH_SIZE);
    const batchIdx = Math.floor(i / BATCH_SIZE) + 1;
    const inputs = batch.map(doc => doc.content);

    console.log(`  [${batchIdx}/${batches}] embedding ${batch.length} docs…`);
    const result = await client.embed({ input: inputs, model: 'voyage-3.5' });

    batch.forEach((doc, j) => {
      const vec = (result.data?.[j]?.embedding ?? []) as number[];
      if (vec.length === 0) {
        console.warn(`    ! empty embedding for ${doc.id}`);
        return;
      }
      embeddings[embeddingKey(doc.id, doc.version)] = normalise(vec);
    });

    if (i + BATCH_SIZE < toEmbed.length) {
      await sleep(DELAY_MS);
    }
  }

  writeFileSync(outPath, sortedJson(embeddings));
  console.log(`Wrote ${Object.keys(embeddings).length} embeddings to ${outPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

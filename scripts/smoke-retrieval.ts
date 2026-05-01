import { retrieve } from '../lib/rag';

const DAMP_QUERY =
  'My flat in Manchester has had a serious damp and mould problem for over a year. The walls are wet and the bathroom ceiling is black with mould. My toddler has been getting chest infections. I have told the landlord several times by email and they keep saying they will inspect but never do. Section 11 disrepair I think.';

const NOISE_QUERY =
  'My landlord wants to evict me with a section 21 notice but I think the deposit was never protected.';

async function run() {
  const tabs = ['overview', 'legalBreakdown', 'eli5', 'references'] as const;

  console.log('--- DAMP / MOULD SCENARIO ---');
  for (const tab of tabs) {
    const docs = await retrieve(DAMP_QUERY, 'tenancy', tab);
    console.log(`  ${tab}:`, docs.map(d => d.id));
  }

  console.log('\n--- S.21 / DEPOSIT SCENARIO (no damp triggers) ---');
  for (const tab of tabs) {
    const docs = await retrieve(NOISE_QUERY, 'tenancy', tab);
    console.log(`  ${tab}:`, docs.map(d => d.id));
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

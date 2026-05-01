import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { retrieve } from '../lib/rag';
import type { IncidentCategory } from '../lib/types';
import type { Tab } from '../lib/knowledge-base/schema';

interface Fixture {
  name: string;
  category: IncidentCategory;
  userInput: string;
  caseData: Record<string, string>;
  expectedDocs: Partial<Record<Tab, string[]>>;
}

const FIXTURE_DIR = resolve(process.cwd(), 'tests/kb-fixtures');

function loadFixtures(): Fixture[] {
  const files = readdirSync(FIXTURE_DIR).filter(f => f.endsWith('.json'));
  return files.map(f => {
    const text = readFileSync(resolve(FIXTURE_DIR, f), 'utf8');
    return JSON.parse(text) as Fixture;
  });
}

interface FixtureFailure {
  fixture: string;
  tab: Tab;
  missing: string[];
  retrieved: string[];
}

async function runFixture(fixture: Fixture): Promise<FixtureFailure[]> {
  const failures: FixtureFailure[] = [];
  const queryString = [
    fixture.userInput,
    ...Object.values(fixture.caseData ?? {}).filter(Boolean),
  ].join(' ');

  for (const [tabKey, expected] of Object.entries(fixture.expectedDocs) as [Tab, string[]][]) {
    const retrieved = await retrieve(queryString, fixture.category, tabKey);
    const retrievedIds = retrieved.map(d => d.id);
    const missing = expected.filter(id => !retrievedIds.includes(id));
    if (missing.length > 0) {
      failures.push({
        fixture: fixture.name,
        tab: tabKey,
        missing,
        retrieved: retrievedIds,
      });
    }
  }
  return failures;
}

async function main() {
  const fixtures = loadFixtures();
  if (fixtures.length === 0) {
    console.error('No fixtures found in tests/kb-fixtures/.');
    process.exit(1);
  }

  console.log(`Running ${fixtures.length} fixture(s)…`);
  const allFailures: FixtureFailure[] = [];
  for (const fixture of fixtures) {
    const fails = await runFixture(fixture);
    if (fails.length === 0) {
      console.log(`  ✓ ${fixture.name}`);
    } else {
      console.log(`  ✗ ${fixture.name}`);
      allFailures.push(...fails);
    }
  }

  if (allFailures.length === 0) {
    console.log(`\ntest-retrieval: all ${fixtures.length} fixture(s) passed.`);
    return;
  }

  console.error(`\ntest-retrieval: ${allFailures.length} failure(s):`);
  for (const f of allFailures) {
    console.error(`  [${f.fixture} :: ${f.tab}]`);
    console.error(`    missing:   ${f.missing.join(', ')}`);
    console.error(`    retrieved: ${f.retrieved.join(', ')}`);
  }
  process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

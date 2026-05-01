import { knowledgeBase } from '../lib/knowledge-base/registry';
import type { KnowledgeDocument } from '../lib/knowledge-base/schema';

const MAX_WORDS = 400;
const VERIFY_WINDOW_MONTHS = 12;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function isValidISODate(s: string): boolean {
  if (!ISO_DATE_RE.test(s)) return false;
  const d = new Date(s);
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

function monthsBetween(later: Date, earlier: Date): number {
  return (
    (later.getFullYear() - earlier.getFullYear()) * 12 +
    (later.getMonth() - earlier.getMonth())
  );
}

interface LintFailure {
  docId: string;
  rule: string;
  detail: string;
}

function checkDoc(doc: KnowledgeDocument, now: Date): LintFailure[] {
  const failures: LintFailure[] = [];
  const fail = (rule: string, detail: string) =>
    failures.push({ docId: doc.id, rule, detail });

  // 1. Word count on content ≤ 400.
  const wc = wordCount(doc.content);
  if (wc > MAX_WORDS) {
    fail('content-word-cap', `content has ${wc} words; cap is ${MAX_WORDS}. Split this doc.`);
  }

  // 2. lastVerified within 12 months of today.
  if (!isValidISODate(doc.lastVerified)) {
    fail('lastVerified-format', `lastVerified "${doc.lastVerified}" is not ISO YYYY-MM-DD.`);
  } else {
    const verified = new Date(doc.lastVerified);
    const months = monthsBetween(now, verified);
    if (months > VERIFY_WINDOW_MONTHS || months < 0) {
      fail(
        'lastVerified-stale',
        `lastVerified ${doc.lastVerified} is ${months} months from today; must be within last ${VERIFY_WINDOW_MONTHS}.`
      );
    }
  }

  // 3. version is a valid ISO date.
  if (!isValidISODate(doc.version)) {
    fail('version-format', `version "${doc.version}" is not ISO YYYY-MM-DD.`);
  }

  // 4. eli5 tab requires eli5Summary.
  if (doc.tabs.includes('eli5') && !doc.eli5Summary?.trim()) {
    fail('eli5-summary-required', `tabs includes 'eli5' but eli5Summary is empty.`);
  }

  // 5. references tab requires url.
  if (doc.tabs.includes('references') && !doc.url?.trim()) {
    fail('references-url-required', `tabs includes 'references' but url is empty.`);
  }

  // 6. statute or case requires citation.
  if ((doc.type === 'statute' || doc.type === 'case') && !doc.citation?.trim()) {
    fail('citation-required', `type '${doc.type}' requires citation.`);
  }

  // 7. pinFor and triggers are mutually exclusive.
  const hasPin = (doc.pinFor?.length ?? 0) > 0;
  const hasTriggers = (doc.triggers?.length ?? 0) > 0;
  if (hasPin && hasTriggers) {
    fail(
      'pin-trigger-exclusive',
      `pinFor and triggers cannot both be set; doc is either always-on or trigger-gated.`
    );
  }

  // 9. inForce: false requires inForceNote.
  if (!doc.inForce && !doc.inForceNote?.trim()) {
    fail('inForceNote-required', `inForce is false but inForceNote is empty.`);
  }

  return failures;
}

function main() {
  const now = new Date();
  const failures: LintFailure[] = [];

  // 8. Doc IDs are unique across the corpus.
  const idCounts = new Map<string, number>();
  for (const doc of knowledgeBase) {
    idCounts.set(doc.id, (idCounts.get(doc.id) ?? 0) + 1);
  }
  for (const [id, count] of idCounts) {
    if (count > 1) {
      failures.push({
        docId: id,
        rule: 'unique-id',
        detail: `id "${id}" appears ${count} times across the corpus.`,
      });
    }
  }

  for (const doc of knowledgeBase) {
    failures.push(...checkDoc(doc, now));
  }

  if (failures.length === 0) {
    console.log(`lint-kb: ${knowledgeBase.length} docs OK.`);
    return;
  }

  console.error(`lint-kb: ${failures.length} failure(s) across ${knowledgeBase.length} docs:`);
  for (const f of failures) {
    console.error(`  [${f.rule}] ${f.docId}: ${f.detail}`);
  }
  process.exit(1);
}

main();

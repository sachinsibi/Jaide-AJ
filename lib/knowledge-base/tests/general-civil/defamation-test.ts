import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-defamation-test',
  type: 'test',
  category: 'general-civil',
  title: 'Defamation Test (libel and slander)',
  jurisdiction: 'england-wales',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['defamation', 'libel', 'slander', 'published', 'written about me', 'post about me', 'lies about me', 'article about me'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Five-element test for defamation under the Defamation Act 2013: (1) a statement; (2) published to a third party; (3) that refers to the claimant; (4) that is defamatory in meaning; (5) that has caused or is likely to cause serious harm to reputation (s.1 DA 2013). Limitation: 1 year from first publication.',
  content: `Element 1 — Statement. Libel: written, printed, broadcast, or otherwise permanent form (includes social media posts, websites, forum posts, emails). Slander: spoken or transient form (actionable per se only in limited categories — e.g., imputing a criminal offence, unfitness for trade/profession). Online publications are libel.

Element 2 — Publication to at least one third party. Communication to the claimant alone is not defamation. Each republication or re-posting is a separate publication but the single publication rule (s.8 DA 2013) prevents serial limitation restart.

Element 3 — Refers to the claimant. The statement identifies the claimant, or a reasonable reader would understand it to refer to the claimant. Fictitious names or changed details may still refer if readers can identify the real person (Hulton v Jones [1910]).

Element 4 — Defamatory meaning. The natural and ordinary meaning of the words tends to lower the claimant in the estimation of right-thinking people generally. Innuendo meaning (where the defamatory sting requires knowledge of extrinsic facts) is also actionable. The court determines the single meaning that the words convey to the reasonable reader (Jeynes v News Magazines [2008]).

Element 5 — Serious harm (s.1 Defamation Act 2013). The publication has caused or is likely to cause serious harm to the claimant's reputation. This is proved by evidence: who saw it, how many, who they are (and whether they know the claimant), and what consequences have followed. Bodies trading for profit must prove serious financial loss.

Defences: truth (s.2 DA 2013 — imputation substantially true); honest opinion (s.3 — opinion, indicated as such, based on true facts); publication on matter of public interest (s.4); absolute privilege; qualified privilege; offer of amends.

Limitation: 1 year from first publication (s.4A Limitation Act 1980).

Remedies: general and aggravated damages; injunction; summary disposal.`,
  tags: ['defamation', 'libel', 'slander', 'serious-harm', 'DA-2013', 'defamatory-meaning'],
};

export default doc;

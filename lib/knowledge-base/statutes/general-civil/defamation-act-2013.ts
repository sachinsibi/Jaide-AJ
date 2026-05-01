import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-defamation-act-2013',
  type: 'statute',
  category: 'general-civil',
  title: 'Defamation Act 2013 — serious harm, defences, and remedies',
  jurisdiction: 'england-wales',
  citation: 'Defamation Act 2013, ss.1–8',
  url: 'https://www.legislation.gov.uk/ukpga/2013/26/contents',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['defamation', 'libel', 'slander', 'published about me', 'post about me', 'article about me', 'written about me', 'lies about me'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'The Defamation Act 2013 requires claimants to prove "serious harm" to reputation before a statement is actionable. It replaces the common-law presumption with an evidential requirement. Key defences codified: truth (s.2), honest opinion (s.3), publication on matter of public interest (s.4). Limitation: 1 year from first publication.',
  content: `s.1 — Serious harm: a statement is not defamatory unless its publication has caused or is likely to cause serious harm to the claimant's reputation. For bodies trading for profit, serious harm requires serious financial loss. The claimant must prove serious harm by evidence — publication date, readership, actual consequences (Lachaux v Independent Print [2019] UKSC 27).

s.2 — Truth: a complete defence if the imputation conveyed by the statement is substantially true. Evidence of truth must relate to the meaning found by the court, not a more benign meaning the defendant prefers.

s.3 — Honest opinion: defence requires (1) statement was opinion, not fact; (2) it was indicated as opinion (explicitly or by context); (3) based on facts which were true or privileged. Malice defeats the defence.

s.4 — Publication on matter of public interest: defence if (1) the statement was or formed part of a statement on a matter of public interest; and (2) the defendant reasonably believed that publishing it was in the public interest. Replaces Reynolds privilege.

s.5 — Website operators: operator not liable if did not post the statement; defence where operator complies with regulations for notification of complaints.

s.8 — Single publication rule: limitation runs from the first publication, not from each subsequent viewing or republication (overturning Duke of Brunswick). Limitation period: 1 year from first publication (s.4A Limitation Act 1980, as amended).

s.9 — Jurisdiction: court must be satisfied that England and Wales is clearly the most appropriate place to bring the claim (anti-libel tourism).

Defences under prior law preserved: absolute privilege (parliamentary proceedings, court proceedings); qualified privilege (common interest communications without malice).

Remedies: damages (general + aggravated); injunction (high threshold for interim — Bonnard v Perryman); summary disposal (s.8 Defamation Act 1996); take-down.

Defamation protocol: pre-action Letter of Claim required specifying the words complained of, meaning alleged, and harm caused; 14-day response period.`,
  tags: ['defamation', 'libel', 'slander', 'serious-harm', 'truth-defence', 'honest-opinion', 'DA-2013'],
};

export default doc;

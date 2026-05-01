import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-lachaux-v-independent-print',
  type: 'case',
  category: 'general-civil',
  title: 'Lachaux v Independent Print Ltd [2019] UKSC 27',
  jurisdiction: 'england-wales',
  citation: '[2019] UKSC 27',
  url: 'https://www.bailii.org/uk/cases/UKSC/2019/27.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['defamation', 'libel', 'serious harm', 'published about me', 'article about me', 'post about me'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The Supreme Court held that s.1 Defamation Act 2013 requires claimants to prove by evidence that publication has caused or is likely to cause serious harm to their reputation — it is not enough that the words had a tendency to harm reputation. Serious harm is a factual question, not an inference from the words alone.',
  content: `Facts: Bruno Lachaux (aerospace engineer) sued three newspaper publishers over articles alleging domestic abuse by him. The articles had wide circulation. The defendants argued s.1 DA 2013 required proof of actual serious harm, not merely a tendency to injure reputation.

Held (Lord Sumption): s.1 Defamation Act 2013 changed the common law. A statement is not defamatory unless its publication "has caused or is likely to cause serious harm" to the claimant's reputation. This is a factual matter proved by evidence — it is not presumed from the defamatory character of the words.

Key principles:

1. Evidence of serious harm: claimants must adduce evidence of: (a) who saw or was likely to see the statement; (b) the actual consequences of the statement (lost employment, social ostracism, damaged relationships); (c) why the evidence establishes that harm was serious.

2. "Likely to cause": prospective harm can also satisfy s.1, but still requires evidence — for example, that the statement was published to a large audience likely to include people who know the claimant.

3. Bodies trading for profit (s.1(2)): must prove serious financial loss (actual or prospective), a higher evidential requirement than reputational harm alone.

4. Common law presumption overturned: the old rule that a defamatory statement presumptively caused damage is replaced by s.1's factual threshold. Nominal damages for technical defamation are no longer available without evidence of harm.

Application: where a claimant cannot prove who saw the statement or what consequences followed, the claim may fail at the serious harm hurdle even if the words were plainly defamatory. Online publications require evidence of actual or likely readership among people who know the claimant.`,
  tags: ['defamation', 'serious-harm', 'DA-2013-s1', 'Lachaux', 'libel', 'evidence'],
};

export default doc;

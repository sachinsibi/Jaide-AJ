import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-lachaux-v-independent-print',
  type: 'case',
  category: 'general-civil',
  title: 'Lachaux v Independent Print Ltd [2019] UKSC 27',
  jurisdiction: 'barbados',
  citation: '[2019] UKSC 27',
  url: 'https://www.bailii.org/uk/cases/UKSC/2019/27.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['defamation', 'libel', 'serious harm', 'published about me', 'article about me', 'post about me'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. The UK Supreme Court interpreted s.1 of the Defamation Act 2013 (England) — a statute that does not apply in Barbados — to require claimants to prove by evidence that publication caused or is likely to cause serious harm to reputation. In Barbados, where the common law applies, evidence of actual or likely reputational harm remains relevant to any defamation claim and to the assessment of damages.',
  content: `Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. This case concerned the interpretation of s.1 of the Defamation Act 2013 (England), which introduced a statutory "serious harm" requirement for defamation claims. The Defamation Act 2013 does not apply in Barbados.

Facts: Bruno Lachaux (aerospace engineer) sued three newspaper publishers over articles alleging domestic abuse. The articles had wide circulation. The defendants argued that s.1 Defamation Act 2013 required proof of actual serious harm, not merely a tendency to injure reputation.

Held (Lord Sumption): s.1 Defamation Act 2013 changed the English common law. A statement is not actionable under English law unless its publication has caused or is likely to cause serious harm to the claimant's reputation — proved by evidence, not presumed.

Barbados position: the Defamation Act 2013 does not apply in Barbados. Barbados defamation law is governed by the common law and any specific Barbados legislation (consult laws.barbados.gov.bb). Under the traditional common law, damage to reputation is presumed in libel cases. However, the reasoning in Lachaux about the evidential importance of demonstrating actual or likely reputational harm is relevant in Barbados proceedings in the following respects:

1. Evidence of harm and quantum: a claimant who can demonstrate who saw the statement, the readership of the publication, and the actual consequences for their reputation will be in a stronger position on both liability (in jurisdictions where some form of harm threshold applies) and damages.

2. Practical guidance on evidence: the case articulates what kind of evidence is useful — evidence of who saw the statement, actual consequences (lost employment, damaged relationships, social ostracism), and the likely readership among people who know the claimant.

3. Online publications: where a defamatory statement is published online, evidence of actual readership and the extent to which readers who know the claimant were likely to have seen the statement remains relevant to damages even in jurisdictions that retain the common law presumption of damage.

Note: Barbados courts would apply Barbados defamation law, not the Defamation Act 2013. The Lachaux decision is cited here as a persuasive reference on the evidentiary approach to demonstrating reputational harm.`,
  tags: ['defamation', 'serious-harm', 'Lachaux', 'libel', 'evidence', 'persuasive-authority', 'Barbados'],
};

export default doc;

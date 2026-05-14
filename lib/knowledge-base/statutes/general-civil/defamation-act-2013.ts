import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'statute-barbados-general-civil-defamation',
  type: 'statute',
  category: 'general-civil',
  title: 'Defamation — Barbados Common Law and Statute',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['defamation', 'libel', 'slander', 'published about me', 'post about me', 'article about me', 'written about me', 'lies about me'],
  tabs: ['overview', 'legalBreakdown', 'references'],
  factSummary:
    'Defamation in Barbados is governed by the common law and potentially specific Barbados legislation (consult laws.barbados.gov.bb). The common law elements are: a defamatory statement, published to a third party, that identifies the claimant. Key defences include truth (justification), honest/fair comment, and privilege (absolute and qualified). Civil remedies are damages and an injunction from the High Court of Barbados.',
  content: `Defamation law in Barbados is rooted in the common law inherited as a Commonwealth jurisdiction. Barbados may also have specific defamation legislation — the Laws of Barbados portal (laws.barbados.gov.bb) should be consulted for current statutory provisions. The English Defamation Act 2013 does not apply in Barbados.

Common law elements of a defamation claim:

1. Defamatory statement. A statement is defamatory if it tends to lower the claimant in the estimation of right-thinking members of society generally, or causes them to be shunned or avoided, or exposes them to hatred, contempt, or ridicule. Both libel (permanent or written form, including online publications) and slander (spoken or transient form) are actionable, though the rules on proof of damage may differ.

2. Publication to at least one third party. The statement must be communicated to someone other than the claimant. Each separate act of publication may give rise to a separate cause of action.

3. Identification. The statement must refer to the claimant. The claimant must be identifiable to a reasonable reader or listener as the person to whom the statement refers. A fictitious name or changed detail may still satisfy this element if readers who know the claimant would identify them.

4. Defamatory meaning. The natural and ordinary meaning of the words, understood by a reasonable reader in context, must be defamatory. A statement may also be defamatory by innuendo where extrinsic facts known to recipients give it a defamatory meaning.

Defences under common law:

Justification (truth): a complete defence if the imputation conveyed by the statement is substantially true. The defendant bears the burden of proving the truth of the statement.

Honest/fair comment: a defence where the statement is comment (not a statement of fact), on a matter of public interest, based on facts that are true, and represents an honestly held opinion. Malice defeats this defence.

Absolute privilege: statements made in parliamentary proceedings and court proceedings attract absolute privilege — no action in defamation can be brought for such statements regardless of motive.

Qualified privilege: statements made on occasions of qualified privilege (where the maker has a legal, social, or moral duty to make the statement and the recipient has a corresponding interest in receiving it) are protected unless made with malice. This covers, for example, employment references and complaints to regulatory authorities.

Note on Barbados legislation: Barbados may have enacted specific defamation legislation. Practitioners and litigants should verify current statutory provisions at laws.barbados.gov.bb.

Civil remedies:

Damages: general damages for harm to reputation (assessed by the court); special damages for quantifiable pecuniary loss; aggravated damages where the defendant's conduct was particularly high-handed. At common law, damage is presumed for libel.

Injunction: the High Court of Barbados has jurisdiction to grant a prohibitory injunction restraining further publication. The threshold for a pre-trial injunction in defamation cases is high — courts are cautious about restraining publication before the defendant has had the opportunity to plead a defence of truth or honest comment.

Limitation: Barbados limitation legislation applies. The applicable limitation period for defamation claims should be verified under Barbados law; the period may be shorter than the general six-year period for tort.`,
  tags: ['defamation', 'libel', 'slander', 'justification', 'honest-comment', 'privilege', 'Barbados-common-law'],
};

export default doc;

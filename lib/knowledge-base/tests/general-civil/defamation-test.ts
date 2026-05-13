import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'test-defamation-test',
  type: 'test',
  category: 'general-civil',
  title: 'Defamation Test — Barbados Common Law',
  jurisdiction: 'barbados',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['defamation', 'libel', 'slander', 'published', 'written about me', 'post about me', 'lies about me', 'article about me'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The common law test for defamation in Barbados requires: (1) a statement; (2) published to at least one third party; (3) that identifies the claimant; (4) that carries a defamatory meaning. Key defences: truth (justification), honest/fair comment, and privilege. Limitation: the applicable Barbados period should be verified; defamation may attract a shorter period than the general tort limit. The Defamation Act 2013 (England) does not apply in Barbados.',
  content: `The Defamation Act 2013 (England) does not apply in Barbados. Defamation law in Barbados is governed by the common law and any specific Barbados legislation (consult laws.barbados.gov.bb).

Element 1 — Statement. Libel: a statement in written, printed, broadcast, or other permanent form — including social media posts, websites, online forums, and emails. Slander: a statement in spoken or other transient form. Online publications are generally treated as libel. Libel is actionable without proof of special damage in most circumstances; slander may require proof of damage except in defined categories (for example, a statement imputing a criminal offence or unfitness in a profession or trade).

Element 2 — Publication to at least one third party. Communication to the claimant alone is not defamation. The statement must be communicated to at least one person other than the claimant. Each fresh act of publication to a new audience may constitute a separate publication.

Element 3 — Identification. The statement must refer to the claimant or be understood by a reasonable reader to refer to the claimant. A fictitious name or changed details may still identify the claimant if people who know the claimant would understand the reference to be to them.

Element 4 — Defamatory meaning. The natural and ordinary meaning of the words, as understood by a reasonable reader or listener in context, must tend to lower the claimant in the estimation of right-thinking members of society generally, or cause them to be shunned or avoided, or expose them to hatred, contempt, or ridicule. A statement may also be defamatory by innuendo where its defamatory sting depends on extrinsic facts known to those who received it.

Note on serious harm: under the English Defamation Act 2013 (which does not apply in Barbados), a claimant must prove "serious harm" to reputation as a statutory threshold. Under the Barbados common law, damage to reputation is presumed in libel cases. Any specific Barbados legislation may modify this position — laws.barbados.gov.bb should be consulted.

Defences:
- Truth (justification): a complete defence if the imputation conveyed by the statement is substantially true. The defendant bears the burden of proving truth.
- Honest/fair comment: a defence where the statement is comment (not a statement of fact), on a matter of public interest, based on true facts, and honestly held. Malice defeats this defence.
- Absolute privilege: statements made in parliamentary or court proceedings are absolutely privileged — no action in defamation can be maintained regardless of motive.
- Qualified privilege: statements on occasions of qualified privilege (where the maker has a duty to communicate and the recipient has a corresponding interest in receiving the communication) are protected in the absence of malice.
- Offer of amends / apology: may be relevant to remedies and mitigation.

Remedies: general damages for harm to reputation (assessed by the court); special damages for quantifiable loss; aggravated damages where the defendant's conduct was particularly high-handed; injunction from the High Court of Barbados restraining further publication.

Limitation: the applicable limitation period under Barbados law should be verified. Defamation may attract a shorter limitation period than the general six-year tort period.`,
  tags: ['defamation', 'libel', 'slander', 'justification', 'honest-comment', 'privilege', 'Barbados-common-law'],
};

export default doc;

import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-campbell-v-mgn',
  type: 'case',
  category: 'general-civil',
  title: 'Campbell v MGN Ltd [2004] UKHL 22',
  jurisdiction: 'england-wales',
  citation: '[2004] UKHL 22',
  url: 'https://www.bailii.org/uk/cases/UKHL/2004/22.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['privacy', 'private information', 'photos', 'misuse of private information', 'personal information shared', 'photographs published'],
  tabs: ['legalBreakdown'],
  factSummary:
    'The House of Lords established the two-stage test for misuse of private information: (1) does the claimant have a reasonable expectation of privacy in the information? (2) does that expectation outweigh the defendant\'s Article 10 right to freedom of expression? Neither right is presumptively stronger — the court conducts a balancing exercise.',
  content: `Facts: Naomi Campbell, a model who had publicly denied drug addiction, was photographed leaving a Narcotics Anonymous meeting. The Daily Mirror published the photograph alongside details of her attendance and treatment. Campbell accepted that the fact of her drug treatment could be published (she had lied publicly about it) but argued the details and photograph were private.

Held (Lords Hope and Carswell, majority): publication of the details of her treatment at NA and the photograph was a misuse of private information.

Key principles:

1. Two-stage test: (a) does the claimant have a reasonable expectation of privacy in the information? (b) if so, does the claimant's right (Article 8 ECHR — private and family life) outweigh the defendant's right (Article 10 ECHR — freedom of expression)?

2. Reasonable expectation of privacy: a context-sensitive, objective assessment. Information about medical treatment, therapy, mental health, sexual life, personal relationships, and location typically engages a reasonable expectation. The question is whether a reasonable person in the claimant's position would expect the information to be private.

3. Balancing exercise: neither Article 8 nor Article 10 takes precedence. The court weighs: the nature and sensitivity of the information; the purpose of publication; whether it contributes to a debate of general interest; the likely effect of disclosure.

4. Public figures retain a private sphere: even public figures who have put aspects of their life in the public domain retain a zone of privacy for other matters — a celebrity who discloses their relationship does not surrender privacy in their medical treatment.

5. Photographs: the act of photographing a person in a private or sensitive situation may itself constitute a misuse, separate from publication.

Foundation for: Vidal-Hall v Google [2015] (extending to data breach claims); Gulati v MGN [2015] (quantum).`,
  tags: ['misuse-of-private-information', 'reasonable-expectation-of-privacy', 'Article-8', 'Article-10', 'Campbell', 'privacy-tort'],
};

export default doc;

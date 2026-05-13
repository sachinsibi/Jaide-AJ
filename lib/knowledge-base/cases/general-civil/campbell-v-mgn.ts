import type { KnowledgeDocument } from '../../schema';

const doc: KnowledgeDocument = {
  id: 'case-campbell-v-mgn',
  type: 'case',
  category: 'general-civil',
  title: 'Campbell v MGN Ltd [2004] UKHL 22',
  jurisdiction: 'barbados',
  citation: '[2004] UKHL 22',
  url: 'https://www.bailii.org/uk/cases/UKHL/2004/22.html',
  inForce: true,
  lastVerified: '2026-05-01',
  version: '2026-05-01',
  triggers: ['privacy', 'private information', 'photos', 'misuse of private information', 'personal information shared', 'photographs published'],
  tabs: ['legalBreakdown'],
  factSummary:
    'Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. The House of Lords established the two-stage test for misuse of private information: (1) does the claimant have a reasonable expectation of privacy in the information? (2) does that expectation outweigh the defendant\'s right to freedom of expression? Neither right is presumptively stronger — the court conducts a balancing exercise.',
  content: `Persuasive common law authority applied in Barbados as a Commonwealth jurisdiction. This is a decision of the House of Lords (United Kingdom) and is not binding on Barbados courts, but may be referred to as persuasive authority in cases involving the misuse of private information.

Facts: Naomi Campbell, a model who had publicly denied drug addiction, was photographed leaving a Narcotics Anonymous meeting. The Daily Mirror published the photograph alongside details of her attendance and treatment. Campbell accepted that the fact of her drug treatment could be published (she had spoken publicly about it) but argued the details and photograph were private.

Held (Lords Hope and Carswell, majority): publication of the details of her treatment at NA and the photograph was a misuse of private information.

Key principles:

1. Two-stage test: (a) does the claimant have a reasonable expectation of privacy in the information? (b) if so, does the claimant's privacy interest outweigh the defendant's right to freedom of expression?

2. Reasonable expectation of privacy: a context-sensitive, objective assessment. Information about medical treatment, therapy, mental health, sexual life, personal relationships, and location typically engages a reasonable expectation. The question is whether a reasonable person in the claimant's position would expect the information to be private.

3. Balancing exercise: neither privacy nor freedom of expression takes automatic precedence. The court weighs: the nature and sensitivity of the information; the purpose of publication; whether it contributes to a debate of general interest; the likely effect of disclosure.

4. Public figures retain a private sphere: even public figures who have put aspects of their life in the public domain retain a zone of privacy for other matters. A public figure who discloses their professional activities does not thereby surrender privacy in their medical treatment or personal relationships.

5. Photographs: the act of photographing a person in a private or sensitive situation may itself constitute a misuse, separate from publication.

Application in Barbados: the common law / equitable principle protecting private information from misuse or unauthorised disclosure is applicable in Barbados. The two-stage test from Campbell is a persuasive framework for analysing such claims in Barbados courts.`,
  tags: ['misuse-of-private-information', 'reasonable-expectation-of-privacy', 'privacy', 'Campbell', 'privacy-tort', 'persuasive-authority'],
};

export default doc;

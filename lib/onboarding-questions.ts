import type { IncidentCategory, OnboardingQuestion } from './types';

export function getCategoryQuestions(
  category: IncidentCategory,
  userInput: string
): OnboardingQuestion[] {
  const lower = userInput.toLowerCase();

  const hasKeyword = (kw: string) => new RegExp(kw, 'i').test(userInput);

  switch (category) {
    case 'tenancy':
      return [
        {
          id: 'when',
          question: 'When did this issue with your landlord/tenancy begin?',
          placeholder: 'Select the date when the problem started',
          type: 'date',
        },
        {
          id: 'landlord',
          question: hasKeyword('landlord')
            ? 'Can you confirm the name of your landlord or property manager?'
            : 'Who is your landlord or property manager?',
          placeholder: 'Name of landlord or property management company',
          type: 'text',
        },
        {
          id: 'lease',
          question: 'Do you have a written lease agreement? When does/did it expire?',
          placeholder: 'e.g., Yes, expires June 2025 / Month-to-month / Verbal agreement',
          type: 'text',
        },
        {
          id: 'issue',
          question: hasKeyword('repair|maintenance|damage')
            ? 'You mentioned issues with the property. Can you provide more specific details?'
            : 'What specific issue or breach has occurred?',
          placeholder: 'Describe the main problem in detail',
          type: 'textarea',
        },
        {
          id: 'attempts',
          question: 'Have you notified your landlord about this issue? What was their response?',
          placeholder: 'e.g., Sent email on [date], they ignored it / Verbally complained',
          type: 'textarea',
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'e.g., Photos of damage, email correspondence, lease agreement, receipts',
          type: 'textarea',
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Repairs completed, rent reduction, deposit refund, lease termination',
          type: 'text',
        },
      ];

    case 'motor-accident':
      return [
        {
          id: 'when',
          question: 'When did the accident occur? (Date and approximate time)',
          placeholder: 'Select the date and enter approximate time',
          type: 'date',
        },
        {
          id: 'location',
          question: 'Where did the accident occur?',
          placeholder: 'Street name, intersection, town/city',
          type: 'text',
        },
        {
          id: 'parties',
          question: 'Who was involved in the accident?',
          placeholder: 'Number of vehicles, other drivers, witnesses',
          type: 'textarea',
        },
        {
          id: 'insurer',
          question: hasKeyword('insurer|insurance')
            ? 'You mentioned your insurer. Can you provide their name and your claim number?'
            : 'What is your insurance company? Have you filed a claim?',
          placeholder: 'Insurance company name and claim number (if applicable)',
          type: 'text',
        },
        {
          id: 'fault',
          question: 'Who do you believe was at fault? Why?',
          placeholder: 'Describe what happened and why you believe the other party is at fault',
          type: 'textarea',
        },
        {
          id: 'police',
          question: 'Was a police report filed?',
          placeholder: 'e.g., Yes, report number: 12345 / No, damage was minor',
          type: 'text',
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Photos, witness statements, dashcam footage, repair quotes, police report',
          type: 'textarea',
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Insurance to pay claim, other driver to pay damages, vehicle repair',
          type: 'text',
        },
      ];

    case 'contract-service':
      return [
        {
          id: 'when',
          question: 'When did you enter into this agreement or make this purchase?',
          placeholder: 'Select the date',
          type: 'date',
        },
        {
          id: 'provider',
          question: 'Who is the other party? (Business name, seller, service provider)',
          placeholder: 'Company or individual name',
          type: 'text',
        },
        {
          id: 'agreement',
          question: 'What was agreed upon? What did you expect to receive?',
          placeholder: 'Describe the product, service, or agreement',
          type: 'textarea',
        },
        {
          id: 'breach',
          question: hasKeyword('refund|defective|not delivered|faulty')
            ? 'You mentioned an issue with the service/product. What exactly went wrong?'
            : 'What went wrong? How did they fail to meet the agreement?',
          placeholder: 'Describe what was not delivered or what was defective',
          type: 'textarea',
        },
        {
          id: 'communication',
          question: 'Have you contacted them about this? What did they say?',
          placeholder: 'Email, phone call, in-person — describe their response',
          type: 'textarea',
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Receipt, contract, emails, photos of defective item, warranty',
          type: 'textarea',
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Full refund, replacement, repair, compensation',
          type: 'text',
        },
      ];

    case 'employment':
      return [
        {
          id: 'when',
          question: 'When did this employment issue begin or occur?',
          placeholder: 'Select the date',
          type: 'date',
        },
        {
          id: 'employer',
          question: 'Who is your employer?',
          placeholder: 'Company name',
          type: 'text',
        },
        {
          id: 'role',
          question: 'What is/was your role and employment type?',
          placeholder: 'e.g., Sales Manager, full-time / Casual retail worker',
          type: 'text',
        },
        {
          id: 'issue',
          question: hasKeyword('fired|terminated|dismissed')
            ? 'You mentioned being terminated/dismissed. What reason did they give?'
            : 'What is the specific issue?',
          placeholder: 'Describe the workplace issue in detail',
          type: 'textarea',
        },
        {
          id: 'process',
          question: 'Were proper procedures followed? (warnings, meetings, documentation)',
          placeholder: 'Describe any disciplinary process or lack thereof',
          type: 'textarea',
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Employment contract, emails, performance reviews, termination letter, payslips',
          type: 'textarea',
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Unfair dismissal claim, unpaid wages, reinstatement, compensation',
          type: 'text',
        },
      ];

    case 'property-damage':
      return [
        {
          id: 'when',
          question: 'When did the damage occur?',
          placeholder: 'Select the date',
          type: 'date',
        },
        {
          id: 'property',
          question: 'What property was damaged? (Your own property?)',
          placeholder: 'Describe the property and your ownership',
          type: 'text',
        },
        {
          id: 'cause',
          question: 'How did the damage occur? What caused it?',
          placeholder: "e.g., Neighbour's tree fell, construction work, flooding",
          type: 'textarea',
        },
        {
          id: 'responsible',
          question: 'Who do you believe is responsible for the damage?',
          placeholder: 'Neighbour, contractor, council, etc.',
          type: 'text',
        },
        {
          id: 'contact',
          question: 'Have you contacted the responsible party or their insurance?',
          placeholder: 'Describe any communication and their response',
          type: 'textarea',
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Photos, repair quotes, witness statements, property records',
          type: 'textarea',
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Repair costs, compensation, restoration',
          type: 'text',
        },
      ];

    case 'general-civil':
    default:
      return [
        {
          id: 'when',
          question: 'When did this situation occur or begin?',
          placeholder: 'Select the date',
          type: 'date',
        },
        {
          id: 'parties',
          question: 'Who are the other parties involved?',
          placeholder: 'Individuals, companies, organisations',
          type: 'text',
        },
        {
          id: 'details',
          question: 'Can you provide more details about what happened?',
          placeholder: 'Describe the situation in detail',
          type: 'textarea',
        },
        {
          id: 'attempts',
          question: 'Have you attempted to resolve this? What happened?',
          placeholder: 'Any communication, mediation, or attempts at resolution',
          type: 'textarea',
        },
        {
          id: 'evidence',
          question: 'What evidence or documentation do you have?',
          placeholder: 'Documents, photos, emails, contracts, receipts',
          type: 'textarea',
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'Your desired resolution',
          type: 'text',
        },
      ];
  }
}

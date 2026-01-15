import { IncidentCategory } from '../components/CategoryConfirmationScreen';

export function detectIncidentCategory(userInput: string): IncidentCategory {
  const lowerInput = userInput.toLowerCase();

  // Personal Injury Detection (highest priority - must filter out)
  const personalInjuryKeywords = [
    'injury', 'injured', 'hurt', 'pain', 'medical', 'doctor', 
    'hospital', 'emergency', 'broken bone', 'fracture', 'surgery',
    'whiplash', 'concussion', 'bodily harm', 'physical harm',
    'broken arm', 'broken leg', 'sprained', 'bruised', 'bleeding',
    'ambulance', 'paramedic', 'emergency room', 'er visit'
  ];

  const hasPersonalInjury = personalInjuryKeywords.some(keyword => 
    lowerInput.includes(keyword)
  );

  if (hasPersonalInjury) {
    return 'personal-injury';
  }

  // Tenancy / Housing Detection
  const tenancyKeywords = [
    'landlord', 'tenant', 'rent', 'lease', 'evict', 'eviction',
    'deposit', 'bond', 'rental', 'apartment', 'flat', 'housing',
    'property manager', 'repair', 'maintenance', 'notice to vacate',
    'security deposit', 'rental agreement', 'tenancy', 'renting'
  ];

  const tenancyScore = tenancyKeywords.filter(keyword => 
    lowerInput.includes(keyword)
  ).length;

  // Motor Accident & Insurance Detection
  const motorAccidentKeywords = [
    'accident', 'car accident', 'vehicle', 'collision', 'crash',
    'insurance claim', 'insurer', 'at fault', 'vehicle damage',
    'traffic accident', 'rear-ended', 'side-swiped', 'hit my car',
    'auto insurance', 'claim number', 'insurance company', 'other driver',
    'police report', 'accident report'
  ];

  const motorScore = motorAccidentKeywords.filter(keyword => 
    lowerInput.includes(keyword)
  ).length;

  // Contract / Service Dispute Detection
  const contractKeywords = [
    'contract', 'refund', 'service', 'agreement', 'warranty',
    'purchase', 'bought', 'paid for', 'delivery', 'defective',
    'faulty', 'not as described', 'consumer', 'seller', 'vendor',
    'service provider', 'cancellation', 'terms and conditions',
    'breach of contract', 'money back'
  ];

  const contractScore = contractKeywords.filter(keyword => 
    lowerInput.includes(keyword)
  ).length;

  // Employment Issue Detection
  const employmentKeywords = [
    'employer', 'employee', 'workplace', 'fired', 'terminated',
    'dismissal', 'unfair dismissal', 'wages', 'salary', 'pay',
    'discrimination', 'harassment', 'hours', 'overtime', 'leave',
    'resignation', 'redundancy', 'bullying', 'work', 'job',
    'boss', 'manager', 'company policy'
  ];

  const employmentScore = employmentKeywords.filter(keyword => 
    lowerInput.includes(keyword)
  ).length;

  // Property Damage (Non-Tenancy) Detection
  const propertyDamageKeywords = [
    'property damage', 'damaged my property', 'neighbor', 'fence',
    'tree damage', 'water damage', 'flood', 'construction damage',
    'building work', 'excavation', 'my house', 'my home', 'my property',
    'garden', 'driveway', 'wall', 'boundary dispute'
  ];

  const propertyScore = propertyDamageKeywords.filter(keyword => 
    lowerInput.includes(keyword)
  ).length;

  // Determine category based on highest score
  const scores = {
    'tenancy': tenancyScore,
    'motor-accident': motorScore,
    'contract-service': contractScore,
    'employment': employmentScore,
    'property-damage': propertyScore
  };

  const maxScore = Math.max(...Object.values(scores));
  
  if (maxScore === 0) {
    return 'general-civil';
  }

  const detectedCategory = Object.entries(scores).find(
    ([_, score]) => score === maxScore
  )?.[0] as IncidentCategory;

  return detectedCategory || 'general-civil';
}

export function getCategoryQuestions(category: IncidentCategory, userInput: string) {
  const lowerInput = userInput.toLowerCase();

  switch (category) {
    case 'tenancy':
      return [
        {
          id: 'when',
          question: 'When did this issue with your landlord/tenancy begin?',
          placeholder: 'Select the date when the problem started',
          type: 'date' as const,
          context: extractContextualHint(userInput, ['when', 'date', 'started', 'began', 'month', 'week'])
        },
        {
          id: 'landlord',
          question: extractContextualQuestion(
            userInput,
            'landlord',
            'Who is your landlord or property manager?',
            'Can you confirm the name of your landlord or property manager?'
          ),
          placeholder: 'Name of landlord or property management company',
          type: 'text' as const
        },
        {
          id: 'lease',
          question: 'Do you have a written lease agreement? When does/did it expire?',
          placeholder: 'e.g., Yes, expires June 2025 / Month-to-month / Verbal agreement',
          type: 'text' as const
        },
        {
          id: 'issue',
          question: extractContextualQuestion(
            userInput,
            'repair|maintenance|damage',
            'You mentioned issues with the property. Can you provide more specific details?',
            'What specific issue or breach has occurred?'
          ),
          placeholder: 'Describe the main problem in detail',
          type: 'textarea' as const
        },
        {
          id: 'attempts',
          question: 'Have you notified your landlord about this issue? What was their response?',
          placeholder: 'e.g., Sent email on [date], they ignored it / Verbally complained / Submitted formal notice',
          type: 'textarea' as const
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'e.g., Photos of damage, email correspondence, lease agreement, receipts',
          type: 'textarea' as const
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Repairs completed, rent reduction, deposit refund, lease termination',
          type: 'text' as const
        }
      ];

    case 'motor-accident':
      return [
        {
          id: 'when',
          question: extractContextualQuestion(
            userInput,
            'yesterday|today|last week|accident',
            `You mentioned the accident happened ${extractTimeReference(userInput)}. Can you confirm the exact date and time?`,
            'When did the accident occur? (Date and approximate time)'
          ),
          placeholder: 'Select the date and enter approximate time',
          type: 'date' as const
        },
        {
          id: 'location',
          question: 'Where did the accident occur?',
          placeholder: 'Street name, intersection, suburb/city',
          type: 'text' as const
        },
        {
          id: 'parties',
          question: 'Who was involved in the accident?',
          placeholder: 'Number of vehicles, other drivers, witnesses',
          type: 'textarea' as const
        },
        {
          id: 'insurer',
          question: extractContextualQuestion(
            userInput,
            'insurer|insurance',
            `You mentioned your insurer. Can you provide their name and your claim number if you have one?`,
            'What is your insurance company? Have you filed a claim?'
          ),
          placeholder: 'Insurance company name and claim number (if applicable)',
          type: 'text' as const
        },
        {
          id: 'fault',
          question: 'Who do you believe was at fault? Why?',
          placeholder: 'Describe what happened and why you believe the other party is at fault',
          type: 'textarea' as const
        },
        {
          id: 'police',
          question: 'Was a police report filed?',
          placeholder: 'e.g., Yes, report number: 12345 / No, damage was minor',
          type: 'text' as const
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Photos, witness statements, dashcam footage, repair quotes, police report',
          type: 'textarea' as const
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Insurance to pay claim, other driver to pay damages, vehicle repair',
          type: 'text' as const
        }
      ];

    case 'contract-service':
      return [
        {
          id: 'when',
          question: 'When did you enter into this agreement or make this purchase?',
          placeholder: 'Select the date',
          type: 'date' as const
        },
        {
          id: 'provider',
          question: 'Who is the other party? (Business name, seller, service provider)',
          placeholder: 'Company or individual name',
          type: 'text' as const
        },
        {
          id: 'agreement',
          question: 'What was agreed upon? What did you expect to receive?',
          placeholder: 'Describe the product, service, or agreement',
          type: 'textarea' as const
        },
        {
          id: 'breach',
          question: extractContextualQuestion(
            userInput,
            'refund|defective|not delivered|faulty',
            'You mentioned an issue with the service/product. What exactly went wrong?',
            'What went wrong? How did they fail to meet the agreement?'
          ),
          placeholder: 'Describe what was not delivered or what was defective',
          type: 'textarea' as const
        },
        {
          id: 'communication',
          question: 'Have you contacted them about this? What did they say?',
          placeholder: 'Email, phone call, in-person - describe their response',
          type: 'textarea' as const
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Receipt, contract, emails, photos of defective item, warranty',
          type: 'textarea' as const
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Full refund, replacement, repair, compensation',
          type: 'text' as const
        }
      ];

    case 'employment':
      return [
        {
          id: 'when',
          question: 'When did this employment issue begin or occur?',
          placeholder: 'Select the date',
          type: 'date' as const
        },
        {
          id: 'employer',
          question: 'Who is your employer?',
          placeholder: 'Company name',
          type: 'text' as const
        },
        {
          id: 'role',
          question: 'What is/was your role and employment type?',
          placeholder: 'e.g., Sales Manager, full-time / Casual retail worker',
          type: 'text' as const
        },
        {
          id: 'issue',
          question: extractContextualQuestion(
            userInput,
            'fired|terminated|dismissed',
            'You mentioned being terminated/dismissed. What reason did they give?',
            'What is the specific issue?'
          ),
          placeholder: 'Describe the workplace issue in detail',
          type: 'textarea' as const
        },
        {
          id: 'process',
          question: 'Were proper procedures followed? (warnings, meetings, documentation)',
          placeholder: 'Describe any disciplinary process or lack thereof',
          type: 'textarea' as const
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Employment contract, emails, performance reviews, termination letter, payslips',
          type: 'textarea' as const
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Unfair dismissal claim, unpaid wages, reinstatement, compensation',
          type: 'text' as const
        }
      ];

    case 'property-damage':
      return [
        {
          id: 'when',
          question: 'When did the damage occur?',
          placeholder: 'Select the date',
          type: 'date' as const
        },
        {
          id: 'property',
          question: 'What property was damaged? (Your own property?)',
          placeholder: 'Describe the property and your ownership',
          type: 'text' as const
        },
        {
          id: 'cause',
          question: 'How did the damage occur? What caused it?',
          placeholder: 'e.g., Neighbor\'s tree fell, construction work, flooding',
          type: 'textarea' as const
        },
        {
          id: 'responsible',
          question: 'Who do you believe is responsible for the damage?',
          placeholder: 'Neighbor, contractor, council, etc.',
          type: 'text' as const
        },
        {
          id: 'contact',
          question: 'Have you contacted the responsible party or their insurance?',
          placeholder: 'Describe any communication and their response',
          type: 'textarea' as const
        },
        {
          id: 'evidence',
          question: 'What evidence do you have?',
          placeholder: 'Photos, repair quotes, witness statements, property records',
          type: 'textarea' as const
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'e.g., Repair costs, compensation, restoration',
          type: 'text' as const
        }
      ];

    case 'general-civil':
    default:
      return [
        {
          id: 'when',
          question: 'When did this situation occur or begin?',
          placeholder: 'Select the date',
          type: 'date' as const
        },
        {
          id: 'parties',
          question: 'Who are the other parties involved?',
          placeholder: 'Individuals, companies, organizations',
          type: 'text' as const
        },
        {
          id: 'details',
          question: 'Can you provide more details about what happened?',
          placeholder: 'Describe the situation in detail',
          type: 'textarea' as const
        },
        {
          id: 'attempts',
          question: 'Have you attempted to resolve this? What happened?',
          placeholder: 'Any communication, mediation, or attempts at resolution',
          type: 'textarea' as const
        },
        {
          id: 'evidence',
          question: 'What evidence or documentation do you have?',
          placeholder: 'Documents, photos, emails, contracts, receipts',
          type: 'textarea' as const
        },
        {
          id: 'outcome',
          question: 'What outcome are you seeking?',
          placeholder: 'Your desired resolution',
          type: 'text' as const
        }
      ];
  }
}

function extractContextualQuestion(
  userInput: string,
  keyword: string,
  contextualVersion: string,
  defaultVersion: string
): string {
  const regex = new RegExp(keyword, 'i');
  return regex.test(userInput) ? contextualVersion : defaultVersion;
}

function extractContextualHint(userInput: string, keywords: string[]): string {
  for (const keyword of keywords) {
    const regex = new RegExp(`(${keyword}[^.!?]{0,30})`, 'i');
    const match = userInput.match(regex);
    if (match) {
      return match[1];
    }
  }
  return '';
}

function extractTimeReference(userInput: string): string {
  const lowerInput = userInput.toLowerCase();
  
  if (lowerInput.includes('yesterday')) return 'yesterday';
  if (lowerInput.includes('today')) return 'today';
  if (lowerInput.includes('last week')) return 'last week';
  if (lowerInput.includes('last month')) return 'last month';
  
  const dateMatch = lowerInput.match(/(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}/i);
  if (dateMatch) return dateMatch[0];
  
  return 'recently';
}

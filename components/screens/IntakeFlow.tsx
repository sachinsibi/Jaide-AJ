'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Home, Car, FileText, Briefcase, Hammer, Scale, CheckCircle, ChevronDown } from 'lucide-react';
import type { IncidentCategory } from '@/lib/types';
import { getCategoryQuestions } from '@/lib/onboarding-questions';

const CATEGORIES = [
  { id: 'tenancy' as const, label: 'Tenancy / Housing Dispute', icon: Home, description: 'Landlord, tenant, rent, repairs, eviction, deposit issues' },
  { id: 'property-damage' as const, label: 'Property Damage (Non-Tenancy)', icon: Hammer, description: 'Damage to property, neighbour disputes, construction issues' },
  { id: 'contract-service' as const, label: 'Contract / Service Dispute', icon: FileText, description: 'Refunds, service failures, unfulfilled agreements' },
  { id: 'employment' as const, label: 'Employment Issue', icon: Briefcase, description: 'Workplace disputes, termination, wages, discrimination' },
  { id: 'motor-accident' as const, label: 'Motor Accident & Insurance Dispute', icon: Car, description: 'Vehicle accidents, insurance claims, damage disputes' },
  { id: 'general-civil' as const, label: 'General Civil Dispute (Other)', icon: Scale, description: 'Other civil matters not covered above' },
];

export function IntakeFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const step = searchParams.get('step') ?? 'confirm';
  const urlCategory = (searchParams.get('category') ?? 'general-civil') as IncidentCategory;

  const [userInput, setUserInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<IncidentCategory>(urlCategory);
  const [showDropdown, setShowDropdown] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('userInput') ?? '';
    setUserInput(stored);
    setSelectedCategory(urlCategory);
  }, [urlCategory]);

  const current = CATEGORIES.find(c => c.id === selectedCategory);
  const CurrentIcon = current?.icon ?? Scale;

  // ── Confirm step ────────────────────────────────────────────
  if (step === 'confirm') {
    return (
      <div style={{
        minHeight: '100vh', width: '100%',
        background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 40%, white 100%)',
        display: 'flex', flexDirection: 'column',
      }}>
        <header style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={() => router.push('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#073C65', fontWeight: 600, fontSize: '0.9375rem', padding: 0, fontFamily: 'inherit' }}
          >
            <ArrowLeft style={{ width: '18px', height: '18px' }} /> Back
          </button>
          <span style={{ color: '#073C65', fontWeight: 800 }}>JAIDE</span>
          <div style={{ width: '56px' }} />
        </header>

        <div style={{ flex: 1, width: '100%', maxWidth: '560px', margin: '0 auto', padding: '2rem 1.5rem 3rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D49E37', marginBottom: '0.625rem' }}>
            Situation Classified
          </p>
          <h1 style={{ color: '#073C65', fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.625rem' }}>
            We&apos;ve classified your situation as:
          </h1>
          <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            You can change this if it doesn&apos;t look right.
          </p>

          {/* Category card */}
          <div style={{ background: 'white', borderRadius: '1.25rem', boxShadow: '0 2px 16px rgba(7, 60, 101, 0.08)', padding: '1.5rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.875rem', background: 'rgba(7, 60, 101, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CurrentIcon style={{ width: '24px', height: '24px', color: '#073C65' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#073C65', fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{current?.label}</div>
                <div style={{ color: '#9CA3AF', fontSize: '0.8125rem' }}>{current?.description}</div>
              </div>
            </div>

            {/* Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1.5px solid #E5E7EB', background: '#FAFBFC', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <span style={{ color: '#073C65', fontSize: '0.9375rem', fontWeight: 600 }}>Change category</span>
                <ChevronDown style={{ width: '18px', height: '18px', color: '#073C65', transform: showDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
              </button>
              {showDropdown && (
                <div style={{ position: 'absolute', top: 'calc(100% + 0.5rem)', left: 0, right: 0, background: 'white', borderRadius: '0.875rem', border: '1px solid #E5E7EB', boxShadow: '0 8px 24px rgba(7, 60, 101, 0.12)', zIndex: 20, overflow: 'hidden' }}>
                  {CATEGORIES.map(cat => {
                    const Icon = cat.icon;
                    const isSel = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setSelectedCategory(cat.id); setShowDropdown(false); }}
                        style={{ width: '100%', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.875rem', background: isSel ? 'rgba(7, 60, 101, 0.06)' : 'transparent', border: 'none', borderBottom: '1px solid rgba(7, 60, 101, 0.06)', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                      >
                        <Icon style={{ width: '18px', height: '18px', color: '#073C65', flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ color: '#073C65', fontSize: '0.9rem', fontWeight: 600 }}>{cat.label}</div>
                          <div style={{ color: '#9CA3AF', fontSize: '0.75rem' }}>{cat.description}</div>
                        </div>
                        {isSel && <CheckCircle style={{ width: '16px', height: '16px', color: '#D49E37', flexShrink: 0 }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* User input preview */}
          {userInput && (
            <div style={{ background: 'rgba(212, 158, 55, 0.06)', border: '1px solid rgba(212, 158, 55, 0.2)', borderRadius: '0.875rem', padding: '1rem 1.125rem', marginBottom: '1.75rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D49E37', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>Your description</p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.6, fontStyle: 'italic' }}>&ldquo;{userInput}&rdquo;</p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.875rem' }}>
            <button
              onClick={() => router.push('/')}
              style={{ flex: 1, padding: '1rem', borderRadius: '100px', border: '1.5px solid rgba(7, 60, 101, 0.2)', background: 'white', color: '#073C65', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Go Back
            </button>
            <button
              onClick={() => router.push(`/intake?category=${selectedCategory}&step=onboarding`)}
              style={{ flex: 2, padding: '1rem', borderRadius: '100px', border: 'none', background: '#073C65', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Confirm and Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Onboarding step ─────────────────────────────────────────
  const questions = getCategoryQuestions(selectedCategory, userInput);
  const progress = ((questionIndex + 1) / questions.length) * 100;
  const q = questions[questionIndex];
  const isLast = questionIndex === questions.length - 1;

  const handleNext = () => {
    const updated = { ...answers, [q.id]: currentAnswer };
    setAnswers(updated);
    if (!isLast) {
      setCurrentAnswer(answers[questions[questionIndex + 1]?.id] ?? '');
      setQuestionIndex(questionIndex + 1);
    } else {
      const caseData = {
        ...updated,
        scenario: userInput,
        initial: userInput,
        category: selectedCategory,
      };
      sessionStorage.setItem('caseData', JSON.stringify(caseData));
      router.push('/analysis');
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setCurrentAnswer(answers[questions[questionIndex - 1].id] ?? '');
      setQuestionIndex(questionIndex - 1);
    } else {
      router.push(`/intake?category=${selectedCategory}&step=confirm`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 40%, white 100%)', display: 'flex', flexDirection: 'column' }}>
      {/* Progress bar */}
      <div style={{ width: '100%', height: '4px', background: '#F3F4F6' }}>
        <div style={{ height: '100%', width: `${progress}%`, background: '#D49E37', transition: 'width 0.4s ease' }} />
      </div>

      <header style={{ width: '100%', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={handleBack}
          style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#073C65', fontWeight: 600, fontSize: '0.9375rem', padding: 0, fontFamily: 'inherit' }}
        >
          <ArrowLeft style={{ width: '18px', height: '18px' }} /> Back
        </button>
        <span style={{ color: '#073C65', fontWeight: 800 }}>JAIDE</span>
        <span style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{questionIndex + 1}/{questions.length}</span>
      </header>

      <div style={{ flex: 1, width: '100%', maxWidth: '560px', margin: '0 auto', padding: '2rem 1.5rem 3rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D49E37', marginBottom: '0.75rem' }}>
            Question {questionIndex + 1} of {questions.length}
          </p>
          <h2 style={{ color: '#073C65', fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.4, marginBottom: '2rem' }}>
            {q.question}
          </h2>

          {q.type === 'textarea' ? (
            <textarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder={q.placeholder}
              style={{ width: '100%', minHeight: '140px', padding: '1rem', borderRadius: '0.875rem', border: '1.5px solid #E5E7EB', fontSize: '1rem', lineHeight: '1.6', color: '#073C65', fontFamily: 'inherit', outline: 'none', resize: 'vertical', background: 'white' }}
            />
          ) : q.type === 'date' ? (
            <input
              type="date"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              style={{ width: '100%', padding: '1rem', borderRadius: '0.875rem', border: '1.5px solid #E5E7EB', fontSize: '1rem', color: '#073C65', fontFamily: 'inherit', outline: 'none', background: 'white' }}
            />
          ) : (
            <input
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder={q.placeholder}
              style={{ width: '100%', padding: '1rem', borderRadius: '0.875rem', border: '1.5px solid #E5E7EB', fontSize: '1rem', color: '#073C65', fontFamily: 'inherit', outline: 'none', background: 'white' }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleNext(); }}
            />
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.875rem', marginTop: '2rem' }}>
          {currentAnswer.trim() === '' && (
            <button
              onClick={handleNext}
              style={{ flex: 1, padding: '1rem', borderRadius: '100px', border: '1.5px solid rgba(7, 60, 101, 0.2)', background: 'white', color: '#073C65', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Skip
            </button>
          )}
          <button
            onClick={handleNext}
            style={{ flex: 2, padding: '1rem', borderRadius: '100px', border: 'none', background: '#073C65', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            {isLast ? 'Get My Analysis' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

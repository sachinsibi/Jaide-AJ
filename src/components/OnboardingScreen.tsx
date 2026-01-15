import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import { IncidentCategory } from './CategoryConfirmationScreen';
import { getCategoryQuestions } from '../utils/incidentDetection';

interface OnboardingScreenProps {
  initialInput: string;
  category: IncidentCategory;
  onComplete: (allAnswers: Record<string, string>) => void;
  onBack: () => void;
}

export function OnboardingScreen({ initialInput, category, onComplete, onBack }: OnboardingScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    initial: initialInput,
    category: category
  });
  const [contradictionWarning, setContradictionWarning] = useState<string | null>(null);

  // Get category-specific questions
  const questions = getCategoryQuestions(category, initialInput);

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentQuestion].id;
    
    // Check for contradictions in dates
    if (questionId === 'when' && answers.when && answers.when !== answer) {
      setContradictionWarning(`Earlier you mentioned "${answers.when}". Which date is more accurate?`);
    } else {
      setContradictionWarning(null);
    }
    
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    setContradictionWarning(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    setContradictionWarning(null);
    
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion].id] || '';
  const currentQuestionData = questions[currentQuestion];

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%', 
      background: 'linear-gradient(to bottom, #E6F2FA, #F5FAFD, white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Faded logo backsplash */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.008 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4rem', padding: '4rem' }}>
          {[...Array(60)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
                <path d="M6 8C6 6.89543 6.89543 6 8 6H22V40H8C6.89543 40 6 39.1046 6 38V8Z" fill="#073C65" />
                <path d="M26 6H40C41.1046 6 42 6.89543 42 8V38C42 39.1046 41.1046 40 40 40H26V6Z" fill="#073C65" />
                <path d="M22 6H26V40H22V6Z" fill="#042841" />
                <path d="M28 4H32C33.1046 4 34 4.89543 34 6V24L30 20L26 24V6C26 4.89543 26.8954 4 28 4Z" fill="#D49E37" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header style={{ 
        width: '100%', 
        padding: '2rem 1.5rem 1.5rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10
      }}>
        <button
          onClick={handleBack}
          className="rounded-full transition-colors flex items-center gap-2"
          style={{
            padding: '0.75rem 1.25rem',
            background: 'rgba(7, 60, 101, 0.08)',
            border: '1px solid rgba(7, 60, 101, 0.15)'
          }}
          aria-label="Go back"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(7, 60, 101, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(7, 60, 101, 0.08)';
          }}
        >
          <ArrowLeft className="text-navy" style={{ width: '20px', height: '20px' }} />
          <span className="text-navy" style={{ fontWeight: 600 }}>Back</span>
        </button>
        <Logo size="small" showText={false} />
        <div style={{ width: '96px' }} />
      </header>

      {/* Progress bar */}
      <div style={{ width: '100%', padding: '0 1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <div 
            className="rounded-full"
            style={{ 
              height: '12px', 
              background: 'rgba(7, 60, 101, 0.1)', 
              overflow: 'hidden', 
              width: '100%',
              border: '1px solid rgba(7, 60, 101, 0.1)'
            }}
          >
            <div
              style={{ 
                height: '100%', 
                background: 'linear-gradient(90deg, #D49E37 0%, #E5B85C 100%)', 
                transition: 'all 0.4s ease',
                width: `${progress}%`
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem' }}>
            <p className="text-grey-medium" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p className="text-gold" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              {Math.round(progress)}% Complete
            </p>
          </div>
        </div>
      </div>

      {/* Question content */}
      <div style={{ width: '100%', padding: '1.5rem 1.5rem 4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          {/* Contextual hint if available */}
          {currentQuestionData.context && (
            <div 
              className="rounded-xl"
              style={{ 
                background: 'rgba(212, 158, 55, 0.08)',
                border: '1px solid rgba(212, 158, 55, 0.2)',
                padding: '1rem 1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start'
              }}
            >
              <AlertCircle className="text-gold" style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '0.125rem' }} />
              <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                <strong className="text-navy">From your description:</strong> {currentQuestionData.context}
              </p>
            </div>
          )}

          {/* Contradiction warning */}
          {contradictionWarning && (
            <div 
              className="rounded-xl"
              style={{ 
                background: 'rgba(220, 38, 38, 0.08)',
                border: '2px solid rgba(220, 38, 38, 0.2)',
                padding: '1rem 1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start'
              }}
            >
              <AlertCircle style={{ width: '20px', height: '20px', color: '#DC2626', flexShrink: 0, marginTop: '0.125rem' }} />
              <p style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0, color: '#DC2626', fontWeight: 600 }}>
                {contradictionWarning}
              </p>
            </div>
          )}

          <h2 className="text-navy" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.3 }}>
            {currentQuestionData.question}
          </h2>
          <p className="text-grey-medium" style={{ marginBottom: '1.75rem', lineHeight: '1.7', fontSize: '0.9375rem' }}>
            This helps J.A.I.D.E. understand your situation better and provide accurate, personalized legal information.
          </p>

          {/* Input based on question type */}
          {currentQuestionData.type === 'date' ? (
            <div 
              className="rounded-2xl bg-white"
              style={{ 
                padding: '1.5rem',
                border: '2px solid rgba(7, 60, 101, 0.15)',
                boxShadow: '0 4px 16px rgba(7, 60, 101, 0.08)',
                marginBottom: '1.5rem'
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <CalendarIcon className="text-navy" style={{ width: '24px', height: '24px' }} />
                <span className="text-navy" style={{ fontSize: '1rem', fontWeight: 600 }}>Select Date</span>
              </label>
              <input
                type="date"
                value={currentAnswer}
                onChange={(e) => handleAnswer(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                className="text-navy"
                style={{ 
                  width: '100%',
                  padding: '1rem 1.25rem',
                  fontSize: '1.0625rem',
                  border: '1px solid rgba(7, 60, 101, 0.2)',
                  borderRadius: '0.75rem',
                  background: 'rgba(7, 60, 101, 0.02)',
                  cursor: 'pointer'
                }}
              />
              <p className="text-grey-medium" style={{ fontSize: '0.8125rem', marginTop: '0.75rem' }}>
                {currentQuestionData.placeholder}
              </p>
            </div>
          ) : currentQuestionData.type === 'textarea' ? (
            <textarea
              value={currentAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestionData.placeholder}
              className="rounded-2xl bg-white resize-none text-navy"
              style={{ 
                width: '100%',
                minWidth: '100%',
                minHeight: '200px',
                padding: '1.5rem',
                border: '2px solid rgba(7, 60, 101, 0.15)',
                boxShadow: '0 4px 16px rgba(7, 60, 101, 0.08)',
                lineHeight: '1.7',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#073C65';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(7, 60, 101, 0.15)';
              }}
            />
          ) : (
            <input
              type="text"
              value={currentAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestionData.placeholder}
              className="rounded-xl bg-white text-navy"
              style={{ 
                width: '100%',
                padding: '1.25rem 1.5rem',
                border: '2px solid rgba(7, 60, 101, 0.15)',
                boxShadow: '0 4px 16px rgba(7, 60, 101, 0.08)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#073C65';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(7, 60, 101, 0.15)';
              }}
            />
          )}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            {currentQuestion > 0 && (
              <button
                onClick={handleBack}
                className="rounded-full transition-all"
                style={{ 
                  flex: '1',
                  padding: '1.125rem 2rem',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  border: '2px solid rgba(7, 60, 101, 0.2)',
                  background: 'white',
                  color: '#073C65'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(7, 60, 101, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                }}
              >
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!currentAnswer.trim()}
              className="rounded-full transition-all flex items-center justify-center gap-2"
              style={{ 
                flex: currentQuestion > 0 ? '1' : '1',
                padding: '1.125rem 2rem',
                fontSize: '1.0625rem',
                fontWeight: 700,
                background: currentAnswer.trim() 
                  ? 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)'
                  : '#D1D5DB',
                border: 'none',
                color: 'white',
                boxShadow: currentAnswer.trim() ? '0 4px 16px rgba(7, 60, 101, 0.25)' : 'none',
                cursor: currentAnswer.trim() ? 'pointer' : 'not-allowed',
                opacity: currentAnswer.trim() ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (currentAnswer.trim()) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(7, 60, 101, 0.35)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentAnswer.trim()) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(7, 60, 101, 0.25)';
                }
              }}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete & View Analysis'}
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

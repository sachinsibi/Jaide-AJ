import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
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

  const questions = getCategoryQuestions(category, initialInput);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion].id] || '';
  const currentQuestionData = questions[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 40%, white 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Gold progress bar — full width at very top */}
      <div style={{ width: '100%', height: '4px', background: '#F3F4F6' }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: '#D49E37',
          transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Header */}
      <header style={{
        width: '100%',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <button
          onClick={handleBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#073C65',
            fontWeight: 600,
            fontSize: '0.9375rem',
            padding: 0,
            fontFamily: 'inherit',
          }}
        >
          <ArrowLeft style={{ width: '18px', height: '18px' }} />
          Back
        </button>
        <Logo size="small" showText={false} />
        <div style={{ width: '56px' }} />
      </header>

      {/* Content */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '2rem 1.5rem 3rem',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Step label */}
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#D49E37',
          marginBottom: '0.75rem',
        }}>
          Step {currentQuestion + 1} of {questions.length}
        </p>

        {/* Question */}
        <h2 style={{
          color: '#073C65',
          fontSize: '1.5rem',
          fontWeight: 800,
          lineHeight: 1.3,
          marginBottom: '1.75rem',
        }}>
          {currentQuestionData.question}
        </h2>

        {/* Context hint */}
        {currentQuestionData.context && (
          <div style={{
            background: 'rgba(212, 158, 55, 0.08)',
            border: '1px solid rgba(212, 158, 55, 0.2)',
            borderRadius: '0.875rem',
            padding: '0.875rem 1.125rem',
            marginBottom: '1.25rem',
            fontSize: '0.875rem',
            color: '#6B7280',
            lineHeight: 1.6,
          }}>
            <strong style={{ color: '#073C65' }}>From your description: </strong>
            {currentQuestionData.context}
          </div>
        )}

        {/* Input */}
        {currentQuestionData.type === 'date' ? (
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px rgba(7, 60, 101, 0.07)',
            padding: '1.25rem',
            marginBottom: '1.75rem',
          }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
              <CalendarIcon style={{ width: '20px', height: '20px', color: '#D49E37' }} />
              <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#073C65' }}>Select Date</span>
            </label>
            <input
              type="date"
              value={currentAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                fontSize: '1rem',
                border: '1.5px solid rgba(7, 60, 101, 0.15)',
                borderRadius: '0.75rem',
                color: '#073C65',
                background: '#F9FAFC',
                outline: 'none',
                fontFamily: 'inherit',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#D49E37'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(7, 60, 101, 0.15)'; }}
            />
            {currentQuestionData.placeholder && (
              <p style={{ fontSize: '0.8125rem', color: '#9CA3AF', marginTop: '0.625rem' }}>
                {currentQuestionData.placeholder}
              </p>
            )}
          </div>
        ) : currentQuestionData.type === 'textarea' ? (
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px rgba(7, 60, 101, 0.07)',
            marginBottom: '1.75rem',
            overflow: 'hidden',
          }}>
            <textarea
              value={currentAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestionData.placeholder}
              style={{
                width: '100%',
                minHeight: '160px',
                padding: '1.25rem',
                border: 'none',
                outline: 'none',
                resize: 'none',
                fontSize: '1rem',
                lineHeight: 1.65,
                color: '#073C65',
                background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
          </div>
        ) : (
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px rgba(7, 60, 101, 0.07)',
            marginBottom: '1.75rem',
            overflow: 'hidden',
          }}>
            <input
              type="text"
              value={currentAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder={currentQuestionData.placeholder}
              style={{
                width: '100%',
                padding: '1.125rem 1.25rem',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                color: '#073C65',
                background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
          </div>
        )}

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={!currentAnswer.trim()}
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '100px',
            border: 'none',
            background: currentAnswer.trim() ? '#073C65' : '#D1D5DB',
            color: 'white',
            fontSize: '1.0625rem',
            fontWeight: 600,
            cursor: currentAnswer.trim() ? 'pointer' : 'not-allowed',
            marginBottom: '1rem',
            fontFamily: 'inherit',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { if (currentAnswer.trim()) e.currentTarget.style.background = '#0A5A8A'; }}
          onMouseLeave={(e) => { if (currentAnswer.trim()) e.currentTarget.style.background = '#073C65'; }}
        >
          {isLast ? 'Complete & View Analysis' : 'Next'}
        </button>

        <button
          onClick={handleNext}
          style={{
            background: 'none',
            border: 'none',
            color: '#9CA3AF',
            fontSize: '0.9375rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            padding: '0.25rem',
            textAlign: 'center',
          }}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}

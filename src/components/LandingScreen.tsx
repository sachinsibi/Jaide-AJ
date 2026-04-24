import React, { useState } from 'react';
import { Logo } from './Logo';
import { Upload, Mic, HelpCircle, Search } from 'lucide-react';
import { ConsentModal } from './ConsentModal';
import { HelpModal } from './HelpModal';

interface LandingScreenProps {
  onContinue: (input: string) => void;
}

export function LandingScreen({ onContinue }: LandingScreenProps) {
  const [userInput, setUserInput] = useState('');
  const [showConsent, setShowConsent] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleSubmit = () => {
    if (userInput.trim()) {
      if (!hasAgreed) {
        setShowConsent(true);
      } else {
        onContinue(userInput);
      }
    }
  };

  const handleAgree = () => {
    setHasAgreed(true);
    setShowConsent(false);
    onContinue(userInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserInput(prev => prev + (prev ? '\n\n' : '') + '[Photo uploaded: ' + file.name + ']');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Voice input is not supported in your browser. Please try Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(prev => prev + (prev ? ' ' : '') + transcript);
    };

    recognition.onerror = (event: any) => {
      alert('Voice input error: ' + event.error);
    };

    recognition.start();
  };

  const handleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      background: 'linear-gradient(to bottom, #E6F2FA, #F5FAFD, white)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Faded J icon backsplash */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.012 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4rem', padding: '4rem', height: '100%' }}>
          {[...Array(80)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="60" height="70" viewBox="0 0 72 88" fill="none">
                <rect x="0" y="0" width="72" height="20" rx="3" fill="#073C65" />
                <path d="M 44,20 H 72 V 68 C 72,90 0,90 0,68 V 54 H 20 V 68 C 20,76 52,76 52,68 V 20 H 44 Z" fill="#073C65" />
                <g transform="translate(51, -18)">
                  <polygon points="10,1 12.06,7.17 18.56,7.22 13.33,11.08 15.29,17.28 10,13.5 4.71,17.28 6.67,11.08 1.44,7.22 7.94,7.17" fill="#D49E37" />
                </g>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header style={{ width: '100%', padding: '2rem 1.5rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <Logo size="small" showText={true} />
      </header>

      {/* Main content */}
      <div style={{ 
        flex: 1, 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '4rem 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Brand name */}
        <div style={{ marginBottom: '3rem', width: '100%', maxWidth: '1280px', margin: '0 auto 3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <Logo size="large" showText={true} />
          <p className="text-grey-dark" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)', lineHeight: '1.7' }}>
            Justice · Assistance · Information · Decision · Engine
          </p>
        </div>

        {/* Google-style search input */}
        <div style={{ width: '100%', maxWidth: '680px', margin: '0 auto 2rem' }}>
          {/* Main search bar */}
          <div
            className="relative bg-white rounded-full transition-all duration-200"
            style={{
              boxShadow: userInput.trim() 
                ? '0 1px 6px rgba(32, 33, 36, 0.28)' 
                : '0 1px 6px rgba(32, 33, 36, 0.18)',
              border: '1px solid rgba(223, 225, 229, 0)',
              padding: '0.375rem'
            }}
            onMouseEnter={(e) => {
              if (!userInput.trim()) {
                e.currentTarget.style.boxShadow = '0 1px 6px rgba(32, 33, 36, 0.28)';
              }
            }}
            onMouseLeave={(e) => {
              if (!userInput.trim()) {
                e.currentTarget.style.boxShadow = '0 1px 6px rgba(32, 33, 36, 0.18)';
              }
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
              {/* Search icon */}
              <Search 
                className="text-grey-medium" 
                style={{ width: '20px', height: '20px', marginRight: '0.875rem', flexShrink: 0 }} 
              />
              
              {/* Input field */}
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your legal situation..."
                className="bg-transparent text-navy placeholder-grey-medium resize-none"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  lineHeight: '20px',
                  minHeight: '44px',
                  maxHeight: '120px',
                  padding: '12px 0',
                  fontFamily: 'Arial, sans-serif'
                }}
              />

              {/* Right icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginLeft: '0.5rem' }}>
                {/* Photo upload */}
                <label 
                  className="cursor-pointer rounded-full transition-colors" 
                  style={{ 
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Upload photo"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Upload className="text-grey-dark" style={{ width: '20px', height: '20px' }} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>

                {/* Voice input */}
                <button
                  onClick={handleVoiceInput}
                  className="rounded-full transition-colors"
                  style={{ 
                    padding: '0.5rem',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Voice input"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Mic className="text-grey-dark" style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
            </div>
          </div>

          {/* GO Button - Call to Action */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginTop: '1.5rem'
          }}>
            <button
              onClick={handleSubmit}
              disabled={!userInput.trim()}
              className="rounded-full transition-all"
              style={{
                padding: '1rem 3rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                background: userInput.trim() ? '#D49E37' : '#E5E7EB',
                border: 'none',
                color: userInput.trim() ? '#073C65' : '#9CA3AF',
                cursor: userInput.trim() ? 'pointer' : 'not-allowed',
                boxShadow: userInput.trim() ? '0 4px 12px rgba(212, 158, 55, 0.3)' : 'none',
                letterSpacing: '0.1em',
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={(e) => {
                if (userInput.trim()) {
                  e.currentTarget.style.background = '#E0B24E';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 158, 55, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (userInput.trim()) {
                  e.currentTarget.style.background = '#D49E37';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 158, 55, 0.3)';
                }
              }}
            >
              GO
            </button>
          </div>

        </div>

        {/* Help button */}
        <button
          onClick={handleHelp}
          className="flex items-center gap-2 text-navy hover:text-navy-light transition-colors"
          style={{ fontSize: '0.9375rem', marginTop: '1rem' }}
        >
          <HelpCircle className="w-5 h-5" />
          <span>What kind of issues can JAIDE help with?</span>
        </button>
      </div>

      {/* Footer Disclaimer */}
      <footer style={{ 
        position: 'relative', 
        zIndex: 10, 
        padding: '1rem 1.5rem', 
        background: 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(4px)',
        borderTop: '1px solid #F5F5F5'
      }}>
        <div style={{ width: '100%', maxWidth: '1536px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', textAlign: 'center', lineHeight: '1.7' }}>
            <strong className="text-grey-dark">Disclaimer:</strong> This platform provides general legal information only. We do not offer legal advice or replace the services of a qualified lawyer. For legal advice, please consult a licensed attorney.
          </p>
        </div>
      </footer>

      {showConsent && <ConsentModal onAgree={handleAgree} />}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}
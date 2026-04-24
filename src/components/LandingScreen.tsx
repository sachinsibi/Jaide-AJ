import React, { useState } from 'react';
import { Logo } from './Logo';
import { Camera, Mic, HelpCircle, User } from 'lucide-react';
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
    if (!userInput.trim()) return;
    if (!hasAgreed) {
      setShowConsent(true);
    } else {
      onContinue(userInput);
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
        setUserInput(prev => prev + (prev ? '\n\n' : '') + '[Photo attached: ' + file.name + ']');
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

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 40%, #ffffff 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header */}
      <header style={{
        width: '100%',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Logo size="small" showText={true} />
        <button
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'white',
            border: '1px solid rgba(7, 60, 101, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => alert('Profile — coming soon')}
          aria-label="Profile"
        >
          <User style={{ width: '18px', height: '18px', color: '#073C65' }} />
        </button>
      </header>

      {/* Main */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem 3rem',
        gap: '2rem',
      }}>
        {/* Brand */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem' }}>
          <Logo size="large" showText={true} />
          <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.5 }}>
            Your civil law intelligence engine.
          </p>
        </div>

        {/* Input card */}
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <div style={{
            background: 'white',
            borderRadius: '1.25rem',
            boxShadow: '0 2px 20px rgba(7, 60, 101, 0.08)',
            padding: '1.25rem 1.25rem 1rem',
          }}>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tell us what happened."
              style={{
                width: '100%',
                minHeight: '120px',
                border: 'none',
                outline: 'none',
                resize: 'none',
                fontSize: '1rem',
                lineHeight: '1.65',
                color: '#073C65',
                background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Action icon buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1.5rem',
          }}>
            {/* Upload Photo */}
            <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 12px rgba(7, 60, 101, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Camera style={{ width: '22px', height: '22px', color: '#073C65' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>Upload Photo</span>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
            </label>

            {/* Speech-to-Text */}
            <button
              onClick={handleVoiceInput}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 12px rgba(7, 60, 101, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Mic style={{ width: '22px', height: '22px', color: '#073C65' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>Speech-to-Text</span>
            </button>

            {/* Help Describe */}
            <button
              onClick={() => setShowHelp(true)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 12px rgba(7, 60, 101, 0.1)',
                border: '2px solid #D49E37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <HelpCircle style={{ width: '22px', height: '22px', color: '#D49E37' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>Help Describe</span>
            </button>
          </div>

          {/* Continue button */}
          <button
            onClick={handleSubmit}
            disabled={!userInput.trim()}
            style={{
              width: '100%',
              marginTop: '1.75rem',
              padding: '1rem',
              borderRadius: '100px',
              border: 'none',
              background: userInput.trim() ? '#073C65' : '#D1D5DB',
              color: 'white',
              fontSize: '1.0625rem',
              fontWeight: 600,
              cursor: userInput.trim() ? 'pointer' : 'not-allowed',
              transition: 'background 0.2s, transform 0.15s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => { if (userInput.trim()) e.currentTarget.style.background = '#0A5A8A'; }}
            onMouseLeave={(e) => { if (userInput.trim()) e.currentTarget.style.background = '#073C65'; }}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.6 }}>
          General legal information only — not legal advice. Consult a licensed attorney for your situation.
        </p>
      </footer>

      {showConsent && <ConsentModal onAgree={handleAgree} onCancel={() => setShowConsent(false)} />}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

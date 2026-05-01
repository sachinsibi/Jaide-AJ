'use client';

import { useState } from 'react';
import { Camera, Mic, HelpCircle, User } from 'lucide-react';

interface LandingScreenProps {
  onContinue: (input: string) => void;
}

export function LandingScreen({ onContinue }: LandingScreenProps) {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  const handleSubmit = async () => {
    if (!userInput.trim() || loading) return;
    if (!hasAgreed) {
      setShowConsent(true);
      return;
    }
    setLoading(true);
    await onContinue(userInput.trim());
    setLoading(false);
  };

  const handleAgree = async () => {
    setHasAgreed(true);
    setShowConsent(false);
    setLoading(true);
    await onContinue(userInput.trim());
    setLoading(false);
  };

  const handleVoiceInput = () => {
    const win = window as unknown as Record<string, unknown>;
    type SRInstance = { lang: string; onresult: (e: { results: Array<Array<{ transcript: string }>> }) => void; start: () => void };
    const SR = (win.SpeechRecognition ?? win.webkitSpeechRecognition) as
      | (new () => SRInstance)
      | undefined;
    if (!SR) {
      alert('Voice input is not supported in your browser. Please try Chrome or Edge.');
      return;
    }
    const recognition = new SR();
    recognition.lang = 'en-GB';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(prev => prev + (prev ? ' ' : '') + transcript);
    };
    recognition.start();
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserInput(prev => prev + (prev ? '\n\n' : '') + '[Photo attached: ' + file.name + ']');
    }
  };

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: 'linear-gradient(to bottom, #E6F2FA 0%, #F5FAFD 40%, #ffffff 100%)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <header style={{
        width: '100%', padding: '1.25rem 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: '#073C65', display: 'flex', alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#D49E37', fontWeight: 800, fontSize: '1rem' }}>J</span>
          </div>
          <span style={{ color: '#073C65', fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.01em' }}>JAIDE</span>
        </div>
        <button
          style={{
            width: '40px', height: '40px', borderRadius: '50%', background: 'white',
            border: '1px solid rgba(7, 60, 101, 0.12)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}
          aria-label="Profile"
        >
          <User style={{ width: '18px', height: '18px', color: '#073C65' }} />
        </button>
      </header>

      {/* Main */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '2rem 1.5rem 3rem', gap: '2rem',
      }}>
        {/* Brand */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#073C65', fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>JAIDE</h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.5 }}>
            Your civil law intelligence engine.
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            England & Wales only.
          </p>
        </div>

        {/* Input card */}
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <div style={{
            background: 'white', borderRadius: '1.25rem',
            boxShadow: '0 2px 20px rgba(7, 60, 101, 0.08)', padding: '1.25rem 1.25rem 1rem',
          }}>
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(); } }}
              placeholder="Tell us what happened."
              style={{
                width: '100%', minHeight: '120px', border: 'none', outline: 'none',
                resize: 'none', fontSize: '1rem', lineHeight: '1.65', color: '#073C65',
                background: 'transparent', fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Icon buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%', background: 'white',
                boxShadow: '0 2px 12px rgba(7, 60, 101, 0.1)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <Camera style={{ width: '22px', height: '22px', color: '#073C65' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>Upload Photo</span>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
            </label>

            <button
              onClick={handleVoiceInput}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%', background: 'white',
                boxShadow: '0 2px 12px rgba(7, 60, 101, 0.1)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <Mic style={{ width: '22px', height: '22px', color: '#073C65' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>Speech-to-Text</span>
            </button>

            <button
              onClick={() => alert('Describe your situation as clearly as possible — include who was involved, what happened, when it happened, and what you want to achieve.')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%', background: 'white',
                boxShadow: '0 2px 12px rgba(7, 60, 101, 0.1)',
                border: '2px solid #D49E37', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <HelpCircle style={{ width: '22px', height: '22px', color: '#D49E37' }} />
              </div>
              <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 500 }}>Help Describe</span>
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!userInput.trim() || loading}
            style={{
              width: '100%', marginTop: '1.75rem', padding: '1rem', borderRadius: '100px',
              border: 'none', background: userInput.trim() && !loading ? '#073C65' : '#D1D5DB',
              color: 'white', fontSize: '1.0625rem', fontWeight: 600,
              cursor: userInput.trim() && !loading ? 'pointer' : 'not-allowed', fontFamily: 'inherit',
            }}
          >
            {loading ? 'Analysing…' : 'Continue'}
          </button>
        </div>
      </div>

      <footer style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.6 }}>
          General legal information only — not legal advice. England & Wales only. Consult a qualified solicitor for your situation.
        </p>
      </footer>

      {/* Consent modal */}
      {showConsent && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 50, padding: '1.5rem',
        }}>
          <div style={{
            background: 'white', borderRadius: '1.25rem', padding: '2rem',
            maxWidth: '440px', width: '100%',
            boxShadow: '0 8px 32px rgba(7, 60, 101, 0.2)',
          }}>
            <h2 style={{ color: '#073C65', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>
              Before we continue
            </h2>
            <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              JAIDE provides <strong style={{ color: '#073C65' }}>general legal information</strong> about
              the law of <strong style={{ color: '#073C65' }}>England & Wales</strong>. This is{' '}
              <strong style={{ color: '#073C65' }}>not legal advice</strong> and does not create a
              solicitor-client relationship. For advice specific to your situation, consult a qualified solicitor.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem' }}>
              <button
                onClick={() => setShowConsent(false)}
                style={{
                  flex: 1, padding: '0.875rem', borderRadius: '100px',
                  border: '1.5px solid rgba(7, 60, 101, 0.2)', background: 'white',
                  color: '#073C65', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleAgree}
                style={{
                  flex: 2, padding: '0.875rem', borderRadius: '100px',
                  border: 'none', background: '#073C65', color: 'white',
                  fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                I Understand — Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useRef } from 'react';
import { Search, Upload, Mic, HelpCircle } from 'lucide-react';
import { HowToDescribeModal } from '@/components/ui/HowToDescribeModal';

interface LandingScreenProps {
  onContinue: (input: string) => void;
}

export function LandingScreen({ onContinue }: LandingScreenProps) {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (!userInput.trim() || loading) return;
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
    recognition.lang = 'en-US';
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

  const handleCloseHowTo = () => {
    setShowHowTo(false);
    setTimeout(() => inputRef.current?.focus(), 50);
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
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: '#073C65', display: 'flex', alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#C9A84C', fontWeight: 800, fontSize: '1rem' }}>J</span>
          </div>
          <span style={{ color: '#073C65', fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.01em' }}>J.A.I.D.E.</span>
        </div>
      </header>

      {/* Main */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '2rem 1.5rem 3rem', gap: '1.5rem',
      }}>
        {/* Brand */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            color: '#073C65', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1,
            fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '0.75rem',
          }}>
            J.A.I.D.E.
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.5 }}>
            Justice. Assistance. Information. Decision. Engine.
          </p>
        </div>

        {/* Search input */}
        <div style={{ width: '100%', maxWidth: '640px' }}>
          <div style={{
            background: 'white', borderRadius: '2rem',
            boxShadow: '0 2px 24px rgba(7, 60, 101, 0.1)',
            padding: '0.875rem 1.25rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            border: '1.5px solid rgba(7, 60, 101, 0.08)',
          }}>
            <Search style={{ width: '20px', height: '20px', color: '#9CA3AF', flexShrink: 0 }} />
            <input
              ref={inputRef}
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleSubmit(); } }}
              placeholder="Describe your legal situation…"
              style={{
                flex: 1, border: 'none', outline: 'none',
                fontSize: '1rem', color: '#073C65', background: 'transparent',
                fontFamily: 'inherit',
              }}
            />
            {/* Upload */}
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }} title="Upload photo">
              <Upload style={{ width: '18px', height: '18px', color: '#9CA3AF' }} />
              <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
            </label>
            {/* Mic */}
            <button
              onClick={handleVoiceInput}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', flexShrink: 0 }}
              aria-label="Voice input"
              title="Speech to text"
            >
              <Mic style={{ width: '18px', height: '18px', color: '#9CA3AF' }} />
            </button>
          </div>

          {/* GO button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
            <button
              onClick={handleSubmit}
              disabled={!userInput.trim() || loading}
              style={{
                padding: '0.75rem 3.5rem', borderRadius: '100px',
                border: 'none',
                background: userInput.trim() && !loading ? '#073C65' : '#D1D5DB',
                color: 'white', fontSize: '1rem', fontWeight: 700,
                cursor: userInput.trim() && !loading ? 'pointer' : 'not-allowed',
                fontFamily: 'inherit', letterSpacing: '0.06em',
                transition: 'background 0.15s',
              }}
            >
              {loading ? 'Analysing…' : 'GO'}
            </button>
          </div>

          {/* What kind of issues link */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
            <button
              onClick={() => setShowHowTo(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0, fontFamily: 'inherit',
              }}
            >
              <HelpCircle style={{ width: '18px', height: '18px', color: '#073C65' }} />
              <span style={{
                color: '#073C65', fontSize: '0.9375rem', fontWeight: 500,
                textDecoration: 'underline', textUnderlineOffset: '3px',
              }}>
                What kind of issues can J.A.I.D.E. help with?
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <footer style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.6 }}>
          <strong>Disclaimer:</strong> This platform provides general legal information only. We do not offer legal advice or replace the services of a qualified attorney. For legal advice, please consult a licensed attorney.
        </p>
      </footer>

      {/* How to describe modal */}
      {showHowTo && <HowToDescribeModal onClose={handleCloseHowTo} />}
    </div>
  );
}

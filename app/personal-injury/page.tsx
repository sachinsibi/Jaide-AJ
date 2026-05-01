'use client';

import { useRouter } from 'next/navigation';
import { AlertTriangle, ArrowLeft, ExternalLink } from 'lucide-react';

export default function PersonalInjuryPage() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom, #FEF3C7 0%, #FFFBEB 40%, #ffffff 100%)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <header style={{ width: '100%', padding: '1.25rem 1.5rem' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.375rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#073C65', fontWeight: 600, fontSize: '0.9375rem',
            padding: 0, fontFamily: 'inherit',
          }}
        >
          <ArrowLeft style={{ width: '18px', height: '18px' }} />
          Back
        </button>
      </header>

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '2rem 1.5rem 3rem', gap: '1.5rem',
      }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: 'rgba(245, 158, 11, 0.12)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <AlertTriangle style={{ width: '36px', height: '36px', color: '#D97706' }} />
        </div>

        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <h1 style={{ color: '#073C65', fontSize: '1.625rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem' }}>
            Personal Injury is Outside Our Scope
          </h1>
          <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            JAIDE handles <strong style={{ color: '#073C65' }}>civil disputes</strong> in England & Wales. Personal
            injury compensation claims — where the primary goal is damages for bodily harm — require
            specialist personal injury solicitors and fall outside what we can responsibly help with.
          </p>
          <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            If your situation also involves a civil dispute (e.g., a vehicle damage claim alongside
            an injury), please go back and describe the civil aspect specifically.
          </p>
        </div>

        <div style={{
          background: 'white', borderRadius: '1.25rem',
          boxShadow: '0 2px 16px rgba(7, 60, 101, 0.08)',
          padding: '1.5rem', width: '100%', maxWidth: '480px',
        }}>
          <h2 style={{ color: '#073C65', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
            Free Personal Injury Resources
          </h2>
          {[
            { label: 'Citizens Advice — Accidents & injuries', url: 'https://www.citizensadvice.org.uk/law-and-courts/making-a-personal-injury-claim/' },
            { label: 'Law Society — Find a personal injury solicitor', url: 'https://solicitors.lawsociety.org.uk/' },
          ].map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.75rem 0', borderBottom: '1px solid rgba(7, 60, 101, 0.08)',
                color: '#073C65', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 500,
              }}
            >
              <ExternalLink style={{ width: '16px', height: '16px', color: '#D49E37', flexShrink: 0 }} />
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => router.push('/')}
          style={{
            padding: '1rem 2.5rem', borderRadius: '100px', border: 'none',
            background: '#073C65', color: 'white', fontSize: '1rem', fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          Return to JAIDE
        </button>
      </div>
    </div>
  );
}

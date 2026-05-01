'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, MapPin, Phone, Mail } from 'lucide-react';
import type { IncidentCategory, Lawyer } from '@/lib/types';

export function LawyersScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = (searchParams.get('category') ?? 'general-civil') as IncidentCategory;

  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/lawyers?category=${category}`);
      const data = await res.json() as Lawyer[];
      setLawyers(data);
      setLoading(false);
    };
    load();
  }, [category]);

  const handleBack = () => {
    router.push('/analysis');
  };

  const handleStartOver = () => {
    sessionStorage.clear();
    router.push('/');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFBFC' }}>
      {/* Header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 30, background: 'white',
        borderBottom: '1px solid rgba(7, 60, 101, 0.08)',
        boxShadow: '0 2px 8px rgba(7, 60, 101, 0.06)', padding: '0 1.5rem',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          <button
            onClick={handleBack}
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'none', border: 'none', cursor: 'pointer', color: '#073C65', fontWeight: 600, fontSize: '0.9375rem', padding: 0, fontFamily: 'inherit' }}
          >
            <ArrowLeft style={{ width: '18px', height: '18px' }} /> Back
          </button>
          <span style={{ color: '#073C65', fontWeight: 800, fontSize: '1.125rem' }}>JAIDE</span>
          <button
            onClick={handleStartOver}
            style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit' }}
          >
            Start over
          </button>
        </div>
      </header>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        {/* Paywall notice */}
        <div style={{
          background: 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)',
          borderRadius: '1.25rem', padding: '1.5rem', marginBottom: '2rem', color: 'white',
        }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D49E37', marginBottom: '0.5rem' }}>
            JAIDE Lawyer Directory
          </p>
          <h1 style={{ fontSize: '1.375rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.75rem' }}>
            Solicitors matched to your situation
          </h1>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, opacity: 0.85 }}>
            These solicitors specialise in <strong>{category.replace('-', ' ')}</strong> law in England & Wales.
            Contact them directly — their details are provided below.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)', borderRadius: '0.875rem',
          border: '1px solid rgba(245, 158, 11, 0.2)', padding: '1rem 1.25rem', marginBottom: '2rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: '#92400e', lineHeight: 1.6 }}>
            <strong>Note:</strong> These are sample listings. JAIDE does not endorse any specific solicitor. Always verify a solicitor&apos;s registration with the Solicitors Regulation Authority (sra.org.uk) before instructing them.
          </p>
        </div>

        {/* Lawyer cards */}
        {loading ? (
          <p style={{ color: '#6B7280', textAlign: 'center', padding: '2rem' }}>Loading solicitors…</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {lawyers.map(lawyer => (
              <div
                key={lawyer.id}
                style={{
                  background: 'white', borderRadius: '1.25rem',
                  boxShadow: '0 2px 16px rgba(7, 60, 101, 0.08)',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ color: '#073C65', fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.25rem' }}>{lawyer.name}</h2>
                    <p style={{ color: '#D49E37', fontSize: '0.875rem', fontWeight: 600 }}>{lawyer.firm}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0 }}>
                    <MapPin style={{ width: '14px', height: '14px', color: '#9CA3AF' }} />
                    <span style={{ color: '#9CA3AF', fontSize: '0.8125rem' }}>{lawyer.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {lawyer.specialisms.map(s => (
                    <span
                      key={s}
                      style={{
                        padding: '0.25rem 0.75rem', borderRadius: '100px',
                        background: 'rgba(7, 60, 101, 0.06)', color: '#073C65',
                        fontSize: '0.75rem', fontWeight: 600,
                      }}
                    >
                      {s.replace('-', ' ')}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  <a
                    href={`tel:${lawyer.phone}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#073C65', textDecoration: 'none', fontSize: '0.9rem' }}
                  >
                    <Phone style={{ width: '15px', height: '15px', color: '#D49E37' }} />
                    {lawyer.phone}
                  </a>
                  <a
                    href={`mailto:${lawyer.email}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#073C65', textDecoration: 'none', fontSize: '0.9rem' }}
                  >
                    <Mail style={{ width: '15px', height: '15px', color: '#D49E37' }} />
                    {lawyer.email}
                  </a>
                  <a
                    href={lawyer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#073C65', textDecoration: 'none', fontSize: '0.9rem' }}
                  >
                    <ExternalLink style={{ width: '15px', height: '15px', color: '#D49E37' }} />
                    {lawyer.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

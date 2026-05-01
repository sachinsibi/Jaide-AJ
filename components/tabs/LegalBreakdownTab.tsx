import { Scale, BookOpen, Gavel, FileCheck, AlertTriangle, Lightbulb, Info, TestTube } from 'lucide-react';
import type { AnalysisOutput } from '@/lib/types';

interface LegalBreakdownTabProps {
  legalBreakdown: AnalysisOutput['legalBreakdown'];
}

export function LegalBreakdownTab({ legalBreakdown }: LegalBreakdownTabProps) {
  const { doctrines, caselaw, legalTests, procedures, evidenceStandards, precedentPatterns, keyTerminology } = legalBreakdown;

  return (
    <div>
      {/* Jurisdiction notice */}
      <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.06)', padding: '1rem', border: '1px solid rgba(7, 60, 101, 0.12)', marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <Info style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '0.125rem', color: '#073C65' }} />
        <p style={{ fontSize: '0.8125rem', color: '#073C65', lineHeight: '1.6', fontWeight: 500 }}>
          <strong>Jurisdiction:</strong> All legal principles, case law, and procedures referenced apply to <strong>England & Wales only</strong>. This is general legal information, not legal advice.
        </p>
      </div>

      {/* Doctrines */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <BookOpen style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Applicable Legal Doctrines and Principles
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.75rem' }}>
          {doctrines.map((d, i) => (
            <div key={i} style={{ paddingLeft: '1rem', borderLeft: '3px solid #D49E37' }}>
              <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: '#6B7280' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case law */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Scale style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Relevant Case Law (England & Wales)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingLeft: '1.75rem' }}>
          {caselaw.map((c, i) => (
            <div key={i} className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.04)', padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.1)' }}>
              <h4 style={{ color: '#073C65', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.375rem' }}>{c.name}</h4>
              <p style={{ color: '#9CA3AF', fontSize: '0.8125rem', marginBottom: '0.625rem', fontStyle: 'italic' }}>{c.citation}</p>
              <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: '1.7' }}>{c.principle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal tests */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <TestTube style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Legal Tests Applied by Courts
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingLeft: '1.75rem' }}>
          {legalTests.map((t, i) => (
            <div key={i}>
              <h4 style={{ color: '#073C65', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.5rem' }}>{t.test}</h4>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: '1.7' }}>{t.application}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Procedures */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Gavel style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Procedural Framework
        </h3>
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.75rem' }}>
          {procedures.map((p, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.875rem' }}>
              <div className="rounded-full" style={{ flexShrink: 0, width: '28px', height: '28px', background: '#073C65', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
                {i + 1}
              </div>
              <p style={{ color: '#6B7280', fontSize: '0.9375rem', paddingTop: '0.25rem', lineHeight: '1.7' }}>{p}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Evidence standards */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <FileCheck style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Evidence Standards and Burden of Proof
        </h3>
        <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.04)', padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.1)', marginLeft: '1.75rem' }}>
          <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: '1.7' }}>{evidenceStandards}</p>
        </div>
      </div>

      {/* Precedent patterns */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Lightbulb style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Judicial Approach and Precedent Patterns
        </h3>
        <p style={{ color: '#6B7280', fontSize: '0.9375rem', lineHeight: '1.7', paddingLeft: '1.75rem' }}>{precedentPatterns}</p>
      </div>

      {/* Key terminology */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <BookOpen style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Legal Terminology
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingLeft: '1.75rem' }}>
          {keyTerminology.map((t, i) => (
            <div key={i}>
              <h4 style={{ color: '#073C65', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.375rem' }}>{t.term}</h4>
              <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: '1.7' }}>{t.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl" style={{ background: 'rgba(220, 38, 38, 0.06)', padding: '1.25rem', border: '1px solid rgba(220, 38, 38, 0.15)', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
        <AlertTriangle style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '0.125rem', color: '#DC2626' }} />
        <div>
          <h4 style={{ color: '#991B1B', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.5rem' }}>General Legal Information Only</h4>
          <p style={{ fontSize: '0.875rem', color: '#7F1D1D', lineHeight: '1.7' }}>
            This legal breakdown provides <strong>general educational information</strong> about the law of England & Wales. It does <strong>NOT constitute legal advice</strong>. Application of legal principles to specific facts requires professional analysis by a qualified solicitor. This does not create a solicitor-client relationship.
          </p>
        </div>
      </div>
    </div>
  );
}

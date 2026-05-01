import { Scale, BookOpen, Gavel, AlertTriangle, Info, HelpCircle } from 'lucide-react';
import type { AnalysisOutput } from '@/lib/types';

interface OverviewTabProps {
  overview: AnalysisOutput['overview'];
}

export function OverviewTab({ overview }: OverviewTabProps) {
  const { legalArea, applicableDuties, keyLegalQuestions, typicalPathway, timeframeStructure, costStructure } = overview;

  return (
    <div>
      {/* Jurisdiction notice */}
      <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.06)', padding: '1rem', border: '1px solid rgba(7, 60, 101, 0.12)', marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <Info style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '0.125rem', color: '#073C65' }} />
        <p style={{ fontSize: '0.8125rem', color: '#073C65', lineHeight: '1.6', fontWeight: 500 }}>
          <strong>Jurisdiction:</strong> All legal analysis relates to the law of <strong>England & Wales only</strong>. This does not apply to Scotland, Northern Ireland, or other jurisdictions.
        </p>
      </div>

      {/* Legal area */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Scale style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Legal Area Classification
        </h3>
        <div className="rounded-xl" style={{ background: 'rgba(212, 158, 55, 0.06)', padding: '1.25rem', border: '1px solid rgba(212, 158, 55, 0.15)', marginLeft: '1.75rem' }}>
          <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', fontWeight: 600, color: '#073C65' }}>{legalArea}</p>
        </div>
      </div>

      {/* Applicable duties */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <BookOpen style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Applicable Legal Duties and Obligations
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingLeft: '1.75rem' }}>
          {applicableDuties.map((duty, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D49E37', flexShrink: 0, marginTop: '0.625rem' }} />
              <span style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: '#6B7280' }}>{duty}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key legal questions */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <HelpCircle style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Key Legal Questions Courts Typically Examine
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingLeft: '1.75rem' }}>
          {keyLegalQuestions.map((q, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#073C65', flexShrink: 0, marginTop: '0.625rem' }} />
              <span style={{ fontSize: '0.9375rem', lineHeight: '1.7', fontStyle: 'italic', color: '#6B7280' }}>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Typical pathway */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Gavel style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Typical Dispute Resolution Pathway in England & Wales
        </h3>
        <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', paddingLeft: '1.75rem', color: '#6B7280' }}>{typicalPathway}</p>
      </div>

      {/* Timeframes */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Gavel style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Typical Procedural Timeframes
        </h3>
        <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.04)', padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.1)', marginLeft: '1.75rem' }}>
          <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: '#6B7280' }}>{timeframeStructure}</p>
        </div>
        <p style={{ fontSize: '0.8125rem', lineHeight: '1.6', paddingLeft: '1.75rem', marginTop: '0.5rem', fontStyle: 'italic', color: '#9CA3AF' }}>
          Timeframes are indicative. Actual duration varies based on complexity, court workload, and case-specific factors.
        </p>
      </div>

      {/* Costs */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <BookOpen style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          Indicative Cost Structure (England & Wales)
        </h3>
        <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.04)', padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.1)', marginLeft: '1.75rem' }}>
          <p style={{ fontSize: '0.9375rem', lineHeight: '1.7', color: '#6B7280' }}>{costStructure}</p>
        </div>
        <p style={{ fontSize: '0.8125rem', lineHeight: '1.6', paddingLeft: '1.75rem', marginTop: '0.5rem', fontStyle: 'italic', color: '#9CA3AF' }}>
          Cost ranges are indicative only. Actual costs depend on case complexity, location, and choice of representation.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="rounded-xl" style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '1.25rem', border: '1px solid rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
        <AlertTriangle style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '0.125rem', color: '#D97706' }} />
        <div>
          <h4 style={{ color: '#92400e', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.5rem' }}>General Legal Information Only</h4>
          <p style={{ fontSize: '0.875rem', color: '#92400e', lineHeight: '1.7' }}>
            This overview provides <strong>general legal information</strong> about the law of England & Wales. It is <strong>not legal advice</strong> and does not create a solicitor-client relationship. Application of legal principles to specific facts requires professional legal analysis by a qualified solicitor.
          </p>
        </div>
      </div>
    </div>
  );
}

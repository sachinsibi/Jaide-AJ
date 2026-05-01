import { Sparkles, Heart, Info, Lightbulb } from 'lucide-react';
import type { AnalysisOutput } from '@/lib/types';

interface ELI5TabProps {
  eli5: AnalysisOutput['eli5'];
}

export function ELI5Tab({ eli5 }: ELI5TabProps) {
  const { whatIsThisAreaOfLaw, howDoesTheLawWork, whatAreTheRules, howDoCourtsDecide, whatCanHappen } = eli5;

  const boldify = (text: string) =>
    text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  return (
    <div>
      {/* Jurisdiction notice */}
      <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.06)', padding: '1rem', border: '1px solid rgba(7, 60, 101, 0.12)', marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <Info style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '0.125rem', color: '#073C65' }} />
        <p style={{ fontSize: '0.8125rem', color: '#073C65', lineHeight: '1.6', fontWeight: 500 }}>
          This explains how the law works in <strong>England & Wales only</strong>. Different rules apply in Scotland, Northern Ireland, and other countries.
        </p>
      </div>

      {/* What is this area */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Sparkles style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          What Is This Area of Law?
        </h3>
        <div className="rounded-xl" style={{ background: 'rgba(212, 158, 55, 0.06)', padding: '1.25rem', border: '1px solid rgba(212, 158, 55, 0.15)', marginLeft: '1.75rem' }}>
          <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', color: '#6B7280' }} dangerouslySetInnerHTML={{ __html: boldify(whatIsThisAreaOfLaw) }} />
        </div>
      </div>

      {/* How does the law work */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Info style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          How Does the Law Work?
        </h3>
        <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', paddingLeft: '1.75rem', color: '#6B7280' }} dangerouslySetInnerHTML={{ __html: boldify(howDoesTheLawWork) }} />
      </div>

      {/* Rules */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Heart style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          What Are the Basic Rules?
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.75rem' }}>
          {whatAreTheRules.map((rule, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div className="rounded-full" style={{ flexShrink: 0, width: '24px', height: '24px', background: '#D49E37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'white' }}>
                {i + 1}
              </div>
              <p style={{ fontSize: '0.9375rem', paddingTop: '0.125rem', lineHeight: '1.7', color: '#6B7280' }}>{rule}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* How courts decide */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Lightbulb style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          How Do Courts Decide These Cases?
        </h3>
        <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', paddingLeft: '1.75rem', color: '#6B7280' }} dangerouslySetInnerHTML={{ __html: boldify(howDoCourtsDecide) }} />
      </div>

      {/* What can happen */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
          <Info style={{ width: '18px', height: '18px', color: '#D49E37' }} />
          What Can Happen Next?
        </h3>
        <p style={{ fontSize: '0.9375rem', lineHeight: '1.8', paddingLeft: '1.75rem', color: '#6B7280' }} dangerouslySetInnerHTML={{ __html: boldify(whatCanHappen) }} />
      </div>

      {/* Remember */}
      <div className="rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '1.25rem', border: '1px solid rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
        <Sparkles style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '0.125rem', color: '#2563EB' }} />
        <div>
          <h4 style={{ color: '#1E40AF', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.5rem' }}>Remember!</h4>
          <p style={{ fontSize: '0.875rem', color: '#1E3A8A', lineHeight: '1.7' }}>
            This explains how the <strong>law works</strong> in England & Wales in simple terms. It&apos;s not advice about what <strong>you</strong> should do. Every situation is different, so it&apos;s best to talk to a solicitor who can look at your specific details and give you proper advice. JAIDE helps you understand the legal world so you&apos;re ready to have that conversation. You can also get free advice from Citizens Advice.
          </p>
        </div>
      </div>
    </div>
  );
}

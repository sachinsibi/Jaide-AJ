import { ExternalLink, Book, Scale, Building, Bookmark, Info } from 'lucide-react';
import type { ReferenceItem } from '@/lib/types';

interface ReferencesTabProps {
  references: ReferenceItem[];
}

const TYPE_CONFIG: Record<ReferenceItem['type'], { icon: React.ComponentType<{ style?: React.CSSProperties }>, label: string, color: string }> = {
  statute:  { icon: Book,       label: 'Legislation',      color: '#073C65' },
  guidance: { icon: Bookmark,   label: 'Guidance',         color: '#0A5A8A' },
  agency:   { icon: Building,   label: 'Agency/Body',      color: '#D49E37' },
  tribunal: { icon: Scale,      label: 'Court/Tribunal',   color: '#6B7280' },
  resource: { icon: Info,       label: 'Free Resource',    color: '#10B981' },
  caselaw:  { icon: Scale,      label: 'Case Law',         color: '#7C3AED' },
};

export function ReferencesTab({ references }: ReferencesTabProps) {
  const grouped = references.reduce<Record<string, ReferenceItem[]>>((acc, ref) => {
    if (!acc[ref.type]) acc[ref.type] = [];
    acc[ref.type].push(ref);
    return acc;
  }, {});

  const typeOrder: ReferenceItem['type'][] = ['statute', 'caselaw', 'tribunal', 'guidance', 'agency', 'resource'];

  return (
    <div>
      {/* Jurisdiction notice */}
      <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.06)', padding: '1rem', border: '1px solid rgba(7, 60, 101, 0.12)', marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <Info style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '0.125rem', color: '#073C65' }} />
        <p style={{ fontSize: '0.8125rem', color: '#073C65', lineHeight: '1.6', fontWeight: 500 }}>
          All resources relate to <strong>England & Wales</strong> law. Always verify information from official sources.
        </p>
      </div>

      {typeOrder.map(type => {
        const items = grouped[type];
        if (!items?.length) return null;
        const config = TYPE_CONFIG[type];
        const Icon = config.icon;
        return (
          <div key={type} style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#073C65' }}>
              <Icon style={{ width: '18px', height: '18px', color: config.color }} />
              {config.label}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingLeft: '1.75rem' }}>
              {items.map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                    background: 'white', borderRadius: '0.875rem',
                    padding: '1rem 1.25rem',
                    border: '1px solid rgba(7, 60, 101, 0.08)',
                    textDecoration: 'none',
                    boxShadow: '0 1px 4px rgba(7, 60, 101, 0.06)',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <ExternalLink style={{ width: '16px', height: '16px', color: '#D49E37', flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <p style={{ color: '#073C65', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.25rem' }}>{ref.title}</p>
                    <p style={{ color: '#9CA3AF', fontSize: '0.8125rem', lineHeight: '1.6' }}>{ref.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}

      {/* SRA reminder */}
      <div className="rounded-xl" style={{ background: 'rgba(7, 60, 101, 0.04)', padding: '1.25rem', border: '1px solid rgba(7, 60, 101, 0.1)' }}>
        <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: '1.7' }}>
          <strong style={{ color: '#073C65' }}>Finding a solicitor:</strong> Use the{' '}
          <a href="https://solicitors.lawsociety.org.uk/" target="_blank" rel="noopener noreferrer" style={{ color: '#073C65', fontWeight: 600 }}>
            Law Society Find a Solicitor
          </a>{' '}
          directory to find a regulated solicitor in England & Wales. Always verify their Solicitors Regulation Authority registration at{' '}
          <a href="https://www.sra.org.uk/consumers/register/" target="_blank" rel="noopener noreferrer" style={{ color: '#073C65', fontWeight: 600 }}>
            sra.org.uk
          </a>.
        </p>
      </div>
    </div>
  );
}

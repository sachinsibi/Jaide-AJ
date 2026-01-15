import React, { useState } from 'react';
import { Logo } from './Logo';
import { FileText, Scale, Baby, BookOpen, UserCircle, Sparkles, ChevronDown, RotateCcw, Save, Download, Briefcase } from 'lucide-react';
import { OverviewTab } from './tabs/OverviewTab';
import { LegalBreakdownTab } from './tabs/LegalBreakdownTab';
import { ELI5Tab } from './tabs/ELI5Tab';
import { ReferencesTab } from './tabs/ReferencesTab';

interface HomeScreenProps {
  caseData: Record<string, string>;
  onAccessLawyers: () => void;
  onStartOver?: () => void;
}

export function HomeScreen({ caseData, onAccessLawyers, onStartOver }: HomeScreenProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: FileText, 
      description: 'Quick summary of your legal situation',
      color: '#D49E37',
      component: <OverviewTab scenario={caseData.scenario || ''} onboardingData={caseData} />
    },
    { 
      id: 'legal', 
      label: 'Full Legal Breakdown', 
      icon: Scale, 
      description: 'Detailed legal analysis and implications',
      color: '#073C65',
      component: <LegalBreakdownTab scenario={caseData.scenario || ''} onboardingData={caseData} />
    },
    { 
      id: 'eli5', 
      label: 'Explain Like I\'m 5', 
      icon: Baby, 
      description: 'Simple explanation in plain language',
      color: '#D49E37',
      component: <ELI5Tab scenario={caseData.scenario || ''} onboardingData={caseData} />
    },
    { 
      id: 'references', 
      label: 'Links and Literature', 
      icon: BookOpen, 
      description: 'Resources, references, and helpful materials',
      color: '#073C65',
      component: <ReferencesTab scenario={caseData.scenario || ''} onboardingData={caseData} />
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleExport = () => {
    alert('Export functionality - Downloads PDF summary');
  };

  const handleSave = () => {
    alert('Save functionality - Saves progress for later');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%', 
      background: 'linear-gradient(to bottom, #F9FAFB 0%, white 50%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Faded logo pattern background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.006, zIndex: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '4rem', padding: '4rem' }}>
          {[...Array(64)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
                <path d="M6 8C6 6.89543 6.89543 6 8 6H22V40H8C6.89543 40 6 39.1046 6 38V8Z" fill="#073C65" />
                <path d="M26 6H40C41.1046 6 42 6.89543 42 8V38C42 39.1046 41.1046 40 40 40H26V6Z" fill="#073C65" />
                <path d="M22 6H26V40H22V6Z" fill="#042841" />
                <path d="M28 4H32C33.1046 4 34 4.89543 34 6V24L30 20L26 24V6C26 4.89543 26.8954 4 28 4Z" fill="#D49E37" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header style={{ 
        width: '100%',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 20,
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
      }}>
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '1.25rem 1.5rem' }}>
          {/* Top bar with logo and actions */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <Logo size="small" showText={true} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Start New Analysis Button */}
              {onStartOver && (
                <button 
                  className="rounded-xl transition-all"
                  style={{
                    padding: '0.625rem 1rem',
                    background: 'transparent',
                    border: '1.5px solid #E5E7EB',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#073C65'
                  }}
                  onClick={onStartOver}
                  aria-label="Start new analysis"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(7, 60, 101, 0.04)';
                    e.currentTarget.style.borderColor = '#D49E37';
                    e.currentTarget.style.color = '#D49E37';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.color = '#073C65';
                  }}
                >
                  <RotateCcw style={{ width: '16px', height: '16px' }} />
                  <span style={{ display: window.innerWidth > 640 ? 'inline' : 'none' }}>New Analysis</span>
                </button>
              )}
              
              <button 
                className="rounded-full transition-all"
                style={{
                  padding: '0.5rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => alert('Profile settings - Coming soon!')}
                aria-label="User profile"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <UserCircle className="text-grey-dark" style={{ width: '28px', height: '28px' }} />
              </button>
            </div>
          </div>

          {/* AI-Powered Badge */}
          <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div 
              className="rounded-full"
              style={{ 
                padding: '0.5rem 1rem',
                background: 'rgba(212, 158, 55, 0.08)',
                border: '1px solid rgba(212, 158, 55, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles className="text-gold" style={{ width: '14px', height: '14px' }} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600 }} className="text-gold">
                AI Analysis Complete
              </span>
            </div>
          </div>

          {/* Scenario Summary */}
          <div 
            className="rounded-xl"
            style={{ 
              background: 'white',
              border: '1px solid #E5E7EB',
              padding: '1.5rem'
            }}
          >
            <h3 className="text-navy" style={{ fontSize: '0.9375rem', fontWeight: 600, margin: '0 0 0.625rem 0' }}>
              Your Legal Situation
            </h3>
            <p className="text-grey-dark" style={{ lineHeight: '1.65', fontSize: '0.875rem', margin: 0 }}>
              Based on your description, we've prepared detailed information to help you understand your situation 
              and next steps. Click the arrows below to explore each section.
            </p>
          </div>
        </div>
      </header>

      {/* Accordion Sections */}
      <div style={{ 
        width: '100%', 
        padding: '2rem 1.5rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div
                  key={section.id}
                  className="rounded-2xl transition-all duration-300"
                  style={{
                    background: 'white',
                    border: isExpanded ? `2px solid ${section.color}` : '1px solid #E5E7EB',
                    boxShadow: isExpanded 
                      ? `0 4px 12px ${section.color}15` 
                      : '0 1px 2px rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Section Header - Button */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full text-left transition-all duration-200"
                    style={{
                      padding: '1.5rem',
                      background: isExpanded ? `${section.color}05` : 'white',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                      {/* Icon Circle */}
                      <div 
                        className="rounded-full transition-all duration-200"
                        style={{
                          width: '52px',
                          height: '52px',
                          background: isExpanded 
                            ? section.color
                            : `${section.color}10`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon 
                          style={{ width: '24px', height: '24px' }}
                          className={isExpanded ? 'text-white' : ''}
                          color={isExpanded ? 'white' : section.color}
                        />
                      </div>

                      {/* Text Content */}
                      <div style={{ flex: 1 }}>
                        <div 
                          className="text-navy"
                          style={{ 
                            fontSize: '1.125rem', 
                            fontWeight: 600,
                            marginBottom: '0.25rem',
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {section.label}
                        </div>
                        <div 
                          className="text-grey-medium"
                          style={{ 
                            fontSize: '0.875rem',
                            lineHeight: '1.4'
                          }}
                        >
                          {section.description}
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: isExpanded ? section.color : '#F3F4F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <ChevronDown 
                        style={{ width: '24px', height: '24px' }}
                        className={isExpanded ? 'text-white' : 'text-grey-dark'}
                      />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div 
                      style={{ 
                        padding: '0 2rem 2rem 2rem',
                        borderTop: `1px solid ${section.color}15`,
                        animation: 'expandContent 0.3s ease-out'
                      }}
                    >
                      {section.component}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginTop: '1.5rem' }}>
            {/* Save Progress */}
            <button
              onClick={handleSave}
              className="rounded-2xl transition-all"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                background: 'white',
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                minHeight: '140px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(7, 60, 101, 0.04)';
                e.currentTarget.style.borderColor = '#073C65';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
            >
              <div 
                className="rounded-full" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(7, 60, 101, 0.1)'
                }}
              >
                <Save className="text-navy" style={{ width: '28px', height: '28px' }} />
              </div>
              <div>
                <p className="text-navy" style={{ fontWeight: 600, fontSize: '0.9375rem' }}>Save Progress</p>
              </div>
            </button>

            {/* Export Summary */}
            <button
              onClick={handleExport}
              className="rounded-2xl transition-all"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                background: 'white',
                border: '1px solid #E5E7EB',
                cursor: 'pointer',
                minHeight: '140px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(7, 60, 101, 0.04)';
                e.currentTarget.style.borderColor = '#073C65';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
            >
              <div 
                className="rounded-full" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(7, 60, 101, 0.1)'
                }}
              >
                <Download className="text-navy" style={{ width: '28px', height: '28px' }} />
              </div>
              <div>
                <p className="text-navy" style={{ fontWeight: 600, fontSize: '0.9375rem' }}>Export Summary</p>
              </div>
            </button>

            {/* Find a Lawyer - Prominent CTA */}
            <button
              onClick={onAccessLawyers}
              className="rounded-2xl transition-all"
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #D49E37, #E0B24E)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(212, 158, 55, 0.3)',
                minHeight: '140px',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 158, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 158, 55, 0.3)';
              }}
            >
              <div 
                className="rounded-full" 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.25)'
                }}
              >
                <Briefcase className="text-white" style={{ width: '28px', height: '28px' }} />
              </div>
              <div>
                <p className="text-white" style={{ fontWeight: 600, fontSize: '0.9375rem' }}>Find a Lawyer</p>
              </div>
              <div
                className="rounded-full"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '28px',
                  height: '28px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="text-white" style={{ fontSize: '1rem', fontWeight: 600 }}>→</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes expandContent {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

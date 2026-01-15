import React, { useState } from 'react';
import { Logo } from './Logo';
import { Home, Car, FileText, Briefcase, Hammer, Scale, CheckCircle, ChevronDown } from 'lucide-react';

export type IncidentCategory = 
  | 'tenancy'
  | 'property-damage'
  | 'contract-service'
  | 'employment'
  | 'motor-accident'
  | 'general-civil'
  | 'personal-injury';

interface CategoryConfirmationScreenProps {
  detectedCategory: IncidentCategory;
  userInput: string;
  onConfirm: (category: IncidentCategory) => void;
  onBack: () => void;
}

const categories = [
  {
    id: 'tenancy' as const,
    label: 'Tenancy / Housing Dispute',
    icon: Home,
    description: 'Landlord, tenant, rent, repairs, eviction, deposit issues',
    color: '#073C65'
  },
  {
    id: 'property-damage' as const,
    label: 'Property Damage (Non-Tenancy)',
    icon: Hammer,
    description: 'Damage to property, neighbor disputes, construction issues',
    color: '#0A5A8A'
  },
  {
    id: 'contract-service' as const,
    label: 'Contract / Service Dispute',
    icon: FileText,
    description: 'Refunds, service failures, unfulfilled agreements',
    color: '#D49E37'
  },
  {
    id: 'employment' as const,
    label: 'Employment Issue (Non-Injury)',
    icon: Briefcase,
    description: 'Workplace disputes, termination, wages, discrimination',
    color: '#B8822A'
  },
  {
    id: 'motor-accident' as const,
    label: 'Motor Accident & Insurance Dispute',
    icon: Car,
    description: 'Vehicle accidents, insurance claims, damage disputes',
    color: '#073C65'
  },
  {
    id: 'general-civil' as const,
    label: 'General Civil Dispute (Other)',
    icon: Scale,
    description: 'Other civil matters not covered above',
    color: '#6B7280'
  }
];

export function CategoryConfirmationScreen({ 
  detectedCategory, 
  userInput,
  onConfirm,
  onBack 
}: CategoryConfirmationScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<IncidentCategory>(detectedCategory);
  const [showDropdown, setShowDropdown] = useState(false);

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const CurrentIcon = currentCategory?.icon || Scale;

  const handleConfirm = () => {
    onConfirm(selectedCategory);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      background: 'linear-gradient(to bottom, #E6F2FA, #F5FAFD, white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Faded logo backsplash */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.008 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4rem', padding: '4rem', height: '100%' }}>
          {[...Array(80)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="80" height="80" viewBox="0 0 48 48" fill="none">
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
      <header style={{ width: '100%', padding: '2rem 1.5rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <Logo size="small" showText={true} />
      </header>

      {/* Main content */}
      <div style={{ 
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div 
            className="rounded-full"
            style={{ 
              width: '64px',
              height: '64px',
              margin: '0 auto 1.5rem',
              background: 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(7, 60, 101, 0.2)'
            }}
          >
            <CheckCircle className="text-white" style={{ width: '32px', height: '32px' }} />
          </div>
          
          <h1 className="text-navy" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            We've classified your situation as:
          </h1>
          <p className="text-grey-dark" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Based on your description, we've identified the type of legal matter. You can change this if it doesn't look right.
          </p>
        </div>

        {/* Detected Category Card */}
        <div 
          className="rounded-2xl"
          style={{ 
            background: 'white',
            border: '2px solid rgba(7, 60, 101, 0.15)',
            padding: '2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 8px 24px rgba(7, 60, 101, 0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div 
              className="rounded-xl"
              style={{
                width: '56px',
                height: '56px',
                background: `${currentCategory?.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CurrentIcon style={{ width: '28px', height: '28px', color: currentCategory?.color }} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="text-navy" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {currentCategory?.label}
              </div>
              <div className="text-grey-medium" style={{ fontSize: '0.875rem' }}>
                {currentCategory?.description}
              </div>
            </div>
          </div>

          {/* Change Category Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="rounded-lg transition-all"
              style={{
                width: '100%',
                padding: '0.875rem 1.25rem',
                background: 'rgba(7, 60, 101, 0.05)',
                border: '1px solid rgba(7, 60, 101, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <span className="text-navy" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                Change category
              </span>
              <ChevronDown 
                className="text-navy" 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  transform: showDropdown ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s'
                }} 
              />
            </button>

            {showDropdown && (
              <div 
                className="rounded-lg"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 0.5rem)',
                  left: 0,
                  right: 0,
                  background: 'white',
                  border: '1px solid rgba(7, 60, 101, 0.15)',
                  boxShadow: '0 8px 24px rgba(7, 60, 101, 0.15)',
                  zIndex: 20,
                  maxHeight: '400px',
                  overflowY: 'auto'
                }}
              >
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedCategory === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setShowDropdown(false);
                      }}
                      className="transition-all"
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: isSelected ? 'rgba(7, 60, 101, 0.08)' : 'transparent',
                        borderBottom: '1px solid rgba(7, 60, 101, 0.08)',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'rgba(7, 60, 101, 0.04)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <div 
                        className="rounded-lg"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: `${category.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon style={{ width: '20px', height: '20px', color: category.color }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="text-navy" style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.125rem' }}>
                          {category.label}
                        </div>
                        <div className="text-grey-medium" style={{ fontSize: '0.75rem' }}>
                          {category.description}
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle className="text-navy" style={{ width: '20px', height: '20px' }} />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* User Input Preview */}
        <div 
          className="rounded-xl"
          style={{ 
            background: 'rgba(212, 158, 55, 0.08)',
            border: '1px solid rgba(212, 158, 55, 0.2)',
            padding: '1.25rem',
            marginBottom: '2rem'
          }}
        >
          <div className="text-navy" style={{ fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Your description:
          </div>
          <p className="text-grey-dark" style={{ fontSize: '0.875rem', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
            "{userInput}"
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={onBack}
            className="rounded-full transition-all"
            style={{
              flex: '1 1 200px',
              padding: '1rem 2rem',
              background: 'white',
              border: '2px solid rgba(7, 60, 101, 0.15)',
              color: '#073C65',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(7, 60, 101, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
            }}
          >
            Go Back
          </button>
          
          <button
            onClick={handleConfirm}
            className="rounded-full transition-all"
            style={{
              flex: '1 1 200px',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #073C65 0%, #0A5A8A 100%)',
              border: 'none',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: '0 4px 16px rgba(7, 60, 101, 0.25)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(7, 60, 101, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(7, 60, 101, 0.25)';
            }}
          >
            Confirm and Continue
          </button>
        </div>
      </div>
    </div>
  );
}

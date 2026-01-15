import React, { useState } from 'react';
import { Search, ArrowLeft, Star, MapPin, Calendar, X, MessageCircle, Award, Briefcase, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LawyerDirectoryProps {
  caseData: Record<string, string>;
  onBack: () => void;
  onStartOver?: () => void;
}

interface Lawyer {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  consultation: string;
  availability: string;
  profileImage: string;
  bio: string;
  specialization: string[];
  education: string;
  barAdmission: string;
}

export function LawyerDirectory({ caseData, onBack, onStartOver }: LawyerDirectoryProps) {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fresh lawyer database
  const lawyers: Lawyer[] = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Residential Tenancy & Housing Law',
      location: 'Toronto, ON',
      rating: 4.9,
      reviewCount: 127,
      yearsExperience: 15,
      consultation: '$275',
      availability: 'Available Tomorrow',
      profileImage: 'https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDY3MDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Specialized in tenant rights and landlord disputes with over 15 years of dedicated experience. Successfully represented over 500 tenants in tribunal proceedings. Former legal advisor to the Residential Tenancies Board.',
      specialization: ['Tenant Rights Protection', 'Lease Disputes', 'Habitability Claims', 'Eviction Defense'],
      education: 'JD, Osgoode Hall Law School',
      barAdmission: 'Law Society of Ontario, 2009'
    },
    {
      id: 2,
      name: 'James Rodriguez',
      specialty: 'Civil Litigation & Property Disputes',
      location: 'Toronto, ON',
      rating: 4.8,
      reviewCount: 203,
      yearsExperience: 18,
      consultation: '$325',
      availability: 'This Week',
      profileImage: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDY4NTk2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Extensive background in residential tenancy law and civil litigation. Known for strategic negotiation and courtroom excellence. Consistently achieves favorable outcomes for clients in complex housing disputes.',
      specialization: ['Landlord-Tenant Law', 'Property Damage Claims', 'Tribunal Representation', 'Mediation'],
      education: 'JD, University of Toronto Faculty of Law',
      barAdmission: 'Law Society of Ontario, 2006'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      specialty: 'Tenant Advocacy & Consumer Rights',
      location: 'Mississauga, ON',
      rating: 4.9,
      reviewCount: 156,
      yearsExperience: 12,
      consultation: '$250',
      availability: 'Available Now',
      profileImage: 'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NjY0MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Passionate advocate for tenant rights with a focus on accessibility and fairness. Fluent in English, Hindi, and Punjabi. Specializes in helping diverse communities navigate housing law complexities.',
      specialization: ['Tenant Rights', 'Rental Agreements', 'Deposit Recovery', 'Landlord Harassment'],
      education: 'JD, Western University Faculty of Law',
      barAdmission: 'Law Society of Ontario, 2012'
    },
    {
      id: 4,
      name: 'Marcus Thompson',
      specialty: 'Housing Law & Real Estate Disputes',
      location: 'Ottawa, ON',
      rating: 4.7,
      reviewCount: 189,
      yearsExperience: 20,
      consultation: '$350',
      availability: 'Next Week',
      profileImage: 'https://images.unsplash.com/photo-1579168064425-7a8f8ef3f1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBtYW4lMjBzdWl0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0Njg1OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Two decades of experience in residential tenancy and real estate law. Former tribunal adjudicator bringing unique insight to tenant representation. Published author on Ontario housing legislation.',
      specialization: ['Residential Tenancies', 'Lease Termination', 'Rent Control', 'Property Standards'],
      education: 'JD, Queen\'s University Faculty of Law',
      barAdmission: 'Law Society of Ontario, 2004'
    },
    {
      id: 5,
      name: 'Elena Popescu',
      specialty: 'Landlord-Tenant Relations Specialist',
      location: 'Toronto, ON',
      rating: 5.0,
      reviewCount: 94,
      yearsExperience: 10,
      consultation: '$240',
      availability: 'Available Tomorrow',
      profileImage: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwc3VpdHxlbnwxfHx8fDE3NjQ2MDY4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Compassionate lawyer dedicated to protecting tenants from unfair practices. Expertise in maintenance disputes, illegal rent increases, and eviction prevention. Offers sliding scale fees for low-income clients.',
      specialization: ['Eviction Prevention', 'Maintenance Issues', 'Rent Disputes', 'Tenant Protection'],
      education: 'JD, York University Osgoode Hall',
      barAdmission: 'Law Society of Ontario, 2014'
    },
    {
      id: 6,
      name: 'Dr. Kevin Okonkwo',
      specialty: 'Housing Rights & Civil Litigation',
      location: 'Brampton, ON',
      rating: 4.8,
      reviewCount: 142,
      yearsExperience: 13,
      consultation: '$265',
      availability: 'This Week',
      profileImage: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMG9mZmljZXxlbnwxfHx8fDE3NjQ1ODY0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Results-driven attorney with deep understanding of tenant law and housing rights. Known for meticulous case preparation and strong advocacy. Successfully recovered over $2M in damages for tenants.',
      specialization: ['Housing Discrimination', 'Property Damage Recovery', 'Bad Faith Evictions', 'Tribunal Appeals'],
      education: 'JD, University of Ottawa Faculty of Law',
      barAdmission: 'Law Society of Ontario, 2011'
    }
  ];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .lawyer-card {
            flex-direction: column !important;
            gap: 1.25rem !important;
          }
          
          .lawyer-card-image {
            width: 100% !important;
            max-width: 120px !important;
            height: 120px !important;
            margin: 0 auto !important;
          }
          
          .lawyer-card-content {
            text-align: center;
          }
          
          .lawyer-card-meta {
            justify-content: center !important;
            flex-wrap: wrap;
          }
          
          .lawyer-card-bottom {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
          }
          
          .lawyer-card-bottom-left {
            flex-direction: column !important;
            gap: 0.75rem !important;
            align-items: center !important;
          }
          
          .lawyer-card-button {
            width: 100% !important;
          }
          
          .header-title {
            font-size: 1.5rem !important;
          }
          
          .header-subtitle {
            font-size: 0.9375rem !important;
          }
          
          .modal-content {
            padding: 2rem 1.25rem 1.5rem !important;
          }
          
          .modal-header {
            flex-direction: column !important;
            text-align: center;
            gap: 1rem !important;
          }
          
          .modal-header-image {
            margin: 0 auto !important;
          }
          
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
          
          .search-input {
            font-size: 0.9375rem !important;
          }
          
          .nav-buttons {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          
          .new-analysis-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
      
      <div style={{ 
        minHeight: '100vh', 
        width: '100%', 
        background: 'linear-gradient(to bottom, #F9FAFB 0%, white 50%)',
        paddingBottom: '4rem'
      }}>
        {/* Header */}
        <header style={{ 
          width: '100%',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          padding: '1.5rem 1rem',
          position: 'sticky',
          top: 0,
          zIndex: 20,
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
        }}>
          <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
            {/* Navigation buttons */}
            <div className="nav-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <button
                onClick={onBack}
                className="text-navy transition-all"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D49E37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#073C65';
                }}
              >
                <ArrowLeft style={{ width: '18px', height: '18px' }} />
                Back to Analysis
              </button>

              {/* Start New Analysis Button */}
              {onStartOver && (
                <button 
                  className="rounded-xl transition-all new-analysis-btn"
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
                  New Analysis
                </button>
              )}
            </div>

            {/* Title Section */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h1 
                className="text-navy header-title"
                style={{ 
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.025em'
                }}
              >
                Find the Right Lawyer for Your Case
              </h1>
              <p 
                className="text-grey-dark header-subtitle"
                style={{ 
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}
              >
                Specialized attorneys for <strong>Residential Tenancy Matters</strong> • All verified and licensed
              </p>
            </div>

            {/* Search Bar */}
            <div 
              className="rounded-xl"
              style={{
                position: 'relative',
                background: 'white',
                border: '2px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1rem',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#D49E37';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 158, 55, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Search className="text-grey-medium" style={{ width: '20px', height: '20px', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  padding: '1rem 0',
                  background: 'transparent',
                  color: '#111827'
                }}
              />
            </div>

            {/* Results Count */}
            <p className="text-grey-medium" style={{ fontSize: '0.875rem', marginTop: '1rem' }}>
              {lawyers.length} qualified lawyers available
            </p>
          </div>
        </header>

        {/* Lawyer Cards */}
        <div style={{ 
          width: '100%', 
          maxWidth: '1100px', 
          margin: '2rem auto 0',
          padding: '0 1rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {lawyers.map((lawyer) => (
              <div
                key={lawyer.id}
                className="rounded-2xl transition-all lawyer-card"
                style={{
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  padding: '1.5rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#D49E37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                {/* Profile Image */}
                <ImageWithFallback
                  src={lawyer.profileImage}
                  alt={lawyer.name}
                  className="lawyer-card-image"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: '3px solid #F3F4F6'
                  }}
                />

                {/* Content */}
                <div className="lawyer-card-content" style={{ flex: 1, minWidth: 0 }}>
                  {/* Name and Credentials */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <h3 
                      className="text-navy"
                      style={{ 
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        marginBottom: '0.375rem',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {lawyer.name}
                    </h3>
                    <p 
                      className="text-grey-dark"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        marginBottom: '0.5rem'
                      }}
                    >
                      {lawyer.specialty}
                    </p>
                  </div>

                  {/* Rating and Stats */}
                  <div 
                    className="lawyer-card-meta"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      marginBottom: '1rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    {/* Rating */}
                    <div 
                      className="rounded-full"
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        background: 'rgba(212, 158, 55, 0.1)',
                        padding: '0.375rem 0.875rem'
                      }}
                    >
                      <Star 
                        className="text-gold" 
                        style={{ width: '16px', height: '16px', fill: '#D49E37' }} 
                      />
                      <span 
                        className="text-navy"
                        style={{ fontSize: '0.875rem', fontWeight: 700 }}
                      >
                        {lawyer.rating}
                      </span>
                      <span 
                        className="text-grey-medium"
                        style={{ fontSize: '0.8125rem' }}
                      >
                        ({lawyer.reviewCount})
                      </span>
                    </div>

                    {/* Experience */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award 
                        className="text-grey-medium" 
                        style={{ width: '16px', height: '16px' }} 
                      />
                      <span 
                        className="text-grey-dark"
                        style={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        {lawyer.yearsExperience} yrs
                      </span>
                    </div>

                    {/* Location */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin 
                        className="text-grey-medium" 
                        style={{ width: '16px', height: '16px' }} 
                      />
                      <span 
                        className="text-grey-dark"
                        style={{ fontSize: '0.875rem' }}
                      >
                        {lawyer.location}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p 
                    className="text-grey-dark"
                    style={{ 
                      fontSize: '0.875rem',
                      lineHeight: '1.7',
                      marginBottom: '1rem'
                    }}
                  >
                    {lawyer.bio}
                  </p>

                  {/* Specializations Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {lawyer.specialization.slice(0, 3).map((spec, index) => (
                      <div
                        key={index}
                        className="rounded-full"
                        style={{
                          padding: '0.375rem 0.75rem',
                          background: 'rgba(7, 60, 101, 0.06)',
                          fontSize: '0.75rem',
                          color: '#073C65',
                          fontWeight: 500,
                          border: '1px solid rgba(7, 60, 101, 0.1)'
                        }}
                      >
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Row - Availability and CTA */}
                  <div 
                    className="lawyer-card-bottom"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      gap: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #F3F4F6'
                    }}
                  >
                    <div 
                      className="lawyer-card-bottom-left"
                      style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                      {/* Availability */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar 
                          className="text-grey-medium" 
                          style={{ width: '16px', height: '16px' }} 
                        />
                        <span 
                          className="text-grey-dark"
                          style={{ fontSize: '0.8125rem', fontWeight: 500 }}
                        >
                          {lawyer.availability}
                        </span>
                      </div>

                      {/* Price */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Briefcase 
                          className="text-grey-medium" 
                          style={{ width: '16px', height: '16px' }} 
                        />
                        <span 
                          className="text-navy"
                          style={{ fontSize: '1rem', fontWeight: 700 }}
                        >
                          {lawyer.consultation}
                        </span>
                        <span 
                          className="text-grey-medium"
                          style={{ fontSize: '0.8125rem' }}
                        >
                          consult
                        </span>
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <button
                      onClick={() => setSelectedLawyer(lawyer)}
                      className="rounded-xl transition-all lawyer-card-button"
                      style={{
                        padding: '0.875rem 1.75rem',
                        background: '#D49E37',
                        border: 'none',
                        color: 'white',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(212, 158, 55, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#E0B24E';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 158, 55, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#D49E37';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 158, 55, 0.3)';
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lawyer Profile Modal */}
        {selectedLawyer && (
          <LawyerProfileModal
            lawyer={selectedLawyer}
            onClose={() => setSelectedLawyer(null)}
          />
        )}
      </div>
    </>
  );
}

function LawyerProfileModal({ lawyer, onClose }: { lawyer: Lawyer; onClose: () => void }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (showConfirmation) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div 
          className="rounded-2xl w-full relative"
          style={{
            maxWidth: '480px',
            background: 'white',
            padding: '2rem 1.5rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
            textAlign: 'center'
          }}
        >
          <div 
            className="rounded-full mx-auto"
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, rgba(212, 158, 55, 0.15), rgba(212, 158, 55, 0.08))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}
          >
            <MessageCircle className="text-gold" style={{ width: '40px', height: '40px' }} />
          </div>

          <h2 
            className="text-navy"
            style={{ 
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}
          >
            Consultation Request Sent!
          </h2>
          
          <p 
            className="text-grey-dark"
            style={{ 
              fontSize: '0.9375rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}
          >
            {lawyer.name} has received your case summary and will contact you within 24 hours to schedule your consultation.
          </p>

          <button
            onClick={onClose}
            className="w-full rounded-xl transition-all"
            style={{
              padding: '1rem',
              fontSize: '1rem',
              fontWeight: 600,
              background: '#D49E37',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E0B24E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#D49E37';
            }}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .modal-container {
            max-width: 100% !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
      
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)'
        }}
        onClick={onClose}
      >
        <div 
          className="rounded-2xl w-full relative modal-container"
          style={{
            maxWidth: '700px',
            maxHeight: '90vh',
            overflowY: 'auto',
            background: 'white',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full transition-all"
            style={{
              padding: '0.625rem',
              background: 'rgba(0, 0, 0, 0.05)',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
            }}
          >
            <X className="text-grey-dark" style={{ width: '24px', height: '24px' }} />
          </button>

          {/* Content */}
          <div className="modal-content" style={{ padding: '2.5rem 2rem 2rem' }}>
            {/* Profile Header */}
            <div className="modal-header" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
              <ImageWithFallback
                src={lawyer.profileImage}
                alt={lawyer.name}
                className="modal-header-image"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  flexShrink: 0,
                  border: '3px solid #F3F4F6'
                }}
              />
              <div style={{ flex: 1 }}>
                <h2 
                  className="text-navy"
                  style={{ 
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {lawyer.name}
                </h2>
                <p 
                  className="text-grey-dark"
                  style={{ 
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    fontWeight: 500
                  }}
                >
                  {lawyer.specialty}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div 
                    className="rounded-full"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.375rem',
                      background: 'rgba(212, 158, 55, 0.1)',
                      padding: '0.375rem 0.875rem'
                    }}
                  >
                    <Star 
                      className="text-gold" 
                      style={{ width: '16px', height: '16px', fill: '#D49E37' }} 
                    />
                    <span className="text-navy" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      {lawyer.rating}
                    </span>
                    <span className="text-grey-medium" style={{ fontSize: '0.8125rem' }}>
                      ({lawyer.reviewCount})
                    </span>
                  </div>
                  <span className="text-grey-dark" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    {lawyer.yearsExperience} years exp.
                  </span>
                </div>
              </div>
            </div>

            {/* Education and Bar */}
            <div 
              className="rounded-xl"
              style={{
                background: 'rgba(7, 60, 101, 0.04)',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                border: '1px solid rgba(7, 60, 101, 0.08)'
              }}
            >
              <div className="modal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                <div>
                  <p className="text-grey-medium" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', fontWeight: 600 }}>
                    EDUCATION
                  </p>
                  <p className="text-navy" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    {lawyer.education}
                  </p>
                </div>
                <div>
                  <p className="text-grey-medium" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', fontWeight: 600 }}>
                    BAR ADMISSION
                  </p>
                  <p className="text-navy" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    {lawyer.barAdmission}
                  </p>
                </div>
              </div>
            </div>

            {/* About */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 
                className="text-navy"
                style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem'
                }}
              >
                About
              </h3>
              <p 
                className="text-grey-dark"
                style={{ 
                  fontSize: '0.9375rem',
                  lineHeight: '1.7'
                }}
              >
                {lawyer.bio}
              </p>
            </div>

            {/* Specializations */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 
                className="text-navy"
                style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginBottom: '0.875rem'
                }}
              >
                Areas of Expertise
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                {lawyer.specialization.map((spec, index) => (
                  <div
                    key={index}
                    className="rounded-full"
                    style={{
                      padding: '0.625rem 1.125rem',
                      background: 'rgba(7, 60, 101, 0.06)',
                      fontSize: '0.875rem',
                      color: '#073C65',
                      fontWeight: 600,
                      border: '1px solid rgba(7, 60, 101, 0.12)'
                    }}
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div 
              className="rounded-xl"
              style={{
                background: '#F9FAFB',
                padding: '1.5rem',
                marginBottom: '2rem',
                border: '1px solid #E5E7EB'
              }}
            >
              <div className="modal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div>
                  <p className="text-grey-medium" style={{ fontSize: '0.75rem', marginBottom: '0.375rem', fontWeight: 600 }}>
                    CONSULTATION FEE
                  </p>
                  <p className="text-navy" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {lawyer.consultation}
                  </p>
                </div>
                <div>
                  <p className="text-grey-medium" style={{ fontSize: '0.75rem', marginBottom: '0.375rem', fontWeight: 600 }}>
                    AVAILABILITY
                  </p>
                  <p className="text-navy" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {lawyer.availability}
                  </p>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <p className="text-grey-medium" style={{ fontSize: '0.75rem', marginBottom: '0.375rem', fontWeight: 600 }}>
                    LOCATION
                  </p>
                  <p className="text-navy" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {lawyer.location}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setShowConfirmation(true)}
              className="w-full rounded-xl transition-all"
              style={{
                padding: '1.125rem',
                fontSize: '1rem',
                fontWeight: 700,
                background: '#D49E37',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(212, 158, 55, 0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E0B24E';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 158, 55, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D49E37';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 158, 55, 0.35)';
              }}
            >
              Request Consultation with {lawyer.name.split(' ')[1]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

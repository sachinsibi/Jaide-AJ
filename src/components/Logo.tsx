import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

export function Logo({ size = 'medium', showText = true }: LogoProps) {
  const dimensions = {
    small: { icon: 32, text: 'text-xl' },
    medium: { icon: 40, text: 'text-2xl' },
    large: { icon: 56, text: 'text-4xl' }
  };

  const iconSize = dimensions[size].icon;
  const textSize = dimensions[size].text;

  return (
    <div className="flex items-center gap-3">
      {/* Open Book Icon with Gold Bookmark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Book pages */}
        <path
          d="M6 8C6 6.89543 6.89543 6 8 6H22V40H8C6.89543 40 6 39.1046 6 38V8Z"
          fill="#073C65"
          opacity="0.9"
        />
        <path
          d="M26 6H40C41.1046 6 42 6.89543 42 8V38C42 39.1046 41.1046 40 40 40H26V6Z"
          fill="#073C65"
          opacity="0.9"
        />
        {/* Book spine/center */}
        <path
          d="M22 6H26V40H22V6Z"
          fill="#042841"
        />
        {/* Gold bookmark */}
        <path
          d="M28 4H32C33.1046 4 34 4.89543 34 6V24L30 20L26 24V6C26 4.89543 26.8954 4 28 4Z"
          fill="#D49E37"
        />
        {/* Page lines (left) */}
        <line x1="10" y1="14" x2="18" y2="14" stroke="#E6F2FA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="19" x2="18" y2="19" stroke="#E6F2FA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="24" x2="16" y2="24" stroke="#E6F2FA" strokeWidth="1.5" strokeLinecap="round" />
        {/* Page lines (right) */}
        <line x1="30" y1="30" x2="38" y2="30" stroke="#E6F2FA" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="35" x2="38" y2="35" stroke="#E6F2FA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {showText && (
        <span
          className={`${textSize} tracking-wider text-navy`}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, letterSpacing: '0.1em' }}
        >
          J.A.I.D.E.
        </span>
      )}
    </div>
  );
}

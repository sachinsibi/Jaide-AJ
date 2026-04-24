import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  dark?: boolean;
  showText?: boolean;
}

const STAR_POINTS = "10,1 12.06,7.17 18.56,7.22 13.33,11.08 15.29,17.28 10,13.5 4.71,17.28 6.67,11.08 1.44,7.22 7.94,7.17";

function Star({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points={STAR_POINTS} fill="#D49E37" />
    </svg>
  );
}

export function Logo({ size = 'medium', dark = false, showText = true }: LogoProps) {
  const textColor = dark ? '#FFFFFF' : '#073C65';

  const config = {
    small:  { fontSize: '1.375rem', starSize: 11, iconSize: 44 },
    medium: { fontSize: '1.875rem', starSize: 15, iconSize: 60 },
    large:  { fontSize: '4rem',     starSize: 32, iconSize: 128 },
  }[size];

  if (!showText) {
    return (
      <svg
        width={config.iconSize}
        height={Math.round(config.iconSize * 1.1)}
        viewBox="0 0 72 88"
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top bar */}
        <rect x="0" y="0" width="72" height="20" rx="3" fill={textColor} />
        {/* Stem + hook */}
        <path
          d="M 44,20 H 72 V 68 C 72,90 0,90 0,68 V 54 H 20 V 68 C 20,76 52,76 52,68 V 20 H 44 Z"
          fill={textColor}
        />
        {/* Gold star at top-right, partially outside */}
        <g transform="translate(51, -18)">
          <svg width="22" height="22" viewBox="0 0 20 20">
            <polygon points={STAR_POINTS} fill="#D49E37" />
          </svg>
        </g>
      </svg>
    );
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontFamily: "'Inter', 'Arial Black', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: 900,
        fontSize: config.fontSize,
        letterSpacing: '0.01em',
        color: textColor,
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      <span>JA</span>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        {/* Star as the i-dot */}
        <span
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(40%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Star size={config.starSize} />
        </span>
        {/* Dotless i (U+0131) */}
        <span>&#305;</span>
      </span>
      <span>DE</span>
    </div>
  );
}

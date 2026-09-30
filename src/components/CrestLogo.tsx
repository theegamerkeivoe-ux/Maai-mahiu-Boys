import React from 'react';

interface CrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
}) => {
  const dimension = size === 'sm' ? 36 : size === 'lg' ? 60 : 44;

  const primaryFill = variant === 'dark' ? '#F8F6F0' : '#0F2E1E';
  const accentFill = '#C8A858';
  const bgFill = variant === 'dark' ? '#111513' : '#F8F6F0';

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label="Maai Mahiu Boys High School Crest"
    >
      {/* Outer Shield Border */}
      <path
        d="M50 4C30 4 14 14 14 28V58C14 78 50 96 50 96C50 96 86 78 86 58V28C86 14 70 4 50 4Z"
        fill={primaryFill}
        stroke={accentFill}
        strokeWidth="3"
      />
      {/* Inner Inset Shield */}
      <path
        d="M50 10C34 10 20 18 20 30V56C20 72 50 88 50 88C50 88 80 72 80 56V30C80 18 66 10 50 10Z"
        fill={bgFill}
      />
      
      {/* Great Rift Valley Peak Silhouette (Top Inset) */}
      <path
        d="M32 46L44 32L52 42L60 30L68 46H32Z"
        fill={primaryFill}
        opacity="0.85"
      />

      {/* Center Open Book / Knowledge Symbol */}
      <path
        d="M34 52C40 50 47 51 50 54C53 51 60 50 66 52V68C60 66 53 67 50 70C47 67 40 66 34 68V52Z"
        fill={accentFill}
      />
      <path
        d="M50 54V70"
        stroke={primaryFill}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Torch Flame / Beacon of Leadership */}
      <path
        d="M50 20C47 24 45 27 47 30C49 32 51 32 53 30C55 27 53 24 50 20Z"
        fill={accentFill}
      />

      {/* Motto Stars / Accents */}
      <circle cx="28" cy="34" r="2" fill={accentFill} />
      <circle cx="72" cy="34" r="2" fill={accentFill} />
    </svg>
  );
};

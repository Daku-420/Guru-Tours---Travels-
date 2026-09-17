import React from 'react';

/**
 * Guru Tours & Travels Authentic Brand Logo
 * 
 * Features:
 * - Bold red G-shaped travel emblem
 * - Majestic mountain peaks and winding scenic travel road inside/with the G
 * - Large red "GURU" typography
 * - Charcoal (or White for dark mode) "TOURS & TRAVELS" text
 * - Tagline: "EXPLORE • EXPERIENCE • TOGETHER"
 */
export default function Logo({ 
  variant = 'dark', // 'dark' = for light backgrounds (charcoal text), 'light' = for dark backgrounds (white text)
  className = 'h-10',
  showTagline = true,
  onClick = null
}) {
  const isLight = variant === 'light';
  const subtitleColor = isLight ? '#F4F5F6' : '#20252B';
  const taglineColor = isLight ? '#E5E7EB' : '#626B75';
  const roadColor = '#FFFFFF';
  const mountainBack = '#A90812';

  return (
    <div 
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer transition-transform hover:opacity-95 shrink-0 ${className}`}
      onClick={onClick}
    >
      {/* Red G-shaped Emblem */}
      <svg
        className="h-full w-auto aspect-square shrink-0 filter drop-shadow-sm"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Guru Tours & Travels Emblem"
      >
        {/* Outer Circular G-Swirl / Shield */}
        <circle cx="60" cy="60" r="56" fill="url(#gBrandGradient)" />
        
        {/* Mountain Silhouette Layers inside the G */}
        <path
          d="M34 76 L52 46 L70 76 Z"
          fill={mountainBack}
          opacity="0.85"
        />
        <path
          d="M50 76 L66 40 L86 76 Z"
          fill="#8A050D"
        />
        <path
          d="M66 40 L76 56 L86 76 H50 L66 40 Z"
          fill="url(#snowCapGrad)"
          opacity="0.9"
        />
        
        {/* Winding Adventure Road */}
        <path
          d="M48 76 C52 68 64 64 62 58 C60 52 56 50 58 48 C60 46 64 47 68 53 C72 58 68 66 74 76"
          stroke={roadColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M60 76 L61 68"
          stroke="#FFD700"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />

        {/* Dynamic Stylized 'G' Stroke Frame */}
        <path
          d="M86 46 C80 32 66 24 50 26 C32 29 20 44 20 62 C20 80 34 96 54 96 C72 96 85 84 88 68 L58 68 L58 56 L100 56 C101 64 100 74 94 84 C84 100 68 106 48 104 C24 101 10 82 10 58 C10 32 30 14 54 14 C72 14 87 23 96 38 L86 46 Z"
          fill="#FFFFFF"
          fillRule="evenodd"
        />

        {/* Compass Star / Sun of Exploration */}
        <circle cx="82" cy="34" r="5" fill="#FFF8ED" />
        <path d="M82 26 L84 32 L90 34 L84 36 L82 42 L80 36 L74 34 L80 32 Z" fill="#FFF8ED" />

        {/* Gradients */}
        <defs>
          <linearGradient id="gBrandGradient" x1="12" y1="12" x2="108" y2="108" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E61E26" />
            <stop offset="0.6" stopColor="#D71920" />
            <stop offset="1" stopColor="#A90812" />
          </linearGradient>
          <linearGradient id="snowCapGrad" x1="66" y1="40" x2="66" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Typography Section */}
      <div className="flex flex-col justify-center text-left leading-none">
        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
          <span 
            className="font-heading font-black text-xl sm:text-2xl tracking-wider" 
            style={{ color: '#D71920' }}
          >
            GURU
          </span>
          <span 
            className="font-heading font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-colors"
            style={{ color: subtitleColor }}
          >
            TOURS & TRAVELS
          </span>
        </div>

        {/* Tagline: EXPLORE • EXPERIENCE • TOGETHER */}
        {showTagline && (
          <span 
            className="font-sans font-bold text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase mt-1 transition-colors whitespace-nowrap"
            style={{ color: taglineColor }}
          >
            EXPLORE • EXPERIENCE • TOGETHER
          </span>
        )}
      </div>
    </div>
  );
}

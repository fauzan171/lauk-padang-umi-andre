import React from 'react';

// Official GoFood Logo (Gojek Food Red Pin + Clean Typography)
export function GoFoodLogo({ className = "h-8", height = 28 }) {
  return (
    <svg height={height} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="GoFood Logo">
      {/* Gojek badge */}
      <rect x="0" y="4" width="32" height="32" rx="8" fill="#EE2737" />
      <circle cx="16" cy="20" r="6" fill="#FFFFFF" />
      <circle cx="16" cy="20" r="10" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="38" strokeDashoffset="12" strokeLinecap="round" />
      {/* "go" text */}
      <text x="38" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#1C120E" letterSpacing="-0.5">go</text>
      {/* "food" text in red */}
      <text x="63" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#EE2737" letterSpacing="-0.5">food</text>
    </svg>
  );
}

// Official GoFood White Variant for Dark Cards
export function GoFoodLogoWhite({ className = "h-8", height = 28 }) {
  return (
    <svg height={height} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="GoFood Logo">
      <rect x="0" y="4" width="32" height="32" rx="8" fill="#EE2737" />
      <circle cx="16" cy="20" r="6" fill="#FFFFFF" />
      <circle cx="16" cy="20" r="10" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="38" strokeDashoffset="12" strokeLinecap="round" />
      <text x="38" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#FFFFFF" letterSpacing="-0.5">go</text>
      <text x="63" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="20" fill="#FF5252" letterSpacing="-0.5">food</text>
    </svg>
  );
}

// Official GrabFood Logo (Grab Green Double Ribbon + Food)
export function GrabFoodLogo({ className = "h-8", height = 28 }) {
  return (
    <svg height={height} viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="GrabFood Logo">
      {/* Grab double curve loop */}
      <g transform="translate(2, 6)">
        <path d="M14 0C6.27 0 0 6.27 0 14C0 21.73 6.27 28 14 28C21.73 28 28 21.73 28 14C28 6.27 21.73 0 14 0ZM14 23C9.03 23 5 18.97 5 14C5 9.03 9.03 5 14 5C18.97 5 23 9.03 23 14C23 18.97 18.97 23 14 23Z" fill="#00B14F"/>
        <path d="M14 8C10.69 8 8 10.69 8 14C8 17.31 10.69 20 14 20C17.31 20 20 17.31 20 14" stroke="#00B14F" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* "Grab" text in official green */}
      <text x="36" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="21" fill="#00B14F" letterSpacing="-0.8">Grab</text>
      {/* "Food" text in dark/bold */}
      <text x="86" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="21" fill="#1C120E" letterSpacing="-0.5">Food</text>
    </svg>
  );
}

// Official GrabFood White Variant for Dark Cards
export function GrabFoodLogoWhite({ className = "h-8", height = 28 }) {
  return (
    <svg height={height} viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="GrabFood Logo">
      <g transform="translate(2, 6)">
        <path d="M14 0C6.27 0 0 6.27 0 14C0 21.73 6.27 28 14 28C21.73 28 28 21.73 28 14C28 6.27 21.73 0 14 0ZM14 23C9.03 23 5 18.97 5 14C5 9.03 9.03 5 14 5C18.97 5 23 9.03 23 14C23 18.97 18.97 23 14 23Z" fill="#00B14F"/>
        <path d="M14 8C10.69 8 8 10.69 8 14C8 17.31 10.69 20 14 20C17.31 20 20 17.31 20 14" stroke="#00B14F" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <text x="36" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="21" fill="#00B14F" letterSpacing="-0.8">Grab</text>
      <text x="86" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontWeight="800" fontSize="21" fill="#FFFFFF" letterSpacing="-0.5">Food</text>
    </svg>
  );
}

// Authentic Minang Carving Accent (Itik Pulang Patang / Pucuak Rabuang)
export function MinangCarvingBorder() {
  return (
    <div className="minang-motif-bar" aria-hidden="true">
      <div className="motif-pattern"></div>
    </div>
  );
}

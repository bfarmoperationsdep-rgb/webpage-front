import React from 'react';

const AmazonLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="6"/>
    
    {/* Orange background */}
    <rect x="5" y="5" width="90" height="50" fill="#FF9900" rx="4"/>
    
    {/* Amazon text - more stylized */}
    <text x="50" y="26" fontSize="14" fontWeight="900" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">amazon</text>
    
    {/* Characteristic Amazon smile from a to z */}
    <path d="M15 38C25 44 35 44 45 42C55 40 65 40 75 42C80 43 83 44 85 45" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    
    {/* Arrow pointing from A to Z */}
    <path d="M82 42L85 45L82 48" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Small decorative element */}
    <circle cx="88" cy="12" r="2" fill="white" opacity="0.8"/>
  </svg>
);

export default AmazonLogo;

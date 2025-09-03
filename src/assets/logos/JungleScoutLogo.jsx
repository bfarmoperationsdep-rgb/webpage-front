import React from 'react';

const JungleScoutLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Background circle */}
    <circle cx="25" cy="30" r="18" fill="#00C851"/>
    
    {/* Jungle Scout text */}
    <text x="55" y="25" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#00C851" fontFamily="Arial, sans-serif">JUNGLE</text>
    <text x="55" y="38" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#00C851" fontFamily="Arial, sans-serif">SCOUT</text>
    
    {/* Magnifying glass icon in circle */}
    <circle cx="25" cy="28" r="5" stroke="white" strokeWidth="2" fill="none"/>
    <line x1="29" y1="32" x2="33" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Tree/jungle elements */}
    <path d="M75 15L80 10L85 15L82 20L80 22L78 20L75 15Z" fill="#00C851"/>
    <path d="M15 45C20 40 30 42 35 45C40 42 50 44 55 45" stroke="#00C851" strokeWidth="2" fill="none"/>
    
    {/* Small accent dots */}
    <circle cx="15" cy="20" r="1" fill="#00C851" opacity="0.6"/>
    <circle cx="85" cy="40" r="1" fill="#00C851" opacity="0.6"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default JungleScoutLogo;

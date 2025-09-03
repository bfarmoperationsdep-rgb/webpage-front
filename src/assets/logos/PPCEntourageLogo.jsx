import React from 'react';

const PPCEntourageLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Background circle */}
    <circle cx="30" cy="30" r="18" fill="#FF5722"/>
    
    {/* PPC text */}
    <text x="65" y="25" fontSize="14" fontWeight="bold" fill="#FF5722" fontFamily="Arial, sans-serif">PPC</text>
    <text x="60" y="38" fontSize="9" fontWeight="bold" fill="#FF5722" fontFamily="Arial, sans-serif">Entourage</text>
    
    {/* Megaphone icon in circle */}
    <path d="M20 27L35 22L35 38L20 33Z" fill="white"/>
    <circle cx="35" cy="30" r="3" fill="white"/>
    <path d="M35 25L38 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 35L38 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Ad indicators */}
    <rect x="75" y="15" width="8" height="3" fill="#FF5722" rx="1"/>
    <text x="79" y="17.5" fontSize="2" fill="white" textAnchor="middle">AD</text>
    
    <rect x="75" y="42" width="8" height="3" fill="#FF5722" rx="1"/>
    <text x="79" y="44.5" fontSize="2" fill="white" textAnchor="middle">AD</text>
    
    {/* Click indicators */}
    <circle cx="15" cy="15" r="1.5" fill="#FF5722" opacity="0.6"/>
    <circle cx="85" cy="45" r="1.5" fill="#FF5722" opacity="0.6"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default PPCEntourageLogo;

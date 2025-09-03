import React from 'react';

const HeliumLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Background circle */}
    <circle cx="25" cy="30" r="18" fill="#1B365D"/>
    
    {/* Helium 10 text */}
    <text x="50" y="20" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#1B365D" fontFamily="Arial, sans-serif">Helium</text>
    <text x="75" y="35" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#00D4FF" fontFamily="Arial, sans-serif">10</text>
    
    {/* Icon in circle */}
    <path d="M20 25V35M20 30H30M30 25V35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Floating elements */}
    <circle cx="15" cy="15" r="2" fill="#00D4FF" opacity="0.7"/>
    <circle cx="85" cy="20" r="1.5" fill="#1B365D" opacity="0.5"/>
    <circle cx="80" cy="45" r="2.5" fill="#00D4FF" opacity="0.6"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default HeliumLogo;

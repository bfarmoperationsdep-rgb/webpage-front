import React from 'react';

const DSPLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* DSP background circle */}
    <circle cx="30" cy="30" r="18" fill="#FF6B6B"/>
    
    {/* Target/bullseye icon */}
    <circle cx="30" cy="30" r="8" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="30" cy="30" r="4" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="30" cy="30" r="1" fill="white"/>
    
    {/* DSP text */}
    <text x="65" y="30" fontSize="18" fontWeight="bold" fill="#FF6B6B" fontFamily="Arial, sans-serif">DSP</text>
    
    {/* Ad targeting elements */}
    <rect x="70" y="15" width="12" height="4" fill="#FF6B6B" rx="2"/>
    <text x="76" y="18" fontSize="3" fill="white" textAnchor="middle">AD</text>
    
    <rect x="70" y="40" width="12" height="4" fill="#FF6B6B" rx="2"/>
    <text x="76" y="43" fontSize="3" fill="white" textAnchor="middle">AD</text>
    
    {/* Targeting arrows */}
    <path d="M48 25L55 30L48 35" stroke="#FF6B6B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default DSPLogo;

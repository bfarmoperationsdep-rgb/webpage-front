import React from 'react';

const DSPLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="6"/>
    
    {/* Red background */}
    <rect x="5" y="5" width="90" height="50" fill="#FF6B6B" rx="4"/>
    
    {/* DSP text - more prominent */}
    <text x="50" y="30" fontSize="20" fontWeight="900" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">DSP</text>
    
    {/* Target icon - simplified and modern */}
    <circle cx="20" cy="20" r="6" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="20" cy="20" r="3" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="20" cy="20" r="0.8" fill="white"/>
    
    <circle cx="80" cy="40" r="6" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="80" cy="40" r="3" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
    <circle cx="80" cy="40" r="0.8" fill="white"/>
    
    {/* Targeting lines */}
    <path d="M26 20L74 40" stroke="white" strokeWidth="1" opacity="0.4" strokeDasharray="2,2"/>
    
    {/* AD indicators */}
    <rect x="12" y="40" width="16" height="6" fill="white" rx="3" opacity="0.9"/>
    <text x="20" y="44" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FF6B6B">AD</text>
    
    <rect x="72" y="14" width="16" height="6" fill="white" rx="3" opacity="0.9"/>
    <text x="80" y="18" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#FF6B6B">AD</text>
  </svg>
);

export default DSPLogo;

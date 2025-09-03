import React from 'react';

const CerebroLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="6"/>
    
    {/* Purple background */}
    <rect x="5" y="5" width="90" height="50" fill="#9C27B0" rx="4"/>
    
    {/* CEREBRO text */}
    <text x="50" y="20" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">CEREBRO</text>
    
    {/* Simplified brain icon */}
    <ellipse cx="50" cy="35" rx="20" ry="12" fill="white" opacity="0.9"/>
    
    {/* Brain folds/sections */}
    <path d="M35 32C40 30 45 32 50 30C55 32 60 30 65 32" stroke="#9C27B0" strokeWidth="2" fill="none"/>
    <path d="M35 38C40 36 45 38 50 36C55 38 60 36 65 38" stroke="#9C27B0" strokeWidth="2" fill="none"/>
    <path d="M40 28C45 26 50 28 55 26C60 28 65 26 70 28" stroke="#9C27B0" strokeWidth="1.5" fill="none" opacity="0.7"/>
    <path d="M40 42C45 40 50 42 55 40C60 42 65 40 70 42" stroke="#9C27B0" strokeWidth="1.5" fill="none" opacity="0.7"/>
    
    {/* Neural nodes */}
    <circle cx="42" cy="32" r="1.5" fill="#9C27B0"/>
    <circle cx="50" cy="35" r="1.5" fill="#9C27B0"/>
    <circle cx="58" cy="32" r="1.5" fill="#9C27B0"/>
    <circle cx="46" cy="38" r="1" fill="#9C27B0" opacity="0.8"/>
    <circle cx="54" cy="38" r="1" fill="#9C27B0" opacity="0.8"/>
    
    {/* Intelligence indicators */}
    <circle cx="15" cy="12" r="2" fill="white" opacity="0.6"/>
    <circle cx="85" cy="12" r="1.5" fill="white" opacity="0.7"/>
  </svg>
);

export default CerebroLogo;

import React from 'react';

const JungleScoutLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="6"/>
    
    {/* Green background */}
    <rect x="5" y="5" width="90" height="50" fill="#00C851" rx="4"/>
    
    {/* Jungle Scout text */}
    <text x="50" y="20" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">JUNGLE SCOUT</text>
    
    {/* Magnifying glass - larger and more prominent */}
    <circle cx="30" cy="35" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
    <line x1="36" y1="41" x2="42" y2="47" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Search elements inside magnifying glass */}
    <circle cx="30" cy="35" r="3" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
    <circle cx="30" cy="35" r="1" fill="white" opacity="0.8"/>
    
    {/* Jungle leaves */}
    <path d="M60 15C62 12 66 12 68 15C66 18 62 18 60 15Z" fill="white" opacity="0.8"/>
    <path d="M70 20C72 17 76 17 78 20C76 23 72 23 70 20Z" fill="white" opacity="0.7"/>
    <path d="M75 35C77 32 81 32 83 35C81 38 77 38 75 35Z" fill="white" opacity="0.6"/>
    
    {/* Data tracking elements */}
    <circle cx="15" cy="25" r="1.5" fill="white" opacity="0.8"/>
    <circle cx="20" cy="20" r="1" fill="white" opacity="0.6"/>
    <circle cx="85" cy="42" r="1.5" fill="white" opacity="0.7"/>
  </svg>
);

export default JungleScoutLogo;

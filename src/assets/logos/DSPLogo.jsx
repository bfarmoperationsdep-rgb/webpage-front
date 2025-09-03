import React from 'react';

const DSPLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#FF6B6B"/>
    <circle cx="35" cy="25" r="8" fill="white" opacity="0.9"/>
    <circle cx="65" cy="30" r="6" fill="white" opacity="0.7"/>
    <path d="M43 25L57 30" stroke="white" strokeWidth="2"/>
    <circle cx="43" cy="25" r="1.5" fill="white"/>
    <circle cx="57" cy="30" r="1.5" fill="white"/>
    <path d="M25 35C30 32 35 35 40 32C45 35 50 32 55 35C60 32 65 35 70 32C75 35 80 32 75 38" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
    <rect x="30" y="15" width="4" height="4" fill="white"/>
    <rect x="60" y="20" width="4" height="4" fill="white"/>
    <text x="35" y="52" fill="white" fontSize="8" fontWeight="bold">DSP</text>
  </svg>
);

export default DSPLogo;

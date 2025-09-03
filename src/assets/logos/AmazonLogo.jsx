import React from 'react';

const AmazonLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Amazon text */}
    <text x="50" y="28" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#232F3E" fontFamily="Arial, sans-serif">amazon</text>
    
    {/* Smile arrow from A to Z */}
    <path d="M18 35C18 35 35 42 82 35" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Arrow tip */}
    <path d="M78 32L82 35L78 38" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Subtle shadow */}
    <ellipse cx="50" cy="52" rx="25" ry="3" fill="#E5E5E5" opacity="0.3"/>
  </svg>
);

export default AmazonLogo;

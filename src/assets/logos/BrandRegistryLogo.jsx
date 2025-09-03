import React from 'react';

const BrandRegistryLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Shield background */}
    <path d="M35 15L50 10L65 15L65 28C65 35 58 42 50 45C42 42 35 35 35 28L35 15Z" fill="#FFB84D"/>
    
    {/* Inner shield */}
    <path d="M40 20L50 17L60 20L60 28C60 32 56 37 50 39C44 37 40 32 40 28L40 20Z" fill="white"/>
    
    {/* Brand symbol */}
    <circle cx="50" cy="27" r="4" fill="#FFB84D"/>
    <path d="M47.5 27L49 28.5L52.5 25" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Brand Registry text */}
    <text x="35" y="53" fontSize="8" fontWeight="bold" fill="#FFB84D" fontFamily="Arial, sans-serif">Brand Registry</text>
    
    {/* Protection indicators */}
    <circle cx="20" cy="20" r="2" fill="#FFB84D" opacity="0.4"/>
    <circle cx="80" cy="25" r="1.5" fill="#FFB84D" opacity="0.5"/>
    <circle cx="85" cy="40" r="2" fill="#FFB84D" opacity="0.3"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default BrandRegistryLogo;

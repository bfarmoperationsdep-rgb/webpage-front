import React from 'react';

const AWSLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* AWS background */}
    <rect x="10" y="10" width="80" height="40" fill="#232F3E" rx="4"/>
    
    {/* AWS text */}
    <text x="50" y="30" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FF9900" fontFamily="Arial, sans-serif">AWS</text>
    
    {/* Cloud icon elements */}
    <path d="M20 20C22 18 26 18 28 20C30 18 34 18 36 20C38 22 38 26 36 28C34 30 30 30 28 28C26 30 22 30 20 28C18 26 18 22 20 20Z" fill="#FF9900" opacity="0.3"/>
    
    {/* Amazon smile curve */}
    <path d="M15 42C15 42 35 47 85 42" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M80 40L85 42L80 44" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default AWSLogo;

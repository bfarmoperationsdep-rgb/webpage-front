import React from 'react';

const HeliumLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="6"/>
    
    {/* Blue gradient background */}
    <rect x="5" y="5" width="90" height="50" fill="#1B365D" rx="4"/>
    
    {/* Helium 10 logo styling */}
    <text x="30" y="28" fontSize="12" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">Helium</text>
    <text x="75" y="28" fontSize="16" fontWeight="900" fill="#00D4FF" fontFamily="Arial, sans-serif">10</text>
    
    {/* H symbol in a modern way */}
    <rect x="12" y="20" width="3" height="12" fill="#00D4FF" rx="1"/>
    <rect x="20" y="20" width="3" height="12" fill="#00D4FF" rx="1"/>
    <rect x="12" y="25" width="11" height="2" fill="#00D4FF" rx="1"/>
    
    {/* Floating helium bubbles */}
    <circle cx="75" cy="15" r="2" fill="#00D4FF" opacity="0.8"/>
    <circle cx="85" cy="18" r="1.5" fill="#00D4FF" opacity="0.6"/>
    <circle cx="80" cy="40" r="2" fill="#00D4FF" opacity="0.7"/>
    <circle cx="88" cy="43" r="1" fill="#00D4FF" opacity="0.9"/>
    
    {/* Connection line */}
    <path d="M35 35C45 38 55 38 65 35" stroke="#00D4FF" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export default HeliumLogo;

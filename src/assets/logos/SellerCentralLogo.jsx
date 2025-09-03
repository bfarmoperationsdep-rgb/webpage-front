import React from 'react';

const SellerCentralLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Dashboard background */}
    <rect x="15" y="15" width="70" height="30" fill="#FF9900" rx="4"/>
    
    {/* Dashboard elements */}
    <rect x="20" y="20" width="40" height="3" fill="white"/>
    <rect x="20" y="26" width="30" height="2" fill="white" opacity="0.8"/>
    <rect x="20" y="30" width="35" height="2" fill="white" opacity="0.8"/>
    <rect x="20" y="34" width="25" height="2" fill="white" opacity="0.8"/>
    <rect x="20" y="38" width="20" height="2" fill="white" opacity="0.8"/>
    
    {/* Central icon */}
    <circle cx="70" cy="30" r="8" fill="white"/>
    <path d="M67 30L69 32L73 28" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Seller Central text */}
    <text x="50" y="53" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#FF9900" fontFamily="Arial, sans-serif">Seller Central</text>
    
    {/* Corner decorations */}
    <circle cx="15" cy="10" r="2" fill="#FF9900" opacity="0.3"/>
    <circle cx="85" cy="10" r="1.5" fill="#FF9900" opacity="0.4"/>
  </svg>
);

export default SellerCentralLogo;

import React from 'react';

const SellerCentralLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#FF9900"/>
    <rect x="20" y="15" width="60" height="30" rx="5" fill="white"/>
    <rect x="25" y="20" width="50" height="3" fill="#FF9900"/>
    <rect x="25" y="28" width="35" height="2" fill="#FF9900" opacity="0.7"/>
    <rect x="25" y="33" width="40" height="2" fill="#FF9900" opacity="0.7"/>
    <rect x="25" y="38" width="25" height="2" fill="#FF9900" opacity="0.7"/>
    <circle cx="70" cy="30" r="4" fill="#FF9900"/>
    <path d="M67 30L69 32L73 28" stroke="white" strokeWidth="1.5" fill="none"/>
    <text x="30" y="52" fill="white" fontSize="6" fontWeight="bold">SELLER CENTRAL</text>
  </svg>
);

export default SellerCentralLogo;

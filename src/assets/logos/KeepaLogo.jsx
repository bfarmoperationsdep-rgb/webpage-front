import React from 'react';

const KeepaLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Background rectangle with Keepa color */}
    <rect x="10" y="15" width="80" height="30" fill="#FB3958" rx="4"/>
    
    {/* Keepa text */}
    <text x="50" y="27" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">Keepa</text>
    
    {/* Price tracking line */}
    <path d="M15 35L25 28L35 32L45 25L55 30L65 22L75 28L85 25" stroke="white" strokeWidth="2" fill="none"/>
    
    {/* Data points */}
    <circle cx="25" cy="28" r="1.5" fill="white"/>
    <circle cx="35" cy="32" r="1.5" fill="white"/>
    <circle cx="45" cy="25" r="1.5" fill="white"/>
    <circle cx="55" cy="30" r="1.5" fill="white"/>
    <circle cx="65" cy="22" r="1.5" fill="white"/>
    <circle cx="75" cy="28" r="1.5" fill="white"/>
    
    {/* Small trend indicators */}
    <path d="M15 10L18 7L21 10" stroke="#FB3958" strokeWidth="1.5" fill="none"/>
    <path d="M85 45L82 48L79 45" stroke="#FB3958" strokeWidth="1.5" fill="none"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default KeepaLogo;

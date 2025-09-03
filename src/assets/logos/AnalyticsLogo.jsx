import React from 'react';

const AnalyticsLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#4ECDC4"/>
    <rect x="20" y="40" width="8" height="10" fill="white"/>
    <rect x="35" y="30" width="8" height="20" fill="white"/>
    <rect x="50" y="20" width="8" height="30" fill="white"/>
    <rect x="65" y="35" width="8" height="15" fill="white"/>
    <path d="M24 40L39 30L54 20L69 35" stroke="white" strokeWidth="2" strokeDasharray="2,2"/>
    <circle cx="24" cy="40" r="2" fill="white"/>
    <circle cx="39" cy="30" r="2" fill="white"/>
    <circle cx="54" cy="20" r="2" fill="white"/>
    <circle cx="69" cy="35" r="2" fill="white"/>
    <text x="25" y="15" fill="white" fontSize="8" fontWeight="bold">ANALYTICS</text>
  </svg>
);

export default AnalyticsLogo;

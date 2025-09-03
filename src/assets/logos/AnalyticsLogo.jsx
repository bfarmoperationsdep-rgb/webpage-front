import React from 'react';

const AnalyticsLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="6"/>
    
    {/* Teal background */}
    <rect x="5" y="5" width="90" height="50" fill="#4ECDC4" rx="4"/>
    
    {/* Analytics text */}
    <text x="50" y="20" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">Analytics</text>
    
    {/* Modern bar chart */}
    <rect x="15" y="38" width="4" height="10" fill="white" rx="2"/>
    <rect x="22" y="33" width="4" height="15" fill="white" rx="2"/>
    <rect x="29" y="28" width="4" height="20" fill="white" rx="2"/>
    <rect x="36" y="35" width="4" height="13" fill="white" rx="2"/>
    <rect x="43" y="30" width="4" height="18" fill="white" rx="2"/>
    <rect x="50" y="36" width="4" height="12" fill="white" rx="2"/>
    <rect x="57" y="32" width="4" height="16" fill="white" rx="2"/>
    <rect x="64" y="29" width="4" height="19" fill="white" rx="2"/>
    <rect x="71" y="37" width="4" height="11" fill="white" rx="2"/>
    <rect x="78" y="34" width="4" height="14" fill="white" rx="2"/>
    <rect x="85" y="31" width="4" height="17" fill="white" rx="2"/>
    
    {/* Trend arrow */}
    <path d="M12 45L88 25" stroke="white" strokeWidth="2" opacity="0.7"/>
    <path d="M85 22L88 25L85 28" stroke="white" strokeWidth="2" opacity="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Growth indicator */}
    <circle cx="85" cy="12" r="3" fill="white" opacity="0.9"/>
    <text x="85" y="15" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#4ECDC4">↗</text>
  </svg>
);

export default AnalyticsLogo;

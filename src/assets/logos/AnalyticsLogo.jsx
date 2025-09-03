import React from 'react';

const AnalyticsLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Analytics background */}
    <rect x="15" y="25" width="70" height="25" fill="#4ECDC4" rx="3"/>
    
    {/* Bar chart */}
    <rect x="20" y="40" width="6" height="8" fill="white"/>
    <rect x="30" y="35" width="6" height="13" fill="white"/>
    <rect x="40" y="30" width="6" height="18" fill="white"/>
    <rect x="50" y="37" width="6" height="11" fill="white"/>
    <rect x="60" y="32" width="6" height="16" fill="white"/>
    <rect x="70" y="38" width="6" height="10" fill="white"/>
    
    {/* Trend line */}
    <path d="M23 40L33 35L43 30L53 37L63 32L73 38" stroke="white" strokeWidth="2" strokeDasharray="1,1"/>
    
    {/* Analytics text */}
    <text x="50" y="20" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#4ECDC4" fontFamily="Arial, sans-serif">Analytics</text>
    
    {/* Chart indicators */}
    <circle cx="85" cy="20" r="2" fill="#4ECDC4" opacity="0.6"/>
    <circle cx="15" cy="15" r="1.5" fill="#4ECDC4" opacity="0.4"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default AnalyticsLogo;

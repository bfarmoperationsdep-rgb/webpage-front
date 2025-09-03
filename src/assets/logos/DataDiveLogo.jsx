import React from 'react';

const DataDiveLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Water waves background */}
    <rect x="10" y="25" width="80" height="20" fill="#2196F3" rx="10"/>
    
    {/* DataDive text */}
    <text x="30" y="20" fontSize="10" fontWeight="bold" fill="#2196F3" fontFamily="Arial, sans-serif">Data</text>
    <text x="70" y="20" fontSize="10" fontWeight="bold" fill="#2196F3" fontFamily="Arial, sans-serif">Dive</text>
    
    {/* Diving arrow */}
    <path d="M50 15L50 40M47 37L50 40L53 37" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Data bubbles */}
    <circle cx="25" cy="32" r="2" fill="white" opacity="0.8"/>
    <circle cx="35" cy="30" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="65" cy="33" r="2" fill="white" opacity="0.7"/>
    <circle cx="75" cy="31" r="1.5" fill="white" opacity="0.8"/>
    
    {/* Water ripples */}
    <ellipse cx="50" cy="25" rx="15" ry="2" stroke="#1976D2" strokeWidth="1" fill="none" opacity="0.5"/>
    <ellipse cx="50" cy="25" rx="25" ry="3" stroke="#1976D2" strokeWidth="1" fill="none" opacity="0.3"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default DataDiveLogo;

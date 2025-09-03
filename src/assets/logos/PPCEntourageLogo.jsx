import React from 'react';

const PPCEntourageLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#FF5722"/>
    <rect x="20" y="20" width="15" height="10" rx="2" fill="white"/>
    <rect x="40" y="15" width="15" height="10" rx="2" fill="white"/>
    <rect x="60" y="25" width="15" height="10" rx="2" fill="white"/>
    <path d="M27.5 30L47.5 25L67.5 35" stroke="white" strokeWidth="2"/>
    <circle cx="27.5" cy="30" r="2" fill="white"/>
    <circle cx="47.5" cy="25" r="2" fill="white"/>
    <circle cx="67.5" cy="35" r="2" fill="white"/>
    <text x="15" y="48" fill="white" fontSize="8" fontWeight="bold">PPC</text>
    <rect x="10" y="10" width="4" height="4" fill="white" opacity="0.7"/>
    <rect x="85" y="40" width="4" height="4" fill="white" opacity="0.7"/>
    <rect x="45" y="5" width="4" height="4" fill="white" opacity="0.7"/>
  </svg>
);

export default PPCEntourageLogo;

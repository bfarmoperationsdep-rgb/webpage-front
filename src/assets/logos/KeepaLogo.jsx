import React from 'react';

const KeepaLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#E91E63"/>
    <path d="M15 45L25 35L35 40L45 25L55 30L65 20L75 25L85 15" stroke="white" strokeWidth="3" fill="none"/>
    <path d="M15 45L25 50L35 45L45 50L55 45L65 50L75 45L85 50" stroke="white" strokeWidth="2" opacity="0.6" fill="none"/>
    <circle cx="25" cy="35" r="2" fill="white"/>
    <circle cx="35" cy="40" r="2" fill="white"/>
    <circle cx="45" cy="25" r="2" fill="white"/>
    <circle cx="55" cy="30" r="2" fill="white"/>
    <circle cx="65" cy="20" r="2" fill="white"/>
    <circle cx="75" cy="25" r="2" fill="white"/>
    <text x="20" y="18" fill="white" fontSize="10" fontWeight="bold">Keepa</text>
    <rect x="10" y="5" width="8" height="2" fill="white" opacity="0.7"/>
    <rect x="82" y="8" width="8" height="2" fill="white" opacity="0.7"/>
  </svg>
);

export default KeepaLogo;

import React from 'react';

const JungleScoutLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#00B85C"/>
    <path d="M20 45C15 40 25 35 30 40C35 35 45 40 50 35C55 40 65 35 70 40C75 35 85 40 80 45" stroke="white" strokeWidth="3" fill="none"/>
    <circle cx="25" cy="25" r="8" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="50" cy="20" r="6" fill="#FFFFFF" opacity="0.8"/>
    <circle cx="75" cy="25" r="7" fill="#FFFFFF" opacity="0.7"/>
    <path d="M40 10C45 5 55 5 60 10C65 15 55 20 50 15C45 20 35 15 40 10Z" fill="white"/>
    <text x="20" y="18" fill="#00B85C" fontSize="8" fontWeight="bold">JS</text>
    <path d="M15 50L25 45L35 50L45 45L55 50L65 45L75 50L85 45" stroke="white" strokeWidth="2" opacity="0.5" fill="none"/>
  </svg>
);

export default JungleScoutLogo;

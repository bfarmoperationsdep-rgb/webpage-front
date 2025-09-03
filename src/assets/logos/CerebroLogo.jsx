import React from 'react';

const CerebroLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#9C27B0"/>
    <ellipse cx="50" cy="25" rx="25" ry="15" fill="white" opacity="0.9"/>
    <path d="M35 20C40 15 45 18 50 15C55 18 60 15 65 20" stroke="#9C27B0" strokeWidth="2" fill="none"/>
    <path d="M35 30C40 35 45 32 50 35C55 32 60 35 65 30" stroke="#9C27B0" strokeWidth="2" fill="none"/>
    <circle cx="42" cy="22" r="2" fill="#9C27B0"/>
    <circle cx="58" cy="22" r="2" fill="#9C27B0"/>
    <circle cx="50" cy="28" r="1.5" fill="#9C27B0"/>
    <path d="M25 40C30 35 35 38 40 35C45 38 50 35 55 38C60 35 65 38 70 35C75 38 80 35 75 40" stroke="white" strokeWidth="2" fill="none" opacity="0.7"/>
    <text x="30" y="50" fill="white" fontSize="8" fontWeight="bold">CEREBRO</text>
  </svg>
);

export default CerebroLogo;

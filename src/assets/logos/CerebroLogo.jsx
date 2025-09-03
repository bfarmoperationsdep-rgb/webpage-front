import React from 'react';

const CerebroLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="white" rx="8"/>
    
    {/* Brain outline */}
    <path d="M30 20C28 15 35 12 40 15C42 12 48 12 50 15C52 12 58 12 60 15C65 12 72 15 70 20C72 22 72 28 70 30C72 35 65 38 60 35C58 38 52 38 50 35C48 38 42 38 40 35C35 38 28 35 30 30C28 28 28 22 30 20Z" fill="#9C27B0"/>
    
    {/* Brain details */}
    <path d="M35 22C40 20 45 22 50 20C55 22 60 20 65 22" stroke="white" strokeWidth="1.5" fill="none"/>
    <path d="M35 28C40 26 45 28 50 26C55 28 60 26 65 28" stroke="white" strokeWidth="1.5" fill="none"/>
    
    {/* Cerebro text */}
    <text x="50" y="45" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#9C27B0" fontFamily="Arial, sans-serif">CEREBRO</text>
    
    {/* Neural connections */}
    <circle cx="42" cy="24" r="1" fill="white"/>
    <circle cx="50" cy="26" r="1" fill="white"/>
    <circle cx="58" cy="24" r="1" fill="white"/>
    
    {/* Side decorations */}
    <circle cx="15" cy="15" r="2" fill="#9C27B0" opacity="0.3"/>
    <circle cx="85" cy="20" r="1.5" fill="#9C27B0" opacity="0.4"/>
    
    {/* Bottom line */}
    <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E5E5" strokeWidth="1"/>
  </svg>
);

export default CerebroLogo;

import React from 'react';

const DataDiveLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#2196F3"/>
    <path d="M20 15C25 10 35 10 40 15C45 20 35 25 30 20C25 25 15 20 20 15Z" fill="white"/>
    <path d="M30 25C35 20 45 20 50 25C55 30 45 35 40 30C35 35 25 30 30 25Z" fill="white" opacity="0.8"/>
    <path d="M50 35C55 30 65 30 70 35C75 40 65 45 60 40C55 45 45 40 50 35Z" fill="white" opacity="0.6"/>
    <circle cx="30" cy="20" r="1" fill="#2196F3"/>
    <circle cx="40" cy="30" r="1" fill="#2196F3"/>
    <circle cx="60" cy="40" r="1" fill="#2196F3"/>
    <text x="15" y="55" fill="white" fontSize="8" fontWeight="bold">DataDive</text>
    <path d="M80 20L85 15L85 25Z" fill="white"/>
  </svg>
);

export default DataDiveLogo;

import React from 'react';

const BrandRegistryLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#FFB84D"/>
    <path d="M40 15L50 10L60 15L55 25L50 30L45 25L40 15Z" fill="white"/>
    <path d="M45 20L50 17L55 20L52 25L50 27L48 25L45 20Z" fill="#FFB84D"/>
    <rect x="25" y="35" width="50" height="3" fill="white"/>
    <rect x="30" y="40" width="40" height="2" fill="white" opacity="0.8"/>
    <rect x="35" y="44" width="30" height="2" fill="white" opacity="0.6"/>
    <text x="20" y="55" fill="white" fontSize="6" fontWeight="bold">BRAND REGISTRY</text>
    <circle cx="20" cy="20" r="3" fill="white" opacity="0.5"/>
    <circle cx="80" cy="25" r="2" fill="white" opacity="0.5"/>
  </svg>
);

export default BrandRegistryLogo;

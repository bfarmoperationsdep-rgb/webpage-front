import React from 'react';

const HeliumLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" fill="#1B365D"/>
    <circle cx="25" cy="20" r="6" fill="#00D4FF"/>
    <circle cx="50" cy="30" r="8" fill="#00D4FF"/>
    <circle cx="75" cy="25" r="5" fill="#00D4FF"/>
    <circle cx="35" cy="40" r="4" fill="#00D4FF"/>
    <circle cx="65" cy="45" r="3" fill="#00D4FF"/>
    <path d="M15 15V35H18V26H25V35H28V15H25V23H18V15H15Z" fill="white"/>
    <path d="M52 15V18H58V20H52V23H59V26H49V15H52Z" fill="white"/>
    <text x="75" y="22" fill="white" fontSize="12" fontWeight="bold">10</text>
    <path d="M20 48C15 45 85 45 80 48" stroke="#00D4FF" strokeWidth="2" fill="none"/>
  </svg>
);

export default HeliumLogo;

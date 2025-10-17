import React from 'react';
import './FloatingTelegram.scss';

const FloatingTelegram = () => {
  const whatsappNumber = '380930319897';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-telegram"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default FloatingTelegram;

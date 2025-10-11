import React from 'react';
import './FloatingTelegram.scss';

const FloatingTelegram = () => {
  const telegramUsername = 'Maksym_Lazuto';
  const telegramUrl = `https://t.me/${telegramUsername}`;

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-telegram"
      aria-label="Contact us on Telegram"
      title="Chat with us on Telegram"
    >
      <i className="fab fa-telegram-plane"></i>
    </a>
  );
};

export default FloatingTelegram;

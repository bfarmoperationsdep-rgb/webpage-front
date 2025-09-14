import React from 'react';
import { motion } from 'framer-motion';
import './TrustedBySection.scss';

const TrustedBySection = () => {
  const trustedPoints = [
    {
      icon: '👥',
      text: 'Trusted by 300+ brands and Amazon sellers'
    },
    {
      icon: '📅',
      text: 'In Amazon space since 2015'
    },
    {
      icon: '🏆',
      text: 'Amazon ads certified'
    },
    {
      icon: '🤝',
      text: 'Amazon SPN partners'
    }
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <motion.div 
          className="trusted-by__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {trustedPoints.map((point, index) => (
            <motion.div
              key={index}
              className="trusted-by__item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="trusted-by__icon">
                {point.icon}
              </div>
              <span className="trusted-by__text">
                {point.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;

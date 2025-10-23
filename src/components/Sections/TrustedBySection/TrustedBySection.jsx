import React from 'react';
import { motion } from 'framer-motion';
import amazonAdsBadge from '../../../assets/amazon-ads-badge.png';
import amazonSpnBadge from '../../../assets/amazon-spn-badge.png';
import './TrustedBySection.scss';

const TrustedBySection = () => {
  const trustedPoints = [
    {
      text: 'Trusted by 400+ brands & Amazon sellers'
    },
    {
      text: 'In Amazon space since 2015'
    },
    {
      badge: amazonAdsBadge,
      alt: 'Amazon Ads Verified Partner'
    },
    {
      badge: amazonSpnBadge,
      alt: 'Amazon SPN Partner'
    },
    {
      text: 'Performance guarantee after diagnostic'
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
              className={`trusted-by__item ${point.badge ? 'trusted-by__item--badge' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {point.badge ? (
                <img
                  src={point.badge}
                  alt={point.alt}
                  className="trusted-by__badge-img"
                />
              ) : (
                <>
                  <div className="trusted-by__icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <span className="trusted-by__text">
                    {point.text}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;

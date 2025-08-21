import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="testimonials__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="testimonials__title">{t('testimonials.title')}</h2>
          
          <div className="testimonials__main">
            <motion.div 
              className="testimonials__quote"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonials__quote-content">
                <div className="testimonials__quote-mark">"</div>
                <p>{t('testimonials.quote')}</p>
                <div className="testimonials__author">
                  <div className="testimonials__author-info">
                    <h4>{t('testimonials.author')}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonials__founder"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="testimonials__founder-content">
                <div className="testimonials__founder-quote">
                  <p>{t('founder.quote')}</p>
                </div>
                <div className="testimonials__founder-info">
                  <h4>{t('founder.name')}</h4>
                  <span>{t('founder.title')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
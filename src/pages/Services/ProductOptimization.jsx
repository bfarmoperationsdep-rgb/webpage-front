import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const ProductOptimization = () => {
  const { t } = useLanguage();

  return (
    <div className="service-page">
      <div className="container">
        <motion.div 
          className="service-page__header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/services" className="service-page__back">
            {t('common.backToServices')}
          </Link>
          <h1 className="service-page__title">{t('servicePages.optimization.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.optimization.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.optimization.heading')}</h2>
            <p>
              {t('servicePages.optimization.description')}
            </p>
            
            <div className="service-page__features">
              <h3>{t('servicePages.optimization.processTitle')}</h3>
              <ul>
                {t('servicePages.optimization.features').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-page__process">
              <h3>{t('servicePages.optimization.optimizationTitle')}</h3>
              <div className="process-steps">
                {t('servicePages.optimization.steps').map((step, idx) => (
                  <div key={idx} className="step">
                    <div className="step-number">{idx + 1}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.optimization.ctaTitle')}</h3>
            <p>{t('servicePages.optimization.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.optimization.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductOptimization;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const LaunchingOnAmazon = () => {
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
          <h1 className="service-page__title">{t('servicePages.launching.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.launching.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.launching.heading')}</h2>
            
            <div className="service-page__launch-steps">
              <h3>{t('servicePages.launching.packageTitle')}</h3>
              <div className="launch-steps">
                {t('servicePages.launching.steps').map((step, idx) => (
                  <div key={idx} className="launch-step">
                    <div className="step-icon">{idx + 1}️⃣</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="service-page__features">
              <h3>{t('servicePages.launching.featuresTitle')}</h3>
              <ul>
                {t('servicePages.launching.features').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-page__results">
              <h3>{t('servicePages.launching.resultsTitle')}</h3>
              <div className="results-grid">
                {t('servicePages.launching.results').map((result, idx) => (
                  <div key={idx} className="result-item">
                    <h4>{result.label}</h4>
                    <span>{result.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.launching.ctaTitle')}</h3>
            <p>{t('servicePages.launching.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.launching.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LaunchingOnAmazon;

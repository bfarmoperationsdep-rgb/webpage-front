import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const AmazonAdvertising = () => {
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
          <h1 className="service-page__title">{t('servicePages.advertising.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.advertising.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.advertising.heading')}</h2>
            <p>
              {t('servicePages.advertising.description')}
            </p>
            
            <div className="service-page__features">
              <h3>{t('servicePages.advertising.approachTitle')}</h3>
              <ul>
                {t('servicePages.advertising.features').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-page__case-study">
              <h3>{t('servicePages.advertising.caseStudyTitle')}</h3>
              <div className="case-study-card">
                <h4>{t('servicePages.advertising.caseStudyBrand')}</h4>
                <div className="case-metrics">
                  <div className="metric">
                    <span className="label">{t('servicePages.advertising.roasLabel')}</span>
                    <span className="value">{t('servicePages.advertising.roasValue')}</span>
                    <span className="timeframe">{t('servicePages.advertising.roasTime')}</span>
                  </div>
                  <div className="metric">
                    <span className="label">{t('servicePages.advertising.tacosLabel')}</span>
                    <span className="value">{t('servicePages.advertising.tacosValue')}</span>
                    <span className="timeframe">{t('servicePages.advertising.tacosTime')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.advertising.ctaTitle')}</h3>
            <p>{t('servicePages.advertising.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.advertising.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmazonAdvertising;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const CatalogingServices = () => {
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
          <h1 className="service-page__title">{t('servicePages.cataloging.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.cataloging.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.cataloging.heading')}</h2>
            <p>
              {t('servicePages.cataloging.description')}
            </p>
            
            <div className="service-page__features">
              <h3>{t('servicePages.cataloging.featuresTitle')}</h3>
              <ul>
                {t('servicePages.cataloging.features').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-page__process">
              <h3>{t('servicePages.cataloging.processTitle')}</h3>
              <div className="process-steps">
                {t('servicePages.cataloging.processSteps').map((step, idx) => (
                  <div key={idx} className="step">
                    <div className="step-number">{idx + 1}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('servicePages.cataloging.benefitsTitle')}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {t('servicePages.cataloging.benefits').map((benefit, idx) => (
                  <div key={idx} style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'rgba(5, 150, 105, 0.05)', 
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid rgba(5, 150, 105, 0.1)'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                    <h4 style={{ marginBottom: '0.5rem', color: '#059669' }}>{benefit.title}</h4>
                    <p style={{ color: '#6b7280', margin: 0 }}>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-page__results">
              <h3>{t('servicePages.cataloging.resultsTitle')}</h3>
              <div className="results-grid">
                {t('servicePages.cataloging.results').map((result, idx) => (
                  <div key={idx} className="result-item">
                    <h4>{result.label}</h4>
                    <span>{result.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-page__case-study">
              <h3>{t('servicePages.cataloging.caseStudyTitle')}</h3>
              <div className="case-study-card">
                <h4>{t('servicePages.cataloging.caseStudyBrand')}</h4>
                <p>
                  {t('servicePages.cataloging.caseStudyText')}
                </p>
                <div className="case-metrics">
                  <div className="metric">
                    <span className="label">Конверсія</span>
                    <span className="value">+42%</span>
                    <span className="timeframe">за 3 місяці</span>
                  </div>
                  <div className="metric">
                    <span className="label">Товарів у кошику</span>
                    <span className="value">+28%</span>
                    <span className="timeframe">у середньому</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.cataloging.ctaTitle')}</h3>
            <p>{t('servicePages.cataloging.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.cataloging.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogingServices;

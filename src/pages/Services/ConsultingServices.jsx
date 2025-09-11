import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const ConsultingServices = () => {
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
          <h1 className="service-page__title">{t('servicePages.consulting.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.consulting.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.consulting.heading')}</h2>
            <p>
              {t('servicePages.consulting.description')}
            </p>
            
            <div className="service-page__features">
              <h3>{t('servicePages.consulting.areasTitle')}</h3>
              <ul>
                {t('servicePages.consulting.areas').map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>

            <div className="consulting-types">
              <h3>{t('servicePages.consulting.consultingTypesTitle')}</h3>
              {t('servicePages.consulting.consultingTypes').map((type, idx) => (
                <div key={idx} className="service-page__features">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ margin: 0, color: '#059669' }}>{type.title}</h4>
                    <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>{type.duration}</span>
                  </div>
                  <p style={{ marginBottom: '1rem' }}>{type.description}</p>
                  <h5 style={{ marginBottom: '0.5rem', color: '#374151' }}>Що включено:</h5>
                  <ul style={{ marginBottom: '2rem' }}>
                    {type.includes.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="service-page__results">
              <h3>{t('servicePages.consulting.resultsTitle')}</h3>
              <div className="results-grid">
                {t('servicePages.consulting.results').map((result, idx) => (
                  <div key={idx} className="result-item">
                    <h4>{result.label}</h4>
                    <span>{result.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-page__case-study">
              <h3>{t('servicePages.consulting.caseStudyTitle')}</h3>
              <div className="case-study-card">
                <h4>{t('servicePages.consulting.caseStudyBrand')}</h4>
                <p>
                  {t('servicePages.consulting.caseStudyText')}
                </p>
                <div className="case-metrics">
                  <div className="metric">
                    <span className="label">Зростання обороту</span>
                    <span className="value">+180%</span>
                    <span className="timeframe">за 6 місяців</span>
                  </div>
                  <div className="metric">
                    <span className="label">Нові ринки</span>
                    <span className="value">4 країни</span>
                    <span className="timeframe">успішно запущено</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.consulting.ctaTitle')}</h3>
            <p>{t('servicePages.consulting.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.consulting.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultingServices;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const DesignServices = () => {
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
          <h1 className="service-page__title">{t('servicePages.design.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.design.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.design.heading')}</h2>
            <p>
              {t('servicePages.design.description')}
            </p>
            
            <div className="service-page__features">
              <h3>{t('servicePages.design.featuresTitle')}</h3>
              <ul>
                {t('servicePages.design.features').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-page__process">
              <h3>{t('servicePages.design.processTitle')}</h3>
              <div className="process-steps">
                {t('servicePages.design.processSteps').map((step, idx) => (
                  <div key={idx} className="step">
                    <div className="step-number">{idx + 1}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-page__case-study">
              <h3>{t('servicePages.design.caseStudyTitle')}</h3>
              <div className="case-study-card">
                <h4>{t('servicePages.design.caseStudyBrand')}</h4>
                <p>
                  {t('servicePages.design.caseStudyText')}
                </p>
                <div className="case-metrics">
                  <div className="metric">
                    <span className="label">Конверсія</span>
                    <span className="value">+38%</span>
                    <span className="timeframe">за 2 місяці</span>
                  </div>
                  <div className="metric">
                    <span className="label">Середній чек</span>
                    <span className="value">+25%</span>
                    <span className="timeframe">після редизайну</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.design.ctaTitle')}</h3>
            <p>{t('servicePages.design.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.design.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignServices;

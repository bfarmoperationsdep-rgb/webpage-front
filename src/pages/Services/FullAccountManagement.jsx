import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const FullAccountManagement = () => {
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
          <h1 className="service-page__title">{t('servicePages.fullAccount.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.fullAccount.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.fullAccount.heading')}</h2>
            <p>
              {t('servicePages.fullAccount.description')}
            </p>
            
            <div className="service-page__features">
              <h3>{t('servicePages.fullAccount.featuresTitle')}</h3>
              <ul>
                {t('servicePages.fullAccount.features').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-page__stats">
              <h3>{t('servicePages.fullAccount.trackRecordTitle')}</h3>
              <div className="stats-table">
                <div className="stats-row stats-header">
                  {t('servicePages.fullAccount.statsHeaders').map((header, idx) => (
                    <div key={idx}>{header}</div>
                  ))}
                </div>
                {t('servicePages.fullAccount.stats').map((stat, idx) => (
                  <div key={idx} className="stats-row">
                    <div>{stat[0]}</div>
                    <div>{stat[1]}</div>
                    <div>{stat[2]}</div>
                    <div className="positive">{stat[3]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('common.readyToScale')}</h3>
            <p>{t('common.letsDiscuss')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('common.getStarted')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullAccountManagement;

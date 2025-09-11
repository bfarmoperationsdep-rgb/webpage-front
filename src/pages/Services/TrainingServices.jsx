import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ServicePage.scss';

const TrainingServices = () => {
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
          <h1 className="service-page__title">{t('servicePages.training.title')}</h1>
          <p className="service-page__subtitle">
            {t('servicePages.training.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>{t('servicePages.training.heading')}</h2>
            <p>
              {t('servicePages.training.description')}
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('servicePages.training.programsTitle')}</h3>
            {t('servicePages.training.programs').map((program, idx) => (
              <div key={idx} className="service-page__features" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ margin: 0, color: '#059669' }}>{program.title}</h4>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#6b7280' }}>
                    <span>📅 {program.duration}</span>
                    <span>📊 {program.level}</span>
                  </div>
                </div>
                <p style={{ marginBottom: '1rem' }}>{program.description}</p>
                <h5 style={{ marginBottom: '0.5rem', color: '#374151' }}>Що вивчимо:</h5>
                <ul>
                  {program.topics.map((topic, topicIdx) => (
                    <li key={topicIdx}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('servicePages.training.formatsTitle')}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {t('servicePages.training.formats').map((format, idx) => (
                <div key={idx} style={{ 
                  padding: '1.5rem', 
                  backgroundColor: 'rgba(5, 150, 105, 0.05)', 
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid rgba(5, 150, 105, 0.1)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{format.icon}</div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#059669' }}>{format.title}</h4>
                  <p style={{ color: '#6b7280', margin: 0 }}>{format.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-page__results">
            <h3>{t('servicePages.training.resultsTitle')}</h3>
            <div className="results-grid">
              {t('servicePages.training.results').map((result, idx) => (
                <div key={idx} className="result-item">
                  <h4>{result.label}</h4>
                  <span>{result.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-page__case-study">
            <h3>{t('servicePages.training.caseStudyTitle')}</h3>
            <div className="case-study-card">
              <h4>{t('servicePages.training.caseStudyBrand')}</h4>
              <p>
                {t('servicePages.training.caseStudyText')}
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <span className="label">Зростання продажів</span>
                  <span className="value">+280%</span>
                  <span className="timeframe">за рік</span>
                </div>
                <div className="metric">
                  <span className="label">ROI від навчання</span>
                  <span className="value">1500%</span>
                  <span className="timeframe">перший рік</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__launch-steps">
            <h3>{t('servicePages.training.launchStepsTitle')}</h3>
            <div className="launch-steps">
              {t('servicePages.training.launchSteps').map((step, idx) => (
                <div key={idx} className="launch-step">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-page__cta">
            <h3>{t('servicePages.training.ctaTitle')}</h3>
            <p>{t('servicePages.training.ctaText')}</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              {t('servicePages.training.ctaButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingServices;

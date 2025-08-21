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
          <h1 className="service-page__title">Amazon Advertising Management</h1>
          <p className="service-page__subtitle">
            We don't "run ads"—we hunt profit. We blend rule‑based bid‑management with 
            an ML conversion‑forecast model.
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>Advanced PPC Management</h2>
            <p>
              All formats covered: Sponsored Products, Brands, Display, DSP.
            </p>
            
            <div className="service-page__features">
              <h3>Our Approach:</h3>
              <ul>
                <li>In‑house bid‑management scripts cut CPC by up to –25% without losing traffic</li>
                <li>DSP retargeting wins back up to 14% of "lost" visitors</li>
                <li>ML-powered conversion forecasting</li>
                <li>Rule-based bid optimization</li>
                <li>Multi-format campaign management</li>
              </ul>
            </div>

            <div className="service-page__case-study">
              <h3>Case Study</h3>
              <div className="case-study-card">
                <h4>Pet Supplements Brand</h4>
                <div className="case-metrics">
                  <div className="metric">
                    <span className="label">ROAS Improvement</span>
                    <span className="value">2.8 → 5.1</span>
                    <span className="timeframe">in 3 months</span>
                  </div>
                  <div className="metric">
                    <span className="label">TACoS Reduction</span>
                    <span className="value">18% → 11%</span>
                    <span className="timeframe">sustained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Optimize Your Amazon Ads?</h3>
            <p>Let's turn your advertising spend into profitable growth.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Optimizing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmazonAdvertising;

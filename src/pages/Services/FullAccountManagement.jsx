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
          <h1 className="service-page__title">Full Account Management</h1>
          <p className="service-page__subtitle">
            We remove the grunt work, giving you back time for R&D and brand building.
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>360° Amazon Care</h2>
            <p>
              360° care: purchasing & FBA logistics, KPI‑driven stock management, 
              Seller Central / Brand Registry admin.
            </p>
            
            <div className="service-page__features">
              <h3>What's Included:</h3>
              <ul>
                <li>Automated SOPs → zero errors and full transparency in Slack + Looker Studio</li>
                <li>Average client net‑profit uplift after 6 months: +42%</li>
                <li>Daily account monitoring and optimization</li>
                <li>Inventory management and forecasting</li>
                <li>Performance reporting and analytics</li>
              </ul>
            </div>

            <div className="service-page__stats">
              <h3>Our Track Record</h3>
              <div className="stats-table">
                <div className="stats-row stats-header">
                  <div>KPI</div>
                  <div>Before BFarm</div>
                  <div>After 6 mo.</div>
                  <div>Δ</div>
                </div>
                <div className="stats-row">
                  <div>Revenue</div>
                  <div>$120K/mo</div>
                  <div>$170K/mo</div>
                  <div className="positive">+42%</div>
                </div>
                <div className="stats-row">
                  <div>Sessions</div>
                  <div>58K</div>
                  <div>78K</div>
                  <div className="positive">+34%</div>
                </div>
                <div className="stats-row">
                  <div>Avg. CPC</div>
                  <div>$1.18</div>
                  <div>$0.94</div>
                  <div className="positive">–20%</div>
                </div>
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

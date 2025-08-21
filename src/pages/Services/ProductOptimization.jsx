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
            ← Back to Services
          </Link>
          <h1 className="service-page__title">Product Page Optimization</h1>
          <p className="service-page__subtitle">
            Data‑Driven SEO: Brand Analytics + Helium 10 → 100/100 relevance.
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>Optimization That Converts</h2>
            <p>
              Copy that sells: Hook—Problem—Solution—Proof formula.
            </p>
            
            <div className="service-page__features">
              <h3>Our Process:</h3>
              <ul>
                <li>Copy that sells: Hook—Problem—Solution—Proof formula</li>
                <li>Open A/B panel shows you which tweaks deliver +15‑30% CVR</li>
                <li>Keyword research and optimization</li>
                <li>Image and video optimization</li>
                <li>A+ Content creation</li>
                <li>Competitor analysis</li>
              </ul>
            </div>

            <div className="service-page__process">
              <h3>Optimization Process</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Audit & Analysis</h4>
                  <p>Complete listing audit with competitor analysis</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Keyword Research</h4>
                  <p>Data-driven keyword strategy using Brand Analytics</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Content Optimization</h4>
                  <p>Hook—Problem—Solution—Proof copywriting</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>A/B Testing</h4>
                  <p>Continuous testing for +15‑30% CVR improvement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Optimize Your Listings?</h3>
            <p>Let's maximize your conversion rates and visibility.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Optimize Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductOptimization;

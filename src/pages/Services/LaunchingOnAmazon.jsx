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
            ← Back to Services
          </Link>
          <h1 className="service-page__title">Launching on Amazon</h1>
          <p className="service-page__subtitle">
            "Launch & Lead" package: Niche analysis & white‑space strategy → we dodge the "red ocean."
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-page__description">
            <h2>Strategic Product Launch</h2>
            
            <div className="service-page__launch-steps">
              <h3>"Launch & Lead" Package:</h3>
              <div className="launch-steps">
                <div className="launch-step">
                  <div className="step-icon">1️⃣</div>
                  <div className="step-content">
                    <h4>Positioning & Price-Point Selection</h4>
                    <p>Strategic market positioning for maximum impact</p>
                  </div>
                </div>
                <div className="launch-step">
                  <div className="step-icon">2️⃣</div>
                  <div className="step-content">
                    <h4>Creation of Killer Listing, EBC and Video</h4>
                    <p>Complete content creation optimized for conversions</p>
                  </div>
                </div>
                <div className="launch-step">
                  <div className="step-icon">3️⃣</div>
                  <div className="step-content">
                    <h4>Kick-off Ads (SP + SB + SD) + "White-hat" Review Plan</h4>
                    <p>Multi-format advertising launch with review strategy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-page__features">
              <h3>What You Get:</h3>
              <ul>
                <li>Step‑by‑step 0‑90 day plan: from listings to first review</li>
                <li>Amazon's Choice guaranteed or the service fee is refunded</li>
                <li>Niche analysis and competition research</li>
                <li>White-space opportunity identification</li>
                <li>Complete launch strategy and execution</li>
              </ul>
            </div>

            <div className="service-page__results">
              <h3>Average Results</h3>
              <div className="results-grid">
                <div className="result-item">
                  <h4>Break-even</h4>
                  <span>Day 38</span>
                </div>
                <div className="result-item">
                  <h4>Revenue</h4>
                  <span>$100K in first 90 days</span>
                </div>
                <div className="result-item">
                  <h4>Success Rate</h4>
                  <span>Amazon's Choice guarantee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Launch Successfully?</h3>
            <p>Let's create a winning launch strategy for your product.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Plan My Launch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LaunchingOnAmazon;

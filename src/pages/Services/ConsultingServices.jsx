import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const ConsultingServices = () => {
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
            ← Back to All Services
          </Link>
          <h1 className="service-page__title">Consulting</h1>
          <p className="service-page__subtitle">
            Expert Amazon consulting to guide your business strategy and growth with personalized approach for each client
          </p>
        </motion.div>

        <motion.div
          className="service-page__content-single"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-description">
            <div className="service-description__main">
              <h2>Strategic Amazon Consulting</h2>
              <p>
                Navigating the complexities of selling on Amazon can be overwhelming. From account suspensions and policy violations to
                strategic planning and market expansion, having an experienced Amazon consultant on your side can be the difference between
                struggling and thriving. Our consulting services provide you with expert guidance, strategic insights, and actionable solutions
                tailored to your unique business challenges and goals.
              </p>
              <p>
                Whether you're launching a new brand, troubleshooting account issues, expanding internationally, or looking to optimize your
                existing operations, our team of Amazon experts brings years of hands-on experience and proven strategies to help you overcome
                obstacles and achieve sustainable growth on the platform.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chess"></i>
                </div>
                <h3>Strategic Planning</h3>
                <p>Comprehensive Amazon strategy development aligned with your business goals, including market analysis, competitive positioning, and growth roadmap creation.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Account Audits</h3>
                <p>Complete account health audits to identify issues, opportunities, and optimization areas with detailed recommendations and priority action plans.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Product Launch Strategy</h3>
                <p>Expert guidance on launching new products successfully with optimal positioning, pricing strategy, marketing tactics, and launch sequence planning.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Brand Protection</h3>
                <p>Protect your brand from unauthorized sellers, counterfeiters, and hijackers with strategic brand registry setup, IP protection, and violation management.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>International Expansion</h3>
                <p>Strategic guidance for expanding to international Amazon marketplaces including market selection, localization strategies, and compliance management.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Issue Resolution</h3>
                <p>Expert help with account suspensions, listing suppressions, policy violations, and other Amazon-related issues with proven appeal strategies.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> One-on-one strategic consulting sessions</li>
                <li><i className="fas fa-check-circle"></i> Comprehensive account and business analysis</li>
                <li><i className="fas fa-check-circle"></i> Custom strategy development and roadmaps</li>
                <li><i className="fas fa-check-circle"></i> Market research and competitive analysis</li>
                <li><i className="fas fa-check-circle"></i> Performance optimization recommendations</li>
                <li><i className="fas fa-check-circle"></i> Account health monitoring and compliance</li>
                <li><i className="fas fa-check-circle"></i> Problem-solving and troubleshooting support</li>
                <li><i className="fas fa-check-circle"></i> Launch planning and execution guidance</li>
                <li><i className="fas fa-check-circle"></i> International expansion strategies</li>
                <li><i className="fas fa-check-circle"></i> Ongoing strategic advisory support</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our Consulting Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Discovery Call</h3>
                  <p>Initial consultation to understand your business, challenges, goals, and determine how we can best help you succeed.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Analysis & Strategy</h3>
                  <p>Deep dive analysis of your account, market, and competition followed by custom strategy development and action plan.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Implementation</h3>
                  <p>Guided implementation of recommendations with ongoing support, troubleshooting, and adjustment as needed.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Optimization</h3>
                  <p>Continuous monitoring, performance review, and strategic optimization to ensure long-term success and growth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Take Your Amazon Business to the Next Level?</h3>
            <p>Let's develop a winning strategy tailored to your business</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultingServices;

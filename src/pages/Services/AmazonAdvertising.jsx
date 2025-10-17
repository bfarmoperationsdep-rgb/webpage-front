import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const AmazonAdvertising = () => {
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
          <h1 className="service-page__title">Amazon Advertising Optimization</h1>
          <p className="service-page__subtitle">
            Professional Amazon PPC management to maximize your advertising ROI and drive profitable growth
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
              <h2>Maximize Your Amazon Advertising Performance</h2>
              <p>
                Amazon advertising is one of the most powerful tools to drive sales and visibility on the platform. However, without proper
                management and optimization, you can quickly waste your budget on unprofitable clicks. Our Amazon Advertising Optimization
                service ensures every dollar you spend works harder for your business through strategic campaign management, continuous
                optimization, and data-driven decision making.
              </p>
              <p>
                We specialize in all Amazon advertising formats including Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP.
                Our team of certified Amazon advertising experts continuously monitors, tests, and optimizes your campaigns to lower ACoS,
                increase sales, and improve organic rankings through strategic advertising investment.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3>Sponsored Products</h3>
                <p>Expert management of Sponsored Products campaigns with advanced keyword research, bid optimization, and negative keyword strategies to maximize ROI.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h3>Sponsored Brands</h3>
                <p>Create compelling Sponsored Brands campaigns that showcase your brand story, drive awareness, and capture high-intent shoppers with custom headlines and creative.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Sponsored Display</h3>
                <p>Strategic display advertising to retarget shoppers, defend your brand, and reach new audiences both on and off Amazon with precise targeting.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-tv"></i>
                </div>
                <h3>Amazon DSP</h3>
                <p>Programmatic advertising at scale with Amazon DSP for advanced brand awareness campaigns, video ads, and sophisticated audience targeting.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Performance Analytics</h3>
                <p>Comprehensive analytics and reporting with custom dashboards, performance metrics, and actionable insights to track ROI and campaign effectiveness.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <h3>Keyword Strategy</h3>
                <p>Advanced keyword research, competitor analysis, search term mining, and continuous optimization to capture high-converting traffic at the best cost.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Complete campaign setup and structure optimization</li>
                <li><i className="fas fa-check-circle"></i> Advanced keyword research and targeting strategies</li>
                <li><i className="fas fa-check-circle"></i> Daily bid management and budget optimization</li>
                <li><i className="fas fa-check-circle"></i> Negative keyword identification and implementation</li>
                <li><i className="fas fa-check-circle"></i> A/B testing of ad copy and creative elements</li>
                <li><i className="fas fa-check-circle"></i> Search term analysis and optimization</li>
                <li><i className="fas fa-check-circle"></i> Campaign placement optimization (top of search, product pages, etc.)</li>
                <li><i className="fas fa-check-circle"></i> Competitor analysis and market insights</li>
                <li><i className="fas fa-check-circle"></i> Monthly performance reports and strategy sessions</li>
                <li><i className="fas fa-check-circle"></i> ACoS optimization and TACoS management</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our Advertising Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Audit & Strategy</h3>
                  <p>Comprehensive audit of existing campaigns, competitor analysis, and development of custom advertising strategy aligned with your goals.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Campaign Launch</h3>
                  <p>Strategic campaign structure setup, keyword research implementation, and initial launch with optimized bids and targeting.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Optimization & Testing</h3>
                  <p>Continuous monitoring, daily bid adjustments, A/B testing, and ongoing optimization to improve performance and reduce wasted spend.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Scale & Growth</h3>
                  <p>Strategic scaling of winning campaigns, expansion to new keywords and placements, and continuous improvement for long-term growth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Optimize Your Amazon Advertising?</h3>
            <p>Let's maximize your ROI and drive profitable growth through expert PPC management</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmazonAdvertising;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const ProductOptimization = () => {
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
          <h1 className="service-page__title">Amazon SEO</h1>
          <p className="service-page__subtitle">
            Optimize your product listings for maximum visibility and search rankings to increase organic traffic and sales
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
              <h2>Dominate Amazon Search Results</h2>
              <p>
                Amazon is a search engine first, marketplace second. With millions of products competing for visibility, ranking high in
                Amazon search results is critical to your success. Our Amazon SEO service helps you optimize every element of your product
                listings to rank higher, attract more qualified traffic, and convert browsers into buyers through strategic keyword optimization
                and listing enhancement.
              </p>
              <p>
                We use advanced keyword research tools, competitor analysis, and proven optimization techniques to ensure your products are
                discovered by customers actively searching for what you sell. From titles and bullet points to backend search terms and
                A+ Content, we optimize every ranking factor to improve your organic visibility and drive sustainable, long-term growth.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>Keyword Research</h3>
                <p>Comprehensive keyword research using advanced tools to identify high-volume, high-converting search terms your customers are actually using to find products like yours.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-heading"></i>
                </div>
                <h3>Title Optimization</h3>
                <p>Strategic product title optimization that balances keyword placement with readability and conversion, following Amazon's best practices and character limits.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-list-ul"></i>
                </div>
                <h3>Bullet Points & Description</h3>
                <p>Compelling bullet points and product descriptions that incorporate relevant keywords naturally while highlighting benefits and addressing customer pain points.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-tag"></i>
                </div>
                <h3>Backend Keywords</h3>
                <p>Strategic backend search term optimization to capture additional relevant searches without cluttering your visible listing content.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Ranking Monitoring</h3>
                <p>Continuous tracking of your keyword rankings, competitor positions, and organic performance with regular optimization adjustments based on data.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h3>Competitor Analysis</h3>
                <p>In-depth analysis of top-ranking competitors to identify winning keywords, content strategies, and opportunities to differentiate and outrank them.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Comprehensive keyword research and analysis</li>
                <li><i className="fas fa-check-circle"></i> Product title optimization for maximum visibility</li>
                <li><i className="fas fa-check-circle"></i> Bullet point and description optimization</li>
                <li><i className="fas fa-check-circle"></i> Backend search term optimization</li>
                <li><i className="fas fa-check-circle"></i> Competitor keyword analysis</li>
                <li><i className="fas fa-check-circle"></i> Category and browse node optimization</li>
                <li><i className="fas fa-check-circle"></i> A+ Content keyword integration</li>
                <li><i className="fas fa-check-circle"></i> Ranking tracking and monitoring</li>
                <li><i className="fas fa-check-circle"></i> Monthly performance reports</li>
                <li><i className="fas fa-check-circle"></i> Ongoing optimization and updates</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our SEO Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Audit & Research</h3>
                  <p>Complete listing audit, keyword research, competitor analysis, and identification of optimization opportunities.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Optimization</h3>
                  <p>Strategic implementation of keywords across title, bullets, description, backend terms, and all listing elements.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Monitoring</h3>
                  <p>Track keyword rankings, organic traffic, conversion rates, and overall listing performance with detailed analytics.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Continuous Improvement</h3>
                  <p>Ongoing optimization based on performance data, algorithm updates, and changing market conditions to maintain top rankings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Rank Higher on Amazon?</h3>
            <p>Let's optimize your listings to dominate search results and drive more organic sales</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductOptimization;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const TrainingServices = () => {
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
          <h1 className="service-page__title">Amazon Coaching</h1>
          <p className="service-page__subtitle">
            Comprehensive Amazon training programs for sellers and businesses to work with the platform effectively and professionally
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
              <h2>Master Amazon with Expert Coaching</h2>
              <p>
                Success on Amazon requires knowledge, skills, and strategic thinking. Our Amazon Coaching program provides you with
                comprehensive training from experienced Amazon sellers and consultants who have built and scaled successful brands on
                the platform. Whether you're a complete beginner or an experienced seller looking to level up, our coaching programs
                give you the knowledge and confidence to succeed.
              </p>
              <p>
                We offer personalized coaching sessions, group workshops, and custom training programs tailored to your experience level
                and business needs. From understanding Amazon basics to advanced strategies in PPC, SEO, and brand building, we cover
                everything you need to build a profitable and sustainable Amazon business.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Amazon Fundamentals</h3>
                <p>Complete training on Amazon basics including account setup, product listings, FBA vs FBM, policy compliance, and understanding how the Amazon marketplace works.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <h3>PPC & Advertising Mastery</h3>
                <p>Advanced training on Amazon advertising including Sponsored Products, Sponsored Brands, campaign structure, keyword strategies, and optimization techniques.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>SEO & Optimization</h3>
                <p>Learn proven strategies to rank higher in Amazon search including keyword research, listing optimization, backend search terms, and ranking factors.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-store-alt"></i>
                </div>
                <h3>Brand Building</h3>
                <p>Strategic training on building a lasting brand on Amazon including brand registry, A+ Content, brand stores, and protecting your brand identity.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-analytics"></i>
                </div>
                <h3>Analytics & Data</h3>
                <p>Master Amazon analytics tools including Business Reports, Brand Analytics, and data-driven decision making to optimize performance and profitability.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Team Training</h3>
                <p>Custom training programs for your team with hands-on exercises, real-world examples, and ongoing support to ensure everyone is aligned and productive.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> One-on-one coaching sessions with Amazon experts</li>
                <li><i className="fas fa-check-circle"></i> Comprehensive training materials and resources</li>
                <li><i className="fas fa-check-circle"></i> Step-by-step implementation guidance</li>
                <li><i className="fas fa-check-circle"></i> Real-world case studies and examples</li>
                <li><i className="fas fa-check-circle"></i> Hands-on practical exercises</li>
                <li><i className="fas fa-check-circle"></i> Q&A sessions and problem solving</li>
                <li><i className="fas fa-check-circle"></i> Custom curriculum based on your needs</li>
                <li><i className="fas fa-check-circle"></i> Ongoing support and follow-up</li>
                <li><i className="fas fa-check-circle"></i> Access to exclusive tools and templates</li>
                <li><i className="fas fa-check-circle"></i> Certificate of completion</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our Coaching Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Assessment</h3>
                  <p>Evaluate your current knowledge level, business goals, and specific challenges to create a customized coaching plan.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Training Sessions</h3>
                  <p>Structured coaching sessions covering essential topics with interactive learning, practical examples, and hands-on exercises.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Implementation</h3>
                  <p>Apply what you learned with guided implementation support, feedback, and troubleshooting as you execute strategies.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Ongoing Support</h3>
                  <p>Continued access to coaching support, resources, and advanced training to ensure long-term success on Amazon.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Master Amazon?</h3>
            <p>Let's accelerate your learning with expert coaching and proven strategies</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingServices;

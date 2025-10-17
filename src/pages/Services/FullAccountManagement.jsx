import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const FullAccountManagement = () => {
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
          <h1 className="service-page__title">Full Amazon Account Management</h1>
          <p className="service-page__subtitle">
            Complete end-to-end Amazon account management with dedicated support to grow your business
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
              <h2>Your Complete Amazon Partner</h2>
              <p>
                Running a successful Amazon business requires constant attention, expertise, and strategic decision-making.
                Our Full Amazon Account Management service provides you with a dedicated team of Amazon specialists who handle
                every aspect of your seller account, allowing you to focus on growing your business while we manage the day-to-day operations.
              </p>
              <p>
                From product listing optimization and inventory management to customer service and advertising campaigns,
                we take care of everything. Our team acts as an extension of your business, working tirelessly to maximize
                your sales, improve your metrics, and ensure your Amazon presence is optimized for success.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Account Optimization</h3>
                <p>Complete account setup, brand registry, and ongoing optimization to ensure peak performance and compliance with Amazon policies.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-boxes"></i>
                </div>
                <h3>Inventory Management</h3>
                <p>Strategic inventory planning, demand forecasting, and FBA shipment coordination to prevent stockouts and optimize cash flow.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3>Advertising & Marketing</h3>
                <p>Professional PPC campaign management, sponsored ads optimization, and marketing strategies to drive traffic and sales.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Customer Service</h3>
                <p>24/7 customer support, review management, returns processing, and proactive communication to maintain excellent seller metrics.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h3>Financial Reporting</h3>
                <p>Detailed monthly reports, P&L analysis, ROI tracking, and financial insights to help you make data-driven business decisions.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Growth Strategy</h3>
                <p>Long-term strategic planning, market expansion guidance, product development support, and competitive analysis for sustainable growth.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What You Get</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Dedicated Account Manager assigned to your business</li>
                <li><i className="fas fa-check-circle"></i> Daily account monitoring and health score optimization</li>
                <li><i className="fas fa-check-circle"></i> Complete listing creation and optimization</li>
                <li><i className="fas fa-check-circle"></i> Professional PPC campaign management</li>
                <li><i className="fas fa-check-circle"></i> Inventory forecasting and management</li>
                <li><i className="fas fa-check-circle"></i> Customer service and review management</li>
                <li><i className="fas fa-check-circle"></i> Monthly performance reports and strategy sessions</li>
                <li><i className="fas fa-check-circle"></i> Brand protection and policy compliance</li>
                <li><i className="fas fa-check-circle"></i> Issue resolution and account health management</li>
                <li><i className="fas fa-check-circle"></i> Ongoing optimization and growth recommendations</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>How It Works</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Discovery & Onboarding</h3>
                  <p>We learn about your business, goals, and products. Complete account audit and strategy development.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Account Setup & Optimization</h3>
                  <p>Full account setup, listing optimization, brand registry, and initial campaign launch.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Daily Management</h3>
                  <p>Ongoing daily operations, monitoring, customer service, inventory management, and advertising optimization.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Growth & Scaling</h3>
                  <p>Continuous improvement, expansion strategies, and scaling your Amazon business to new heights.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Scale Your Amazon Business?</h3>
            <p>Let our expert team handle everything while you focus on growth</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullAccountManagement;

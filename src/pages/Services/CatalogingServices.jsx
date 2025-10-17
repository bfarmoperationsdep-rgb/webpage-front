import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const CatalogingServices = () => {
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
          <h1 className="service-page__title">Cataloging</h1>
          <p className="service-page__subtitle">
            Service providers will help you to list new products or offers adhering to Amazon guidelines, optimize your catalog, and reduce errors
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
              <h2>Professional Catalog Management for Amazon</h2>
              <p>
                Your product catalog is the foundation of your Amazon business. Errors, incomplete data, or poor organization can lead to
                suppressed listings, lost sales, and frustrated customers. Our Cataloging service ensures your products are listed correctly,
                optimized for discovery, and fully compliant with Amazon's ever-changing requirements and guidelines.
              </p>
              <p>
                We handle everything from initial product setup and data entry to ongoing catalog maintenance and optimization. Our team of
                cataloging specialists ensures your products are categorized correctly, all required attributes are filled, variations are
                properly configured, and your inventory data stays synchronized across all channels.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-upload"></i>
                </div>
                <h3>Product Listing Creation</h3>
                <p>Complete product listing setup adhering to Amazon guidelines with accurate data entry, proper categorization, and all required attributes filled correctly.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3>Category Optimization</h3>
                <p>Strategic category and browse node selection to maximize product visibility and ensure customers can easily find your products in search and browse.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-object-group"></i>
                </div>
                <h3>Variation Management</h3>
                <p>Expert setup of product variations including parent-child relationships, size/color matrices, and variation themes to showcase all product options effectively.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3>Bulk Upload Services</h3>
                <p>Seamless mass product uploads and catalog migrations using flat files, APIs, and bulk processing tools with quality assurance and error prevention.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3>Catalog Maintenance</h3>
                <p>Ongoing catalog updates, inventory synchronization, price management, and regular compliance checks to keep your listings current and error-free.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-check-double"></i>
                </div>
                <h3>Quality Assurance</h3>
                <p>Comprehensive catalog audits, error identification and correction, data validation, and quality control to ensure accuracy across all product listings.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Complete product data entry and management</li>
                <li><i className="fas fa-check-circle"></i> Amazon guidelines compliance verification</li>
                <li><i className="fas fa-check-circle"></i> Accurate SKU and ASIN management</li>
                <li><i className="fas fa-check-circle"></i> Proper attribute mapping and completion</li>
                <li><i className="fas fa-check-circle"></i> Browse node and category optimization</li>
                <li><i className="fas fa-check-circle"></i> Variation and parent-child setup</li>
                <li><i className="fas fa-check-circle"></i> Bulk upload and migration support</li>
                <li><i className="fas fa-check-circle"></i> Error identification and correction</li>
                <li><i className="fas fa-check-circle"></i> Regular catalog audits and maintenance</li>
                <li><i className="fas fa-check-circle"></i> Inventory synchronization across channels</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our Cataloging Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Catalog Audit</h3>
                  <p>Complete review of existing catalog (if applicable), identification of errors, missing data, and optimization opportunities.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Data Preparation</h3>
                  <p>Product data organization, category research, attribute mapping, and preparation of all required information for listing creation.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Listing Creation</h3>
                  <p>Professional product listing setup with accurate data entry, proper categorization, and full Amazon guidelines compliance.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Ongoing Maintenance</h3>
                  <p>Regular catalog updates, quality monitoring, error correction, and continuous optimization to maintain listing health.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Optimize Your Product Catalog?</h3>
            <p>Let's ensure your products are listed correctly and optimized for maximum visibility</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogingServices;

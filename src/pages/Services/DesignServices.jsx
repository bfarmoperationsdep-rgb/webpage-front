import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const DesignServices = () => {
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
          <h1 className="service-page__title">Design for Amazon</h1>
          <p className="service-page__subtitle">
            Professional brand guidelines, storytelling, and Enhanced Brand Content (A+) services for your Amazon business
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
              <h2>Elevate Your Brand on Amazon</h2>
              <p>
                In a crowded marketplace, strong visual branding and compelling content are what set successful brands apart. Our Design for
                Amazon services help you create a professional, cohesive brand presence that builds trust, tells your story, and converts
                browsers into loyal customers. From establishing brand guidelines to creating stunning A+ Content, we ensure every visual
                element works together to strengthen your brand identity.
              </p>
              <p>
                Our team of experienced designers specializes in Amazon-specific design requirements and best practices. We create visually
                striking content that not only looks beautiful but also drives conversions, improves customer experience, and helps you
                stand out from competitors on the platform.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>Brand Guidelines</h3>
                <p>Comprehensive brand guidelines for your Amazon presence including color palettes, typography, logo usage, visual identity system, and Amazon-specific design standards to ensure consistency across all touchpoints.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Brand Story</h3>
                <p>Compelling brand storytelling that resonates with customers including narrative development, visual design, emotional connection building, and presentation of your mission, values, and unique value proposition.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-plus-square"></i>
                </div>
                <h3>Enhanced Brand Content A+</h3>
                <p>Professional A+ Content and Premium A+ design with custom layouts, comparison charts, lifestyle imagery, video integration, and interactive modules to showcase your products and drive conversions.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h3>Brand Store Design</h3>
                <p>Custom Amazon Brand Store creation with multi-page layouts, intuitive navigation, immersive shopping experience, and mobile optimization to showcase your complete product catalog.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Visual Identity</h3>
                <p>Complete visual identity system development including color schemes, typography selection, graphic elements, and design templates that work seamlessly across all Amazon content.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Optimization</h3>
                <p>Ensure all design elements are optimized for mobile shoppers with responsive layouts, touch-friendly interfaces, and fast-loading visuals for the best mobile experience.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Complete brand guidelines documentation</li>
                <li><i className="fas fa-check-circle"></i> Brand story development and design</li>
                <li><i className="fas fa-check-circle"></i> A+ Content module creation</li>
                <li><i className="fas fa-check-circle"></i> Premium A+ Content with video and interactive elements</li>
                <li><i className="fas fa-check-circle"></i> Brand Store design and setup</li>
                <li><i className="fas fa-check-circle"></i> Custom graphics and visual assets</li>
                <li><i className="fas fa-check-circle"></i> Amazon compliance review</li>
                <li><i className="fas fa-check-circle"></i> Mobile optimization</li>
                <li><i className="fas fa-check-circle"></i> Unlimited revisions until perfect</li>
                <li><i className="fas fa-check-circle"></i> Source files and design assets</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our Design Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Discovery & Strategy</h3>
                  <p>Understand your brand, target audience, competitors, and goals to develop a comprehensive design strategy.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Concept Development</h3>
                  <p>Create initial design concepts, brand guidelines, and visual direction with multiple options for your review.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Design & Refinement</h3>
                  <p>Develop complete designs with your feedback, refine until perfect, and ensure Amazon compliance throughout.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Delivery & Support</h3>
                  <p>Deliver all final assets, provide implementation support, and offer ongoing design assistance as needed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Build a Standout Brand?</h3>
            <p>Let's create a professional, cohesive brand presence that drives results</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignServices;

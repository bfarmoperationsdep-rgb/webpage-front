import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const ImagingServices = () => {
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
          <h1 className="service-page__title">Images for Amazon</h1>
          <p className="service-page__subtitle">
            Add quality images adhering to Amazon guidelines, to your listings to help to increase views and conversion
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
              <h2>Professional Amazon Product Photography</h2>
              <p>
                Images are the most important element of your Amazon listing. Customers can't touch or feel your products online, so your
                images must do all the selling. High-quality, professional product photography that follows Amazon's guidelines while
                showcasing your products in the best possible light is essential to driving clicks, building trust, and converting browsers
                into buyers.
              </p>
              <p>
                Our imaging services provide you with complete, Amazon-optimized image packages that maximize your click-through rate (CTR)
                and conversion rate. From perfect main images that grab attention in search results to compelling lifestyle and infographic
                images that tell your product story, we create visuals that sell.
              </p>
            </div>

            <div className="service-features-grid">
              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h3>Full Stack Images for Amazon Product</h3>
                <p>Complete image package including Amazon-compliant main image, 6-7 secondary lifestyle and infographic images, feature highlights, comparison charts, size guides, professional photography, and A+ Content compatible visuals optimized for maximum impact.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-mouse-pointer"></i>
                </div>
                <h3>Main Image CTR Improve</h3>
                <p>Specialized service focused on optimizing your main product image to maximize Click-Through Rate in Amazon search results. Pure white background (RGB 255,255,255), product fills 85% of frame, professional editing, multiple angles for A/B testing, and competitor differentiation.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-images"></i>
                </div>
                <h3>Lifestyle Photography</h3>
                <p>Compelling lifestyle images showing your products in real-world scenarios with professional models, scene creation, contextual shots, and emotional connection that helps customers envision using your product.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Infographic Design</h3>
                <p>Eye-catching infographics highlighting key features and benefits with custom design, brand alignment, clear messaging, comparison charts, and conversion-focused layouts that educate and persuade.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-magic"></i>
                </div>
                <h3>Image Enhancement</h3>
                <p>Professional editing and retouching including color correction, background removal, shadow and reflection addition, image optimization, and enhancement to make your products look their absolute best.</p>
              </div>

              <div className="feature-block">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Amazon Compliance</h3>
                <p>All images are created following Amazon's technical requirements and best practices including proper dimensions, file formats, background standards, and content guidelines to ensure approval.</p>
              </div>
            </div>

            <div className="service-benefits">
              <h2>What's Included</h2>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Amazon-compliant main image (white background)</li>
                <li><i className="fas fa-check-circle"></i> 6-7 secondary lifestyle and infographic images</li>
                <li><i className="fas fa-check-circle"></i> Professional product photography</li>
                <li><i className="fas fa-check-circle"></i> Feature highlight infographics</li>
                <li><i className="fas fa-check-circle"></i> Comparison charts and size guides</li>
                <li><i className="fas fa-check-circle"></i> Image optimization for Amazon</li>
                <li><i className="fas fa-check-circle"></i> A+ Content compatible images</li>
                <li><i className="fas fa-check-circle"></i> Mobile-optimized visuals</li>
                <li><i className="fas fa-check-circle"></i> High resolution (minimum 1000px)</li>
                <li><i className="fas fa-check-circle"></i> Multiple angles for A/B testing</li>
              </ul>
            </div>

            <div className="service-process">
              <h2>Our Imaging Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Product Analysis</h3>
                  <p>Review your products, competitors, target audience, and key selling points to plan the perfect image set.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Photography & Design</h3>
                  <p>Professional photography session and custom infographic design creation with multiple concepts for your review.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Editing & Optimization</h3>
                  <p>Professional editing, retouching, Amazon optimization, and refinement based on your feedback until perfect.</p>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Delivery & Support</h3>
                  <p>Deliver all final images in required formats, provide upload assistance, and offer ongoing image support as needed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="service-page__cta">
            <h3>Ready to Showcase Your Products Perfectly?</h3>
            <p>Let's create stunning images that drive clicks and conversions</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImagingServices;

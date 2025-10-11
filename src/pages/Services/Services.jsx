import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.scss';

const Services = () => {

  const mainServices = [
    {
      icon: 'fas fa-book',
      title: 'Full Amazon Account Management',
      description: 'Complete Amazon account management with dedicated account managers.',
      link: '/services/full-account-management'
    },
    {
      icon: 'fas fa-ad',
      title: 'Amazon Advertising Optimization',
      description: 'Professional Amazon PPC management to maximize your advertising ROI.',
      link: '/services/amazon-advertising'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Cataloging',
      description: 'Professional product cataloging and inventory management services.',
      link: '/services/cataloging-services'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Amazon SEO',
      description: 'Optimize your product listings for maximum visibility and search rankings.',
      link: '/services/product-optimization'
    },
    {
      icon: 'fas fa-magic',
      title: 'Enhanced Brand Content',
      description: 'A+, brand story, storefront, premium A+, posts, and more.',
      link: '/services/design-services'
    },
    {
      icon: 'fas fa-camera-retro',
      title: 'Imaging',
      description: 'Professional product photography and image enhancement services.',
      link: '/services/design-services'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Consulting',
      description: 'Expert Amazon consulting to guide your business strategy and growth.',
      link: '/services/consulting-services'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Training',
      description: 'Comprehensive Amazon training programs for sellers and businesses.',
      link: '/services/training-services'
    }
  ];

  const designServices = [
    { title: 'Brand story', icon: 'fas fa-book', link: '/services/design-services' },
    { title: 'Listing images', icon: 'fas fa-images', link: '/services/design-services' },
    { title: 'Enhanced brand content A+ & Premium A+', icon: 'fas fa-plus-square', link: '/services/design-services' },
    { title: 'Full listing optimization', icon: 'fas fa-tasks', link: '/services/product-optimization' }
  ];

  const troubleshootingServices = [
    { title: 'Listing reinstatement', icon: 'fas fa-redo', link: '/services/consulting-services' },
    { title: 'Account suspension', icon: 'fas fa-exclamation-triangle', link: '/services/consulting-services' },
    { title: 'PPC Advertising audit', icon: 'fas fa-search-dollar', link: '/services/amazon-advertising' },
    { title: 'Troubleshooting hours', icon: 'fas fa-clock', link: '/services/consulting-services' }
  ];

  const otherServices = [
    { title: 'Amazon DSP', icon: 'fas fa-ad', link: '/services/amazon-advertising' },
    { title: 'Vendor Central full service', icon: 'fas fa-warehouse', link: '/services/full-account-management' }
  ];

  const freeTools = [
    { title: 'To be soon', icon: 'fas fa-tools', link: '#' }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <motion.div
          className="services-page__header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="services-page__title">Our Amazon Services</h1>
          <p className="services-page__description">
            Complete Amazon management solutions to grow your business
          </p>
        </motion.div>

        <div className="services-page__layout">
          {/* Left Column - Sidebar with Categories */}
          <div className="services-page__sidebar">
            {/* Design Section */}
            <motion.div
              className="services-page__section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="services-page__section-subtitle">Design</h3>
              <ul className="services-page__list">
                {designServices.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link}>
                      <i className={service.icon}></i>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Troubleshooting Section */}
            <motion.div
              className="services-page__section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="services-page__section-subtitle">Troubleshooting</h3>
              <ul className="services-page__list">
                {troubleshootingServices.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link}>
                      <i className={service.icon}></i>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Other Services Section */}
            <motion.div
              className="services-page__section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="services-page__section-subtitle">Other services</h3>
              <ul className="services-page__list">
                {otherServices.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link}>
                      <i className={service.icon}></i>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Free Tools Section */}
            <motion.div
              className="services-page__section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="services-page__section-subtitle">Free Amazon tools</h3>
              <ul className="services-page__list">
                {freeTools.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link}>
                      <i className={service.icon}></i>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Main Services */}
          <div className="services-page__main">
            <h2 className="services-page__section-title">Our Services</h2>
            <div className="services-page__grid">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="services-page__service"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="btn btn-primary">Learn More</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
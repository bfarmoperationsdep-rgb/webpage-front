import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.scss';

const Services = () => {

  const services = [
    {
      icon: 'fas fa-cogs',
      title: 'Full Account Management',
      description: 'Complete end-to-end Amazon account management with dedicated account managers.',
      features: ['Account Setup', 'Daily Monitoring', '24/7 Support', 'Performance Reports'],
      link: '/services/full-account-management'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Amazon Advertising Management',
      description: 'Professional Amazon PPC management to maximize your advertising ROI.',
      features: ['PPC Campaign Setup', 'Keyword Research', 'Bid Management', 'Performance Optimization'],
      link: '/services/amazon-advertising'
    },
    {
      icon: 'fas fa-search',
      title: 'Product Optimization',
      description: 'Optimize your product listings for maximum visibility and conversions.',
      features: ['Listing Optimization', 'A+ Content', 'SEO Enhancement', 'Conversion Optimization'],
      link: '/services/product-optimization'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Launching on Amazon',
      description: 'Strategic product launch services to ensure successful market entry.',
      features: ['Launch Strategy', 'Market Analysis', 'Competitive Research', 'Go-to-Market Planning'],
      link: '/services/launching-on-amazon'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Design Services',
      description: 'Professional design services for Amazon listings and brand materials.',
      features: ['Product Photography', 'Graphic Design', 'Brand Development', 'Creative Assets'],
      link: '/services/design-services'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Consulting Services',
      description: 'Expert Amazon consulting to guide your business strategy and growth.',
      features: ['Strategy Consulting', 'Business Analysis', 'Growth Planning', 'Expert Guidance'],
      link: '/services/consulting-services'
    },
    {
      icon: 'fas fa-list-ul',
      title: 'Cataloging Services',
      description: 'Professional product cataloging and inventory management services.',
      features: ['Product Cataloging', 'Inventory Management', 'Data Entry', 'Product Information'],
      link: '/services/cataloging-services'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Training Services',
      description: 'Comprehensive Amazon training programs for sellers and businesses.',
      features: ['Seller Training', 'Best Practices', 'Platform Education', 'Skill Development'],
      link: '/services/training-services'
    }
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

        <div className="services-page__grid">
          {services.map((service, index) => (
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
              <ul className="features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to={service.link} className="btn btn-primary">Learn More</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
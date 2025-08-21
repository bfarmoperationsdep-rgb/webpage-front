import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './Services.scss';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'Full Account Management',
      description: 'Complete end-to-end Amazon account management with dedicated account managers.',
      features: ['Account Setup', 'Daily Monitoring', '24/7 Support', 'Performance Reports']
    },
    {
      title: 'Amazon Advertising/Management',
      description: 'Professional Amazon PPC management to maximize your advertising ROI.',
      features: ['PPC Campaign Setup', 'Keyword Research', 'Bid Management', 'Performance Optimization']
    },
    {
      title: 'Product/Page Optimization',
      description: 'Optimize your product listings for maximum visibility and conversions.',
      features: ['Listing Optimization', 'A+ Content', 'SEO Enhancement', 'Conversion Rate Optimization']
    },
    {
      title: 'Launching/on Amazon',
      description: 'Strategic product launch services to ensure successful market entry.',
      features: ['Launch Strategy', 'Market Research', 'Competitor Analysis', 'Pre-launch Preparation']
    },
    {
      title: 'DESIGN Suite',
      description: 'Complete design services for your Amazon presence.',
      features: ['Product Photography', 'A+ Content Design', 'Storefront Design', 'Brand Assets']
    },
    {
      title: 'Consulting',
      description: 'Expert Amazon consulting to guide your business strategy.',
      features: ['Strategic Planning', 'Market Analysis', 'Growth Strategies', 'Expert Guidance']
    },
    {
      title: 'Cataloging',
      description: 'Professional product cataloging and inventory management.',
      features: ['Product Catalog Setup', 'Inventory Management', 'SKU Organization', 'Data Management']
    },
    {
      title: 'Training',
      description: 'Comprehensive training programs for your team.',
      features: ['Amazon Best Practices', 'Team Training', 'Skill Development', 'Ongoing Education']
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
                <i className="fab fa-amazon"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
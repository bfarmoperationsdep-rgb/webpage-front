import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesSection.scss';

const ServicesSection = () => {

  const services = [
    {
      icon: 'fas fa-cogs',
      title: 'Full Account Management',
      description: '360° ops: FBA logistics, stock KPIs, Seller Central & Brand Registry care.',
      features: ['Automated SOPs → zero errors and full transparency in Slack + Looker Studio', 'Average client net‑profit uplift after 6 months: +42%'],
      metrics: '+42% net profit uplift in 6 months',
      color: 'from-green-500 to-green-600',
      link: '/services/full-account-management'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Amazon Advertising Management',
      description: 'All formats covered: Sponsored Products, Brands, Display, DSP.',
      features: ['In‑house bid‑management scripts cut CPC by up to –25% without losing traffic', 'DSP retargeting wins back up to 14% of "lost" visitors'],
      metrics: 'CPC reduction up to 25% without traffic loss',
      color: 'from-blue-500 to-blue-600',
      link: '/services/amazon-advertising'
    },
    {
      icon: 'fas fa-search',
      title: 'Product Page Optimization',
      description: 'Data‑Driven SEO: Brand Analytics + Helium 10 → 100/100 relevance.',
      features: ['Copy that sells: Hook—Pain—Solution—Proof formula', 'Open A/B panel shows you which tweaks deliver +15‑30% CVR'],
      metrics: 'CTR grows ~1.8×',
      color: 'from-purple-500 to-purple-600',
      link: '/services/product-optimization'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Launching on Amazon',
      description: 'Niche & white-space strategy to avoid the "red ocean."',
      features: ['0–90-day execution: listings, offers, PPC, promos, and review-safe acceleration.', 'Visibility ramp plan: keyword set & rank targets, traffic mix, and post-launch optimization — built to qualify for high-trust signals (e.g., Amazon\'s Choice) but no badge promises (badges are algorithmic and criteria-driven).'],
      metrics: '0-90 day launch execution',
      color: 'from-orange-500 to-orange-600',
      link: '/services/launching-on-amazon'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <motion.div 
          className="services__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="services__title">
            End-to-end Amazon growth for private-label brands
            <span className="services__title-highlight">
              Everything your Amazon brand needs — from launch to scale, under one accountable team.
            </span>
          </h2>
          <p className="services__description">
            From PPC and listings to stock and analytics — we handle every Amazon lever that drives TACoS down and profit up.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="services__item hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`services__item-icon services__item-icon--${service.color}`}>
                <i className={service.icon}></i>
              </div>
              
              <h3 className="services__item-title">{service.title}</h3>
              
              <p className="services__item-description">{service.description}</p>
              
              {service.features && (
                <ul className="services__item-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              
              <div className="services__item-metrics">
                {service.metrics}
              </div>

              {/* Hover effect overlay */}
              <div className="services__item-overlay"></div>
              
              <Link to={service.link} className="services__item-link btn btn-outline">
                Learn More
                <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
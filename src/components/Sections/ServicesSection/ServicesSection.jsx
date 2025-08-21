import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './ServicesSection.scss';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'fas fa-chart-line',
      title: 'Amazon PPC',
      description: 'The key to driving traffic to your listings lies in Amazon PPC. Higher revenue, lower ACOS, and transparent ad management.',
      color: '$primary-color'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Our 4-phase Amazon SEO plan is best-in-class and can show dramatic results in search rankings in 90 days.',
      color: '$secondary-color'
    },
    {
      icon: 'fas fa-palette',
      title: 'Creative Services',
      description: 'All-Day VISUAL Display, Product Focus - comprehensive visual strategy for maximum impact.',
      color: '$primary-light'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Strategy & Execution',
      description: 'Campaign Structure, Budgets, Media Mix - complete strategic approach to Amazon success.',
      color: '$primary-dark'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <motion.div 
          className="services__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="services__title">{t('services.title')}</h2>
          <p className="services__description">{t('services.subtitle')}</p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`services__item services__item--${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="services__item-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-description">{service.description}</p>
              <Link to="/services" className="services__item-link">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
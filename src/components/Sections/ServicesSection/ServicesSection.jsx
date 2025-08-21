import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './ServicesSection.scss';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'fas fa-user-cog',
      title: t('services.items.fullAccount.title'),
      description: t('services.items.fullAccount.description'),
      features: t('services.items.fullAccount.features')
    },
    {
      icon: 'fas fa-chart-line',
      title: t('services.items.advertising.title'),
      description: t('services.items.advertising.description'),
      features: t('services.items.advertising.features')
    },
    {
      icon: 'fas fa-search',
      title: t('services.items.optimization.title'),
      description: t('services.items.optimization.description'),
      features: t('services.items.optimization.features')
    },
    {
      icon: 'fas fa-rocket',
      title: t('services.items.launching.title'),
      description: t('services.items.launching.description'),
      features: t('services.items.launching.features')
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
          <div className="services__teaser">
            <p>{t('services.teaser')}</p>
          </div>
          <div className="services__why-bfarm">
            <h3>Why BFarm?</h3>
            <p>{t('services.whyBfarm')}</p>
          </div>
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
              <ul className="services__item-features">
                {service.features && service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
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
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './Services.scss';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('servicesPage.services.fullAccount.title'),
      description: t('servicesPage.services.fullAccount.description'),
      features: t('servicesPage.services.fullAccount.features')
    },
    {
      title: t('servicesPage.services.advertising.title'),
      description: t('servicesPage.services.advertising.description'),
      features: t('servicesPage.services.advertising.features')
    },
    {
      title: t('servicesPage.services.optimization.title'),
      description: t('servicesPage.services.optimization.description'),
      features: t('servicesPage.services.optimization.features')
    },
    {
      title: t('servicesPage.services.launching.title'),
      description: t('servicesPage.services.launching.description'),
      features: t('servicesPage.services.launching.features')
    },
    {
      title: t('servicesPage.services.design.title'),
      description: t('servicesPage.services.design.description'),
      features: t('servicesPage.services.design.features')
    },
    {
      title: t('servicesPage.services.consulting.title'),
      description: t('servicesPage.services.consulting.description'),
      features: t('servicesPage.services.consulting.features')
    },
    {
      title: t('servicesPage.services.cataloging.title'),
      description: t('servicesPage.services.cataloging.description'),
      features: t('servicesPage.services.cataloging.features')
    },
    {
      title: t('servicesPage.services.training.title'),
      description: t('servicesPage.services.training.description'),
      features: t('servicesPage.services.training.features')
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
          <h1 className="services-page__title">{t('servicesPage.title')}</h1>
          <p className="services-page__description">
            {t('servicesPage.description')}
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
              <button className="btn btn-primary">{t('common.learnMore')}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
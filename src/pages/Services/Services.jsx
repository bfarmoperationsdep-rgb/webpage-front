import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Services.scss';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'fas fa-cogs',
      title: t('servicesPage.services.fullAccount.title'),
      description: t('servicesPage.services.fullAccount.description'),
      features: t('servicesPage.services.fullAccount.features'),
      link: '/services/full-account-management'
    },
    {
      icon: 'fas fa-chart-line',
      title: t('servicesPage.services.advertising.title'),
      description: t('servicesPage.services.advertising.description'),
      features: t('servicesPage.services.advertising.features'),
      link: '/services/amazon-advertising'
    },
    {
      icon: 'fas fa-search',
      title: t('servicesPage.services.optimization.title'),
      description: t('servicesPage.services.optimization.description'),
      features: t('servicesPage.services.optimization.features'),
      link: '/services/product-optimization'
    },
    {
      icon: 'fas fa-rocket',
      title: t('servicesPage.services.launching.title'),
      description: t('servicesPage.services.launching.description'),
      features: t('servicesPage.services.launching.features'),
      link: '/services/launching-on-amazon'
    },
    {
      icon: 'fas fa-paint-brush',
      title: t('servicesPage.services.design.title'),
      description: t('servicesPage.services.design.description'),
      features: t('servicesPage.services.design.features'),
      link: '/services/design-services'
    },
    {
      icon: 'fas fa-lightbulb',
      title: t('servicesPage.services.consulting.title'),
      description: t('servicesPage.services.consulting.description'),
      features: t('servicesPage.services.consulting.features'),
      link: '/services/consulting-services'
    },
    {
      icon: 'fas fa-list-ul',
      title: t('servicesPage.services.cataloging.title'),
      description: t('servicesPage.services.cataloging.description'),
      features: t('servicesPage.services.cataloging.features'),
      link: '/services/cataloging-services'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: t('servicesPage.services.training.title'),
      description: t('servicesPage.services.training.description'),
      features: t('servicesPage.services.training.features'),
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
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to={service.link} className="btn btn-primary">{t('common.learnMore')}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
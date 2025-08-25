import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './ServicesSection.scss';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'fas fa-cogs',
      title: t('services.items.fullAccount.title'),
      description: t('services.items.fullAccount.description'),
      features: t('services.items.fullAccount.features'),
      metrics: '+42% чистого прибутку через 6 місяців',
      color: 'from-green-500 to-green-600',
      link: '/services/full-account-management'
    },
    {
      icon: 'fas fa-chart-line',
      title: t('services.items.advertising.title'),
      description: t('services.items.advertising.description'),
      features: t('services.items.advertising.features'),
      metrics: 'Зниження CPC до 25% без втрати трафіку',
      color: 'from-blue-500 to-blue-600',
      link: '/services/amazon-advertising'
    },
    {
      icon: 'fas fa-search',
      title: t('services.items.optimization.title'),
      description: t('services.items.optimization.description'),
      features: t('services.items.optimization.features'),
      metrics: 'CTR зростає ~1,8×',
      color: 'from-purple-500 to-purple-600',
      link: '/services/product-optimization'
    },
    {
      icon: 'fas fa-rocket',
      title: t('services.items.launching.title'),
      description: t('services.items.launching.description'),
      features: t('services.items.launching.features'),
      metrics: 'Гарантуємо значок Amazon\'s Choice',
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
            {t('services.title')}
            <span className="services__title-highlight">
              спектр досконалості
            </span>
          </h2>
          <p className="services__description">
            Ми – універсальна агенція: стратегія, креатив, реклама, консалтинг і бездоганний 
            акаунт-менеджмент – все під одним дахом. Оберіть сервіс, який вам потрібен, 
            і рушайте бити нові рекорди.
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
                {t('common.learnMore')}
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
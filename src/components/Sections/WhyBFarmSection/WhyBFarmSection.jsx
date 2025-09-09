import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './WhyBFarmSection.scss';

const WhyBFarmSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: '👥',
      title: 'Співзасновники вашого росту',
      description: 'Ми стаємо частиною вашої команди, а не просто підрядниками',
    },
    {
      icon: '📊',
      title: 'Прозорі дашборди',
      description: 'Відкритий доступ до всіх метрик і результатів у режимі реального часу',
    },
    {
      icon: '🏆',
      title: 'Доведена експертиза',
      description: 'Amazon Advertising Partner та AWS Certified спеціалісти',
    },
    {
      icon: '✅',
      title: 'Гарантія результату',
      description: 'Говоримо мовою прибутку, а не пустих обіцянок',
    },
  ];

  return (
    <section className="why-bfarm">
      <div className="container">
        <motion.div 
          className="why-bfarm__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="why-bfarm__title">
            Чому <span className="why-bfarm__title-highlight">BFarm?</span>
          </h2>
          <p className="why-bfarm__subtitle">
            Обираючи BFarm, ви наймаєте не просто підрядника – ви отримуєте{' '}
            <span className="why-bfarm__accent">співзасновника вашого росту.</span>
          </p>
        </motion.div>

        <div className="why-bfarm__content">
          <motion.div 
            className="why-bfarm__stats"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-bfarm__stat-main">
              <motion.div 
                className="why-bfarm__stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                98%
              </motion.div>
              <p className="why-bfarm__stat-text">
                наших клієнтів співпрацюють з нами понад <strong>18 місяців</strong>, адже 
                ми говоримо мовою прибутку та відкритих дашбордів, а не пустих обіцянок.
              </p>
            </div>

            <div className="why-bfarm__stat-label">
              клієнтів з нами понад 18 місяців
            </div>

            <div className="why-bfarm__certifications">
              <motion.div 
                className="why-bfarm__cert"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&q=80" 
                  alt="Amazon SPN Certificate" 
                  className="why-bfarm__cert-image"
                />
                <div className="why-bfarm__cert-text">
                  <span>Amazon SPN Service Provider</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="why-bfarm__cert"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&q=80" 
                  alt="Amazon Ads Certificate" 
                  className="why-bfarm__cert-image"
                />
                <div className="why-bfarm__cert-text">
                  <span>Amazon Ads Certified Partner</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="why-bfarm__features"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="why-bfarm__feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="why-bfarm__feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="why-bfarm__feature-content">
                  <h3 className="why-bfarm__feature-title">{feature.title}</h3>
                  <p className="why-bfarm__feature-description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyBFarmSection;

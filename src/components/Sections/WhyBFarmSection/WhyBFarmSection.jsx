import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './WhyBFarmSection.scss';

const WhyBFarmSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: '👥',
      title: 'Co-founders of your growth',
      description: 'We become part of your team, not just contractors',
    },
    {
      icon: '📊',
      title: 'Transparent dashboards',
      description: 'Open access to all metrics and results in real time',
    },
    {
      icon: '🏆',
      title: 'Proven expertise',
      description: 'Amazon Advertising Partner and AWS Certified specialists',
    },
    {
      icon: '✅',
      title: 'Result guarantee',
      description: 'We speak the language of profit, not empty promises',
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
            Why <span className="why-bfarm__title-highlight">BFarm?</span>
          </h2>
          <p className="why-bfarm__subtitle">
            Choosing BFarm, you're not just hiring a contractor – you're getting{' '}
            <span className="why-bfarm__accent">a co-founder of your growth.</span>
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
                of our clients work with us for over <strong>18 months</strong>, because 
                we speak the language of profit and open dashboards, not empty promises.
              </p>
            </div>

            <div className="why-bfarm__stat-label">
              clients with us over 18 months
            </div>

            <div className="why-bfarm__certifications">
              <motion.div 
                className="why-bfarm__cert"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="amazon-cert">
                  <div className="amazon-cert__badge">
                    <div className="amazon-cert__icon">🔍</div>
                    <span className="amazon-cert__brand">amazon</span>
                    <span className="amazon-cert__sub">advertising</span>
                  </div>
                  <div className="amazon-cert__text">
                    <span>Amazon Ads</span>
                    <span>Certified</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="why-bfarm__cert"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="amazon-cert">
                  <div className="amazon-cert__badge">
                    <div className="amazon-cert__icon">🔍</div>
                    <span className="amazon-cert__brand">amazon</span>
                    <span className="amazon-cert__sub">advertising</span>
                  </div>
                  <div className="amazon-cert__text">
                    <span>Amazon Ads</span>
                    <span>Certified</span>
                  </div>
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

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './WhyBFarmSection.scss';

const WhyBFarmSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: '🤝',
      title: 'Growth partners, not contractors',
      description: 'We integrate into your processes, share KPIs, and drive toward profit — not vanity metrics.',
    },
    {
      icon: '📊',
      title: 'Transparent dashboards',
      description: 'Real-time access to performance, spend, and margin metrics — no black box.',
    },
    {
      icon: '🏆',
      title: 'Proven Amazon expertise',
      description: 'Amazon Ads Verified Partner & SPN Partner — focused 100% on Amazon growth.',
    },
    {
      icon: '🎯',
      title: 'Result approach (post-diagnostic)',
      description: 'Targets set after diagnostic. If dependencies are met and we miss — we adjust, not excuse.',
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
            Choosing BFarm means getting a growth partner — not just a contractor.
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
                Many brands partner with us for years thanks to clear dashboards,
                aligned KPIs and performance-driven strategy.
              </p>
            </div>

            <div className="why-bfarm__stat-label">
              of brands stay with us long-term
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

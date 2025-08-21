import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './FeaturesSection.scss';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="features">
      <div className="container">
        <div className="features__content">
          <motion.div 
            className="features__text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="features__title" variants={itemVariants}>
              {t('features.title')}
            </motion.h2>
            
            <motion.div className="features__points" variants={itemVariants}>
              <div className="features__point">
                <h3>Data</h3>
                <p>{t('features.data')}</p>
              </div>
              <div className="features__point">
                <h3>Creativity</h3>
                <p>{t('features.creativity')}</p>
              </div>
              <div className="features__point">
                <h3>Speed</h3>
                <p>{t('features.speed')}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="features__visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="features__strategy-card">
              <div className="features__strategy-header">
                <div className="features__strategy-icon">📝</div>
                <h3>STRATEGY</h3>
              </div>
              <div className="features__strategy-content">
                <p>Demand Gen &<br/>Demand Capture</p>
                <div className="features__plus">+</div>
              </div>
            </div>
            
            <div className="features__creative-card">
              <div className="features__creative-header">
                <div className="features__creative-icon">💡</div>
                <h3>CREATIVE</h3>
              </div>
              <div className="features__creative-content">
                <p>All-Day VISUAL<br/>Display, Product Focus</p>
                <div className="features__multiply">×</div>
              </div>
            </div>
            
            <div className="features__execution-card">
              <div className="features__execution-header">
                <div className="features__execution-icon">⚡</div>
                <h3>EXECUTION</h3>
              </div>
              <div className="features__execution-content">
                <p>Campaign Structure<br/>Budgets, Media Mix</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
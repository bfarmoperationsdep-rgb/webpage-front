import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './About.scss';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about">
      <div className="container">
        <motion.div 
          className="about__header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="about__title">{t('about.title')}</h1>
          <p className="about__description">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="about__content">
          <motion.div 
            className="about__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t('about.mission')}</h2>
            <p>
              {t('about.missionText')}
            </p>
            
            <h2>{t('about.approach')}</h2>
            <p>
              {t('about.approachText')}
            </p>
            
            <h2>{t('about.whyChoose')}</h2>
            <p>
              {t('about.whyChooseText')}
            </p>
          </motion.div>

          <motion.div 
            className="about__image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about__stats">
              <div className="about__stat">
                <h3>500+</h3>
                <p>{t('about.stats.brands')}</p>
              </div>
              <div className="about__stat">
                <h3>$50M+</h3>
                <p>{t('about.stats.revenue')}</p>
              </div>
              <div className="about__stat">
                <h3>98%</h3>
                <p>{t('about.stats.satisfaction')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
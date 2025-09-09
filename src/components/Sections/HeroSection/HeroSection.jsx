import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './HeroSection.scss';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const { t } = useLanguage();
  
  const words = ['innovative', 'effective', 'profitable', 'data-driven'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero">
      {/* Enhanced Animated Background */}
      <div className="hero__background">
        <div className="hero__animated-gradient"></div>
        <div className="hero__shapes">
          <motion.div 
            className="hero__shape hero__shape--1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div 
            className="hero__shape hero__shape--2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="hero__shape hero__shape--3"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__text" variants={itemVariants}>
            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.title')}
              <br />
              <span className="hero__title-gradient">
                {t('hero.titleHighlight')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg hover-lift">
                <i className="fas fa-rocket"></i>
                {t('hero.startProject')}
                <i className="fas fa-arrow-right btn-arrow"></i>
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg hover-lift">
                <i className="fas fa-play-circle"></i>
                {t('hero.watchWork')}
              </Link>
            </motion.div>


            <motion.div 
              className="hero__features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="hero__feature">
                <i className="fas fa-chart-line"></i>
                <span>{t('hero.features.strategy')}</span>
              </div>
              <div className="hero__feature">
                <i className="fas fa-palette"></i>
                <span>{t('hero.features.creative')}</span>
              </div>
              <div className="hero__feature">
                <i className="fas fa-cogs"></i>
                <span>{t('hero.features.execution')}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="hero__visual" variants={itemVariants}>
            <div className="hero__dashboard">
              <div className="hero__dashboard-header">
                <div className="hero__dashboard-title">
                  <i className="fas fa-chart-line"></i>
                  {t('hero.dashboard.title')}
                </div>
                <div className="hero__dashboard-status">
                  <span className="status-dot status-dot--active"></span>
                  {t('hero.dashboard.status')}
                </div>
              </div>
              
              <div className="hero__dashboard-content">
                <div className="hero__metrics-grid">
                  <div className="hero__metric">
                    <div className="hero__metric-value">+187%</div>
                    <div className="hero__metric-label">{t('hero.dashboard.metrics.growth')}</div>
                    <div className="hero__metric-trend">
                      <i className="fas fa-arrow-up"></i>
                    </div>
                  </div>
                  
                  <div className="hero__metric">
                    <div className="hero__metric-value">1.375M</div>
                    <div className="hero__metric-label">{t('hero.dashboard.metrics.revenue')}</div>
                    <div className="hero__metric-trend">
                      <i className="fas fa-arrow-up"></i>
                    </div>
                  </div>
                </div>
                
                <div className="hero__chart">
                  <div className="hero__chart-title">{t('hero.dashboard.chartTitle')}</div>
                  <div className="hero__chart-bars">
                    <div className="hero__chart-bar" style={{height: '30%'}}></div>
                    <div className="hero__chart-bar" style={{height: '45%'}}></div>
                    <div className="hero__chart-bar" style={{height: '65%'}}></div>
                    <div className="hero__chart-bar" style={{height: '80%'}}></div>
                    <div className="hero__chart-bar" style={{height: '90%'}}></div>
                    <div className="hero__chart-bar" style={{height: '100%'}}></div>
                    <div className="hero__chart-bar" style={{height: '85%'}}></div>
                  </div>
                </div>
                
                <div className="hero__platforms">
                  <div className="hero__platform">
                    <span>Google</span>
                  </div>
                  <div className="hero__platform">
                    <span>Amazon ads</span>
                  </div>
                  <div className="hero__platform">
                    <span>Telegram</span>
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>
        </motion.div>
      </div>

      {/* FAB кнопка Telegram без фону як просив користувач */}
      <button className="fab" aria-label="Telegram">
        <i className="fab fa-telegram"></i>
      </button>

      {/* Enhanced Scroll indicator */}
      <motion.div 
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>{t('hero.scroll')}</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
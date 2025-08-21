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
      <div className="hero__background">
        <div className="hero__shapes">
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
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
            <h1 className="hero__title">
              {t('hero.title')}
            </h1>
            
            <h2 className="hero__subtitle">
              {t('hero.subtitle')}
            </h2>
            
            <p className="hero__description">
              {t('hero.description')}
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-rocket"></i>
                {t('hero.startProject')}
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                <i className="fas fa-play-circle"></i>
                {t('hero.watchWork')}
              </Link>
            </div>

            <div className="hero__features">
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
            </div>
          </motion.div>

          <motion.div className="hero__visual" variants={itemVariants}>
            <div className="hero__phone">
              <div className="hero__phone-frame">
                <div className="hero__phone-screen">
                  <div className="hero__phone-content">
                    <div className="hero__app-bar">
                      <div className="hero__app-item">
                        <i className="fab fa-google" style={{color: '#4285F4'}}></i>
                        <span>Google</span>
                      </div>
                      <div className="hero__app-item">
                        <i className="fab fa-amazon" style={{color: '#FF9900'}}></i>
                        <span>Amazon ads</span>
                      </div>
                      <div className="hero__app-item">
                        <span style={{color: '#F06292'}}>klaviyo</span>
                      </div>
                      <div className="hero__app-item">
                        <i className="fab fa-youtube" style={{color: '#FF0000'}}></i>
                        <span>YouTube</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero__floating-elements">
              <div className="hero__element hero__element--strategy">
                <div className="hero__element-icon">📊</div>
                <div className="hero__element-content">
                  <h4>STRATEGY</h4>
                  <p>Demand Gen &<br/>Demand Capture</p>
                </div>
              </div>
              
              <div className="hero__element hero__element--creative">
                <div className="hero__element-icon">💡</div>
                <div className="hero__element-content">
                  <h4>CREATIVE</h4>
                  <p>All-Day VISUAL<br/>Display, Product Focus</p>
                </div>
              </div>
              
              <div className="hero__element hero__element--execution">
                <div className="hero__element-icon">⚡</div>
                <div className="hero__element-content">
                  <h4>EXECUTION</h4>
                  <p>Campaign Structure<br/>Budgets, Media Mix</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
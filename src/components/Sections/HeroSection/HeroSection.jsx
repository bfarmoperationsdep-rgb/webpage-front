import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroSection.scss';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['інноваційні', 'сучасні', 'ефективні', 'професійні'];

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
              Створюємо{' '}
              <span className="hero__title-highlight">
                {words[currentWord]}
              </span>
              <br />
              цифрові рішення для вашого бізнесу
            </h1>
            
            <p className="hero__description">
              Ми спеціалізуємося на розробці веб-сайтів, мобільних додатків та 
              комплексних IT-рішень, які допомагають бізнесу рости та розвиватися 
              в цифровому світі.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-rocket"></i>
                Почати проект
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                <i className="fas fa-play-circle"></i>
                Наші роботи
              </Link>
            </div>

            <div className="hero__features">
              <div className="hero__feature">
                <i className="fas fa-clock"></i>
                <span>Швидка розробка</span>
              </div>
              <div className="hero__feature">
                <i className="fas fa-shield-alt"></i>
                <span>Гарантія якості</span>
              </div>
              <div className="hero__feature">
                <i className="fas fa-headset"></i>
                <span>24/7 підтримка</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="hero__visual" variants={itemVariants}>
            <div className="hero__image">
              <div className="hero__floating-cards">
                <div className="hero__card hero__card--1">
                  <i className="fas fa-code"></i>
                  <span>Веб-розробка</span>
                </div>
                <div className="hero__card hero__card--2">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Мобільні додатки</span>
                </div>
                <div className="hero__card hero__card--3">
                  <i className="fas fa-chart-line"></i>
                  <span>Аналітика</span>
                </div>
                <div className="hero__card hero__card--4">
                  <i className="fas fa-shopping-cart"></i>
                  <span>E-commerce</span>
                </div>
              </div>
              
              <div className="hero__dashboard">
                <div className="hero__dashboard-header">
                  <div className="hero__dashboard-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="hero__dashboard-title">Analytics Dashboard</div>
                </div>
                <div className="hero__dashboard-content">
                  <div className="hero__stats">
                    <div className="hero__stat">
                      <div className="hero__stat-value">324%</div>
                      <div className="hero__stat-label">Зростання</div>
                    </div>
                    <div className="hero__stat">
                      <div className="hero__stat-value">1.2M</div>
                      <div className="hero__stat-label">Користувачі</div>
                    </div>
                  </div>
                  <div className="hero__chart">
                    <div className="hero__chart-bars">
                      <div className="hero__chart-bar" style={{height: '20%'}}></div>
                      <div className="hero__chart-bar" style={{height: '45%'}}></div>
                      <div className="hero__chart-bar" style={{height: '30%'}}></div>
                      <div className="hero__chart-bar" style={{height: '60%'}}></div>
                      <div className="hero__chart-bar" style={{height: '80%'}}></div>
                      <div className="hero__chart-bar" style={{height: '65%'}}></div>
                      <div className="hero__chart-bar" style={{height: '90%'}}></div>
                    </div>
                  </div>
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

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import amazonPhone from '../../../assets/amazon-phone.png';
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
              The Amazon agency that turns
              <br />
              <span className="hero__title-gradient">
                visibility into profit
              </span>
            </motion.h1>
            
            <motion.p 
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Great products, sluggish sales? We fix discoverability, conversion, and ads — so your listings rank, ACoS drops, and revenue scales.
            </motion.p>

            <motion.div
              className="hero__actions hero__actions--two"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg hover-lift">
                Grow Profitable Amazon Sales
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg hover-lift">
                Get a FREE Listing/Account Audit
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
                <span>Data-Driven Strategy</span>
              </div>
              <div className="hero__feature">
                <i className="fas fa-palette"></i>
                <span>Creative Excellence</span>
              </div>
              <div className="hero__feature">
                <i className="fas fa-cogs"></i>
                <span>Reliable Processes</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="hero__visual" variants={itemVariants}>
            <div className="hero__phone">
              <div className="hero__phone-frame">
                <div className="hero__phone-bezel">
                  <div className="hero__phone-notch">
                    <div className="hero__notch-camera"></div>
                  </div>
                  <div className="hero__phone-screen">
                    <div className="hero__status-bar">
                      <div className="hero__status-left">
                        <span className="hero__time">9:41</span>
                      </div>
                      <div className="hero__status-right">
                        <i className="fas fa-signal"></i>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-battery-three-quarters"></i>
                      </div>
                    </div>
                    <img
                      src={amazonPhone}
                      alt="Amazon Seller Central"
                      className="hero__phone-screenshot"
                    />
                    <div className="hero__home-indicator"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
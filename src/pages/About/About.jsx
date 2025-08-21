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
          <h1 className="about__title">About BFarm</h1>
          <p className="about__description">
            We are a leading Amazon growth agency specializing in comprehensive Amazon management for health and wellness brands.
          </p>
        </motion.div>

        <div className="about__content">
          <motion.div 
            className="about__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Mission</h2>
            <p>
              BFarm is dedicated to helping brands amplify their Amazon sales through strategic, data-driven approaches. 
              We specialize in full-service Amazon growth management, helping businesses navigate the complex Amazon ecosystem.
            </p>
            
            <h2>Our Approach</h2>
            <p>
              We focus on finding the proper mix of Demand Generation and Demand Capture activities, crafting the right 
              creatives for every step of the shopping journey, and establishing clear creative directions that drive results.
            </p>
            
            <h2>Why Choose BFarm?</h2>
            <p>
              With years of experience in Amazon management, we understand what it takes to succeed on the platform. 
              Our team combines strategic thinking with creative execution to deliver measurable results for our clients.
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
                <p>Successful Brands</p>
              </div>
              <div className="about__stat">
                <h3>$50M+</h3>
                <p>Revenue Generated</p>
              </div>
              <div className="about__stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
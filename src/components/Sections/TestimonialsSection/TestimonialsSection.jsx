import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="testimonials__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="testimonials__title">What Our Clients Say</h2>
          
          <div className="testimonials__main">
            <motion.div 
              className="testimonials__quote"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonials__quote-content">
                <div className="testimonials__quote-mark">"</div>
                <p>"In nine months BFarm took our cosmetics brand from zero to $400K/month and dropped TACoS to 9%. Finally found partners who speak in numbers, not poetry."</p>
                <div className="testimonials__author">
                  <div className="testimonials__author-info">
                    <h4>Anna R., Co‑Founder, Beauty Lab</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonials__founder"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="testimonials__founder-content">
                <div className="testimonials__founder-quote">
                  <p>"I once realized: Amazon rewards those who play by its rules—then add their own creativity. That's exactly how BFarm helps brands worldwide: we mixed the platform's cold data with human creativity and got an explosive growth cocktail. Join us and see how 1 + 1 can equal 11."</p>
                </div>
                <div className="testimonials__founder-info">
                  <h4>MAKSYM LAZUTO</h4>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
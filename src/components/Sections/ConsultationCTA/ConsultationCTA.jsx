import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ConsultationCTA.scss';

const ConsultationCTA = () => {
  return (
    <section className="consultation-cta">
      <div className="container">
        <motion.div 
          className="consultation-cta__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="consultation-cta__text">
            <h3 className="consultation-cta__title">
              Ready to scale your Amazon business?
            </h3>
            <p className="consultation-cta__description">
              Get a FREE consultation with a personalized scaling plan for your case
            </p>
          </div>
          
          <motion.div 
            className="consultation-cta__action"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg hover-lift">
              <i className="fas fa-calendar-check"></i>
              Get Free Consultation
              <i className="fas fa-arrow-right btn-arrow"></i>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationCTA;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ThankYou.scss';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="container">
        <motion.div
          className="thank-you-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="thank-you-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg viewBox="0 0 100 100" width="100" height="100">
              <circle cx="50" cy="50" r="45" fill="#4CAF50" />
              <path
                d="M30 50 L45 65 L70 35"
                stroke="white"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.h1
            className="thank-you-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Thank You for Contacting Us!
          </motion.h1>

          <motion.p
            className="thank-you-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We've received your message and will get back to you very soon.
            <br />
            One of our team members will contact you within the next business day.
          </motion.p>

          <motion.div
            className="thank-you-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>In the meantime, feel free to explore our services or check out our portfolio.</p>
          </motion.div>

          <motion.div
            className="thank-you-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link to="/" className="btn btn-primary btn-lg">
              Back to Home
            </Link>
            <Link to="/services" className="btn btn-outline-primary btn-lg">
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;

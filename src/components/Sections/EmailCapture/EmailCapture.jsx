import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EmailCapture.scss';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="email-capture">
      <div className="container">
        <motion.div 
          className="email-capture__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="email-capture__text">
            <h3 className="email-capture__title">
              Get Amazon growth insights delivered weekly
            </h3>
            <p className="email-capture__description">
              Join 2,000+ Amazon sellers getting our insider tips, case studies, and profit-boosting strategies. 
              No spam, just actionable insights.
            </p>
          </div>
          
          <motion.div 
            className="email-capture__form-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form className="email-capture__form" onSubmit={handleSubmit}>
                <div className="email-capture__input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="email-capture__input"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    <i className="fas fa-paper-plane"></i>
                    Subscribe
                  </button>
                </div>
                <p className="email-capture__privacy">
                  <i className="fas fa-lock"></i>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div 
                className="email-capture__success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="email-capture__success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Thank you for subscribing!</h4>
                <p>You'll receive your first insights within 24 hours.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;

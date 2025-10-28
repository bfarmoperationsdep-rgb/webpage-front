import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EmailCapture.scss';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Enhanced email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Client-side validation
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // In production, this should send to your backend API
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log only in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Email submitted:', email);
      }
      
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
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
                    className={`email-capture__input ${error ? 'email-capture__input--error' : ''}`}
                    required
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {error && (
                  <p className="email-capture__error">
                    <i className="fas fa-exclamation-circle"></i>
                    {error}
                  </p>
                )}
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

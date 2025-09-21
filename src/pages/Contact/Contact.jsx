import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    amazonListingLink: '',
    agreeToUpdates: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-info">
          <h1>Contact us</h1>
          <p>We're available Monday to Friday, from 9:00AM to 5:00PM EST. Reach us by phone and email, or send us a message using the contact form.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>Phone: +1 470-623-1951</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>Email: sales@BFARM.COM</span>
            </div>
          </div>

          <div className="specific-concerns">
            <p>For specific concerns, we are also available through the following emails:</p>
            <div className="concern-item">
              <span className="concern-icon">💼</span>
              <div>
                <strong>Careers</strong>
                <p>jobs@BFARM.COM</p>
              </div>
            </div>
            <div className="concern-item">
              <span className="concern-icon">📚</span>
              <div>
                <strong>Amazon courses</strong>
                <p>courses@BFARM.COM</p>
              </div>
            </div>
            <div className="concern-item">
              <span className="concern-icon">💬</span>
              <div>
                <strong>Coaching calls</strong>
                <p>coaching@BFARM.COM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <p>Tell us about your Amazon concern, and we'll get back to you by the next business day.</p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number*</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help you?*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="amazonListingLink">Amazon Listing Link</label>
              <input
                type="url"
                id="amazonListingLink"
                name="amazonListingLink"
                value={formData.amazonListingLink}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreeToUpdates"
                name="agreeToUpdates"
                checked={formData.agreeToUpdates}
                onChange={handleInputChange}
              />
              <label htmlFor="agreeToUpdates">
                Yes, I'd like expert tips and updates by text (up to 10/month). Unsubscribe anytime with STOP.
              </label>
            </div>

            <div className="form-footer">
              <p>
                By clicking Submit, you agree to our{' '}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

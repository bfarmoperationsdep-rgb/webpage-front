import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Full Account Management', href: '/services/full-account-management' },
      { name: 'Amazon Advertising', href: '/services/amazon-advertising' },
      { name: 'Cataloging', href: '/services/cataloging-services' },
      { name: 'Amazon SEO', href: '/services/product-optimization' },
      { name: 'Design for Amazon', href: '/services/design-services' },
      { name: 'Images for Amazon', href: '/services/imaging-services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Consulting', href: '/services/consulting-services' },
      { name: 'Amazon Coaching', href: '/services/training-services' },
      { name: 'All Services', href: '/services' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', href: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            {/* Company Info */}
            <div className="footer__section footer__section--main">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-brand">
                  <span className="footer__logo-b">B</span>
                  <span className="footer__logo-farm">Farm</span>
                </div>
              </Link>
              
              <p className="footer__description">
                BFarm is a Ukrainian company and we're proud of our roots. We help Amazon brands 
                scale from startup to category leaders through data-driven strategies.
              </p>
              
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:hello@bfarm.com">hello@bfarm.com</a>
                </div>
                <div className="footer__contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Kyiv, Warsaw, Miami</span>
                </div>
                <div className="footer__contact-item">
                  <i className="fas fa-heart"></i>
                  <span>We Stand with Ukraine 🇺🇦</span>
                </div>
              </div>
              
              <div className="footer__social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="footer__social-link"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="footer__section">
              <h3 className="footer__title">Services</h3>
              <ul className="footer__links">
                {navigation.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="footer__link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer__section">
              <h3 className="footer__title">Company</h3>
              <ul className="footer__links">
                {navigation.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="footer__link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer__section">
              <h3 className="footer__title">Resources</h3>
              <ul className="footer__links">
                {navigation.resources.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="footer__link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer__section">
              <h3 className="footer__title">Newsletter</h3>
              <p className="footer__newsletter-text">
                Get the latest news and updates from our team.
              </p>
              <form className="footer__newsletter">
                <div className="footer__newsletter-input">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="form-input"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                <label className="form-check footer__newsletter-consent">
                  <input type="checkbox" className="form-check-input" required />
                  <span className="form-check-label">
                    I agree to the <Link to="/privacy">privacy policy</Link>
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} BFarm. Built for Bold Brands.
            </p>
            <div className="footer__legal">
              <Link to="/privacy" className="footer__legal-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer__legal-link">
                Terms of Service
              </Link>
              <Link to="/cookies" className="footer__legal-link">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

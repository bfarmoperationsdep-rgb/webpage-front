import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Веб-розробка', href: '/services#web-development' },
      { name: 'Мобільні додатки', href: '/services#mobile-apps' },
      { name: 'E-commerce', href: '/services#ecommerce' },
      { name: 'Цифровий маркетинг', href: '/services#digital-marketing' },
      { name: 'SEO оптимізація', href: '/services#seo' },
      { name: 'Технічна підтримка', href: '/services#support' },
    ],
    company: [
      { name: 'Про нас', href: '/about' },
      { name: 'Наша команда', href: '/about#team' },
      { name: 'Кар\'єра', href: '/careers' },
      { name: 'Новини', href: '/blog' },
      { name: 'Контакти', href: '/contact' },
    ],
    resources: [
      { name: 'Блог', href: '/blog' },
      { name: 'Кейси', href: '/portfolio' },
      { name: 'Документація', href: '/docs' },
      { name: 'Підтримка', href: '/support' },
      { name: 'FAQ', href: '/faq' },
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
                <div className="footer__logo-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <span className="footer__logo-text">ModularBiz</span>
              </Link>
              
              <p className="footer__description">
                Ми створюємо інноваційні цифрові рішення, які допомагають бізнесу 
                рости та процвітати в сучасному світі технологій.
              </p>
              
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@modularbiz.ua">info@modularbiz.ua</a>
                </div>
                <div className="footer__contact-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+380123456789">+38 (012) 345-67-89</a>
                </div>
                <div className="footer__contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>м. Київ, вул. Інноваційна, 123</span>
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
              <h3 className="footer__title">Послуги</h3>
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
              <h3 className="footer__title">Компанія</h3>
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
              <h3 className="footer__title">Ресурси</h3>
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
              <h3 className="footer__title">Підписка на новини</h3>
              <p className="footer__newsletter-text">
                Отримуйте останні новини та оновлення від нашої команди.
              </p>
              <form className="footer__newsletter">
                <div className="footer__newsletter-input">
                  <input
                    type="email"
                    placeholder="Ваш email"
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
                    Я погоджуюся з <Link to="/privacy">політикою конфіденційності</Link>
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
              © {currentYear} ModularBiz. Всі права захищені.
            </p>
            <div className="footer__legal">
              <Link to="/privacy" className="footer__legal-link">
                Політика конфіденційності
              </Link>
              <Link to="/terms" className="footer__legal-link">
                Умови використання
              </Link>
              <Link to="/cookies" className="footer__legal-link">
                Файли cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

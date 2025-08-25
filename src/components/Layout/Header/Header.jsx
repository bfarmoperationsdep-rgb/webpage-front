import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, switchLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.portfolio'), href: '/portfolio' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Enhanced Logo */}
          <Link to="/" className="header__logo hover-lift">
            <div className="header__logo-icon">
              <span className="header__logo-b">B</span>
            </div>
            <div className="header__logo-brand">
              <span className="header__logo-farm">Farm</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav hidden-mobile">
            <ul className="header__nav-list">
              {navigation.map((item) => (
                <li key={item.name} className="header__nav-item">
                  <Link
                    to={item.href}
                    className={`header__nav-link ${
                      location.pathname === item.href ? 'header__nav-link--active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="header__language hidden-mobile">
            <button
              onClick={() => switchLanguage(language === 'en' ? 'uk' : 'en')}
              className="header__language-btn"
              title={t('language.switch')}
            >
              <i className="fas fa-globe"></i>
              <span>{language === 'en' ? 'EN' : 'УК'}</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="header__actions hidden-mobile">
            <Link to="/contact" className="btn btn-primary">
              {t('cta.consultation')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="header__mobile-toggle visible-mobile-only"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navigation.map((item) => (
                <li key={item.name} className="header__mobile-nav-item">
                  <Link
                    to={item.href}
                    className={`header__mobile-nav-link ${
                      location.pathname === item.href ? 'header__mobile-nav-link--active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="header__mobile-language">
              <button
                onClick={() => switchLanguage(language === 'en' ? 'uk' : 'en')}
                className="header__language-btn"
              >
                <i className="fas fa-globe"></i>
                <span>{language === 'en' ? 'English' : 'Українська'}</span>
              </button>
            </div>
            
            <div className="header__mobile-actions">
              <Link to="/contact" className="btn btn-primary btn-full">
                {t('cta.consultation')}
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="header__overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
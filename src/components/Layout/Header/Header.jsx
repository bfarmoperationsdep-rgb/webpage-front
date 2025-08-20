import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Головна', href: '/' },
    { name: 'Послуги', href: '/services' },
    { name: 'Про нас', href: '/about' },
    { name: 'Портфоліо', href: '/portfolio' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакти', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <span className="header__logo-text">ModularBiz</span>
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

          {/* CTA Button */}
          <div className="header__actions hidden-mobile">
            <Link to="/contact" className="btn btn-primary">
              Безкоштовна консультація
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
            <div className="header__mobile-actions">
              <Link to="/contact" className="btn btn-primary btn-full">
                Безкоштовна консультація
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

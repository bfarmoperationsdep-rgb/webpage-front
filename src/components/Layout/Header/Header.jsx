import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    setServicesDropdownOpen(false); // Close dropdown on route change
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#', // Changed to '#' to prevent navigation
      hasDropdown: true,
      dropdown: {
        columns: [
          {
            items: [
              { name: 'All Services', href: '/services', isMain: true, isHighlight: true },
              { name: 'Full Amazon Account Management', href: '/services/full-account-management', isMain: true },
              { name: 'Amazon Advertising Optimization', href: '/services/amazon-advertising', isMain: true },
              { name: 'Cataloging', href: '/services/cataloging-services', isMain: true },
              { name: 'Amazon SEO', href: '/services/product-optimization', isMain: true },
              { name: 'Enhanced Brand Content (A+, brand story, storefront, premium A+, posts, etc.)', href: '/services/design-services', isMain: true },
              { name: 'Imaging', href: '/services/imaging-services', isMain: true },
              { name: 'Consulting', href: '/services/consulting-services', isMain: true },
              { name: 'Training', href: '/services/training-services', isMain: true }
            ]
          },
          {
            title: 'Design',
            titleLink: '/services/design',
            items: [
              { name: 'Brand story', href: '/services/design/brand-story' },
              { name: 'Listing images', href: '/services/design/listing-images' },
              { name: 'Enhanced brand content A+ & Premium A+', href: '/services/design/enhanced-content' },
              { name: 'Full listing optimization', href: '/services/full-listing-optimization' }
            ]
          },
          {
            title: 'Troubleshooting',
            titleLink: '/services/troubleshooting',
            items: [
              { name: 'Listing reinstatement', href: '/services/troubleshooting/listing-reinstatement' },
              { name: 'Account suspension', href: '/services/troubleshooting/account-suspension' },
              { name: 'PPC Advertising audit', href: '/services/troubleshooting/ppc-audit' },
              { name: 'Troubleshooting hours', href: '/services/troubleshooting/hours' }
            ]
          },
          {
            title: 'Other services',
            titleLink: '/services/other',
            items: [
              { name: 'Amazon DSP', href: '/services/other/amazon-dsp' },
              { name: 'Vendor Central full service', href: '/services/other/vendor-central' }
            ],
            freeTools: {
              title: 'Free Amazon tools',
              items: [
                { name: 'To be soon', href: '/tools/coming-soon' }
              ]
            }
          }
        ]
      }
    },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Articles', href: '#', isDisabled: true },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} onClick={() => setServicesDropdownOpen(false)}>
      <div className="container">
        <div className="header__content">
          {/* Enhanced Logo */}
          <Link to="/" className="header__logo hover-lift" onClick={(e) => e.stopPropagation()}>
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
                <li 
                  key={item.name} 
                  className={`header__nav-item ${item.hasDropdown ? 'header__nav-item--dropdown' : ''}`}
                  onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
                >
                  {item.hasDropdown ? (
                    <span
                      className={`header__nav-link ${
                        location.pathname.startsWith('/services/') ? 'header__nav-link--active' : ''
                      }`}
                      style={{ cursor: 'pointer' }} // Added cursor style
                    >
                      {item.name}
                      <span className="dropdown-arrow">▼</span>
                    </span>
                  ) : (
                    <Link
                      to={item.href}
                      className={`header__nav-link ${
                        location.pathname === item.href ? 'header__nav-link--active' : ''
                      } ${item.isDisabled ? 'header__nav-link--disabled' : ''}`}
                      onClick={(e) => item.isDisabled && e.preventDefault()}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.hasDropdown && (
                    <div 
                      className={`header__dropdown ${servicesDropdownOpen ? 'header__dropdown--open' : ''}`}
                    >
                      <div className="header__dropdown-grid">
                        {item.dropdown.columns.map((column, colIndex) => (
                          <div key={colIndex} className="header__dropdown-column">
                            {column.title && (
                              column.titleLink ? (
                                <Link 
                                  to={column.titleLink} 
                                  className="header__dropdown-title" 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setServicesDropdownOpen(false);
                                    window.location.href = column.titleLink;
                                  }}
                                >
                                  {column.title}
                                </Link>
                              ) : (
                                <h4 className="header__dropdown-title">{column.title}</h4>
                              )
                            )}
                            <ul className="header__dropdown-list">
                              {column.items.map((dropdownItem) => (
                                <li key={dropdownItem.name} className="header__dropdown-item">
                                  <Link
                                    to={dropdownItem.href}
                                    className={`header__dropdown-link ${
                                      dropdownItem.isHighlight ? 'header__dropdown-link--highlight' : ''
                                    } ${
                                      dropdownItem.isMain && !dropdownItem.isHighlight ? 'header__dropdown-link--main' : ''
                                    } ${
                                      location.pathname === dropdownItem.href ? 'header__dropdown-link--active' : ''
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setServicesDropdownOpen(false);
                                      window.location.href = dropdownItem.href;
                                    }}
                                  >
                                    {dropdownItem.isMain && !dropdownItem.isHighlight && <span className="main-service-bullet"></span>} {/* Bullet for main services */}
                                    {dropdownItem.name}
                                    {dropdownItem.isNew && <span className="new-badge">NEW</span>}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            
                            {column.freeTools && (
                              <div className="header__dropdown-free-tools">
                                <h4 className="header__dropdown-title">{column.freeTools.title}</h4>
                                <ul className="header__dropdown-list">
                                  {column.freeTools.items.map((toolItem) => (
                                    <li key={toolItem.name} className="header__dropdown-item">
                                      <Link
                                        to={toolItem.href}
                                        className="header__dropdown-link"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setServicesDropdownOpen(false);
                                          window.location.href = toolItem.href;
                                        }}
                                      >
                                        {toolItem.name}
                                        {toolItem.isNew && <span className="new-badge">NEW</span>}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header__actions hidden-mobile">
            <Link to="/contact" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
              Free Consultation
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
                    } ${item.isDisabled ? 'header__mobile-nav-link--disabled' : ''}`}
                    onClick={(e) => item.isDisabled && e.preventDefault()}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="header__mobile-actions">
              <Link to="/contact" className="btn btn-primary btn-full">
                Free Consultation
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
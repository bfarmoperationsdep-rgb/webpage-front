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
              { name: 'Full service management', href: '/services/full-account-management', isMain: true },
              { name: 'Advertising (PPC) management', href: '/services/amazon-advertising', isMain: true },
              { name: 'Amazon SEO', href: '/services/amazon-seo', isMain: true },
              { name: 'Amazon account audit', href: '/services/amazon-audit', isMain: true },
              { name: 'SOPs', href: '/services/sops', isMain: true },
              { name: 'All services', href: '/services/all-services', isMain: true },
              { name: 'Consulting', href: '/services/consulting-services', isMain: true },
              { name: 'Book a coaching call', href: '/services/coaching', isMain: true }
            ]
          },
          {
            title: 'Design',
            titleLink: '/services/design', // Link for the title
            items: [
              { name: 'Brand guidelines', href: '/services/design/1' },
              { name: 'Brand story', href: '/services/design/2' },
              { name: 'Brand store', href: '/services/design/3' },
              { name: 'Listing images', href: '/services/design/4' },
              { name: 'Enhanced brand content A+', href: '/services/design/5' },
              { name: 'Main image CTR hack', href: '/services/design/6' },
              { name: 'Listing optimization', href: '/services/listing-optimization' },
              { name: 'Full listing optimization', href: '/services/full-listing-optimization' }
            ]
          },
          {
            title: 'Troubleshooting',
            titleLink: '/services/troubleshooting', // Link for the title
            items: [
              { name: 'Listing reinstatement', href: '/services/troubleshooting/1' },
              { name: 'Account suspension', href: '/services/troubleshooting/2' },
              { name: 'PPC Advertising audit', href: '/services/troubleshooting/3' },
              { name: 'Brand name change', href: '/services/troubleshooting/4' },
              { name: 'Troubleshooting hours', href: '/services/troubleshooting/5' },
              { name: 'UPC to GS1 change', href: '/services/troubleshooting/6' }
            ]
          },
          {
            title: 'Other services',
            titleLink: '/services/other', // Link for the title
            items: [
              { name: 'Amazon DSP', href: '/services/other/1' },
              { name: 'Trademark registration', href: '/services/other/2' },
              { name: 'Product photography', href: '/services/other/3' },
              { name: 'Vendor Central full service', href: '/services/other/4' }
            ],
            freeTools: {
              title: 'Free Amazon tools',
              items: [
                { name: 'PPC Resources Directory', href: '/tools/ppc-resources' },
                { name: 'Amazon Crisis Kit', href: '/tools/crisis-kit' },
                { name: 'Amazon PPC Guide', href: '/tools/ppc-guide' },
                { name: 'New Seller Launch Deck', href: '/tools/launch-deck' },
                { name: 'DTC Growth Stack', href: '/tools/dtc-growth' },
                { name: 'Amazon SEO Toolkit', href: '/tools/seo-toolkit' },
                { name: 'Warehouse Code Directory', href: '/tools/warehouse-codes', isNew: true }
              ]
            }
          }
        ]
      }
    },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Articles', href: '/articles' },
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
                      }`}
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
                                      dropdownItem.isMain ? 'header__dropdown-link--main' : ''
                                    } ${
                                      location.pathname === dropdownItem.href ? 'header__dropdown-link--active' : ''
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setServicesDropdownOpen(false);
                                      window.location.href = dropdownItem.href;
                                    }}
                                  >
                                    {dropdownItem.isMain && <span className="main-service-bullet"></span>} {/* Bullet for main services */}
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
                    }`}
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
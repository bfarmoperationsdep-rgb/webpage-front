import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const TroubleshootingCategory = () => {
  const troubleshootingServices = [
    {
      id: 1,
      title: "Listing Reinstatement",
      description: "Expert assistance to get your suppressed or removed listings back online quickly and efficiently.",
      features: ["Violation analysis", "Appeal writing", "Documentation prep", "Amazon communication"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Account Suspension Recovery",
      description: "Comprehensive account suspension recovery services to restore your selling privileges.",
      features: ["Root cause analysis", "Plan of action", "Performance metrics", "Compliance monitoring"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "PPC Advertising Audit",
      description: "In-depth analysis of your PPC campaigns to identify issues and optimization opportunities.",
      features: ["Campaign analysis", "Keyword audit", "Bid optimization", "Performance report"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Brand Name Change Support",
      description: "Professional assistance for brand name changes and trademark transitions on Amazon.",
      features: ["Documentation review", "Brand registry update", "Listing migration", "Compliance check"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Emergency Troubleshooting Hours",
      description: "Dedicated troubleshooting hours for urgent Amazon account and listing issues.",
      features: ["24/7 emergency support", "Priority handling", "Expert consultation", "Quick resolution"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "UPC to GS1 Migration",
      description: "Seamless transition from UPC codes to GS1 barcodes for improved inventory management.",
      features: ["GS1 registration", "Code migration", "Inventory sync", "Compliance verification"],
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="service-page">
      <div className="container">
        <motion.div 
          className="service-page__header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/services/full-account-management" className="service-page__back">
            ← Back to All Services
          </Link>
          <h1 className="service-page__title">Troubleshooting Services</h1>
          <p className="service-page__subtitle">
            Expert troubleshooting solutions to resolve Amazon account and listing issues quickly
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-offers-grid">
            {troubleshootingServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-offer-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="offer-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="offer-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="offer-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services/troubleshooting/${service.id}`}
                    className="offer-link"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="service-page__cta">
            <h3>Need Emergency Support?</h3>
            <p>Our troubleshooting experts are ready to resolve your Amazon issues</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Help Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TroubleshootingCategory;

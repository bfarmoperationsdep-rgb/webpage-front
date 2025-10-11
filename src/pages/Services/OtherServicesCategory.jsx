import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const OtherServicesCategory = () => {
  const otherServices = [
    {
      id: 1,
      title: "Amazon DSP Management",
      description: "Professional Amazon DSP advertising management to reach customers across Amazon's ecosystem.",
      features: ["Campaign setup", "Audience targeting", "Creative optimization", "Performance analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Trademark Registration",
      description: "Complete trademark registration services to protect your brand and enable Amazon Brand Registry.",
      features: ["Trademark search", "Application filing", "USPTO monitoring", "Brand registry setup"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Product Photography",
      description: "High-quality product photography that showcases your products in the best light.",
      features: ["Studio photography", "Lifestyle shots", "360° product views", "Image optimization"],
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Vendor Central Management",
      description: "Full-service Vendor Central management for brands selling directly to Amazon.",
      features: ["Order management", "Inventory planning", "Promotional strategy", "Performance monitoring"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "International Expansion",
      description: "Strategic expansion services to launch your products in international Amazon marketplaces.",
      features: ["Market research", "Localization", "Compliance setup", "Launch strategy"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Amazon Attribution Setup",
      description: "Implementation and optimization of Amazon Attribution for better advertising insights.",
      features: ["Attribution setup", "Campaign tracking", "Performance analysis", "ROI optimization"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
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
          <Link to="/services" className="service-page__back">
            ← Back to All Services
          </Link>
          <h1 className="service-page__title">Other Services</h1>
          <p className="service-page__subtitle">
            Specialized Amazon services to support and expand your business growth
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-offers-grid">
            {otherServices.map((service, index) => (
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
                    to={`/services/other/${service.id}`}
                    className="offer-link"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="service-page__cta">
            <h3>Ready to Expand Your Reach?</h3>
            <p>Let's unlock new opportunities for your Amazon business</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Explore Opportunities
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OtherServicesCategory;

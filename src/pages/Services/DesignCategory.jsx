import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const DesignCategory = () => {
  const designServices = [
    {
      id: 1,
      title: "Brand Guidelines Creation",
      description: "Comprehensive brand guidelines that ensure consistency across all your Amazon assets and marketing materials.",
      features: ["Logo usage guidelines", "Color palette definition", "Typography standards", "Visual identity rules"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Brand Story Development",
      description: "Compelling brand narratives that connect with your target audience and differentiate you from competitors.",
      features: ["Brand messaging", "Mission & vision", "Value proposition", "Customer personas"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Amazon Brand Store Design",
      description: "Custom Amazon Brand Store designs that showcase your products and tell your brand story effectively.",
      features: ["Store layout design", "Product showcasing", "Brand storytelling", "Mobile optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Product Listing Images",
      description: "High-converting product images that highlight features, benefits, and lifestyle applications.",
      features: ["Main image optimization", "Infographic creation", "Lifestyle photography", "Feature highlights"],
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Enhanced Brand Content A+",
      description: "Premium A+ content modules that enhance product descriptions and increase conversion rates.",
      features: ["Module design", "Content strategy", "Visual storytelling", "Conversion optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Main Image CTR Optimization",
      description: "Data-driven main image optimization to improve click-through rates and search visibility.",
      features: ["A/B testing", "CTR analysis", "Design variations", "Performance tracking"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Design Services</h1>
          <p className="service-page__subtitle">
            Professional design services to enhance your Amazon brand presence and drive conversions
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-offers-grid">
            {designServices.map((service, index) => (
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
                    to={`/services/design/${service.id}`}
                    className="offer-link"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="service-page__cta">
            <h3>Ready to Transform Your Brand?</h3>
            <p>Let's create stunning designs that convert browsers into buyers</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignCategory;

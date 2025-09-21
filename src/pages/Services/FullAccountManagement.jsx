import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const FullAccountManagement = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Complete Account Setup & Optimization",
      description: "We handle everything from account registration to full optimization, ensuring your Amazon presence is professional and effective.",
      features: ["Account registration assistance", "Brand registry setup", "Tax and legal compliance", "Initial inventory setup"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Daily Account Monitoring & Management",
      description: "Round-the-clock monitoring and management to keep your account healthy and performing optimally.",
      features: ["Performance metrics tracking", "Health score monitoring", "Issue prevention & resolution", "Regular performance reports"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Inventory Management & Forecasting",
      description: "Strategic inventory planning to prevent stockouts and optimize cash flow while maintaining healthy inventory levels.",
      features: ["Demand forecasting", "Reorder point optimization", "Seasonal planning", "FBA shipment management"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Customer Service & Review Management",
      description: "Professional customer service to maintain high seller ratings and positive customer relationships.",
      features: ["24/7 customer support", "Review response management", "Returns processing", "Feedback optimization"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Financial Reporting & Analytics",
      description: "Comprehensive financial tracking and business intelligence to help you make data-driven decisions.",
      features: ["Monthly P&L reports", "ROI analysis", "Cost optimization", "Performance benchmarking"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Strategic Growth Planning",
      description: "Long-term strategic planning to scale your Amazon business sustainably and profitably.",
      features: ["Market expansion strategies", "Product line development", "Competitive analysis", "Growth roadmap creation"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Full Account Management</h1>
          <p className="service-page__subtitle">
            Complete end-to-end Amazon account management with dedicated support
          </p>
        </motion.div>

        <motion.div 
          className="service-page__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="service-offers-grid">
            {serviceOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                className="service-offer-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="offer-image">
                  <img src={offer.image} alt={offer.title} />
                </div>
                <div className="offer-content">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <ul className="offer-features">
                    {offer.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services/full-account-management/${offer.id}`}
                    className="offer-link"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="service-page__cta">
            <h3>Ready to Scale Your Amazon Business?</h3>
            <p>Let's discuss how our full account management can accelerate your growth</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FullAccountManagement;

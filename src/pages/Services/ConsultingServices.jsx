import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const ConsultingServices = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Amazon Strategy Consulting",
      description: "Develop a comprehensive Amazon strategy aligned with your business goals and market opportunities.",
      features: ["Market analysis", "Growth strategy", "Competitive positioning", "Action roadmap"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Account Audit & Assessment",
      description: "Comprehensive audit of your Amazon account to identify issues and opportunities for improvement.",
      features: ["Performance review", "Compliance check", "Optimization opportunities", "Priority recommendations"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Product Launch Strategy",
      description: "Expert guidance on launching new products successfully on Amazon with maximum impact.",
      features: ["Launch planning", "Positioning strategy", "Marketing tactics", "Success metrics"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Brand Protection & Compliance",
      description: "Protect your brand from unauthorized sellers and ensure full compliance with Amazon policies.",
      features: ["Brand registry", "IP protection", "Policy compliance", "Violation management"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "International Expansion",
      description: "Strategic guidance for expanding your Amazon presence to international marketplaces.",
      features: ["Market selection", "Localization", "Logistics planning", "Compliance management"],
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Ongoing consulting to optimize your Amazon performance metrics and maximize profitability.",
      features: ["KPI tracking", "Process improvement", "Cost optimization", "Growth tactics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Consulting Services</h1>
          <p className="service-page__subtitle">
            Expert Amazon consulting to guide your business strategy and growth
          </p>
        </motion.div>

        <div className="service-offers">
          {serviceOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="service-offer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-offer__image">
                <img src={offer.image} alt={offer.title} />
              </div>
              <div className="service-offer__content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <ul className="service-offer__features">
                  {offer.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link
                  to={`/services/consulting-services/${offer.id}`}
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;

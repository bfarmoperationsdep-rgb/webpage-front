import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const ProductOptimization = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword research to identify high-converting search terms and optimize your product visibility.",
      features: ["Search term analysis", "Competitor keywords", "Long-tail opportunities", "Search volume data"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Title Optimization",
      description: "Craft compelling, keyword-rich product titles that maximize visibility and click-through rates.",
      features: ["SEO-optimized titles", "Brand positioning", "Character optimization", "A/B testing"],
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Bullet Points & Description",
      description: "Write persuasive bullet points and descriptions that highlight benefits and drive conversions.",
      features: ["Benefit-focused copy", "Keyword integration", "Readability optimization", "Mobile-friendly format"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Backend Search Terms",
      description: "Maximize discoverability with strategic backend keyword optimization for hidden search terms.",
      features: ["Hidden keywords", "Misspellings", "Synonyms", "Character maximization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Competitive Analysis & Positioning",
      description: "Analyze competitor listings and position your products for maximum competitive advantage.",
      features: ["Competitor benchmarking", "Gap analysis", "Positioning strategy", "Market insights"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Ongoing SEO Monitoring & Updates",
      description: "Continuous monitoring and optimization to maintain and improve your search rankings over time.",
      features: ["Performance tracking", "Keyword updates", "Trend adaptation", "Monthly reports"],
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
          <h1 className="service-page__title">Amazon SEO</h1>
          <p className="service-page__subtitle">
            Optimize your product listings for maximum visibility and search rankings
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
                  to={`/services/product-optimization/${offer.id}`}
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

export default ProductOptimization;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const TrainingServices = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Amazon Seller Basics Training",
      description: "Comprehensive training program covering all fundamentals of selling successfully on Amazon.",
      features: ["Account setup", "Product listings", "FBA basics", "Policy compliance"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Advanced PPC Training",
      description: "Master Amazon advertising with in-depth training on PPC strategies and optimization techniques.",
      features: ["Campaign structure", "Keyword strategy", "Bid optimization", "Analytics & reporting"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Amazon SEO Masterclass",
      description: "Learn proven strategies to optimize product listings and rank higher in Amazon search results.",
      features: ["Keyword research", "Listing optimization", "Backend search terms", "Ranking factors"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Brand Building on Amazon",
      description: "Strategic training on building and scaling your brand presence on Amazon marketplace.",
      features: ["Brand registry", "A+ Content", "Brand stores", "Brand protection"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Amazon Analytics & Data",
      description: "Master Amazon analytics tools and learn to make data-driven decisions for your business.",
      features: ["Business reports", "Brand analytics", "Market basket analysis", "Performance metrics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Team Training & Workshops",
      description: "Custom training programs designed for your team's specific needs and skill levels.",
      features: ["Custom curriculum", "Hands-on exercises", "Team collaboration", "Ongoing support"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Training Services</h1>
          <p className="service-page__subtitle">
            Comprehensive Amazon training programs for sellers and businesses
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
                  to={`/services/training-services/${offer.id}`}
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

export default TrainingServices;

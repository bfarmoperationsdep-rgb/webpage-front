import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const AmazonAdvertising = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Sponsored Products Campaign Management",
      description: "Maximize visibility with expertly managed Sponsored Products campaigns that drive sales and improve organic rankings.",
      features: ["Keyword optimization", "Bid management", "Campaign structure", "Performance tracking"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Sponsored Brands Campaign Setup",
      description: "Build brand awareness with Sponsored Brands campaigns featuring your logo, custom headline, and multiple products.",
      features: ["Brand storytelling", "Custom creatives", "Multi-product showcase", "Brand analytics"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Sponsored Display Advertising",
      description: "Re-engage shoppers and reach new audiences with display ads both on and off Amazon.",
      features: ["Audience targeting", "Retargeting campaigns", "Cross-platform reach", "Creative optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Amazon DSP Management",
      description: "Reach audiences at scale with programmatic display and video ads across Amazon sites and third-party exchanges.",
      features: ["Programmatic buying", "Video ads", "Advanced targeting", "Brand safety"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "PPC Strategy & Optimization",
      description: "Comprehensive PPC strategy development and continuous optimization to maximize ROI and reduce ACoS.",
      features: ["Strategy development", "ACoS optimization", "Keyword research", "Competitor analysis"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Advertising Analytics & Reporting",
      description: "Detailed analytics and reporting to track performance, identify opportunities, and make data-driven decisions.",
      features: ["Custom dashboards", "Performance metrics", "ROI tracking", "Monthly reports"],
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
          <h1 className="service-page__title">Amazon Advertising Optimization</h1>
          <p className="service-page__subtitle">
            Professional Amazon PPC management to maximize your advertising ROI
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
                  to={`/services/amazon-advertising/${offer.id}`}
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

export default AmazonAdvertising;

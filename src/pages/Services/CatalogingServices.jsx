import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const CatalogingServices = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Product Data Entry & Management",
      description: "Accurate and comprehensive product data entry to ensure your catalog is complete, error-free, and optimized.",
      features: ["Bulk data entry", "Data validation", "SKU management", "Attribute mapping"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Category & Browse Node Optimization",
      description: "Strategic category placement to maximize product visibility and ensure customers can easily find your products.",
      features: ["Category research", "Node optimization", "Classification strategy", "Competitive analysis"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Variation & Parent-Child Setup",
      description: "Expert setup of product variations to showcase all options and improve shopping experience.",
      features: ["Variation themes", "Parent-child relationships", "Size/color setup", "Inventory sync"],
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Bulk Upload & Migration Services",
      description: "Seamless bulk product uploads and catalog migrations with zero errors and minimal downtime.",
      features: ["Mass upload", "Data migration", "Error prevention", "Quality assurance"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Catalog Maintenance & Updates",
      description: "Ongoing catalog maintenance to keep your product information accurate, up-to-date, and compliant.",
      features: ["Regular updates", "Price management", "Inventory sync", "Compliance checks"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Product Listing Quality Audit",
      description: "Comprehensive audit of your product listings to identify and fix issues that impact performance.",
      features: ["Quality assessment", "Error identification", "Optimization recommendations", "Compliance review"],
      image: "https://images.unsplash.com/photo-1554224311-beee0c7rfe00?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Cataloging Services</h1>
          <p className="service-page__subtitle">
            Professional product cataloging and inventory management services
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
                  to={`/services/cataloging/${offer.id}`}
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

export default CatalogingServices;

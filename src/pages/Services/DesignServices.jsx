import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const DesignServices = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "A+ Content Design",
      description: "Create compelling A+ Content that showcases your brand story and product features with rich media.",
      features: ["Custom layouts", "Brand storytelling", "High-quality visuals", "Comparison charts"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Premium A+ Content",
      description: "Elevate your brand with Premium A+ featuring interactive modules, video, and advanced layouts.",
      features: ["Interactive modules", "Video integration", "Carousel displays", "Enhanced engagement"],
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Brand Store Design",
      description: "Build a custom Amazon Store that creates an immersive shopping experience for your brand.",
      features: ["Multi-page stores", "Custom navigation", "Brand immersion", "Mobile optimization"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Brand Story Creation",
      description: "Tell your brand's unique story with compelling visuals and copy that resonates with customers.",
      features: ["Brand narrative", "Visual storytelling", "Emotional connection", "Value proposition"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Posts & Social Content",
      description: "Create engaging Amazon Posts that drive traffic and build brand awareness directly on Amazon.",
      features: ["Custom posts", "Visual content", "Product tagging", "Engagement tracking"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Storefront Optimization",
      description: "Optimize your existing storefront for better performance, navigation, and conversion rates.",
      features: ["Performance audit", "UX improvements", "Traffic optimization", "Conversion testing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Enhanced Brand Content</h1>
          <p className="service-page__subtitle">
            A+, brand story, storefront, premium A+, posts, and more
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
                  to={`/services/design-services/${offer.id}`}
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

export default DesignServices;

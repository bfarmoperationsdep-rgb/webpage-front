import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicePage.scss';

const ImagingServices = () => {
  const serviceOffers = [
    {
      id: 1,
      title: "Product Photography",
      description: "Professional product photography that showcases your items in the best light and drives conversions.",
      features: ["High-resolution images", "Multiple angles", "Lifestyle shots", "White background photos"],
      image: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Infographic Design",
      description: "Eye-catching infographics that highlight key product features and benefits.",
      features: ["Custom design", "Brand-aligned", "Feature highlights", "Conversion-focused"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Lifestyle Photography",
      description: "Lifestyle images that show your products in real-world scenarios and connect with customers.",
      features: ["Contextual shots", "Model photography", "Scene creation", "Emotional connection"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "360° Product Views",
      description: "Interactive 360-degree product views that let customers examine every detail.",
      features: ["Full rotation", "Zoom capability", "Interactive experience", "Mobile optimized"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Image Editing & Retouching",
      description: "Professional editing and retouching to make your product images perfect.",
      features: ["Color correction", "Background removal", "Shadow/reflection", "Image enhancement"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Video Content Creation",
      description: "Engaging product videos that demonstrate features and increase conversion rates.",
      features: ["Product demos", "Unboxing videos", "How-to content", "Brand storytelling"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop"
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
          <h1 className="service-page__title">Imaging Services</h1>
          <p className="service-page__subtitle">
            Professional product photography and image services to showcase your products
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
                  to={`/services/imaging/${offer.id}`}
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

export default ImagingServices;

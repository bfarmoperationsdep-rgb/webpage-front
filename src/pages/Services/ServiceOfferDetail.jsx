import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.scss';

const ServiceOfferDetail = () => {
  const { serviceType, offerId } = useParams();
  
  // This would typically come from a database or API
  const offerDetails = {
    'full-account-management': {
      1: {
        title: "Complete Account Setup & Optimization",
        description: "We handle everything from account registration to full optimization, ensuring your Amazon presence is professional and effective.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        benefits: [
          "Fast-track your Amazon journey with expert setup",
          "Avoid common pitfalls that cost new sellers money",
          "Professional brand presence from day one",
          "Compliance with all Amazon policies and requirements"
        ],
        process: [
          "Initial consultation and strategy planning",
          "Account registration and verification",
          "Brand registry and trademark setup",
          "Tax and legal compliance configuration",
          "Product catalog setup and optimization",
          "Launch strategy implementation"
        ],
        pricing: "Custom pricing based on account complexity",
        timeline: "2-4 weeks for complete setup"
      }
    },
    'design': {
      1: {
        title: "Brand Guidelines Creation",
        description: "Comprehensive brand guidelines that ensure consistency across all your Amazon assets and marketing materials.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
        benefits: [
          "Consistent brand presence across all platforms",
          "Professional guidelines for internal teams",
          "Enhanced brand recognition and trust",
          "Scalable brand standards for growth"
        ],
        process: [
          "Brand audit and analysis",
          "Visual identity development",
          "Guidelines documentation",
          "Team training and implementation",
          "Quality assurance checks",
          "Ongoing support and updates"
        ],
        pricing: "Starting at $1,500",
        timeline: "2-3 weeks"
      },
      2: {
        title: "Brand Story Development",
        description: "Compelling brand narratives that connect with your target audience and differentiate you from competitors.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        benefits: [
          "Emotional connection with customers",
          "Clear brand differentiation",
          "Improved customer loyalty",
          "Enhanced marketing effectiveness"
        ],
        process: [
          "Brand discovery workshop",
          "Customer persona development",
          "Story framework creation",
          "Content development",
          "Testing and refinement",
          "Implementation guidance"
        ],
        pricing: "Starting at $1,200",
        timeline: "1-2 weeks"
      },
      3: {
        title: "Amazon Brand Store Design",
        description: "Custom Amazon Brand Store designs that showcase your products and tell your brand story effectively.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        benefits: [
          "Professional brand store presence",
          "Enhanced customer experience",
          "Increased conversion rates",
          "Mobile-optimized design"
        ],
        process: [
          "Store strategy development",
          "Design concept creation",
          "Page layout optimization",
          "Content integration",
          "Testing and refinement",
          "Launch and monitoring"
        ],
        pricing: "Starting at $2,000",
        timeline: "3-4 weeks"
      },
      4: {
        title: "Product Listing Images",
        description: "High-converting product images that highlight features, benefits, and lifestyle applications.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=400&fit=crop",
        benefits: [
          "Increased click-through rates",
          "Higher conversion rates",
          "Professional product presentation",
          "Competitive advantage"
        ],
        process: [
          "Product photography",
          "Image editing and enhancement",
          "Infographic creation",
          "Lifestyle image development",
          "Amazon compliance check",
          "Performance optimization"
        ],
        pricing: "Starting at $800",
        timeline: "1-2 weeks"
      },
      5: {
        title: "Enhanced Brand Content A+",
        description: "Premium A+ content modules that enhance product descriptions and increase conversion rates.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        benefits: [
          "Enhanced product storytelling",
          "Increased conversion rates",
          "Better search visibility",
          "Premium brand perception"
        ],
        process: [
          "Content strategy development",
          "Module design creation",
          "Copywriting and optimization",
          "Visual content integration",
          "Amazon submission",
          "Performance tracking"
        ],
        pricing: "Starting at $1,000",
        timeline: "2-3 weeks"
      },
      6: {
        title: "Main Image CTR Optimization",
        description: "Data-driven main image optimization to improve click-through rates and search visibility.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=400&fit=crop",
        benefits: [
          "Improved search visibility",
          "Higher click-through rates",
          "Better organic ranking",
          "Increased sales volume"
        ],
        process: [
          "Current image analysis",
          "Competitor research",
          "Design variations creation",
          "A/B testing setup",
          "Performance monitoring",
          "Optimization recommendations"
        ],
        pricing: "Starting at $600",
        timeline: "1-2 weeks"
      }
    },
    'troubleshooting': {
      1: {
        title: "Listing Reinstatement",
        description: "Expert assistance to get your suppressed or removed listings back online quickly and efficiently.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        benefits: [
          "Quick restoration of sales",
          "Expert appeal writing",
          "Compliance guidance",
          "Future prevention strategies"
        ],
        process: [
          "Violation analysis",
          "Evidence gathering",
          "Appeal preparation",
          "Submission and follow-up",
          "Compliance improvements",
          "Monitoring and prevention"
        ],
        pricing: "Starting at $500",
        timeline: "3-7 business days"
      },
      2: {
        title: "Account Suspension Recovery",
        description: "Comprehensive account suspension recovery services to restore your selling privileges.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        benefits: [
          "Expert appeal preparation",
          "Account health restoration",
          "Compliance implementation",
          "Ongoing monitoring"
        ],
        process: [
          "Suspension analysis",
          "Plan of action creation",
          "Documentation preparation",
          "Appeal submission",
          "Performance monitoring",
          "Compliance maintenance"
        ],
        pricing: "Starting at $1,500",
        timeline: "1-2 weeks"
      },
      3: {
        title: "PPC Advertising Audit",
        description: "In-depth analysis of your PPC campaigns to identify issues and optimization opportunities.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        benefits: [
          "Improved campaign performance",
          "Reduced advertising costs",
          "Better ACOS optimization",
          "Strategic recommendations"
        ],
        process: [
          "Campaign analysis",
          "Keyword research",
          "Bid optimization",
          "Performance review",
          "Recommendations report",
          "Implementation support"
        ],
        pricing: "Starting at $800",
        timeline: "1 week"
      },
      4: {
        title: "Brand Name Change Support",
        description: "Professional assistance for brand name changes and trademark transitions on Amazon.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        benefits: [
          "Smooth brand transition",
          "Maintained search rankings",
          "Compliance assurance",
          "Minimized disruption"
        ],
        process: [
          "Documentation review",
          "Brand registry update",
          "Listing migration",
          "Compliance verification",
          "Performance monitoring",
          "Support and guidance"
        ],
        pricing: "Starting at $1,200",
        timeline: "2-3 weeks"
      },
      5: {
        title: "Emergency Troubleshooting Hours",
        description: "Dedicated troubleshooting hours for urgent Amazon account and listing issues.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=400&fit=crop",
        benefits: [
          "24/7 emergency support",
          "Priority response time",
          "Expert problem solving",
          "Peace of mind"
        ],
        process: [
          "Emergency assessment",
          "Immediate action plan",
          "Issue resolution",
          "Status updates",
          "Follow-up monitoring",
          "Prevention strategies"
        ],
        pricing: "Starting at $200/hour",
        timeline: "Immediate response"
      },
      6: {
        title: "UPC to GS1 Migration",
        description: "Seamless transition from UPC codes to GS1 barcodes for improved inventory management.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=400&fit=crop",
        benefits: [
          "Improved inventory control",
          "Global barcode standards",
          "Reduced code conflicts",
          "Better tracking"
        ],
        process: [
          "Current system audit",
          "GS1 registration",
          "Code migration plan",
          "System implementation",
          "Testing and verification",
          "Training and support"
        ],
        pricing: "Starting at $900",
        timeline: "2-3 weeks"
      }
    },
    'other': {
      1: {
        title: "Amazon DSP Management",
        description: "Professional Amazon DSP advertising management to reach customers across Amazon's ecosystem.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        benefits: [
          "Expanded reach beyond Amazon search",
          "Advanced audience targeting",
          "Cross-platform advertising",
          "Improved brand awareness"
        ],
        process: [
          "Campaign strategy development",
          "Audience research and setup",
          "Creative development",
          "Campaign launch and optimization",
          "Performance monitoring",
          "Regular reporting and insights"
        ],
        pricing: "20% of ad spend + $500 setup",
        timeline: "Ongoing management"
      },
      2: {
        title: "Trademark Registration",
        description: "Complete trademark registration services to protect your brand and enable Amazon Brand Registry.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        benefits: [
          "Brand protection",
          "Amazon Brand Registry access",
          "Legal trademark rights",
          "Enhanced brand control"
        ],
        process: [
          "Trademark search",
          "Application preparation",
          "USPTO filing",
          "Response management",
          "Registration completion",
          "Brand registry setup"
        ],
        pricing: "Starting at $1,800",
        timeline: "6-12 months"
      },
      3: {
        title: "Product Photography",
        description: "High-quality product photography that showcases your products in the best light.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=400&fit=crop",
        benefits: [
          "Professional product images",
          "Higher conversion rates",
          "Better brand perception",
          "Competitive advantage"
        ],
        process: [
          "Photo planning session",
          "Studio setup",
          "Product photography",
          "Image editing",
          "Final delivery",
          "Amazon optimization"
        ],
        pricing: "Starting at $150 per product",
        timeline: "1-2 weeks"
      },
      4: {
        title: "Vendor Central Management",
        description: "Full-service Vendor Central management for brands selling directly to Amazon.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        benefits: [
          "Direct relationship with Amazon",
          "Better profit margins",
          "Inventory optimization",
          "Strategic negotiations"
        ],
        process: [
          "Account assessment",
          "Strategy development",
          "Order management",
          "Inventory planning",
          "Performance optimization",
          "Ongoing support"
        ],
        pricing: "Starting at $3,000/month",
        timeline: "Ongoing management"
      },
      5: {
        title: "International Expansion",
        description: "Strategic expansion services to launch your products in international Amazon marketplaces.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=400&fit=crop",
        benefits: [
          "Global market access",
          "Revenue diversification",
          "Market expansion",
          "Risk mitigation"
        ],
        process: [
          "Market research",
          "Compliance setup",
          "Localization",
          "Launch strategy",
          "Performance monitoring",
          "Optimization"
        ],
        pricing: "Starting at $2,500 per marketplace",
        timeline: "2-4 weeks per marketplace"
      },
      6: {
        title: "Amazon Attribution Setup",
        description: "Implementation and optimization of Amazon Attribution for better advertising insights.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        benefits: [
          "Better attribution tracking",
          "Improved ROI measurement",
          "Cross-channel insights",
          "Data-driven decisions"
        ],
        process: [
          "Attribution setup",
          "Tracking implementation",
          "Campaign integration",
          "Data analysis",
          "Optimization recommendations",
          "Ongoing monitoring"
        ],
        pricing: "Starting at $800",
        timeline: "1-2 weeks"
      }
    }
  };

  const offer = offerDetails[serviceType]?.[offerId];
  
  if (!offer) {
    return (
      <div className="service-offer-detail">
        <div className="container">
          <div className="error-message">
            <h1>Service Details Coming Soon</h1>
            <p>This service page is currently being developed. Please check back soon!</p>
            <Link to="/services" className="back-link">
              ← Back to All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="service-offer-detail"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="service-offer-detail__header">
            <Link to="/services" className="back-link">
              ← Back to All Services
            </Link>
          
          <div className="header-content">
            <h1>{offer.title}</h1>
            <p className="description">{offer.description}</p>
            <img src={offer.image} alt={offer.title} className="featured-image" />
          </div>
        </div>
        
        <div className="service-offer-detail__content">
          <div className="content-grid">
            <div className="main-content">
              <section className="benefits-section">
                <h2>Key Benefits</h2>
                <ul className="benefits-list">
                  {offer.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </section>
              
              <section className="process-section">
                <h2>Our Process</h2>
                <div className="process-steps">
                  {offer.process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">{step}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            <div className="sidebar">
              <div className="pricing-card">
                <h3>Investment</h3>
                <p className="price">{offer.pricing}</p>
                <p className="timeline">
                  <strong>Timeline:</strong> {offer.timeline}
                </p>
                <Link to="/contact" className="cta-button">
                  Get Started
                </Link>
              </div>
              
              <div className="placeholder-content">
                <h3>Service Placeholder</h3>
                <p>
                  This is a placeholder for additional service information. 
                  In a real implementation, this would contain:
                </p>
                <ul>
                  <li>Detailed service specifications</li>
                  <li>Case studies and success stories</li>
                  <li>Client testimonials</li>
                  <li>FAQ section</li>
                  <li>Additional resources and downloads</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="cta-section">
            <h3>Ready to Get Started?</h3>
            <p>
              Contact our team today to discuss how this service can help 
              accelerate your Amazon business growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceOfferDetail;

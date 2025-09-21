import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Blog.scss';

const ArticleDetail = () => {
  const { id } = useParams();
  
  const articles = {
    1: {
      title: "Amazon PPC Optimization: Complete Guide for 2024",
      category: "Amazon PPC",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      content: "This comprehensive guide covers everything you need to know about Amazon PPC optimization..."
    },
    2: {
      title: "Listing Optimization Best Practices for Higher Conversions",
      category: "Listing Optimization",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      content: "Learn the proven techniques to optimize your Amazon product listings..."
    },
    3: {
      title: "Amazon Brand Registry: Complete Setup Guide",
      category: "Brand Protection",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=400&fit=crop",
      content: "Step-by-step guide to setting up Amazon Brand Registry..."
    },
    4: {
      title: "Keyword Research Strategies for Amazon Success",
      category: "SEO & Keywords",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      content: "Master the art of Amazon keyword research..."
    },
    5: {
      title: "Amazon FBA vs FBM: Which is Right for Your Business?",
      category: "Fulfillment",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop",
      content: "Compare the pros and cons of Amazon FBA and FBM..."
    },
    6: {
      title: "Product Photography Tips for Amazon Listings",
      category: "Photography",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=400&fit=crop",
      content: "Learn professional photography techniques..."
    }
  };

  const article = articles[id];

  if (!article) {
    return (
      <div className="article-detail">
        <div className="container">
          <h1>Article not found</h1>
          <Link to="/articles">← Back to Articles</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="article-detail"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="article-detail__header">
          <Link to="/articles" className="back-link">
            ← Back to Articles
          </Link>
          
          <div className="category">{article.category}</div>
          <h1>{article.title}</h1>
          
          <div className="meta">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          
          <img 
            src={article.image} 
            alt={article.title}
            className="featured-image"
          />
        </div>
        
        <div className="article-detail__content">
          <div className="placeholder-content">
            <h3>Article Content Placeholder</h3>
            <p>
              This is a placeholder for the full article content. In a real implementation, 
              this would contain the complete article with formatted text, images, and other media.
            </p>
            <p>
              The article would cover topics such as:
            </p>
            <ul style={{textAlign: 'left', marginBottom: '1rem'}}>
              <li>Detailed explanations and strategies</li>
              <li>Step-by-step instructions</li>
              <li>Real-world examples and case studies</li>
              <li>Best practices and expert tips</li>
              <li>Common mistakes to avoid</li>
            </ul>
            <p>
              This content would be managed through a CMS or stored in a database 
              for easy editing and updates.
            </p>
          </div>
          
          <div className="cta-section">
            <h3>Need Help with Your Amazon Business?</h3>
            <p>
              Our team of Amazon experts can help you implement these strategies 
              and grow your business on the platform.
            </p>
            <Link to="/contact" className="cta-button">
              Get Expert Help
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleDetail;

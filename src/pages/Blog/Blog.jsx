import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Blog.scss';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Amazon PPC Optimization: Complete Guide for 2024",
      excerpt: "Learn the latest strategies for optimizing your Amazon PPC campaigns to maximize ROI and drive profitable sales growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      date: "March 15, 2024",
      category: "Amazon PPC",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Listing Optimization Best Practices for Higher Conversions",
      excerpt: "Discover proven techniques to optimize your Amazon product listings for better search rankings and increased conversion rates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      date: "March 12, 2024",
      category: "Listing Optimization",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Amazon Brand Registry: Complete Setup Guide",
      excerpt: "Step-by-step guide to setting up Amazon Brand Registry and leveraging its benefits for brand protection and enhanced content.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&h=300&fit=crop",
      date: "March 10, 2024",
      category: "Brand Protection",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Keyword Research Strategies for Amazon Success",
      excerpt: "Master the art of Amazon keyword research to improve product visibility and drive more organic traffic to your listings.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      date: "March 8, 2024",
      category: "SEO & Keywords",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Amazon FBA vs FBM: Which is Right for Your Business?",
      excerpt: "Compare the pros and cons of Amazon FBA and FBM to make the best fulfillment decision for your e-commerce business.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      date: "March 5, 2024",
      category: "Fulfillment",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Product Photography Tips for Amazon Listings",
      excerpt: "Learn professional photography techniques to create compelling product images that boost conversions and sales.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=500&h=300&fit=crop",
      date: "March 3, 2024",
      category: "Photography",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <motion.div 
          className="blog-page__header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Latest Articles</h1>
          <p>Expert insights and strategies for Amazon success</p>
        </motion.div>
        
        <div className="blog-page__grid">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="blog-card__image">
                <img src={article.image} alt={article.title} />
                <div className="blog-card__category">{article.category}</div>
              </div>
              
              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="date">{article.date}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
                
                <h3 className="blog-card__title">{article.title}</h3>
                <p className="blog-card__excerpt">{article.excerpt}</p>
                
                <Link 
                  to={`/articles/${article.id}`} 
                  className="blog-card__link"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

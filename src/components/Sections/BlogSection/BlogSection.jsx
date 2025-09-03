import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogSection.scss';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 секретів успішного Amazon листинга в 2024",
      excerpt: "Дізнайтеся про найефективніші стратегії оптимізації, які допоможуть підвищити видимість вашого продукту.",
      category: "SEO Optimization",
      readTime: "5 хв читання",
      date: "15 лютого 2024",
      image: "placeholder-blog.jpg",
      slug: "amazon-listing-secrets-2024"
    },
    {
      id: 2,
      title: "PPC кампанії на Amazon: від новачка до профі",
      excerpt: "Покрокове керівництво по налаштуванню та оптимізації рекламних кампаній для максимальної рентабельності.",
      category: "PPC Marketing",
      readTime: "8 хв читання",
      date: "10 лютого 2024",
      image: "placeholder-blog.jpg",
      slug: "ppc-amazon-guide"
    },
    {
      id: 3,
      title: "Brand Registry: захист та розвиток бренду",
      excerpt: "Як використати Amazon Brand Registry для захисту інтелектуальної власності та покращення продажів.",
      category: "Brand Strategy",
      readTime: "6 хв читання",
      date: "5 лютого 2024",
      image: "placeholder-blog.jpg",
      slug: "brand-registry-guide"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <motion.div 
          className="blog-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="blog-section__title">Останні статті</h2>
          <p className="blog-section__description">
            Корисні поради та інсайти від наших експертів
          </p>
        </motion.div>
        
        <div className="blog-section__grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-card__image">
                <div className="placeholder-blog-image"></div>
                <span className="blog-card__category">{post.category}</span>
              </div>
              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="blog-card__date">{post.date}</span>
                  <span className="blog-card__read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="blog-card__read-more"
                >
                  Читати далі
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="blog-section__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/blog" className="btn btn-secondary btn-lg">
            <i className="fas fa-book-open"></i>
            Читати всі статті
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

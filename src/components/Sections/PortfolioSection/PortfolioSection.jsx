import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Електронна комерція",
      category: "E-commerce",
      description: "Створення онлайн-магазину з інтеграцією з Amazon",
      image: "placeholder-image.jpg",
      tags: ["Amazon", "SEO", "PPC"]
    },
    {
      id: 2,
      title: "Брендинг продукту",
      category: "Brand Development",
      description: "Розробка бренд-стратегії та запуск на Amazon",
      image: "placeholder-image.jpg",
      tags: ["Branding", "Launch", "Strategy"]
    },
    {
      id: 3,
      title: "Оптимізація листингів",
      category: "Optimization",
      description: "Підвищення конверсії та органічного трафіку",
      image: "placeholder-image.jpg",
      tags: ["Optimization", "SEO", "Conversion"]
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <motion.div 
          className="portfolio-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="portfolio-section__title">Наші роботи</h2>
          <p className="portfolio-section__description">
            Переглянути приклади успішно реалізованих проектів
          </p>
        </motion.div>
        
        <div className="portfolio-section__grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="portfolio-card__image">
                <div className="placeholder-image"></div>
                <div className="portfolio-card__overlay">
                  <span>Переглянути проект</span>
                </div>
              </div>
              <div className="portfolio-card__content">
                <span className="portfolio-card__category">{item.category}</span>
                <h3 className="portfolio-card__title">{item.title}</h3>
                <p className="portfolio-card__description">{item.description}</p>
                <div className="portfolio-card__tags">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="portfolio-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="portfolio-section__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio" className="btn btn-primary btn-lg">
            <i className="fas fa-eye"></i>
            Дивитися всі проекти
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

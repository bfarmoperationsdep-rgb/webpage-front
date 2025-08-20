import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-section__header">
          <h2 className="portfolio-section__title">Наші роботи</h2>
          <p className="portfolio-section__description">
            Переглянути приклади успішно реалізованих проектів
          </p>
        </div>
        
        <div className="portfolio-section__content">
          <p>Портфоліо проектів буде тут...</p>
          <Link to="/portfolio" className="btn btn-primary btn-lg">
            Дивитися всі проекти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

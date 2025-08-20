import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.scss';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-section__header">
          <h2 className="blog-section__title">Останні статті</h2>
          <p className="blog-section__description">
            Корисні поради та інсайти від наших експертів
          </p>
        </div>
        
        <div className="blog-section__content">
          <p>Статті блогу будуть тут...</p>
          <Link to="/blog" className="btn btn-secondary btn-lg">
            Читати більше статей
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

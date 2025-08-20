import React from 'react';
import './Blog.scss';

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-page__header">
          <h1>Блог</h1>
          <p>Останні новини та корисні статті</p>
        </div>
        
        <div className="blog-page__content">
          <p>Статті блогу будуть тут...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

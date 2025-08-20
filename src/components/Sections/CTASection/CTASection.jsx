import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            Готові розпочати свій проект?
          </h2>
          <p className="cta-section__description">
            Зв'яжіться з нами сьогодні і отримайте безкоштовну консультацію 
            від наших експертів. Ми допоможемо втілити ваші ідеї в реальність.
          </p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-rocket"></i>
              Почати проект
            </Link>
            <Link to="/portfolio" className="btn btn-secondary btn-lg">
              <i className="fas fa-eye"></i>
              Переглянути роботи
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

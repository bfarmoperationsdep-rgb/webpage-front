import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CTASection.scss';

const CTASection = () => {
  const features = [
    {
      icon: "fas fa-clock",
      title: "Швидкий старт",
      description: "Розпочнемо роботу протягом 24 годин"
    },
    {
      icon: "fas fa-chart-line",
      title: "Гарантований результат",
      description: "Підвищення продажів до 300% за перші 3 місяці"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Повна безпека",
      description: "100% дотримання вимог Amazon ToS"
    },
    {
      icon: "fas fa-headset",
      title: "24/7 підтримка",
      description: "Завжди на зв'язку для вирішення питань"
    }
  ];

  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-section__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-section__title">
            Готові розпочати свій проект?
          </h2>
          <p className="cta-section__description">
            Зв'яжіться з нами сьогодні і отримайте безкоштовну консультацію 
            від наших експертів. Ми допоможемо втілити ваші ідеї в реальність.
          </p>

          <div className="cta-section__features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cta-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cta-feature__icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="cta-feature__content">
                  <h3 className="cta-feature__title">{feature.title}</h3>
                  <p className="cta-feature__description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="cta-section__actions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              <i className="fas fa-rocket"></i>
              Почати проект
            </Link>
            <Link to="/portfolio" className="btn btn-secondary btn-lg">
              <i className="fas fa-eye"></i>
              Переглянути роботи
            </Link>
          </motion.div>

          <motion.div 
            className="cta-section__contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-option">
              <i className="fas fa-phone"></i>
              <span>+380 (XX) XXX-XX-XX</span>
            </div>
            <div className="contact-option">
              <i className="fas fa-envelope"></i>
              <span>info@bfarm.example.com</span>
            </div>
            <div className="contact-option">
              <i className="fab fa-telegram"></i>
              <span>@bfarm_support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

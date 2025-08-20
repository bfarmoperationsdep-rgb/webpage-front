import React from 'react';
import { motion } from 'framer-motion';
import './StatsSection.scss';

const StatsSection = () => {
  const stats = [
    {
      number: '500+',
      label: 'Реалізованих проектів',
      icon: 'fas fa-project-diagram'
    },
    {
      number: '98%',
      label: 'Задоволених клієнтів',
      icon: 'fas fa-smile'
    },
    {
      number: '50+',
      label: 'Членів команди',
      icon: 'fas fa-users'
    },
    {
      number: '24/7',
      label: 'Технічна підтримка',
      icon: 'fas fa-headset'
    }
  ];

  return (
    <section className="stats">
      <div className="stats__background">
        <div className="stats__overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="stats__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="stats__title">
            Наші досягнення в цифрах
          </h2>
          <p className="stats__description">
            За роки роботи ми накопичили досвід та довіру тисяч клієнтів
          </p>
        </motion.div>

        <div className="stats__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stats__item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stats__icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stats__number">{stat.number}</div>
              <div className="stats__label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

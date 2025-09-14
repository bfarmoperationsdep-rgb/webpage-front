import React from 'react';
import { motion } from 'framer-motion';
import './StatsSection.scss';

const StatsSection = () => {
  const stats = [
    {
      number: '500+',
      label: 'Completed Projects',
      icon: 'fas fa-project-diagram'
    },
    {
      number: '98%',
      label: 'Satisfied Clients',
      icon: 'fas fa-smile'
    },
    {
      number: '50+',
      label: 'Team Members',
      icon: 'fas fa-users'
    },
    {
      number: '24/7',
      label: 'Technical Support',
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
            Our achievements in numbers
          </h2>
          <p className="stats__description">
            Years of experience building trust with thousands of clients
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

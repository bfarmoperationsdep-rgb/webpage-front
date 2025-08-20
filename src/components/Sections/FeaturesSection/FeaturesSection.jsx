import React from 'react';
import { motion } from 'framer-motion';
import './FeaturesSection.scss';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'fas fa-rocket',
      title: 'Швидка розробка',
      description: 'Використовуємо сучасні технології та методології для швидкого створення якісних рішень.',
      color: 'primary'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Адаптивний дизайн',
      description: 'Всі наші рішення ідеально працюють на будь-яких пристроях - від смартфонів до десктопів.',
      color: 'secondary'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Безпека даних',
      description: 'Гарантуємо максимальний рівень захисту ваших даних та інформації клієнтів.',
      color: 'success'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Аналітика та звіти',
      description: 'Надаємо детальну аналітику та звіти для відстеження ефективності вашого бізнесу.',
      color: 'info'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Легке масштабування',
      description: 'Наші рішення легко масштабуються разом із зростанням вашого бізнесу.',
      color: 'warning'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Підтримка',
      description: 'Надаємо цілодобову технічну підтримку та допомогу нашим клієнтам.',
      color: 'primary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="features">
      <div className="container">
        <motion.div 
          className="features__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="features__title">
            Чому обирають нас
          </h2>
          <p className="features__description">
            Ми поєднуємо інноваційні технології з глибоким розумінням потреб бізнесу, 
            щоб створювати рішення, які дійсно працюють.
          </p>
        </motion.div>

        <motion.div 
          className="features__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`features__item features__item--${feature.color}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="features__icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="features__item-title">{feature.title}</h3>
              <p className="features__item-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesSection.scss';

const ServicesSection = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Веб-розробка',
      description: 'Створюємо сучасні веб-сайти та веб-додатки з використанням найновіших технологій.',
      features: ['React/Vue.js', 'Node.js/PHP', 'База даних', 'API інтеграція'],
      price: 'від 15,000 грн',
      popular: false
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Мобільні додатки',
      description: 'Розробляємо нативні та крос-платформні мобільні додатки для iOS та Android.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Push-уведомлення'],
      price: 'від 25,000 грн',
      popular: true
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-commerce',
      description: 'Створюємо потужні інтернет-магазини з повним функціоналом для онлайн-торгівлі.',
      features: ['Каталог товарів', 'Оплата/Доставка', 'Адмін-панель', 'Аналітика'],
      price: 'від 30,000 грн',
      popular: false
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Цифровий маркетинг',
      description: 'Комплексне просування вашого бізнесу в цифровому просторі.',
      features: ['SEO оптимізація', 'Контекстна реклама', 'SMM', 'Email маркетинг'],
      price: 'від 8,000 грн/міс',
      popular: false
    },
    {
      icon: 'fas fa-cloud',
      title: 'Хмарні рішення',
      description: 'Переносимо ваш бізнес у хмару для підвищення ефективності та масштабованості.',
      features: ['AWS/Azure', 'DevOps', 'Автоматизація', 'Моніторинг'],
      price: 'від 20,000 грн',
      popular: false
    },
    {
      icon: 'fas fa-headset',
      title: 'Технічна підтримка',
      description: 'Забезпечуємо безперебійну роботу ваших IT-систем та швидке вирішення проблем.',
      features: ['24/7 моніторинг', 'Оновлення', 'Резервування', 'Консультації'],
      price: 'від 5,000 грн/міс',
      popular: false
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
    <section className="services">
      <div className="container">
        <motion.div 
          className="services__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="services__title">
            Наші послуги
          </h2>
          <p className="services__description">
            Ми надаємо повний спектр IT-послуг для розвитку вашого бізнесу. 
            Від ідеї до реалізації - ми з вами на кожному кроці.
          </p>
        </motion.div>

        <motion.div 
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`services__card ${service.popular ? 'services__card--popular' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {service.popular && (
                <div className="services__badge">
                  <i className="fas fa-star"></i>
                  Популярно
                </div>
              )}
              
              <div className="services__card-header">
                <div className="services__icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </div>

              <div className="services__card-body">
                <ul className="services__features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="services__feature">
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services__card-footer">
                <div className="services__price">{service.price}</div>
                <Link to="/contact" className="btn btn-primary btn-full">
                  Замовити послугу
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services__cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="services__cta-title">
            Не знайшли потрібну послугу?
          </h3>
          <p className="services__cta-description">
            Зв'яжіться з нами, і ми обговоримо індивідуальне рішення для вашого бізнесу
          </p>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            <i className="fas fa-comments"></i>
            Безкоштовна консультація
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

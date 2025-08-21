import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './ClientsSection.scss';

const ClientsSection = () => {
  const { t } = useLanguage();
  
  const clients = [
    { name: 'GROOVE LIFE', logo: '🔗' },
    { name: 'MONIN', logo: '🥤' },
    { name: 'NATIVE', logo: '🧴' },
    { name: 'SMARTY PANTS', logo: '💊' },
    { name: 'BOOM!', logo: '💥' },
    { name: 'crumbl', logo: '🍪' },
    { name: 'FIXD', logo: '🔧' },
    { name: 'RAINDROP', logo: '💧' },
    { name: 'Buffy', logo: '🛏️' },
    { name: 'TRUVANI', logo: '🌱' },
    { name: 'organifi', logo: '🌿' },
    { name: 'NAVAGE', logo: '💨' }
  ];

  return (
    <section className="clients">
      <div className="container">
        <motion.div 
          className="clients__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="clients__title">
            {t('clients.title')}
          </h2>
          
          <p className="clients__subtitle">
            {t('clients.subtitle')}
          </p>
          
          <div className="clients__grid">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className="clients__item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="clients__logo">
                  {client.logo}
                </div>
                <span className="clients__name">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
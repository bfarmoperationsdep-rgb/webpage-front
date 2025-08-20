import React from 'react';
import { motion } from 'framer-motion';
import './ClientsSection.scss';

const ClientsSection = () => {
  const clients = [
    { name: 'Microsoft', logo: '🏢' },
    { name: 'Google', logo: '🔍' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Meta', logo: '👥' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Spotify', logo: '🎵' },
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
            Нам довіряють провідні компанії
          </h2>
          
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

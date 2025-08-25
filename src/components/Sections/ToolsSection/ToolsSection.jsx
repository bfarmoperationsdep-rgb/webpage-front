import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import './ToolsSection.scss';

const ToolsSection = () => {
  const { t } = useLanguage();

  const tools = [
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Seller Central', icon: '📊', color: '#FF9900' },
    { name: 'Brand Registry', icon: '🏷️', color: '#FFB84D' },
    { name: 'DSP', icon: '🎯', color: '#FF6B6B' },
    { name: 'Analytics', icon: '📈', color: '#4ECDC4' },
    { name: 'Amazon', icon: '📦', color: '#FF9900' },
    { name: 'Helium 10', icon: '🔍', color: '#00D4FF' },
    { name: 'Jungle Scout', icon: '🌿', color: '#00C851' },
    { name: 'Keepa', icon: '📉', color: '#FB3958' },
    { name: 'Cerebro', icon: '🧠', color: '#9C27B0' },
    { name: 'PPC Entourage', icon: '💼', color: '#FF5722' },
    { name: 'DataDive', icon: '🏊', color: '#2196F3' }
  ];

  // Дублюємо масив для безперервної прокрутки
  const extendedTools = [...tools, ...tools];

  return (
    <section className="tools">
      <div className="container">
        <motion.div 
          className="tools__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="tools__title">
            Працюємо з провідними інструментами індустрії
          </h2>
        </motion.div>

        <div className="tools__carousel-container">
          <div className="tools__carousel">
            <motion.div 
              className="tools__track"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {extendedTools.map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  className="tools__item"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="tools__item-icon" style={{ backgroundColor: tool.color }}>
                    <span>{tool.icon}</span>
                  </div>
                  <span className="tools__item-name">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Градієнтні краї для плавного зникнення */}
        <div className="tools__fade-left"></div>
        <div className="tools__fade-right"></div>
      </div>
    </section>
  );
};

export default ToolsSection;

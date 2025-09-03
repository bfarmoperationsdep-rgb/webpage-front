import React from 'react';
import { motion } from 'framer-motion';
import './TeamSection.scss';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Олександр Іваненко",
      position: "CEO & Amazon Expert",
      description: "10+ років досвіду в e-commerce та Amazon маркетингу. Експерт з PPC та оптимізації листингів.",
      image: "placeholder-avatar.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:alex@example.com"
      }
    },
    {
      id: 2,
      name: "Марія Коваленко",
      position: "Lead SEO Specialist",
      description: "Спеціаліст з органічного просування на Amazon. Експерт з оптимізації контенту та аналітики.",
      image: "placeholder-avatar.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:maria@example.com"
      }
    },
    {
      id: 3,
      name: "Дмитро Петренко",
      position: "PPC Manager",
      description: "Профі в Amazon PPC кампаніях. Спеціалізується на DSP та Sponsored Products оптимізації.",
      image: "placeholder-avatar.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:dmytro@example.com"
      }
    },
    {
      id: 4,
      name: "Анна Сидоренко",
      position: "Brand Specialist",
      description: "Експерт з брендингу та Brand Registry. Допомагає створювати сильні бренди на Amazon.",
      image: "placeholder-avatar.jpg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:anna@example.com"
      }
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <motion.div 
          className="team-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="team-section__title">Наша команда</h2>
          <p className="team-section__description">
            Знайомтеся з професіоналами, які створюють ваші проекти
          </p>
        </motion.div>
        
        <div className="team-section__grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="team-card__image">
                <div className="placeholder-avatar"></div>
                <div className="team-card__overlay">
                  <div className="team-card__social">
                    <a href={member.socialLinks.linkedin} className="social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={member.socialLinks.twitter} className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={member.socialLinks.email} className="social-link">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__position">{member.position}</span>
                <p className="team-card__description">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import React from 'react';
import './TeamSection.scss';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-section__header">
          <h2 className="team-section__title">Наша команда</h2>
          <p className="team-section__description">
            Знайомтеся з професіоналами, які створюють ваші проекти
          </p>
        </div>
        
        <div className="team-section__content">
          <p>Інформація про команду буде тут...</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

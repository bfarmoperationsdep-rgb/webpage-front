import React from 'react';
import HeroSection from '../../components/Sections/HeroSection/HeroSection';
import TrustedBySection from '../../components/Sections/TrustedBySection/TrustedBySection';
import ConsultationCTA from '../../components/Sections/ConsultationCTA/ConsultationCTA';
import WhyBFarmSection from '../../components/Sections/WhyBFarmSection/WhyBFarmSection';
import ServicesSection from '../../components/Sections/ServicesSection/ServicesSection';
import StatsSection from '../../components/Sections/StatsSection/StatsSection';
import TestimonialsSection from '../../components/Sections/TestimonialsSection/TestimonialsSection';
import PortfolioSection from '../../components/Sections/PortfolioSection/PortfolioSection';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TrustedBySection />
      <ConsultationCTA />
      <WhyBFarmSection />
      <ServicesSection />
      <ConsultationCTA />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;

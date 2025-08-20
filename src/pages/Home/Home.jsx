import React from 'react';
import HeroSection from '../../components/Sections/HeroSection/HeroSection';
import FeaturesSection from '../../components/Sections/FeaturesSection/FeaturesSection';
import ServicesSection from '../../components/Sections/ServicesSection/ServicesSection';
import StatsSection from '../../components/Sections/StatsSection/StatsSection';
import TestimonialsSection from '../../components/Sections/TestimonialsSection/TestimonialsSection';
import PortfolioSection from '../../components/Sections/PortfolioSection/PortfolioSection';
import TeamSection from '../../components/Sections/TeamSection/TeamSection';
import BlogSection from '../../components/Sections/BlogSection/BlogSection';
import CTASection from '../../components/Sections/CTASection/CTASection';
import ClientsSection from '../../components/Sections/ClientsSection/ClientsSection';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default Home;

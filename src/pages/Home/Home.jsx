import React from 'react';
import HeroSection from '../../components/Sections/HeroSection/HeroSection';
import ToolsSection from '../../components/Sections/ToolsSection/ToolsSection';
import WhyBFarmSection from '../../components/Sections/WhyBFarmSection/WhyBFarmSection';
import ServicesSection from '../../components/Sections/ServicesSection/ServicesSection';
import StatsSection from '../../components/Sections/StatsSection/StatsSection';
import TestimonialsSection from '../../components/Sections/TestimonialsSection/TestimonialsSection';
import PortfolioSection from '../../components/Sections/PortfolioSection/PortfolioSection';
import TeamSection from '../../components/Sections/TeamSection/TeamSection';
import BlogSection from '../../components/Sections/BlogSection/BlogSection';
import CTASection from '../../components/Sections/CTASection/CTASection';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ToolsSection />
      <WhyBFarmSection />
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

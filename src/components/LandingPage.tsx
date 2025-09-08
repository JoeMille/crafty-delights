import React from 'react';
import HeroSection from './HeroSection';
import Carousel from './Carousel';
import AboutSection from './AboutSection';
import FeaturedProducts from './FeaturedProducts';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-flow">
      <HeroSection />
      <Carousel />
      <AboutSection />
      <FeaturedProducts />
    </div>
  );
};

export default LandingPage;
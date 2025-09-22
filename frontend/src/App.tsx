import React from 'react';
import ModernNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ModernNavbar />
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default App;
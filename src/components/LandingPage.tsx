import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <section className="hero-section-react">
        <h1>Welcome to Crafty Delights</h1>
        <p>Discover unique handmade treasures and artistic creations</p>
        <button className="cta-button">Shop Now</button>
      </section>
      
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Handmade Pottery</h3>
            <p>Beautiful ceramic pieces</p>
          </div>
          <div className="product-card">
            <h3>Artisan Jewelry</h3>
            <p>Unique handcrafted jewelry</p>
          </div>
          <div className="product-card">
            <h3>Custom Art</h3>
            <p>Personalized artwork</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
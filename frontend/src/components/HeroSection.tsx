import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient text-white section-padding" style={{ marginTop: '76px' }}>
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6}>
            <h1 className="display-3 fw-bold mb-4">
              Handcrafted Treasures for Your Home
            </h1>
            <p className="lead mb-4 fs-5">
              Discover unique, artisanal creations that blend traditional craftsmanship 
              with modern aesthetics. Each piece tells a story of passion and creativity.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                variant="light" 
                size="lg" 
                className="btn-modern"
                href="/shop"
              >
                Explore Collection
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="btn-modern"
                href="/gallery"
              >
                View Gallery
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div 
              className="rounded-circle mx-auto"
              style={{
                width: '400px',
                height: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="display-4">🎨</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
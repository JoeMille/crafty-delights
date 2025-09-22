import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-3">Crafty Delights</h5>
            <p className="text-muted">
              Bringing you the finest handcrafted items with passion and creativity.
            </p>
          </Col>
          
          <Col lg={2} className="mb-4">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li><a href="/shop" className="text-muted text-decoration-none">All Products</a></li>
              <li><a href="/shop/pottery" className="text-muted text-decoration-none">Pottery</a></li>
              <li><a href="/shop/jewelry" className="text-muted text-decoration-none">Jewelry</a></li>
              <li><a href="/shop/textiles" className="text-muted text-decoration-none">Textiles</a></li>
            </ul>
          </Col>
          
          <Col lg={2} className="mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/gallery" className="text-muted text-decoration-none">Gallery</a></li>
              <li><a href="/blog" className="text-muted text-decoration-none">Blog</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col lg={4} className="mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <p className="text-muted mb-1">📧 hello@craftydelights.com</p>
            <p className="text-muted mb-1">📞 (555) 123-4567</p>
            <p className="text-muted">📍 123 Artisan Way, Craft City</p>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              © {currentYear} Crafty Delights. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
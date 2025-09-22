import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const ModernNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" className="navbar-modern fixed-top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-3">
          <span style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Crafty Delights
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fw-medium mx-2">Home</Nav.Link>
            <Nav.Link href="/shop" className="fw-medium mx-2">Shop</Nav.Link>
            <Nav.Link href="/gallery" className="fw-medium mx-2">Gallery</Nav.Link>
            <Nav.Link href="/blog" className="fw-medium mx-2">Blog</Nav.Link>
            <Nav.Link href="/contact" className="fw-medium mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModernNavbar;
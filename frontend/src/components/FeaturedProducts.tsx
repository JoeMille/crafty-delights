import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description?: string;
  price?: number;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/shop/featured');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback data for demo
        setProducts([
          { id: 1, name: 'Handwoven Basket', description: 'Beautiful natural fiber basket' },
          { id: 2, name: 'Ceramic Vase', description: 'Hand-glazed decorative vase' },
          { id: 3, name: 'Artisan Jewelry', description: 'Unique handcrafted pieces' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="section-padding">
        <Container>
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
            <p className="lead text-muted">
              Discover our most popular handcrafted items
            </p>
          </Col>
        </Row>
        
        <Row>
          {products.map((product) => (
            <Col lg={4} md={6} className="mb-4" key={product.id}>
              <Card className="card-modern h-100">
                <div 
                  className="card-img-top"
                  style={{
                    height: '250px',
                    background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '4rem' }}>🎨</span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h4 mb-3">{product.name}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {product.description || 'Beautiful handcrafted item'}
                  </Card.Text>
                  <div className="mt-auto">
                    {product.price && (
                      <div className="h5 text-primary mb-3">${product.price}</div>
                    )}
                    <Button variant="primary" className="btn-modern w-100">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
"use client";

import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react'; // Importing useState for search functionality

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // UPDATED PRODUCT LIST WITH NEW SLUGS, TITLES, AND TAGS
  const products = [
    { 
      id: 1, 
      slug: "m-fold-virgin", 
      title: "M-Fold Tissue (Virgin)", 
      tags: "m fold, hand towel, virgin, soft, 27x27, 30x30",
      img: "/Product1.png", 
      overlayColor: "#00A389", 
      subProducts: ["Virgin Soft", "27x27", "30x30", "2-Ply"] 
    },
    { 
      id: 2, 
      slug: "m-fold-recycled", 
      title: "M-Fold Tissue (Recycled)", 
      tags: "m fold, recycled, soft, 29x29, 33x33",
      img: "/Product2.png", 
      overlayColor: "#CC9900", 
      subProducts: ["Recycled Soft", "29x29", "33x33", "Cost-Effective"] 
    },
    { 
      id: 3, 
      slug: "pop-up-tissue", 
      title: "Pop Up Tissue", 
      tags: "pop up, facial, virgin, soft, 20x10, 27x27",
      img: "Product3.png", 
      overlayColor: "#00BCD4", 
      subProducts: ["Virgin Soft", "Inter-Folded", "20x10", "27x27"] 
    },
    { 
      id: 4, 
      slug: "toilet-roll", 
      title: "Toilet Roll", 
      tags: "toilet, roll, bathroom, washroom, virgin",
      img: "/Product4.png", 
      overlayColor: "#00A389", 
      subProducts: ["Virgin Soft", "Septic Safe", "3-Ply"] 
    },
    { 
      id: 5, 
      slug: "box-tissues", 
      title: "Box Tissues", 
      tags: "box, facial, virgin, soft, 20x20",
      img: "/Product5.png", 
      overlayColor: "#00BCD4", 
      subProducts: ["Virgin Soft", "20x20", "Hypoallergenic"] 
    },
    { 
      id: 6, 
      slug: "pocket-tissues", 
      title: "Pocket Tissues", 
      tags: "pocket, portable, travel, facial, virgin",
      img: "/Product6.png", 
      overlayColor: "#00BCD4", 
      subProducts: ["Virgin Soft", "3-Ply", "Portable"] 
    },
    { 
      id: 7, 
      slug: "kitchen-towels", 
      title: "Kitchen Towels", 
      tags: "kitchen, recycled, soft, 36x36, 40x40",
      img: "/Product7.png", 
      overlayColor: "#FFC107", 
      subProducts: ["Recycled Soft", "40x40", "High Absorbency"] 
    },
    { 
      id: 8, 
      slug: "paper-towels", 
      title: "Paper Towels (Industrial)", 
      tags: "paper towel, hard, industrial, recycled, 33x33, 36x36",
      img: "/Product8.png", 
      overlayColor: "#CC9900", 
      subProducts: ["Recycled Hard", "High Wet Strength", "C-Fold/Interfold"] 
    },
    { 
      id: 9, 
      slug: "wet-wipes", 
      title: "Wet Tissues (Wipes)", 
      tags: "wet, wipes, non-woven, disinfectant, baby",
      img: "/Product9.png", 
      overlayColor: "#4CAF50", 
      subProducts: ["Non-Woven", "Disinfectant", "Baby Safe"] 
    },
  ];

  // Logic to filter products based on search term
  const filteredProducts = products.filter(product => {
    const term = searchTerm.toLowerCase();
    return (
      product.title.toLowerCase().includes(term) ||
      product.tags.toLowerCase().includes(term)
    );
  });

  return (
    <section className="bg-light min-vh-100">
      
      {/* 1. DYNAMIC HERO HEADER */}
      <div className="product-hero-header py-5 mb-4 shadow-sm">
        <Container data-aos="fade-down">
          <h1 className="fw-bold display-5 text-white">The Shree Enterprise Catalog</h1>
          <p className="lead text-white-50">
            Explore our range of hygienic, quality paper products. Click any category for technical specifications and bulk ordering.
          </p>
        </Container>
      </div>

      <Container>
        {/* 2. SEARCH AND FILTER BAR */}
        <Row className="justify-content-center mb-5" data-aos="fade-up" data-aos-delay="100">
          <Col lg={8}>
            <InputGroup size="lg" className="shadow-sm rounded-pill overflow-hidden">
              <InputGroup.Text id="search-icon" className="bg-white border-0 ps-4">
                🔍
              </InputGroup.Text>
              <Form.Control
                placeholder="Search products "
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-0 py-3 pe-4"
              />
            </InputGroup>
          </Col>
        </Row>
        
        {/* 3. PRODUCT GRID */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark" data-aos="fade-up">Available Categories ({filteredProducts.length})</h2>
        </div>

        <Row className="mb-5">
          {filteredProducts.map((product, index) => (
            <Col md={4} className="mb-4" key={product.id} data-aos="zoom-in" data-aos-delay={index * 100}>
              
              <Link href={`/products/${product.slug}`} className="text-decoration-none">
                
                <div className="product-card-wrapper">
                  <Card className="border-0 shadow-lg h-100 overflow-hidden product-card">
                    
                    <Card.Img 
                      variant="top" 
                      src={product.img} 
                      className="product-img" 
                    />
                    
                    <Card.Footer className="bg-white text-center py-3 border-0">
                      <h5 className="fw-bold mb-0 text-dark">{product.title}</h5>
                    </Card.Footer>

                    {/* Hover Overlay - Color is now dynamic and more vivid */}
                    <div className="product-overlay" style={{ backgroundColor: product.overlayColor }}>
                      <div className="text-center text-white px-3">
                        <h4 className="fw-bold mb-3 border-bottom border-white pb-2 d-inline-block">
                          {product.title}
                        </h4>
                        <ul className="list-unstyled mt-3 text-start">
                          {product.subProducts.map((item, subIndex) => (
                            <li key={subIndex} className="mb-1 fs-6 text-white">• {item}</li>
                          ))}
                        </ul>
                        <span className="btn btn-light btn-sm mt-3 rounded-pill px-4 fw-bold text-dark">View Details</span>
                      </div>
                    </div>

                  </Card>
                </div>

              </Link>
            </Col>
          ))}
          
          {/* Show message if no products match */}
          {filteredProducts.length === 0 && (
            <Col xs={12} className="text-center py-5">
                <h3 className="text-muted">No products found matching "{searchTerm}"</h3>
                <p className="text-secondary">Please try a different search term or browse our categories above.</p>
            </Col>
          )}

        </Row>
      </Container>

      {/* Internal CSS for the Attractive Look */}
      <style jsx global>{`
        /* 1. Hero Header Styling - Uses Teal variables */
        .product-hero-header {
            background-color: var(--primary-blue);
            background-image: linear-gradient(180deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
            border-bottom: 5px solid var(--accent-blue);
        }

        /* 2. Card Wrapper Setup */
        .product-card-wrapper {
          position: relative;
          cursor: pointer;
          height: 100%;
        }
        .product-card {
           transform: perspective(1000px); /* Enable 3D transform */
           transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 0.6s ease;
        }

        /* 3. Card 3D Hover Effect */
        .product-card-wrapper:hover .product-card {
          transform: perspective(1000px) translateY(-5px) rotateX(2deg); /* Lift and slight tilt */
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
        }

        /* 4. Image Transition */
        .product-img {
          height: 300px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card-wrapper:hover .product-img {
          transform: scale(1.05);
        }

        /* 5. Overlay Styling (Color is now dynamic via inline style) */
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0; 
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.8); /* Fallback opacity */
          padding: 1rem;
        }

        /* 6. Show Overlay on Hover */
        .product-card-wrapper:hover .product-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
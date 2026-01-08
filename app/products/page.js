"use client";

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Nav } from 'react-bootstrap';

const products = [
  {
    id: 1,
    slug: "m-fold-virgin",
    category: "M-Fold",
    name: "M-Fold Tissue (Virgin)",
    description: "Premium 100% Virgin pulp hand towels. High absorbency and clinical softness.",
    specs: ["Virgin Soft", "27x27 / 30x30", "2-Ply Construction"],
    image: "/Product1.png",
    tag: "Best Seller"
  },
  {
    id: 2,
    slug: "m-fold-recycled",
    category: "M-Fold",
    name: "M-Fold Tissue (Recycled)",
    description: "Eco-friendly, sustainable hand towels designed for high-traffic commercial areas.",
    specs: ["Recycled Soft", "29x29 / 33x33", "Cost-Effective"],
    image: "/Product2.png",
    tag: "Eco-Friendly"
  },
  {
    id: 3,
    slug: "pop-up-tissue",
    category: "Facial",
    name: "Pop Up Tissue",
    description: "Convenient pop-up dispenser pack. Ideal for offices, hospitals, and cars.",
    specs: ["Virgin Soft", "Inter-Folded", "20x10 / 27x27"],
    image: "/Product3.png",
    tag: "Clinical"
  },
  {
    id: 4,
    slug: "toilet-roll",
    category: "Rolls",
    name: "Toilet Roll",
    description: "Ultra-soft tissue with core-stabilized technology for hospitality and home use.",
    specs: ["Virgin Soft", "Septic Safe", "3-Ply Premium"],
    image: "/Product4.png",
    tag: "Hospitality"
  },
  {
    id: 5,
    slug: "box-tissues",
    category: "Facial",
    name: "Box Tissues",
    description: "Premium facial tissues in a protective box. Hypoallergenic and ultra-soft.",
    specs: ["Virgin Soft", "20x20 Size", "Hypoallergenic"],
    image: "/Product5.png",
    tag: "Premium"
  },
  {
    id: 6,
    slug: "pocket-tissues",
    category: "Facial",
    name: "Pocket Tissues",
    description: "On-the-go hygiene. Compact packs that fit easily in pockets or travel bags.",
    specs: ["Virgin Soft", "3-Ply Strength", "Portable Packs"],
    image: "/Product6.png",
    tag: "Travel"
  },
  {
    id: 7,
    slug: "kitchen-towels",
    category: "Kitchen",
    name: "Kitchen Towels",
    description: "Heavy-duty towels designed to absorb oil and water instantly in kitchens.",
    specs: ["Recycled Soft", "40x40 Size", "High Absorbency"],
    image: "/Product7.png",
    tag: "Absorbent"
  },
  {
    id: 8,
    slug: "paper-towels",
    category: "Industrial",
    name: "Paper Towels (Industrial)",
    description: "Hard-wearing industrial towels with high wet strength for heavy usage.",
    specs: ["Recycled Hard", "High Wet Strength", "C-Fold / Interfold"],
    image: "/Product8.png",
    tag: "Industrial"
  },
  {
    id: 9,
    slug: "wet-wipes",
    category: "Medical",
    name: "Wet Tissues (Wipes)",
    description: "Clinical grade non-woven disinfectant wipes for healthcare and personal use.",
    specs: ["Non-Woven Fabric", "Disinfectant Solution", "Baby & Skin Safe"],
    image: "/Product9.png",
    tag: "New Launch"
  }
];

const categories = ["All", "M-Fold", "Rolls", "Facial", "Kitchen", "Industrial", "Medical"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main className="bg-white min-vh-100 pb-5" suppressHydrationWarning>
      {/* 1. HEADER SECTION */}
      <section className="py-5 bg-light border-bottom">
        <Container className="text-center" data-aos="fade-down">
          <Badge bg="primary" className="mb-2 px-3 py-2 bg-teal">Digital Catalogue</Badge>
          <h1 className="display-4 fw-bold text-navy mb-3">Hygiene Without Compromise</h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '750px' }}>
            Explore our range of premium tissue solutions manufactured with German automated precision 
            in Mahisagar, Gujarat.
          </p>
        </Container>
      </section>

      {/* 2. STEADY (STICKY) FILTER NAVIGATION */}
      <div 
        className="bg-white border-bottom shadow-sm py-3 sticky-nav-wrapper" 
        style={{ 
          position: 'sticky',
          top: '0px', 
          zIndex: 1020, 
          backgroundColor: '#ffffff'
        }}
      >
        <Container>
          <Nav 
            variant="pills" 
            className="justify-content-center gap-2 overflow-auto flex-nowrap pb-1 category-nav-container"
          >
            {categories.map(cat => (
              <Nav.Item key={cat}>
                <Nav.Link 
                  active={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-pill px-4 fw-bold text-nowrap transition-all ${
                    filter === cat ? 'bg-teal shadow' : 'text-navy hover-bg-light'
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  {cat}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </div>

      {/* 3. PRODUCT GRID */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {filteredProducts.map((product) => (
              <Col lg={4} md={6} key={product.id} data-aos="fade-up">
                <Card className="h-100 border-0 shadow-sm product-card overflow-hidden rounded-4">
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="card-img-top product-zoom-img"
                      style={{ height: '300px', objectFit: 'cover' }}
                      onError={(e) => { e.currentTarget.src = `https://placehold.co/600x600/1E3140/ffffff?text=${product.name}`; }}
                    />
                    <Badge className="position-absolute top-0 end-0 m-3 bg-teal shadow-sm">
                      {product.tag}
                    </Badge>
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="flex-grow-1 text-start">
                      <small className="text-teal fw-bold text-uppercase tracking-widest">{product.category}</small>
                      <h4 className="fw-bold text-navy mt-1 mb-3">{product.name}</h4>
                      <p className="text-muted small mb-4">{product.description}</p>
                      
                      <div className="bg-light p-3 rounded-3 mb-4">
                        <h6 className="small fw-bold text-navy mb-2 uppercase tracking-wide">Technical Specs:</h6>
                        <ul className="list-unstyled mb-0 small text-secondary">
                          {product.specs.map((spec, i) => (
                            <li key={i} className="mb-1 d-flex align-items-center">
                              <span className="text-teal me-2">✓</span> {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button 
                      href={`/products/${product.slug}`}
                      className="btn-teal w-100 rounded-pill fw-bold py-2 mt-auto text-decoration-none shadow-sm"
                    >
                      View Full Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <h3 className="text-muted">No products found in this category.</h3>
              <Button variant="outline-primary" onClick={() => setFilter("All")} className="mt-3 rounded-pill px-4">See All Products</Button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-5">
        <Container>
          <div className="bg-navy text-white rounded-5 p-5 text-center shadow-lg" data-aos="zoom-in">
            <h2 className="fw-bold mb-3 display-6">Looking for Custom Branding?</h2>
            <p className="lead opacity-75 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
              We offer private labeling and custom size manufacturing for hotels, hospitals, and retail chains. Get direct factory pricing today.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button variant="outline-light" className="rounded-pill px-5 py-2 fw-bold border-2" href="/contact">Get a Quote</Button>
              <Button variant="light" className="text-navy rounded-pill px-5 py-2 fw-bold" href="https://wa.me/918160675257">WhatsApp Us</Button>
            </div>
          </div>
        </Container>
      </section>

      <style jsx global>{`
        .bg-teal { background-color: #00A389 !important; }
        .text-teal { color: #00A389 !important; }
        .text-navy { color: #1E3140 !important; }
        .bg-navy { background-color: #1E3140 !important; }
        
        .btn-teal {
          background-color: #00A389;
          border: none;
          color: white;
          transition: all 0.3s ease;
        }
        .btn-teal:hover {
          background-color: #008f77;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 163, 137, 0.3);
          color: white;
        }

        .hover-bg-light:hover {
          background-color: #f8f9fa;
        }

        .product-card {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }

        .product-zoom-img {
          transition: transform 0.6s ease;
        }
        .product-card:hover .product-zoom-img {
          transform: scale(1.08);
        }

        .nav-link.active {
          box-shadow: 0 4px 12px rgba(0, 163, 137, 0.3);
        }

        .category-nav-container::-webkit-scrollbar {
          height: 0px;
          display: none;
        }
        
        .tracking-widest { letter-spacing: 0.1em; }
        .tracking-wide { letter-spacing: 0.05em; }
        .text-nowrap { white-space: nowrap; }
        .transition-all { transition: all 0.2s ease-in-out; }

        .sticky-nav-wrapper {
            transition: top 0.3s;
        }
      `}</style>
    </main>
  );
}
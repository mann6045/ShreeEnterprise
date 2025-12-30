"use client";

import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <main>
      {/* 1. HERO CAROUSEL - Refined Liquid Glass with Dark Text */}
      <section className="p-0">
        <Carousel fade interval={4000} controls={true} indicators={true}>
          
          {/* Slide 1 - Factory Focus */}
          <Carousel.Item style={{ height: '650px' }}>
            <div 
              className="d-block w-100 h-100 hero-image-bg" 
              style={{ backgroundImage: 'url("/Main1.png")' }}
            ></div>
            <Carousel.Caption className="hero-caption-centered hero-liquid-glass p-5 rounded-4 carousel-caption-float">
              <span className="badge-teal-soft mb-3 px-3 py-2 text-uppercase tracking-widest">Manufacturing Excellence</span>
              <h1 className="display-3 fw-bold text-navy">State-of-the-Art Production</h1>
              <p className="fs-4 text-navy opacity-90 fw-medium">Producing 50 tons of premium tissue daily with German automated precision.</p>
              <div className="mt-4">
                 <a href="/products" className="btn btn-teal btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm me-3 text-decoration-none">Our Products</a>
                 <a href="/contact" className="btn btn-outline-navy btn-lg px-5 py-3 rounded-pill fw-bold text-decoration-none">Get Quote</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 - Softness/Quality Focus */}
          <Carousel.Item style={{ height: '650px' }}>
            <div 
              className="d-block w-100 h-100 hero-image-bg" 
              style={{ backgroundImage: 'url("/Main2.jpeg")' }}
            ></div>
            <Carousel.Caption className="hero-caption-centered hero-liquid-glass p-5 rounded-4 carousel-caption-float">
              <span className="badge-teal-soft mb-3 px-3 py-2 text-uppercase tracking-widest">Premium Quality</span>
              <h1 className="display-3 fw-bold text-navy">Unmatched Softness</h1>
              <p className="fs-4 text-navy opacity-90 fw-medium">Our 3-ply technology ensures maximum comfort and superior absorbency.</p>
              <div className="mt-4">
                 <a href="/products" className="btn btn-teal btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm text-decoration-none">View Catalog</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 - Global Export Focus */}
          <Carousel.Item style={{ height: '650px' }}>
            <div 
              className="d-block w-100 h-100 hero-image-bg" 
              style={{ backgroundImage: 'url("https://placehold.co/1920x650/1E3140/ffffff?text=Global+Supply+Chain")' }}
            ></div>
            <Carousel.Caption className="hero-caption-centered hero-liquid-glass p-5 rounded-4 carousel-caption-float">
              <span className="badge-teal-soft mb-3 px-3 py-2 text-uppercase tracking-widest">Global Logistics</span>
              <h1 className="display-3 fw-bold text-navy">Global Reach</h1>
              <p className="fs-4 text-navy opacity-90 fw-medium">Trusted hygiene solutions exported to over 20 countries worldwide.</p>
              <div className="mt-4">
                 <a href="/contact" className="btn btn-teal btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm text-decoration-none">Partner With Us</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>

      {/* 2. STATS BAR */}
      <div className="bg-navy py-4 border-bottom border-secondary">
        <Container>
          <Row className="text-center text-white">
            <Col md={3} xs={6} className="border-end border-secondary border-opacity-25 py-2">
              <h3 className="fw-bold mb-0">50T</h3>
              <small className="text-uppercase tracking-widest opacity-75">Daily Capacity</small>
            </Col>
            <Col md={3} xs={6} className="border-end border-secondary border-opacity-25 py-2">
              <h3 className="fw-bold mb-0">20+</h3>
              <small className="text-uppercase tracking-widest opacity-75">Export Markets</small>
            </Col>
            <Col md={3} xs={6} className="border-end border-secondary border-opacity-25 py-2">
              <h3 className="fw-bold mb-0">ISO</h3>
              <small className="text-uppercase tracking-widest opacity-75">Certified Quality</small>
            </Col>
            <Col md={3} xs={6} className="py-2">
              <h3 className="fw-bold mb-0">100%</h3>
              <small className="text-uppercase tracking-widest opacity-75">Virgin Pulp</small>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. WELCOME / ABOUT SECTION */}
      <section className="py-5 text-center bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="fw-bold text-navy mb-3">Welcome to Shree Enterprise</h2>
              <div className="underline-teal mx-auto mb-4"></div>
              <p className="lead text-secondary mb-4">
                Based in Mahisagar, Gujarat, we are a leading manufacturer of hygiene products, dedicated to quality, innovation, and sustainability. 
              </p>
              <a href="/about" className="btn btn-outline-navy px-5 py-2 rounded-pill fw-bold text-decoration-none">
                Our Full Story
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. FEATURE HIGHLIGHTS */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow rounded-4">
                 <div className="display-4 text-teal mb-3">🌱</div>
                 <h4 className="fw-bold text-navy">Eco-Friendly</h4>
                 <p className="text-muted">Sustainable sourcing and zero-waste production cycles.</p>
               </Card>
            </Col>
            <Col md={4} className="mb-4">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow rounded-4">
                 <div className="display-4 text-teal mb-3">⚙️</div>
                 <h4 className="fw-bold text-navy">Advanced Tech</h4>
                 <p className="text-muted">German-engineered automated cutting and embossing lines.</p>
               </Card>
            </Col>
            <Col md={4} className="mb-4">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow rounded-4">
                 <div className="display-4 text-teal mb-3">🌍</div>
                 <h4 className="fw-bold text-navy">Global Export</h4>
                 <p className="text-muted">Direct factory export logistics to global ports.</p>
               </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. "WHY THIS BRAND?" */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <img 
                src="/why.jpg" 
                alt="Quality Check" 
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: 'cover', height: '500px' }}
              />
            </Col>
            <Col lg={7} className="ps-lg-5">
              <h5 className="text-teal fw-bold text-uppercase tracking-widest small">Our Promise</h5>
              <h2 className="fw-bold display-6 mb-4 text-navy">Why Choose Shree Enterprise?</h2>
              
              <div className="mb-4">
                <h4 className="fw-bold h5 text-navy">❓ Is the quality consistent?</h4>
                <p className="text-muted">
                  Yes. Our automated facility ensures that every roll and sheet meets the exact same specifications.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold h5 text-navy">❓ Can we handle bulk requirements?</h4>
                <p className="text-muted">
                  With a 50,000 sqft warehouse and 50-ton daily output, we are built for high-volume B2B distribution.
                </p>
              </div>

              <a href="/contact" className="btn btn-teal px-5 py-2 rounded-pill fw-bold shadow-sm text-decoration-none">
                Start Bulk Inquiry
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx global>{`
        :root {
          --teal: #00A389;
          --navy: #1E3140;
          --glass-light: rgba(255, 255, 255, 0.45);
        }

        .text-teal { color: var(--teal) !important; }
        .bg-teal { background-color: var(--teal) !important; }
        .text-navy { color: var(--navy) !important; }
        .bg-navy { background-color: var(--navy) !important; }

        .btn-teal { background-color: var(--teal); border: none; color: white; transition: all 0.3s; }
        .btn-teal:hover { background-color: #008f77; color: white; transform: translateY(-2px); }
        
        .btn-outline-navy { color: var(--navy); border: 2px solid var(--navy); transition: all 0.3s; }
        .btn-outline-navy:hover { background-color: var(--navy); color: white; transform: translateY(-2px); }

        .hero-image-bg {
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .hero-caption-centered {
          bottom: 50% !important;
          transform: translateY(50%);
          max-width: 850px;
          margin: 0 auto;
          left: 0;
          right: 0;
          z-index: 10;
        }

        /* REFINED: Liquid Glass with Light Tint for Dark Text */
        .hero-liquid-glass {
          background: var(--glass-light) !important;
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .badge-teal-soft {
          background: rgba(0, 163, 137, 0.15);
          color: var(--teal);
          border: 1px solid rgba(0, 163, 137, 0.3);
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.75rem;
        }

        .underline-teal {
          width: 60px;
          height: 4px;
          background: var(--teal);
          border-radius: 2px;
        }

        .hover-shadow {
           transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }

        @keyframes float {
          0% { transform: translatey(50%); }
          50% { transform: translatey(48%); }
          100% { transform: translatey(50%); }
        }

        .carousel-caption-float {
            animation: float 4s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-caption-centered {
            padding: 2rem !important;
            width: 90%;
          }
          .display-3 { font-size: 1.8rem; }
          .fs-4 { font-size: 1.1rem !important; }
        }
      `}</style>
    </main>
  );
}
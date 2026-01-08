"use client";

import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="overflow-hidden bg-white" suppressHydrationWarning>
      
      {/* 1. HERO CAROUSEL - Full Slide Photos with Liquid Glass Text Panels */}
      <section className="p-0">
        <Carousel fade interval={5000} controls={true} indicators={true} className="full-slide-carousel">
          
          {/* Slide 1 - Factory Focus */}
          <Carousel.Item className="hero-vh-item">
            <div className="hero-bg-image" style={{ backgroundImage: 'url("/Main1.png")' }}></div>
            <div className="hero-overlay-dark"></div>
            <Carousel.Caption className="hero-caption-content">
              <Container>
                <Row>
                  <Col lg={7} md={10} className="text-start">
                    <div className="liquid-glass-card p-4 p-md-5" data-aos="fade-right">
                      <span className="badge-teal-glass mb-3 px-3 py-2 text-uppercase tracking-widest">Manufacturing Excellence</span>
                      <h1 className="display-3 fw-bold text-white mb-3">State-of-the-Art <span className="text-teal-bright">Production</span></h1>
                      <p className="fs-4 text-white opacity-90 fw-medium mb-4">Large-scale manufacturing of premium tissue products with German automated precision.</p>
                      <div className="d-flex gap-3">
                         <a href="/products" className="btn btn-teal-bright btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg text-decoration-none">Our Products</a>
                         <a href="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold text-decoration-none backdrop-blur-sm">Get Quote</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 - Softness/Quality Focus */}
          <Carousel.Item className="hero-vh-item">
            <div className="hero-bg-image" style={{ backgroundImage: 'url("/Main2.jpeg")' }}></div>
            <div className="hero-overlay-dark"></div>
            <Carousel.Caption className="hero-caption-content">
              <Container>
                <Row className="justify-content-end">
                  <Col lg={7} md={10} className="text-lg-end">
                    <div className="liquid-glass-card p-4 p-md-5" data-aos="fade-left">
                      <span className="badge-teal-glass mb-3 px-3 py-2 text-uppercase tracking-widest">Premium Quality</span>
                      <h1 className="display-3 fw-bold text-white mb-3">Unmatched <span className="text-teal-bright">Softness</span></h1>
                      <p className="fs-4 text-white opacity-90 fw-medium mb-4">Our 3-ply technology ensures maximum comfort and superior absorbency for clinical and hospitality use.</p>
                      <div className="d-flex justify-content-lg-end gap-3">
                         <a href="/products" className="btn btn-teal-bright btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg text-decoration-none">View Catalog</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 - Sustainability Focus */}
          <Carousel.Item className="hero-vh-item">
            <div 
              className="hero-bg-image" 
              style={{ backgroundImage: 'url("/Main3.png")' }}
              onError={(e) => {
                e.currentTarget.style.backgroundImage = 'url("https://placehold.co/1920x1080/1E3140/ffffff?text=Eco-Friendly+Future")';
              }}
            ></div>
            <div className="hero-overlay-dark"></div>
            <Carousel.Caption className="hero-caption-content">
              <Container>
                <Row>
                  <Col lg={7} md={10} className="text-start">
                    <div className="liquid-glass-card p-4 p-md-5" data-aos="zoom-in">
                      <span className="badge-teal-glass mb-3 px-3 py-2 text-uppercase tracking-widest">Green Innovation</span>
                      <h1 className="display-3 fw-bold text-white mb-3">Eco-Friendly <span className="text-teal-bright">Future</span></h1>
                      <p className="fs-4 text-white opacity-90 fw-medium mb-4">Committed to sustainability with 100% biodegradable materials and zero-waste production.</p>
                      <div className="d-flex gap-3">
                         <a href="/about" className="btn btn-teal-bright btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg text-decoration-none">Our Mission</a>
                         <a href="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold text-decoration-none backdrop-blur-sm">Bulk Inquiry</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>

      {/* 2. STATS BAR - EXACTLY AS PER YOUR OLDER CODE */}
      <div className="bg-navy py-4 shadow-lg">
        <Container>
          <Row className="text-center text-white">
            <Col md={3} xs={6} className="border-end border-secondary border-opacity-25 py-2" data-aos="fade-up" data-aos-delay="100">
              <h3 className="fw-bold mb-0">High-Speed</h3>
              <small className="text-uppercase tracking-widest opacity-75">Production Lines</small>
            </Col>
            <Col md={3} xs={6} className="border-end border-secondary border-opacity-25 py-2" data-aos="fade-up" data-aos-delay="200">
              <h3 className="fw-bold mb-0">20+</h3>
              <small className="text-uppercase tracking-widest opacity-75">Export Markets</small>
            </Col>
            <Col md={3} xs={6} className="border-end border-secondary border-opacity-25 py-2" data-aos="fade-up" data-aos-delay="300">
              <h3 className="fw-bold mb-0">ISO</h3>
              <small className="text-uppercase tracking-widest opacity-75">Certified Quality</small>
            </Col>
            <Col md={3} xs={6} className="py-2" data-aos="fade-up" data-aos-delay="400">
              <h3 className="fw-bold mb-0">100%</h3>
              <small className="text-uppercase tracking-widest opacity-75">Virgin Pulp</small>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. WELCOME SECTION - EXACTLY AS PER YOUR OLDER CODE */}
      <section className="py-5 text-center bg-light" data-aos="fade-up">
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

      {/* 4. FEATURE CARDS - EXACTLY AS PER YOUR OLDER CODE */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow rounded-4">
                 <div className="display-4 text-teal mb-3">🌱</div>
                 <h4 className="fw-bold text-navy">Eco-Friendly</h4>
                 <p className="text-muted">Sustainable sourcing and zero-waste production cycles.</p>
               </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow rounded-4">
                 <div className="display-4 text-teal mb-3">⚙️</div>
                 <h4 className="fw-bold text-navy">Advanced Tech</h4>
                 <p className="text-muted">German-engineered automated cutting and embossing lines.</p>
               </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow rounded-4">
                 <div className="display-4 text-teal mb-3">🌍</div>
                 <h4 className="fw-bold text-navy">Global Export</h4>
                 <p className="text-muted">Direct factory export logistics to global ports.</p>
               </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 5. WHY CHOOSE US - EXACTLY AS PER YOUR OLDER CODE */}
      <section className="py-5 bg-light overflow-hidden">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0" data-aos="fade-right">
              <img 
                src="/why.jpg" 
                alt="Quality Assurance" 
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: 'cover', height: '500px' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/600x600/1E3140/ffffff?text=Quality+Assurance';
                }}
              />
            </Col>
            <Col lg={7} className="ps-lg-5" data-aos="fade-left">
              <h5 className="text-teal fw-bold text-uppercase tracking-widest small">Our Promise</h5>
              <h2 className="fw-bold display-6 mb-4 text-navy">Why Choose Shree Enterprise?</h2>
              
              <div className="mb-4">
                <h4 className="fw-bold h5 text-navy">❓ Is the quality consistent?</h4>
                <p className="text-muted">
                  Yes. Our automated facility ensures that every roll and sheet meets the exact same specifications batch after batch.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold h5 text-navy">❓ Can we handle bulk requirements?</h4>
                <p className="text-muted">
                  With a dedicated high-capacity facility and massive storage, we are built for high-volume B2B distribution and global export.
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
          --teal-bright: #00D1B2;
          --navy: #1E3140;
          --glass-surface: rgba(255, 255, 255, 0.15);
        }

        .text-navy { color: var(--navy) !important; }
        .bg-navy { background-color: var(--navy) !important; }
        .text-teal { color: var(--teal) !important; }
        .text-teal-bright { color: var(--teal-bright) !important; }
        
        .btn-teal-bright { 
          background-color: var(--teal); 
          border: none; 
          color: white !important; 
          transition: all 0.3s ease; 
        }
        .btn-teal-bright:hover { 
          background-color: #008f77; 
          transform: translateY(-3px); 
          box-shadow: 0 10px 20px rgba(0, 163, 137, 0.3);
        }

        .btn-teal { background-color: var(--teal); border: none; color: white !important; transition: 0.3s; }
        .btn-teal:hover { background-color: #008f77; color: white !important; transform: translateY(-2px); }
        .btn-outline-navy { color: var(--navy); border: 2px solid var(--navy); transition: 0.3s; }
        .btn-outline-navy:hover { background-color: var(--navy); color: white !important; transform: translateY(-2px); }

        /* FULL SLIDE PHOTO STYLES */
        .hero-vh-item { height: 85vh; min-height: 650px; position: relative; overflow: hidden; }
        
        .hero-bg-image { 
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
          background-size: cover; background-position: center; 
          transition: transform 10s ease; z-index: 1;
        }
        
        .full-slide-carousel .active .hero-bg-image {
          transform: scale(1.1);
        }

        .hero-overlay-dark {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, rgba(30, 49, 64, 0.8) 0%, rgba(30, 49, 64, 0.2) 60%, transparent 100%);
          z-index: 2;
        }

        .hero-caption-content {
          bottom: 0 !important; top: 0 !important;
          display: flex; align-items: center; justify-content: center;
          left: 0; right: 0; z-index: 10;
        }

        /* LIQUID GLASS CARD EFFECT */
        .liquid-glass-card {
          background: var(--glass-surface);
          backdrop-filter: blur(25px) saturate(160%);
          -webkit-backdrop-filter: blur(25px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 35px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .badge-teal-glass { 
          background: rgba(0, 209, 178, 0.2); 
          color: var(--teal-bright); 
          border: 1px solid rgba(0, 209, 178, 0.4); 
          border-radius: 50px; 
          font-weight: 700; 
          font-size: 0.8rem; 
        }

        .underline-teal { width: 60px; height: 4px; background: var(--teal); border-radius: 2px; }
        .hover-shadow { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-shadow:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important; }

        .backdrop-blur-sm { backdrop-filter: blur(4px); }

        @media (max-width: 991px) {
          .hero-vh-item { height: auto; padding: 100px 0; }
          .hero-bg-image { height: 100%; }
          .hero-overlay-dark { background: rgba(30, 49, 64, 0.85); }
          .hero-caption-content { position: relative !important; top: auto !important; bottom: auto !important; padding: 40px 0; }
          .liquid-glass-card { border-radius: 20px; padding: 2rem !important; }
          .display-3 { font-size: 2.5rem; }
        }
      `}</style>
    </main>
  );
}
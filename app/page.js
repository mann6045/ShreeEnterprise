"use client";

import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* 1. HERO CAROUSEL */}
      <section className="p-0">
        <Carousel fade interval={3000} controls={true} indicators={true}>
          
          {/* Slide 1 */}
          <Carousel.Item style={{ height: '600px' }}>
            <img
              className="d-block w-100 h-100"
              src="/Main1.png"
              alt="Factory"
              style={{ objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded mb-5 carousel-caption-float">
              <h1 className="display-4 fw-bold">State-of-the-Art Manufacturing</h1>
              <p className="fs-4">Producing 50 tons of premium tissue daily with automated precision.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item style={{ height: '600px' }}>
            <img
              className="d-block w-100 h-100"
              src="/Main2.jpeg"
              alt="Softness"
              style={{ objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded mb-5 carousel-caption-float">
              <h1 className="display-4 fw-bold">Unmatched Softness</h1>
              <p className="fs-4">Our 3-ply technology ensures maximum comfort and absorbency.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item style={{ height: '600px' }}>
            <img
              className="d-block w-100 h-100"
              src="https://placehold.co/1920x600?text=Eco-Friendly+Production"
              alt="Sustainability"
              style={{ objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded mb-5 carousel-caption-float">
              <h1 className="display-4 fw-bold">Committed to Nature</h1>
              <p className="fs-4">100% biodegradable materials and zero-waste water recycling.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 4 */}
          <Carousel.Item style={{ height: '600px' }}>
            <img
              className="d-block w-100 h-100"
              src="https://placehold.co/1920x600?text=Global+Export+Logistics"
              alt="Logistics"
              style={{ objectFit: 'cover' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded mb-5 carousel-caption-float">
              <h1 className="display-4 fw-bold">Global Reach</h1>
              <p className="fs-4">Exporting hygiene solutions to over 20 countries worldwide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* 2. WELCOME / ABOUT SECTION */}
      <section className="py-5 text-center bg-light" data-aos="fade-up">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="fw-bold text-primary mb-3">Welcome to Shree Enterprise</h2>
              <p className="lead text-secondary mb-4">
                We are a leading manufacturer of hygiene products, dedicated to quality, innovation, and sustainability. 
                From household essentials to industrial supplies, we cover it all.
              </p>
              <Link href="/products">
                <Button variant="primary" size="lg" className="px-5 rounded-pill shadow-sm">
                  View Our Products
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. FEATURE HIGHLIGHTS - Staggered Fade Up */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow">
                 <div className="display-4 text-primary mb-3">🌱</div>
                 <h4 className="fw-bold">Eco-Friendly</h4>
                 <p className="text-muted">Sustainable sourcing and production.</p>
               </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow">
                 <div className="display-4 text-primary mb-3">⚙️</div>
                 <h4 className="fw-bold">Advanced Tech</h4>
                 <p className="text-muted">Latest German machinery for precision.</p>
               </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
               <Card className="h-100 border-0 text-center p-4 shadow-sm hover-shadow">
                 <div className="display-4 text-primary mb-3">🌍</div>
                 <h4 className="fw-bold">Global Export</h4>
                 <p className="text-muted">Trusted by partners worldwide.</p>
               </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. "WHY THIS BRAND?" - Left and Right Fade */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center justify-content-center">
            
            {/* Left Side: The Photo (Fade Right) */}
            <Col lg={5} className="mb-4 mb-lg-0" data-aos="fade-right">
              <img 
                src="/why.jpg" 
                alt="Quality Check and Assurance" 
                className="img-fluid rounded shadow-lg"
                style={{ objectFit: 'cover', maxHeight: '500px', width: '100%' }}
              />
            </Col>
            
            {/* Right Side: The Questions / Explanations (Fade Left) */}
            <Col lg={7} className="ps-lg-5" data-aos="fade-left">
              <h5 className="text-primary fw-bold text-uppercase">Our Promise</h5>
              <h2 className="fw-bold display-6 mb-4">Why Choose Shree Enterprise?</h2>
              
              <div className="mb-4">
                <h4 className="fw-bold h5">❓ Why is our quality superior?</h4>
                <p className="text-muted">
                  We don't cut corners. We use 100% Virgin Pulp for our premium range, ensuring that every sheet is soft, strong, and free from harsh bleaching chemicals.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold h5">❓ Can we handle bulk orders?</h4>
                <p className="text-muted">
                  Absolutely. With a production capacity of 50 tons per day and a 50,000 sqft warehouse, we are the preferred partner for hotel chains, hospitals, and retail distributors.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold h5">❓ Are we sustainable?</h4>
                <p className="text-muted">
                  Yes. We are committed to the planet. Our manufacturing process recycles 90% of water usage, and we offer a fully biodegradable bamboo tissue line.
                </p>
              </div>

              <Link href="/about">
                <Button variant="outline-primary" className="mt-2">
                  Read Our Full Story
                </Button>
              </Link>
            </Col>

          </Row>
        </Container>
      </section>

      <style jsx global>{`
        /* Custom Hover Effect for the small cards */
        .hover-shadow {
           transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        /* Floating Animation Keyframes */
        @keyframes float {
          0% { transform: translatey(0px); }
          50% { transform: translatey(-8px); }
          100% { transform: translatey(0px); }
        }

        /* Applying the floating animation to the carousel caption */
        .carousel-caption-float {
            animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
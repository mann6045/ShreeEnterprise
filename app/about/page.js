"use client";

import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

// Helper function to create slugs
const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function About() {
  
  // Data for the client logos
  const clientLogos = [
    "/SaiHospital.jpg",
    "/Dhwanit.jpg",
    "/Hemarsh.svg",
    "/Palkhi.png",
  ];

  // Data for the testimonials
  const testimonials = [
    {
      quote: "Shree Enterprise consistently delivers the highest quality product. Their 3-ply tissue is essential for maintaining our hospital's hygiene standards.",
      name: "Dr. Soham Patel",
      title: "Healthcare Partner",
    },
    {
      quote: "The premium texture and custom finish of Shree Enterprise tissues perfectly complement our fine-dining standards. They are our go-to for luxury napkins.",
      name: "Divyesh Patel",
      title: "Fine Dining Partner",
    },
    {
        quote: "We rely on Shree Enterprise for high-absorbency precision wipes. Their sterilized production meets our strict laboratory requirements.",
        name: "Dr. Nikunj Shah",
        title: "Pharmaceutical Partner",
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-5 bg-light border-bottom">
        <Container data-aos="fade-up">
          <Row className="align-items-center">
            <Col lg={6}>
              <Badge bg="primary" className="mb-3 px-3 py-2" style={{ backgroundColor: '#00A389' }}>Since 2025</Badge>
              <h1 className="display-4 fw-bold text-navy mb-4">Pioneering Hygiene Solutions</h1>
              <p className="lead text-secondary mb-4">
                Shree Enterprise is a premier manufacturer of high-quality tissue products based in Mahisagar, Gujarat. 
                We combine advanced technology with sustainable practices to deliver softness and strength in every sheet.
              </p>
              <p className="text-muted">
                From our strategic manufacturing unit in Malekpur Chokdi, we have grown into a high-capacity facility 
                serving retail chains, healthcare centers, and hospitality giants across India.
              </p>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0 text-center">
              <img 
                src="/Main2.jpeg" 
                alt="Shree Enterprise Manufacturing" 
                className="img-fluid rounded-4 shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x450/1E3140/ffffff?text=Manufacturing+Excellence'; }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. KEY STATISTICS - 3 columns */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center g-4 justify-content-center" data-aos="fade-up">
            <Col md={4} sm={6}>
              <div className="p-4 border-0 rounded-4 bg-light h-100 shadow-sm">
                <h2 className="display-5 fw-bold text-teal">200+</h2>
                <p className="fw-bold text-navy mb-0">Corporate Clients</p>
                <small className="text-muted">Trusted Quality</small>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="p-4 border-0 rounded-4 bg-light h-100 shadow-sm">
                <h2 className="display-5 fw-bold text-teal">20+</h2>
                <p className="fw-bold text-navy mb-0">Countries Exported</p>
                <small className="text-muted">Global Reach</small>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="p-4 border-0 rounded-4 bg-light h-100 shadow-sm">
                <h2 className="display-5 fw-bold text-teal">ISO</h2>
                <p className="fw-bold text-navy mb-0">Certified</p>
                <small className="text-muted">Quality Standards</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* 3. CLIENT SHOWCASE (LOGOS) - Always Lit & Glowing */}
      <section className="py-5 bg-navy border-top border-bottom overflow-hidden">
        <Container className="text-center" data-aos="fade-up">
          <h2 className="fw-bold h4 mb-5 text-white text-uppercase tracking-widest opacity-75">Our Valued Industry Partners</h2>
          <Row className="justify-content-center align-items-center g-4">
            {clientLogos.map((logo, index) => (
              <Col xs={6} sm={4} md={3} key={index}>
                <div className="logo-container-glowing p-3 rounded-4 transition-all">
                  <img 
                    src={logo} 
                    alt={`Client Logo ${index + 1}`} 
                    className="img-fluid client-logo-img-lit" 
                    style={{ maxHeight: '55px' }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold display-6 text-center text-navy mb-5" data-aos="fade-up">What Our Partners Say</h2>
          <Row className="g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col md={12} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <Card className="h-100 p-4 border-0 shadow-sm border-start border-5 border-teal testimonial-card">
                  <Card.Body>
                    <p className="fst-italic text-secondary" style={{ fontSize: '1.1rem' }}>
                      <span className="fs-1 text-teal opacity-25" style={{ lineHeight: 0.5 }}>&ldquo;</span>
                      {testimonial.quote}
                    </p>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 pt-0">
                    <p className="mb-0 fw-bold text-navy">{testimonial.name}</p>
                    <small className="text-teal fw-semibold">{testimonial.title}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* 5. INFRASTRUCTURE & QUALITY */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
             <Col lg={6} className="mb-4 mb-lg-0 order-lg-2" data-aos="fade-left">
              <img 
                src="/blog_automation.jpg" 
                alt="Automated Machinery" 
                className="img-fluid rounded-4 shadow-lg"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/1E3140/ffffff?text=Automated+Lines'; }}
              />
            </Col>
            
            <Col lg={6} className="order-lg-1 pe-lg-5" data-aos="fade-right">
              <h2 className="fw-bold text-navy mb-4">Infrastructure & Quality Control</h2>
              <p className="text-secondary mb-3">
                Our state-of-the-art manufacturing facility in Mahisagar is integrated with high-performance German and Italian automated rewinding and cutting lines.
              </p>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2">✅ <strong>100% Touch-free Process:</strong> Ensuring clinical hygiene.</li>
                <li className="mb-2">✅ <strong>UV Sterilization:</strong> Every pack passes through UV-C tunnels.</li>
                <li className="mb-2">✅ <strong>Raw Material:</strong> Sourcing 100% Virgin Pulp.</li>
                <li className="mb-2">✅ <strong>Lab Tested:</strong> Random sampling for softness every hour.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 6. VISION & MISSION - Styling updated to avoid "camouflage" */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={6} className="mb-4" data-aos="zoom-in-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-lg p-4 bg-white rounded-4 border-top border-5 border-teal">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-2 bg-teal rounded-3 text-white me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3 className="fw-bold text-navy mb-0">Our Mission</h3>
                  </div>
                  <p className="lead text-secondary">
                    To provide hygienic, sustainable, and affordable tissue solutions to every business, enhancing quality of life through clinical excellence.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4" data-aos="zoom-in-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-lg p-4 bg-white rounded-4 border-top border-5 border-navy">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="p-2 bg-navy rounded-3 text-white me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>
                    </div>
                    <h3 className="fw-bold text-navy mb-0">Our Vision</h3>
                  </div>
                  <p className="lead text-secondary">
                    To become the global leader in eco-friendly paper manufacturing by 2030, setting new benchmarks in hygiene and automation.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 7. CERTIFICATIONS */}
      <section className="py-5 text-center bg-light">
        <Container>
          <h3 className="fw-bold text-navy mb-5">Accreditations & Certificates</h3>
          <Row className="justify-content-center align-items-center g-3" data-aos="fade-up">
            <Col xs={6} md={3}>
               <div className="p-3 bg-white rounded-3 shadow-sm fw-bold text-navy">ISO 9001:2015</div>
            </Col>
            <Col xs={6} md={3}>
               <div className="p-3 bg-white rounded-3 shadow-sm fw-bold text-navy">FSC Certified</div>
            </Col>
            <Col xs={6} md={3}>
               <div className="p-3 bg-white rounded-3 shadow-sm fw-bold text-navy">GMP Certified</div>
            </Col>
            <Col xs={6} md={3}>
               <div className="p-3 bg-white rounded-3 shadow-sm fw-bold text-navy">Make In India</div>
            </Col>
          </Row>
          
          <div className="mt-5">
            <a href="/contact" className="btn btn-outline-primary btn-lg rounded-pill px-5 fw-bold">
               Partner With Us
            </a>
          </div>
        </Container>
      </section>

      <style jsx global>{`
        :root {
          --teal: #00A389;
          --navy: #1E3140;
        }
        .text-teal { color: var(--teal) !important; }
        .bg-teal { background-color: var(--teal) !important; }
        .text-navy { color: var(--navy) !important; }
        .bg-navy { background-color: var(--navy) !important; }
        .border-navy { border-color: var(--navy) !important; }
        .border-teal { border-color: var(--teal) !important; }
        
        .btn-outline-primary {
            color: var(--teal) !important;
            border-color: var(--teal) !important;
        }
        .btn-outline-primary:hover {
            background-color: var(--teal) !important;
            color: white !important;
        }

        /* Persistent Glowing Logo Section */
        .logo-container-glowing {
            background: rgba(255, 255, 255, 1);
            border: 2px solid var(--teal);
            box-shadow: 0 0 15px rgba(0, 163, 137, 0.4);
            transition: all 0.3s ease;
        }

        .client-logo-img-lit {
            filter: grayscale(0%) brightness(1);
        }

        .logo-container-glowing:hover {
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 0 25px rgba(0, 163, 137, 0.6);
        }
        
        .testimonial-card {
            transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
            transform: translateY(-5px);
        }
      `}</style>
    </main>
  );
}
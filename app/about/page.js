"use client";

import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Link from 'next/link';

export default function About() {
  
  // Data for the mock client logos
  const clientLogos = [
    "https://placehold.co/150x60/f0f0f0/666666?text=Palkhi+Hotels",
    "https://placehold.co/150x60/f0f0f0/666666?text=Apex+Hospitals",
    "https://placehold.co/150x60/f0f0f0/666666?text=Logistics+India",
    "https://placehold.co/150x60/f0f0f0/666666?text=Tech+Park+Solutions",
  ];

  // Data for the mock testimonials
  const testimonials = [
    {
      quote: "Shree Enterprise consistently delivers the highest quality product. Their 3-ply tissue is essential for maintaining our luxury hospitality standards.",
      name: "Ritesh Sharma",
      title: "Procurement Head, Grand Central Hotels",
    },
    {
      quote: "The reliability of their supply chain, combined with their superior wet-strength paper towels, makes them our preferred hygiene partner.",
      name: "Dr. Anjali Verma",
      title: "Operations Director, Apex Hospitals Network",
    },
    {
        quote: "We rely on Shree Enterprise for bulk industrial rolls. Their custom GSM options meet our exact machinery needs, ensuring zero downtime.",
        name: "Vikram Jain",
        title: "Factory Manager, Logistics India",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="py-5 bg-light border-bottom">
        <Container data-aos="fade-up">
          <Row className="align-items-center">
            <Col lg={6}>
              <Badge bg="primary" className="mb-3 px-3 py-2">Since 2005</Badge>
              <h1 className="display-4 fw-bold text-dark mb-4">Pioneering Hygiene Solutions</h1>
              <p className="lead text-secondary mb-4">
                Shree Enterprise is a premier manufacturer of high-quality tissue products based in Ahmedabad, Gujarat. 
                We combine advanced technology with sustainable practices to deliver softness and strength in every sheet.
              </p>
              <p className="text-muted">
                From humble beginnings as a small paper converting unit, we have grown into a fully automated manufacturing facility 
                serving retail chains, corporate offices, and hospitality giants across India and abroad.
              </p>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <img 
                src="/Main2.jpeg" 
                alt="Shree Enterprise Headquarters" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. KEY STATISTICS (Trust Builders) */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="text-center g-4" data-aos="fade-up">
            <Col md={3} sm={6}>
              <div className="p-4 border rounded bg-light h-100">
                <h2 className="display-5 fw-bold text-primary">50+</h2>
                <p className="fw-bold text-dark mb-0">Tons Daily Output</p>
                <small className="text-muted">Manufacturing Capacity</small>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-4 border rounded bg-light h-100">
                <h2 className="display-5 fw-bold text-primary">200+</h2>
                <p className="fw-bold text-dark mb-0">Corporate Clients</p>
                <small className="text-muted">Trust our quality</small>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-4 border rounded bg-light h-100">
                <h2 className="display-5 fw-bold text-primary">20+</h2>
                <p className="fw-bold text-dark mb-0">Countries Exported</p>
                <small className="text-muted">Global Reach</small>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-4 border rounded bg-light h-100">
                <h2 className="display-5 fw-bold text-primary">ISO</h2>
                <p className="fw-bold text-dark mb-0">9001:2015</p>
                <small className="text-muted">Certified Quality</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* NEW SECTION 3: CLIENT SHOWCASE (LOGOS) - Dynamic and Responsive */}
      <section className="py-5 bg-light border-bottom">
        <Container className="text-center" data-aos="fade-up">
          <h2 className="fw-bold h4 mb-5 text-muted text-uppercase">Trusted by Leading Industry Partners</h2>
          <Row className="justify-content-center align-items-center g-4">
            {clientLogos.map((logo, index) => (
              <Col xs={6} sm={4} md={3} key={index}>
                <img 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  className="img-fluid grayscale-logos p-2" 
                  style={{ opacity: 0.7, maxWidth: '100%' }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* NEW SECTION 4: TESTIMONIALS - Three columns for authority */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold display-6 text-center mb-5" data-aos="fade-up">What Our Partners Say</h2>
          <Row className="g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col md={12} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <Card className="h-100 p-4 border-0 shadow-lg border-start border-5 border-primary testimonial-card">
                  <Card.Body>
                    <p className="lead fst-italic text-dark">
                      <span className="fs-1 text-primary me-2" style={{ lineHeight: 0.5 }}>&ldquo;</span>
                      {testimonial.quote}
                    </p>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 pt-0">
                    <p className="mb-0 fw-bold">{testimonial.name}</p>
                    <small className="text-muted">{testimonial.title}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* 5. INFRASTRUCTURE & QUALITY (Existing Section) */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
             {/* Image on Left */}
             <Col lg={6} className="mb-4 mb-lg-0 order-lg-2" data-aos="fade-left">
              <img 
                src="/blog_automation.jpg" 
                alt="Automated Machinery" 
                className="img-fluid rounded shadow"
              />
            </Col>
            
            {/* Text on Right */}
            <Col lg={6} className="order-lg-1 pe-lg-5" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Infrastructure & Quality Control</h2>
              <p className="text-muted mb-3">
                Our 50,000 sq. ft. facility in Changodar Industrial Estate is equipped with the latest German and Italian rewinding and cutting lines.
              </p>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2">✅ <strong>100% Touch-free Process:</strong> Ensuring maximum hygiene.</li>
                <li className="mb-2">✅ <strong>UV Sterilization:</strong> Every pack passes through UV-C tunnels.</li>
                <li className="mb-2">✅ <strong>Raw Material:</strong> We source only 100% Virgin Pulp and FSC-certified recycled paper.</li>
                <li className="mb-2">✅ <strong>Lab Tested:</strong> Random sampling for softness, tensile strength, and absorbency every hour.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 6. VISION & MISSION (Existing Section) */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={6} className="mb-4" data-aos="zoom-in-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm p-4 bg-primary text-white">
                <Card.Body>
                  <h3 className="fw-bold mb-3">Our Mission</h3>
                  <p className="lead">
                    To provide hygienic, sustainable, and affordable tissue solutions to every household and business, reducing the spread of germs and enhancing quality of life.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4" data-aos="zoom-in-up" data-aos-delay="200">
              <Card className="h-100 border-0 shadow-sm p-4 bg-dark text-white">
                <Card.Body>
                  <h3 className="fw-bold mb-3">Our Vision</h3>
                  <p className="lead">
                    To become India's most trusted hygiene brand and a global leader in eco-friendly paper manufacturing by 2030, setting new benchmarks in sustainability.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 7. CERTIFICATIONS (Existing Section) */}
      <section className="py-5 text-center bg-light">
        <Container>
          <h3 className="fw-bold mb-5">Accreditations & Certificates</h3>
          <Row className="justify-content-center align-items-center grayscale-logos" data-aos="fade-up">
            <Col xs={6} md={3} className="mb-4">
               {/* Replace these with real certification logos later */}
               <div className="p-3 bg-white rounded shadow-sm fw-bold">ISO 9001:2015</div>
            </Col>
            <Col xs={6} md={3} className="mb-4">
               <div className="p-3 bg-white rounded shadow-sm fw-bold">FSC Certified</div>
            </Col>
            <Col xs={6} md={3} className="mb-4">
               <div className="p-3 bg-white rounded shadow-sm fw-bold">GMP Certified</div>
            </Col>
            <Col xs={6} md={3} className="mb-4">
               <div className="p-3 bg-white rounded shadow-sm fw-bold">Make In India</div>
            </Col>
          </Row>
          
          <div className="mt-5">
            <Link href="/contact">
               <Button variant="outline-primary" size="lg">Partner With Us</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Custom styles for logo images and testimonial card appearance */}
      <style jsx global>{`
        /* Greyscale effect for client logos */
        .grayscale-logos img {
            filter: grayscale(100%);
            transition: filter 0.3s ease;
        }
        .grayscale-logos img:hover {
            filter: grayscale(0%);
        }
        
        /* Ensures cards are fully visible on smaller screens */
        .testimonial-card {
            min-height: 250px;
        }
      `}</style>
    </main>
  );
}
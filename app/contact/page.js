"use client";

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* 1. HEADER SECTION (Always at the top) */}
      <section className="py-5 text-center bg-white">
        <Container>
          <h1 className="fw-bold text-dark">Get In Touch</h1>
          <p className="text-muted mb-0">
            Visit our factory or send us a message.
          </p>
        </Container>
      </section>

      {/* 2. CONTACT FORM & ADDRESS SECTION (MOVED UP) */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-5"> 
            
            {/* LEFT SIDE: The Contact Form */}
            <Col lg={7}>
              <Card className="border-0 shadow-sm p-4 h-100">
                <Card.Body>
                  <h3 className="mb-4 fw-bold text-primary">Send us a Message</h3>
                  <Form 
                      action="https://formspree.io/f/xvzoyyy" // Placeholder for your email service
                      method="POST"
                  >
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formName">
                          <Form.Label className="fw-semibold">Full Name</Form.Label>
                          <Form.Control type="text" name="name" placeholder="Enter your name" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formPhone">
                          <Form.Label className="fw-semibold">Phone Number</Form.Label>
                          <Form.Control type="tel" name="phone" placeholder="+91 98765 43210" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formCompany">
                      <Form.Label className="fw-semibold">Company Name</Form.Label>
                      <Form.Control type="text" name="company" placeholder="e.g., Global Hygiene Solutions Ltd." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className="fw-semibold">Email Address</Form.Label>
                      <Form.Control type="email" name="_replyto" placeholder="name@company.com" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label className="fw-semibold">Message / Order Details</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message" 
                        placeholder="Tell us about your requirements..." 
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit" size="lg">
                        Send Inquiry
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* RIGHT SIDE: Company Address & Reachout Info */}
            <Col lg={5}>
              <div className="h-100 d-flex flex-column justify-content-center">
                
                <div className="mb-5">
                  <h3 className="fw-bold text-dark mb-3">Headquarters</h3>
                  <p className="text-muted mb-1">Visit our manufacturing facility.</p>
                  <div className="p-3 bg-white rounded shadow-sm border-start border-4 border-primary">
                      <h5 className="fw-bold text-dark">PureSoft Industries Ltd.</h5>
                      <address className="mb-0 text-secondary">
                        123 Industrial Estate, Phase 4<br />
                        Ahmedabad, Gujarat, 382481<br />
                        India
                      </address>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold text-dark mb-3">Direct Contact</h3>
                  <p className="mb-2">
                    <strong>Sales:</strong> <a href="mailto:sales@puresoft.com" className="text-decoration-none">sales@puresoft.com</a>
                  </p>
                  <p className="mb-0">
                    <strong>Phone:</strong> <span className="text-dark">+91 98765 43210</span>
                  </p>
                </div>

                <div>
                  <h3 className="fw-bold text-dark mb-3">Business Hours</h3>
                  <ul className="list-unstyled text-secondary">
                    <li className="mb-2 d-flex justify-content-between border-bottom pb-2">
                      <span>Mon - Fri:</span> <span className="fw-bold text-dark">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Sunday:</span> <span className="text-danger">Closed</span>
                    </li>
                  </ul>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. FULL WIDTH MAP SECTION (MOVED DOWN) */}
      <div className="w-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.2991879098!2d72.4149301292359!3d23.020158084541725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
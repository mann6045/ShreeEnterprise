"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from 'react-bootstrap';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Load EmailJS SDK dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize with your Public Key
      window.emailjs.init(""); // Replace with your Public Key later
    };
    document.body.appendChild(script);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // These IDs come from your EmailJS Dashboard
    const SERVICE_ID = "service_b6fv426";  
    const TEMPLATE_ID = "template_o6ko9m9"; 
    const PUBLIC_KEY = "-2zPK85OCFcNB5-5q";   

    try {
      // Fallback check if script hasn't loaded or keys aren't set
      if (!window.emailjs) {
        throw new Error("Email service is initializing. Please try again in a second.");
      }

      const result = await window.emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your inquiry has been sent to Shree Enterprise. We will contact you at +91 81606 75257 shortly.'
        });
        form.current.reset();
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'danger',
        message: 'Something went wrong. Please try again or contact us directly via WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page bg-light min-vh-100">
      {/* 1. HEADER SECTION */}
      <section className="py-5 text-center bg-white border-bottom">
        <Container>
          <h1 className="fw-bold text-navy display-5">Get In Touch</h1>
          <p className="text-muted fs-5">Direct factory inquiries for Shree Enterprise Manufacturing</p>
        </Container>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            {/* INQUIRY FORM */}
            <Col lg={7}>
              <Card className="border-0 shadow-sm p-4 h-100 rounded-4">
                <Card.Body>
                  <h3 className="mb-4 fw-bold text-navy">Send an Inquiry</h3>
                  
                  {status.message && (
                    <Alert variant={status.type} className="rounded-3 shadow-sm border-0 animate-fade-in">
                      {status.type === 'success' ? '✅ ' : '❌ '} {status.message}
                    </Alert>
                  )}

                  <Form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small fw-bold text-navy">Full Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="from_name" 
                            placeholder="Enter your name" 
                            required 
                            className="py-2 border-2"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small fw-bold text-navy">Phone Number</Form.Label>
                          <Form.Control 
                            type="tel" 
                            name="user_phone" 
                            placeholder="+91 9876543210" 
                            required
                            className="py-2 border-2"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-navy">Company / Business Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="company_name" 
                        placeholder="Your Company Name" 
                        className="py-2 border-2"
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-navy">Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="user_email" 
                        placeholder="email@company.com" 
                        required
                        className="py-2 border-2"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-bold text-navy">Message / Requirements</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        name="message" 
                        placeholder="Tell us about the sizes and quantities you need..." 
                        required
                        className="py-2 border-2"
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        size="lg" 
                        className="btn-navy py-3 fw-bold rounded-pill shadow"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                            Sending...
                          </>
                        ) : (
                          "Send Quote Request"
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* CONTACT DETAILS SIDEBAR */}
            <Col lg={5}>
              <div className="h-100 d-flex flex-column gap-4">
                {/* Address Card */}
                <div className="p-4 bg-white rounded-4 shadow-sm border-start border-5 border-teal">
                  <h4 className="fw-bold text-navy mb-3">Headquarters</h4>
                  <address className="mb-0 text-secondary lh-lg">
                    <strong>Shree Enterprise</strong><br />
                    Building No: 544, Locality: 513<br />
                    Malekpur Chokdi, Malekpur<br />
                    District: MAHISAGAR, Gujarat<br />
                    PIN: 389235
                  </address>
                </div>

                {/* Contact Card */}
                <div className="p-4 bg-navy text-white rounded-4 shadow-lg">
                  <h4 className="fw-bold mb-4">Direct Connect</h4>
                  <div className="mb-3">
                    <p className="small text-teal fw-bold mb-1 text-uppercase tracking-widest">WhatsApp & Call</p>
                    <p className="fs-4 fw-bold mb-0">+91 81606 75257</p>
                  </div>
                  <div>
                    <p className="small text-teal fw-bold mb-1 text-uppercase tracking-widest">Official Email</p>
                    <p className="fs-5 fw-bold mb-0">sales@shreeenterpriseglobal.com</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-4 bg-white rounded-4 shadow-sm">
                  <h4 className="fw-bold text-navy mb-3">Business Hours</h4>
                  <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span className="text-secondary">Mon - Sat:</span>
                    <span className="fw-bold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-secondary">Sunday:</span>
                    <span className="text-danger fw-bold">Closed</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. GOOGLE MAP SECTION */}
      <section className="w-100 mt-5 border-top">
        <div style={{ width: '100%', height: '450px', filter: 'grayscale(0.2)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.34149021617!2d73.4475459!3d23.148818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e2365287f39ad%3A0x6e9f1688f280e2f!2sMalekpur%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703841000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Shree Enterprise Factory Location"
          ></iframe>
        </div>
      </section>

      <style jsx>{`
        .text-navy { color: #1E3140; }
        .bg-navy { background-color: #1E3140; }
        .text-teal { color: #00A389; }
        .border-teal { border-color: #00A389 !important; }
        .btn-navy { background-color: #1E3140; border: none; }
        .btn-navy:hover { background-color: #2d495e; color: white; transform: translateY(-2px); transition: all 0.3s; }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style> 
    </main>
  );
}
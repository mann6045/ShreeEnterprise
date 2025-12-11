"use client";

import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Privacy() {
  return (
    <section className="py-5 bg-white min-vh-100">
      <Container data-aos="fade-up">
        <Row className="justify-content-center">
          <Col lg={10}>
            <h1 className="fw-bold display-5 mb-4 text-primary">Privacy Policy</h1>
            <p className="lead text-muted">Effective Date: November 25, 2025</p>
            <hr className="my-4" />

            <h2 className="h4 fw-bold mt-5">1. Information Collection</h2>
            <p className="text-dark">
              Shree Enterprise collects information provided by users through the Contact Form, specifically Name, Company, Email Address, and Phone Number. This data is used strictly for the purpose of fulfilling bulk quote requests and managing B2B customer relations.
            </p>

            <h2 className="h4 fw-bold mt-5">2. Use of Data</h2>
            <p className="text-dark">
              We do not sell or trade user data. Information gathered is restricted to internal sales and customer support teams only. We utilize industry-standard security measures to protect your submitted data.
            </p>

            <h2 className="h4 fw-bold mt-5">3. Third-Party Services</h2>
            <p className="text-dark">
              Our contact form submissions are processed via a secure third-party form handling service (e.g., Formspree) which adheres to strict data privacy standards.
            </p>
            
            <p className="mt-5 text-center">
              <Link href="/contact" passHref>
                <Button variant="outline-primary" size="lg">Contact Us with Questions</Button>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
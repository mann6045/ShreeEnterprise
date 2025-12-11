"use client";

import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Terms() {
  return (
    <section className="py-5 bg-light min-vh-100">
      <Container data-aos="fade-up">
        <Row className="justify-content-center">
          <Col lg={10}>
            <h1 className="fw-bold display-5 mb-4 text-primary">Terms & Conditions</h1>
            <p className="lead text-muted">Last Updated: November 25, 2025</p>
            <hr className="my-4" />

            <h2 className="h4 fw-bold mt-5">1. Acceptance of Terms</h2>
            <p className="text-dark">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h2 className="h4 fw-bold mt-5">2. Intellectual Property</h2>
            <p className="text-dark">
              All content (including text, images, logo, and design) on this website is the intellectual property of Shree Enterprise and is protected by copyright law. Reproduction or unauthorized use is strictly prohibited.
            </p>

            <h2 className="h4 fw-bold mt-5">3. Governing Law</h2>
            <p className="text-dark">
              This agreement is governed by the laws of India, specifically the jurisdiction of Ahmedabad, Gujarat.
            </p>

            <p className="mt-5 text-center">
              <Link href="/contact" passHref>
                <Button variant="primary" size="lg">Start Your Bulk Order</Button>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
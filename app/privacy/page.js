"use client";

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Privacy() {
  return (
    <section className="py-5 bg-white min-vh-100">
      <Container data-aos="fade-up">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h1 className="fw-bold display-5 mb-3 text-navy">Privacy Policy</h1>
              <p className="lead text-muted">Effective Date: November 25, 2025</p>
              <div className="underline-teal mx-auto"></div>
            </div>

            <div className="privacy-content text-secondary lh-lg">
              <p className="mb-4">
                The terms “We” / “Us” / “Our” / ”Company” individually and collectively refer to <strong>Shree Enterprise</strong> and the terms “You” / ”Your” / “Yourself” refer to the users. 
                This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000 and the rules made thereunder. 
                This Privacy Policy does not require any physical, electronic or digital signature.
              </p>

              <p className="mb-4">
                This Privacy Policy is a legally binding document between you and <strong>Shree Enterprise</strong>. The terms of this Privacy Policy will be effective upon your acceptance of the same 
                (directly or indirectly in electronic form, by clicking on the "I accept" tab or by use of the website or by other means) and will govern the relationship between you and 
                Shree Enterprise for your use of the website.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy">1. USER INFORMATION</h2>
              <p>
                To avail certain services on our platforms, users are required to provide certain information for the registration/inquiry process namely: – 
                a) your name, b) email address, c) company name, d) PIN code, e) contact number, and f) your occupation or interests. 
                The Information as supplied by the users enables us to improve our manufacturing services and provide you the most user-friendly B2B experience. 
                We use this information to maintain, protect, and improve our services (including logistics and quoting) and for developing new hygiene products.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy">2. COOKIES</h2>
              <p>
                To improve the responsiveness of the sites for our users, we may use “cookies”, or similar electronic tools to collect information to assign each visitor a unique, 
                random number as a User Identification (User ID) to understand the user’s individual interests. Unless you voluntarily identify yourself (through registration or a contact form), 
                we will have no way of knowing who you are, even if we assign a cookie to your computer.
              </p>
              <p>
                Our web servers automatically collect limited information about your computer’s connection to the Internet, including your IP address, when you visit our site. 
                We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, and to measure traffic within our site.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy">3. INFORMATION SHARING</h2>
              <p>
                Shree Enterprise shares the sensitive personal information to any third party without obtaining the prior consent of the user in the following limited circumstances:
              </p>
              <ul className="ps-4">
                <li>When it is requested or required by law or by any court or governmental agency or authority to disclose for the purpose of verification of identity.</li>
                <li>Sharing within our group companies and officers for the purpose of processing orders, managing manufacturing schedules, and ensuring supply chain delivery.</li>
              </ul>

              <h2 className="h4 fw-bold mt-5 text-navy">4. INFORMATION SECURITY</h2>
              <p>
                We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. 
                These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption 
                to guard against unauthorized access to systems where we store personal data.
              </p>
              <p>
                All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; 
                access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy">5. GRIEVANCE REDRESSAL</h2>
              <p>
                Any complaints, abuse or concerns with regards to content and or comment or breach of these terms shall be immediately informed to the designated 
                Grievance Officer as mentioned below via in writing or through email.
              </p>
              <div className="bg-light p-4 rounded-4 mt-3 border-start border-5 border-teal">
                <p className="mb-1"><strong>Grievance Officer:</strong> Shree Enterprise Admin</p>
                <p className="mb-1"><strong>Email:</strong> sales@shree-enterprise.com</p>
                <p className="mb-1"><strong>Phone:</strong> +91 81606 75257</p>
                <p className="mb-0"><strong>Address:</strong> Malekpur Chokdi, Malekpur, District: Mahisagar, Gujarat, PIN: 389235</p>
              </div>
            </div>
            
            <div className="mt-5 text-center">
              <a href="/contact" className="text-decoration-none">
                <Button variant="primary" size="lg" className="btn-teal rounded-pill px-5 shadow-sm">
                  Contact Us with Questions
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .text-navy { color: #1E3140; }
        .underline-teal { width: 50px; height: 4px; background: #00A389; border-radius: 2px; }
        .btn-teal { background-color: #00A389; border: none; }
        .btn-teal:hover { background-color: #008f77; transform: translateY(-2px); transition: all 0.3s; }
        .privacy-content p { margin-bottom: 1.5rem; }
      `}</style>
    </section>
  );
}
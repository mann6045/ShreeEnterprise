"use client";

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function TermsAndConditions() {
  return (
    <section className="py-5 bg-white min-vh-100">
      <Container data-aos="fade-up">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h1 className="fw-bold display-5 mb-3 text-navy">Terms and Conditions</h1>
              <p className="lead text-muted">Last Updated: December 31, 2025</p>
              <div className="underline-teal mx-auto"></div>
            </div>

            <div className="terms-content text-secondary lh-lg">
              <p className="mb-4">
                The terms “We” / “Us” / “Our” / ”Company” individually and collectively refer to <strong>Shree Enterprise</strong> and the terms “Visitor” / ”User” refer to the users.
              </p>

              <p className="mb-4">
                This page states the Terms and Conditions under which you (Visitor) may visit this website. Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site. <strong>Shree Enterprise</strong> reserves the right to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy border-bottom pb-2">1. USE OF CONTENT</h2>
              <p>
                All logos, brands, marks, headings, labels, names, signatures, numerals, shapes, or any combinations thereof appearing in this site, except as otherwise noted, are properties either owned or used under licence by <strong>Shree Enterprise</strong> and / or its associate entities. The use of these properties or any other content on this site, except as provided in these terms and conditions, is strictly prohibited.
              </p>
              <p>
                You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organization’s or entity’s written permission.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy border-bottom pb-2">2. ACCEPTABLE WEBSITE USE</h2>
              <div className="ps-3 border-start border-3 border-teal mt-3">
                <h5 className="fw-bold text-dark">(A) Security Rules</h5>
                <p>
                  Visitors are prohibited from violating or attempting to violate the security of the Website, including, without limitation:
                </p>
                <ul className="small">
                  <li>Accessing data not intended for such user or logging into a server or account which the user is not authorised to access.</li>
                  <li>Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures.</li>
                  <li>Attempting to interfere with service to any user, host or network, including via means of submitting a virus, overloading, or "crashing".</li>
                  <li>Sending unsolicited electronic mail, including promotions and/or advertising of products or services.</li>
                </ul>
              </div>

              <div className="ps-3 border-start border-3 border-teal mt-4">
                <h5 className="fw-bold text-dark">(B) General Rules</h5>
                <p>
                  Visitors may not use the Web Site in order to transmit, distribute, store or destroy material:
                </p>
                <ul className="small">
                  <li>That could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law.</li>
                  <li>In a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others.</li>
                  <li>That is libellous, defamatory, profane, obscene, threatening, abusive or hateful.</li>
                </ul>
              </div>

              <h2 className="h4 fw-bold mt-5 text-navy border-bottom pb-2">3. INDEMNITY</h2>
              <p>
                The User unilaterally agrees to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of this website or their breach of the terms.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy border-bottom pb-2">4. LIABILITY</h2>
              <p>
                User agrees that neither <strong>Shree Enterprise</strong> nor its group companies, directors, officers or employees shall be liable for any direct or indirect or incidental or special or consequential damages, resulting from the use or the inability to use the service or for cost of procurement of substitute goods or services resulting from any goods or data or information obtained or messages received or transactions entered into through or from the service.
              </p>
              <p>
                User further agrees that Company shall not be liable for any damages arising from interruption, suspension or termination of service, including but not limited to direct or indirect damages, whether such interruption was justified or not, negligent or intentional.
              </p>

              <h2 className="h4 fw-bold mt-5 text-navy border-bottom pb-2">5. DISCLAIMER OF CONSEQUENTIAL DAMAGES</h2>
              <p className="bg-light p-4 rounded-3 italic">
                In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material.
              </p>

              <div className="bg-navy p-4 rounded-4 mt-5 text-white">
                <h5 className="fw-bold text-teal mb-3">Legal Inquiries</h5>
                <p className="mb-1">For any clarification on these terms, please contact our administrative office:</p>
                <p className="mb-1 small"><strong>Email:</strong> sales@shree-enterprise.com</p>
                <p className="mb-0 small"><strong>Location:</strong> Malekpur Chokdi, Mahisagar, Gujarat</p>
              </div>
            </div>

            <div className="mt-5 text-center">
              <a href="/contact" className="text-decoration-none">
                <Button variant="outline-primary" size="lg" className="rounded-pill px-5 fw-bold border-2">
                  Contact Support
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .text-navy { color: #1E3140; }
        .bg-navy { background-color: #1E3140; }
        .text-teal { color: #00A389; }
        .border-teal { border-color: #00A389 !important; }
        .underline-teal { width: 50px; height: 4px; background: #00A389; border-radius: 2px; }
        .terms-content p { margin-bottom: 1.2rem; }
        .terms-content ul li { margin-bottom: 0.5rem; }
      `}</style>
    </section>
  );
}
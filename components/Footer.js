"use client";

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto" style={{ backgroundColor: '#1E3140 !important' }}>
      <Container>
        <Row className="gy-4">

          {/* COLUMN 1: Brand & About */}
          <Col md={4}>
            <h4 className="fw-bold text-white mb-3">Shree Enterprise</h4>
            <p className="text-secondary">
              Premium tissue manufacturing solutions for retail, commercial, and industrial needs.
              Committed to hygiene and sustainability since 2025.
            </p>
          </Col>

          {/* COLUMN 2: Quick Links */}
          <Col md={2} xs={6}>
            <h5 className="fw-bold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-secondary text-decoration-none hover-white">Home</Link></li>
              <li className="mb-2"><Link href="/products" className="text-secondary text-decoration-none hover-white">Products</Link></li>
              <li className="mb-2"><Link href="/about" className="text-secondary text-decoration-none hover-white">About Us</Link></li>
              <li className="mb-2"><Link href="/blog" className="text-secondary text-decoration-none hover-white">Blog</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-secondary text-decoration-none hover-white">Contact</Link></li>
            </ul>
          </Col>

          {/* COLUMN 3: Contact Info */}
          <Col md={3} xs={6}>
            <h5 className="fw-bold text-white mb-3">Contact Us</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">📍 Ahmedabad, Gujarat</li>
              <li className="mb-2">📞 +91 98765 43210</li>
              <li className="mb-2">✉️ sales@shree-enterprise.com</li>
            </ul>
          </Col>

          {/* COLUMN 4: Social Media & Legal */}
          <Col md={3}>
            <h5 className="fw-bold text-white mb-3">Follow Us</h5>

            <div className="d-flex gap-3 mb-4">

              {/* Facebook Icon */}
              <a href="#" className="text-white fs-4" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 
                  8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 
                  1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 
                  0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 
                  6.75-3.934 6.75-7.951" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a href="#" className="text-white fs-4" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 
                  2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 
                  .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 
                  0 5.827 0 8.001c0 2.172.01 2.444.48 3.297.04.852.174 
                  1.433.372 1.942.205.526.478.972.923 
                  1.417.444.445.89.719 1.416.923.51.198 
                  1.09.333 1.942.372C5.555 15.99 5.827 16 
                  8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 
                  1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 
                  10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 
                  3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42a6.7 6.7 0 0 
                  0-1.943-.372C10.443.01 10.172 0 7.998 0h.003z" />
                  <path d="M8 4.11a3.89 3.89 0 1 0 0 7.78 
                  3.89 3.89 0 0 0 0-7.78zm0 1.44a2.45 
                  2.45 0 1 1 0 4.9 2.45 2.45 0 0 1 0-4.9z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="#" className="text-white fs-4" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
                  0 16 .513 16 1.146v13.708c0 .633-.526 
                  1.146-1.175 1.146H1.175C.526 16 0 
                  15.487 0 14.854V1.146zm4.943 
                  12.248V6.169H2.542v7.225h2.401zM3.743 
                  5.205c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
                  0-1.359.54-1.359 1.248 0 .694.521 
                  1.248 1.359 1.248zM16.904 
                  9.632c0-3.308-4.608-2.684-5.462-1.134.012-2.181-1.092-3.053-2.216-3.053-1.143 
                  0-1.943.815-2.572 1.698v-.898H4.268c.03 
                  6.432 0 7.225 0 7.225h2.386v-4.04c0-1.023.195-2.035 
                  1.477-2.035 1.265 0 1.296 
                  1.196 1.296 2.106v3.969h2.386v-4.273z" />
                </svg>
              </a>

              {/* ⭐ WhatsApp Icon Added */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white fs-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 8.017.003 
                  7.76 7.76 0 0 0 .258 
                  7.76c0 1.368.357 2.706 1.029 
                  3.89L0 16l4.46-1.273a7.73 7.73 0 0 0 
                  3.556.906h.003c4.272 
                  0 7.758-3.486 7.758-7.758a7.73 
                  7.73 0 0 0-2.176-5.549zM8.02 
                  14.52a6.7 6.7 0 0 1-3.43-.94l-.246-.146-2.643.756.756-2.574-.16-.264a6.73 
                  6.73 0 0 1-1.031-3.57c0-3.72 
                  3.03-6.75 6.75-6.75 1.804 0 
                  3.497.703 4.773 
                  1.98a6.71 6.71 0 0 1 1.977 
                  4.77c-.003 3.72-3.033 
                  6.74-6.754 6.74zm3.7-5.04c-.2-.1-1.18-.58-1.36-.646-.18-.065-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.07-.15.04-.27-.02-.38-.06-.1-.44-1.06-.6-1.46-.16-.38-.32-.33-.44-.33-.11-.01-.24-.01-.37-.01a.72.72 
                  0 0 0-.52.24c-.18.2-.68.66-.68 
                  1.63 0 .97.7 1.91.8 
                  2.05.1.13 1.37 2.1 3.32 
                  2.95.47.2.84.32 1.13.41.47.15.9.13 
                  1.24.08.38-.06 1.18-.48 
                  1.35-.95.17-.47.17-.87.12-.95-.05-.08-.18-.13-.38-.23z" />
                </svg>
              </a>

            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* COPYRIGHT SECTION */}
        <Row className="text-center text-md-start">
          <Col md={6}>
            <p className="text-secondary mb-0 small">
              &copy; 2025 <strong>Shree Enterprise</strong>. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-secondary mb-0 small">
              <Link href="/privacy" className="text-decoration-none text-secondary me-3 hover-white">Privacy Policy</Link>
              <Link href="/terms" className="text-decoration-none text-secondary hover-white">Terms & Conditions</Link>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Hover Styling */}
      <style jsx>{`
        .hover-white:hover {
            color: var(--primary-blue) !important;
            padding-left: 5px;
            transition: all 0.3s ease;
        }
        footer {
            background-color: var(--text-dark) !important;
        }
      `}</style>
    </footer>
  );
}
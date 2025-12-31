"use client";

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

// Helper function to create slugs (Moved here to fix 'Module not found' error)
const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// 1. BLOG POST DATA (UPDATED BLOG 4 TO GLOBAL LOGISTICS)
const blogPosts = [
  {
    id: 1,
    title: "The Future is Bamboo: Sustainable Tissue Production",
    date: "November 10, 2025",
    excerpt: "Discover the environmental benefits of switching to bamboo-based fibers, reducing our water footprint and saving trees without compromising on softness.",
    img: "/blog_bamboo.jpg",
    content: `
      <p>The global tissue industry is undergoing a sustainability revolution, and bamboo is leading the charge. Bamboo is one of the fastest-growing plants on earth, requiring significantly less water and no pesticides to thrive. For Shree Enterprise, this shift represents more than just a trend—it's a core commitment to our planet.</p>
      <p>By integrating bamboo pulp into 40% of our production line, we are offering clients a highly durable and surprisingly soft alternative to traditional wood pulp. This ensures that every bulk order contributes positively to the circular economy and meets the growing demand for eco-certified products.</p>
      <h3 class="mt-4 fw-bold text-primary">Key Benefits of Bamboo Tissue</h3>
      <ul>
          <li>**Rapid Renewal:** Bamboo regenerates fully in 3-5 months, compared to decades for hardwood trees.</li>
          <li>**Zero Pesticides:** It naturally resists pests, meaning no harmful chemicals enter our production cycle.</li>
          <li>**Superior Strength:** Bamboo fibers are naturally long and strong, resulting in tissue that holds up better, even when wet.</li>
      </ul>
      <p>Talk to our sales team today about how you can transition your inventory to our new bamboo line.</p>
    `,
  },
  {
    id: 2,
    title: "Inside the Factory: Our New Automation Tech",
    date: "October 22, 2025",
    excerpt: "We have recently upgraded our Ahmedabad facility with automated cutters, increasing our daily output by 200% while ensuring every single sheet is cut to microscopic precision.",
    img: "/blog_automation.jpg",
    content: `
      <p>Automation is not just about speed; it's about unparalleled hygiene and consistency. Our new German-engineered machinery operates in a closed-loop environment, ensuring the tissue remains untouched by human hands from the raw material stage to final packaging.</p>
      <p>This massive infrastructure investment allows Shree Enterprise to handle orders of any scale, providing the confidence that every unit you receive meets the same exacting standards. Our capacity now positions us as the ideal partner for large international distributors.</p>
    `,
  },
  {
    id: 3,
    title: "Why Hygiene Matters More Than Ever",
    date: "September 15, 2025",
    excerpt: "How we ensure every roll is sterilized and safe for family use, focusing on our new UV-C sterilization process.",
    img: "/hygiene.png",
    content: `
      <p>Hygiene is non-negotiable. Our new UV-C sterilization process is integrated directly into the final packaging stage. This powerful light treatment eradicates 99.9% of bacteria and viruses, ensuring a sterile product before it reaches your customer.</p>
      <p>We pride ourselves on going beyond industry standards to deliver products that protect public health and safety. Our dedicated quality control lab conducts hourly tests on all batches.</p>
    `,
  },
  {
    id: 4,
    title: "Global Supply Chain: Scaling Wholesale for Retail Giants",
    date: "December 29, 2025",
    excerpt: "A deep dive into our logistics network that allows us to deliver 50 tons of inventory to ports and distributors worldwide every day.",
    img: "/Blog4.png",
    content: `
      <p>Scaling a manufacturing business requires more than just high-speed machines; it requires a bulletproof logistics network. At Shree Enterprise, our Mahisagar facility is strategically located to serve both domestic markets and international ports, ensuring that our 50-ton daily output reaches its destination without delay.</p>
      <p>We partner with top-tier logistics firms to provide real-time tracking and optimized shipping routes, reducing lead times for our wholesale partners and retail giants. This infrastructure is what allows us to maintain a zero-downtime supply chain for hospitals, hotels, and distributors globally.</p>
    `,
  },
];

export default function Blog() {
  return (
    <section className="py-5 bg-light min-vh-100">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="fw-bold text-dark display-4">Latest News & Insights</h1>
          <p className="text-muted lead">Stay informed on hygiene, sustainability, and manufacturing technology.</p>
        </div>

        {/* Loop through the 4 posts with alternating layouts */}
        {blogPosts.map((post, index) => (
          <div key={post.id} className="bg-white p-4 rounded shadow-sm mb-5 border-0 hover-lift" data-aos="fade-up" data-aos-delay={index * 100}>
            <Row className="align-items-center">
              {/* Photo Section - Alternates left/right based on index */}
              <Col md={6} className={`mb-4 mb-md-0 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                <div className="overflow-hidden rounded shadow-sm">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="img-fluid w-100 transition-transform"
                    style={{ objectFit: 'cover', height: '350px' }}
                  />
                </div>
              </Col>
              
              {/* Description Section */}
              <Col md={6} className={index % 2 !== 0 ? 'order-md-1' : ''}>
                <div className={index % 2 !== 0 ? 'pe-md-4' : 'ps-md-4'}>
                  <small className="text-primary fw-bold text-uppercase tracking-widest">{post.date}</small>
                  <h2 className="fw-bold mt-2 mb-3 h3 text-navy">{post.title}</h2>
                  <p className="text-muted lead" style={{ fontSize: '1.05rem' }}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${toSlug(post.title)}`} passHref>
                    <Button variant="outline-dark" className="mt-2 rounded-pill px-4 fw-bold">
                      Read Full Article
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        ))}

      </Container>

      <style jsx global>{`
        .text-navy { color: #1E3140; }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
        }
        .transition-transform {
          transition: transform 0.5s ease;
        }
        .hover-lift:hover .transition-transform {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
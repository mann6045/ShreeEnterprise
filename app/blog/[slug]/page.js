"use client";

import { useParams } from 'next/navigation';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Link from 'next/link';

// Helper function to create slugs (Must match the logic in blog/page.js)
const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Data replicated from blog/page.js for lookup
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
          <li><strong>Rapid Renewal:</strong> Bamboo regenerates fully in 3-5 months, compared to decades for hardwood trees.</li>
          <li><strong>Zero Pesticides:</strong> It naturally resists pests, meaning no harmful chemicals enter our production cycle.</li>
          <li><strong>Superior Strength:</strong> Bamboo fibers are naturally long and strong, resulting in tissue that holds up better, even when wet.</li>
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
      <h3 class="mt-4 fw-bold text-primary">Technology Highlights</h3>
      <div class="row">
        <div class="col-md-6">
          <p><strong>Precision Cutting:</strong> Microscopic blade accuracy minimizes waste and guarantees uniform sheet size across all products.</p>
        </div>
        <div class="col-md-6">
          <p><strong>Energy Efficiency:</strong> The new system reduces energy consumption by 15% compared to our previous line, aligning with our sustainability goals.</p>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    title: "Why Hygiene Matters More Than Ever",
    date: "September 15, 2025",
    excerpt: "How we ensure every roll is sterilized and safe for family use, focusing on our new UV-C sterilization process.",
    img: "/hygiene.png",
    content: `
      <p>Hygiene is non-negotiable. Our new **UV-C sterilization process** is integrated directly into the final packaging stage. This powerful light treatment eradicates 99.9% of bacteria and viruses, ensuring a sterile product before it reaches your customer.</p>
      <p>We pride ourselves on going beyond industry standards to deliver products that protect public health and safety. Our dedicated quality control lab conducts hourly tests on all batches.</p>
      <p>The final layer of protection involves tamper-proof, sealed packaging which guarantees the product remains sterile until opened by the end-user.</p>
    `,
  },
  {
    id: 4,
    title: "Global Supply Chain: Scaling Wholesale for Retail Giants",
    date: "December 29, 2025",
    excerpt: "A deep dive into our logistics network that allows us to deliver 50 tons of inventory to ports and distributors worldwide every day.",
    img: "/Blog42.png",
    content: `
      <p>Scaling a manufacturing business requires more than just high-speed machines; it requires a bulletproof logistics network. At Shree Enterprise, our Mahisagar facility is strategically located to serve both domestic markets and international ports, ensuring that our 50-ton daily output reaches its destination without delay.</p>
      <p>We partner with top-tier logistics firms to provide real-time tracking and optimized shipping routes, reducing lead times for our wholesale partners and retail giants. This infrastructure is what allows us to maintain a zero-downtime supply chain for hospitals, hotels, and distributors globally.</p>
      <h3 class="mt-4 fw-bold text-primary">Logistics & Export Capabilities</h3>
      <ul>
          <li><strong>Strategic Location:</strong> Our facility in Mahisagar provides direct access to major state highways and proximity to key maritime ports.</li>
          <li><strong>Bulk Handling:</strong> Optimized for container loading, ensuring large-scale orders are palletized and shipped within 48 hours of production.</li>
          <li><strong>Global Standards:</strong> Every export batch is accompanied by international quality certifications required for European and GCC markets.</li>
      </ul>
      <p>Whether you are a retail chain or an international hygiene distributor, our supply chain is built to grow with your business.</p>
    `,
  },
];

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug;

  // Find the matching post using the slug
  const post = blogPosts.find(p => toSlug(p.title) === slug);

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <h1 className="text-danger">Article Not Found</h1>
        <Link href="/blog"><Button variant="primary" className="mt-3">Back to Blog</Button></Link>
      </Container>
    );
  }

  return (
    <section className="py-5 bg-light min-vh-100">
      <Container>
        {/* Back Button */}
        <Link href="/blog" className="text-decoration-none text-muted mb-4 d-inline-block">
          &larr; Back to All Articles
        </Link>
        
        <Card className="p-4 shadow-lg border-0" data-aos="fade-up">
            
            {/* Hero Image */}
            <img 
                src={post.img} 
                alt={post.title} 
                className="img-fluid rounded shadow-sm w-100 mb-4"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
            />

            <Row className="justify-content-center">
                <Col lg={10}>
                    <small className="text-primary fw-bold text-uppercase tracking-widest">{post.date}</small>
                    <h1 className="fw-bold display-5 mb-3">{post.title}</h1>
                    <p className="lead text-secondary mb-5">{post.excerpt}</p>
                    
                    {/* The Full Content - Using dangerouslySetInnerHTML for the rich text from our object */}
                    <div 
                        className="blog-content text-dark mb-5 lh-lg" 
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="text-center border-top pt-4">
                         <Link href="/contact">
                            <Button variant="primary" size="lg" className="rounded-pill px-5">Contact Sales for Bulk Inquiry</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Card>
      </Container>
      
      <style jsx>{`
        .blog-content :global(p) { margin-bottom: 1.5rem; }
        .blog-content :global(ul) { margin-bottom: 1.5rem; }
        .blog-content :global(li) { margin-bottom: 0.5rem; }
      `}</style>
    </section>
  );
}
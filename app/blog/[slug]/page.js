import React from 'react';

// Helper function to create slugs (Must match the logic used in the blog list)
const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Data replicated for lookup and static generation
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
      <h3 class="mt-4 fw-bold text-primary" style="color: #00A389 !important;">Key Benefits of Bamboo Tissue</h3>
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

/**
 * MANDATORY: generateStaticParams handles the Static Export for Hostinger.
 */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: toSlug(post.title),
  }));
}

export default async function BlogDetail({ params }) {
  // Await params as required in Next.js 15+ Server Components
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const post = blogPosts.find((p) => toSlug(p.title) === slug);

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h1 className="text-danger">Article Not Found</h1>
        <a href="/blog" className="btn btn-primary mt-3">Back to Blog</a>
      </div>
    );
  }

  return (
    <main className="bg-light pb-5 pt-4" style={{ minHeight: '100vh' }}>
      <div className="container">
        {/* Back Link */}
        <div className="mb-4">
          <a href="/blog" className="text-decoration-none text-muted fw-bold" style={{ fontSize: '0.9rem' }}>
            &larr; BACK TO ALL ARTICLES
          </a>
        </div>
        
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Hero Image */}
            <div style={{ height: '450px', width: '100%', overflow: 'hidden' }}>
                <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="card-body p-4 p-lg-5 bg-white">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <small className="fw-bold text-uppercase tracking-widest" style={{ color: '#00A389' }}>{post.date}</small>
                        <h1 className="fw-bold display-5 mt-2 mb-4" style={{ color: '#1E3140' }}>{post.title}</h1>
                        <p className="lead text-secondary mb-5 fw-medium" style={{ borderLeft: '5px solid #00A389', paddingLeft: '20px' }}>
                            {post.excerpt}
                        </p>
                        
                        {/* Blog Content */}
                        <div 
                            className="blog-post-body text-dark lh-lg" 
                            style={{ fontSize: '1.1rem' }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="text-center border-top mt-5 pt-5">
                            <a href="/contact" className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm" style={{ backgroundColor: '#00A389', borderColor: '#00A389' }}>
                                Contact Sales for Bulk Inquiry
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-post-body p { margin-bottom: 1.8rem; }
        .blog-post-body h3 { font-weight: 800; margin-top: 2.5rem; margin-bottom: 1rem; }
        .blog-post-body ul { margin-bottom: 2rem; }
        .blog-post-body li { margin-bottom: 0.8rem; }
        .rounded-4 { border-radius: 2rem !important; }
      `}} />
    </main>
  );
}
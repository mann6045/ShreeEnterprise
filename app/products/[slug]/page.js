import React from 'react';

/**
 * MANDATORY: generateStaticParams handles the Static Export for Hostinger.
 * This function MUST stay in a Server Component file.
 */
export async function generateStaticParams() {
  const productSlugs = [
    "m-fold-virgin",
    "m-fold-recycled",
    "pop-up-tissue",
    "toilet-roll",
    "box-tissues",
    "pocket-tissues",
    "kitchen-towels",
    "paper-towels",
    "wet-wipes"
  ];

  return productSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Full Product Data
const productsData = [
  {
    slug: "m-fold-virgin",
    category: "M-Fold",
    name: "M-Fold Tissue (Virgin)",
    description: "Premium 100% Virgin pulp hand towels. High absorbency and clinical softness.",
    specs: ["Virgin Soft", "27x27 / 30x30", "2-Ply Construction", "Extra Absorbent"],
    image: "/Product1.png",
    tag: "Best Seller"
  },
  {
    slug: "m-fold-recycled",
    category: "M-Fold",
    name: "M-Fold Tissue (Recycled)",
    description: "Eco-friendly, sustainable hand towels designed for high-traffic commercial areas.",
    specs: ["Recycled Soft", "29x29 / 33x33", "Cost-Effective", "Eco-Certified"],
    image: "/Product2.png",
    tag: "Eco-Friendly"
  },
  {
    slug: "pop-up-tissue",
    category: "Facial",
    name: "Pop Up Tissue",
    description: "Convenient pop-up dispenser pack. Ideal for offices, hospitals, and cars.",
    specs: ["Virgin Soft", "Inter-Folded", "20x10 / 27x27", "Hygienic Dispensing"],
    image: "/Product3.png",
    tag: "Clinical"
  },
  {
    slug: "toilet-roll",
    category: "Rolls",
    name: "Toilet Roll",
    description: "Ultra-soft tissue with core-stabilized technology for hospitality and home use.",
    specs: ["Virgin Soft", "Septic Safe", "3-Ply Premium", "Individually Wrapped"],
    image: "/Product4.png",
    tag: "Hospitality"
  },
  {
    slug: "box-tissues",
    category: "Facial",
    name: "Box Tissues",
    description: "Premium facial tissues in a protective box. Hypoallergenic and ultra-soft.",
    specs: ["Virgin Soft", "20x20 Size", "Hypoallergenic", "Gentle on Skin"],
    image: "/Product5.png",
    tag: "Premium"
  },
  {
    slug: "pocket-tissues",
    category: "Facial",
    name: "Pocket Tissues",
    description: "On-the-go hygiene. Compact packs that fit easily in pockets or travel bags.",
    specs: ["Virgin Soft", "3-Ply Strength", "Portable Packs", "Resealable"],
    image: "/Product6.png",
    tag: "Travel"
  },
  {
    slug: "kitchen-towels",
    category: "Kitchen",
    name: "Kitchen Towels",
    description: "Heavy-duty towels designed to absorb oil and water instantly in kitchens.",
    specs: ["Recycled Soft", "40x40 Size", "High Absorbency", "Food Safe"],
    image: "/Product7.png",
    tag: "Absorbent"
  },
  {
    slug: "paper-towels",
    category: "Industrial",
    name: "Paper Towels (Industrial)",
    description: "Hard-wearing industrial towels with high wet strength for heavy usage.",
    specs: ["Recycled Hard", "High Wet Strength", "C-Fold / Interfold", "Bulk Packaging"],
    image: "/Product8.png",
    tag: "Industrial"
  },
  {
    slug: "wet-wipes",
    category: "Medical",
    name: "Wet Tissues (Wipes)",
    description: "Clinical grade non-woven disinfectant wipes for healthcare and personal use.",
    specs: ["Non-Woven Fabric", "Disinfectant Solution", "Baby & Skin Safe", "Alcohol-Free"],
    image: "/Product9.png",
    tag: "New Launch"
  }
];

export default async function ProductPage({ params }) {
  // Await params as required in Next.js 15+ Server Components
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h1 style={{ color: '#1E3140' }}>Product Not Found</h1>
        <a href="/products" className="btn btn-primary rounded-pill mt-3 px-4">Back to Products</a>
      </div>
    );
  }

  return (
    <main className="bg-white" style={{ minHeight: '100vh', paddingBottom: '80px', paddingTop: '60px' }}>
      <div className="container">
        
        {/* Back Link */}
        <div className="mb-5">
          <a href="/products" className="text-decoration-none fw-bold" style={{ color: '#00A389', fontSize: '0.9rem', letterSpacing: '1px' }}>
            ← BACK TO COLLECTION
          </a>
        </div>

        <div className="row g-5 align-items-center">
          
          {/* LEFT: IMAGE SECTION (Original Proportions) */}
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden shadow-lg border rounded-5 bg-light">
              <img 
                src={product.image} 
                alt={product.name} 
                className="img-fluid w-100 h-auto"
                style={{ minHeight: '500px', objectFit: 'cover' }}
              />
              <div className="position-absolute top-0 end-0 m-4">
                <span className="badge rounded-pill px-3 py-2 shadow-sm" style={{ backgroundColor: '#1E3140', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>
                  {product.tag}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION (Original Style) */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <span className="badge mb-3 px-3 py-2 border border-success text-success rounded-pill" style={{ fontSize: '0.75rem', letterSpacing: '2px', fontWeight: '800' }}>
                {product.category}
              </span>
              
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#1E3140' }}>{product.name}</h1>
              
              <p className="lead text-muted mb-5" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                {product.description}
              </p>

              {/* LIQUID GLASS SPECIFICATIONS PANEL */}
              <div className="liquid-glass-box p-4 p-md-5 mb-5">
                <h6 className="fw-bold mb-4" style={{ color: '#1E3140', fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.6 }}>TECHNICAL SPECIFICATIONS</h6>
                <div className="row g-3">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="me-3 rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '24px', height: '24px', backgroundColor: '#00A389' }}>
                          <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                        </div>
                        <span className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>{spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a 
                  href="https://wa.me/918160675257" 
                  className="btn btn-lg px-5 py-3 rounded-pill shadow-sm border-0 flex-grow-1 text-white fw-bold"
                  style={{ backgroundColor: '#00A389', fontSize: '0.9rem' }}
                >
                  WhatsApp Inquiry
                </a>
                <a 
                  href="/contact" 
                  className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill flex-grow-1 fw-bold"
                  style={{ fontSize: '0.9rem' }}
                >
                  Get Bulk Quote
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .rounded-5 { border-radius: 2.5rem !important; }
        .liquid-glass-box {
          background: rgba(248, 249, 250, 0.7);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        }
        .display-4 { font-weight: 800 !important; }
        .btn:hover { transform: translateY(-3px); transition: 0.3s; }
      `}} />
    </main>
  );
}
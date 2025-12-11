"use client";

import { useParams } from 'next/navigation';
import { Container, Row, Col, Button, ListGroup, Table, Badge } from 'react-bootstrap';
import Link from 'next/link';

// 1. THE DATABASE OF YOUR PRODUCTS (UPDATED WITH NEW LIST)
const productData = {
  "m-fold-virgin": {
    title: "M-Fold Tissue (Virgin Soft)",
    description: "Premium, ultra-soft M-fold towels made from 100% virgin pulp. Designed for luxury hand drying in high-end corporate and hospitality settings.",
    img: "/Product1.png",
    features: ["100% Virgin Soft Pulp", "High Absorbency", "Dispenses One-at-a-Time", "Wet Strength Formula"],
    variations: ["2-Ply (Luxury)", "1-Ply (Standard)"],
    specs: {
      GSM: "18 GSM",
      Ply: "1 or 2 Ply",
      SheetSize: "27cm x 27cm, 30cm x 30cm",
      Packing: "150 Sheets / Pack",
      PaperType: "Virgin Soft",
    }
  },
  "m-fold-recycled": {
    title: "M-Fold Tissue (Recycled Soft)",
    description: "Eco-conscious M-fold towels utilizing recycled pulp. Provides soft and effective drying for general commercial use and large institutional orders.",
    img: "/Product2.png",
    features: ["Recycled Soft Pulp", "Eco-Certified Production", "Cost-Effective", "Excellent Value"],
    variations: ["2-Ply (Standard)", "1-Ply (Economy)"],
    specs: {
      GSM: "17 GSM",
      Ply: "1 or 2 Ply",
      SheetSize: "29cm x 29cm, 33cm x 33cm",
      Packing: "200 Sheets / Pack",
      PaperType: "Recycled Soft",
    }
  },
  "pop-up-tissue": {
    title: "Pop Up Tissue",
    description: "Inter-folded tissues for easy, single-sheet dispensing from pop-up boxes. Ideal for fast-paced hospitality and restaurant settings.",
    img: "/Product3.png",
    features: ["Inter-Folded Pop Up Design", "Virgin Soft Quality", "Dispensing Efficiency", "Reduced Waste"],
    variations: ["Standard Box", "Bulk Dispenser Refill"],
    specs: {
      GSM: "13 GSM",
      Ply: "2 Ply",
      SheetSize: "20cm x 10cm, 27cm x 27cm",
      Packing: "250 Sheets / Box",
      PaperType: "Virgin Soft",
    }
  },
  "toilet-roll": {
    title: "Toilet Roll",
    description: "Soft and reliable toilet tissue rolls. Rapid dissolve formula is septic-safe for modern plumbing systems. Available in large commercial and standard formats.",
    img: "/Product4.png",
    features: ["Septic Safe", "High Sheet Count", "Soft & Durable", "100% Virgin Pulp"],
    variations: ["Standard Rolls", "Jumbo Rolls (Coreless)"],
    specs: {
      GSM: "17 GSM",
      Ply: "2 or 3 Ply",
      SheetSize: "10cm x 10cm",
      Packing: "48 Rolls / Carton",
      PaperType: "Virgin Soft",
    }
  },
  "box-tissues": {
    title: "Box Tissues",
    description: "Classic rectangular box tissues with extra soft virgin paper. Gentle on skin, perfect for offices, lobbies, and executive suites.",
    img: "/Product5.png",
    features: ["Hypoallergenic", "Extra Soft Touch", "Stylish Box Design", "Dust-Free"],
    variations: ["Rectangular (200 Sheets)", "Cube (100 Sheets)"],
    specs: {
      GSM: "14 GSM",
      Ply: "2 Ply",
      SheetSize: "20cm x 20cm",
      Packing: "36 Boxes / Case",
      PaperType: "Virgin Soft",
    }
  },
  "pocket-tissues": {
    title: "Pocket Tissues",
    description: "Conveniently packaged pocket tissues for on-the-go personal hygiene. Ideal for travel or distribution in event bags and promotional kits.",
    img: "/Product6.png",
    features: ["Compact & Portable", "Virgin Soft Quality", "Resealable Pack", "Retail Ready"],
    variations: ["10-Pack", "15-Pack"],
    specs: {
      GSM: "14 GSM",
      Ply: "3 Ply",
      SheetSize: "20cm x 20cm",
      Packing: "50 Packs / Box",
      PaperType: "Virgin Soft",
    }
  },
  "kitchen-towels": {
    title: "Kitchen Towels",
    description: "Heavy-duty paper towels made from soft recycled fibers. Excellent absorbency for kitchen spills and general cleaning tasks.",
    img: "/Product7.png",
    features: ["Recycled Soft Pulp", "High Absorbency", "Thick and Durable", "Perforated Sheets"],
    variations: ["Standard Roll", "Giant Roll (High Count)"],
    specs: {
      GSM: "20 GSM",
      Ply: "2 Ply",
      SheetSize: "36cm x 36cm, 40cm x 40cm",
      Packing: "12 Rolls / Carton",
      PaperType: "Recycled Soft",
    }
  },
  "paper-towels": {
    title: "Paper Towels (Hard/Industrial)",
    description: "Hard-grade paper towels designed for industrial and workshop use. Highly durable and cost-effective for non-stop cleaning environments.",
    img: "/Product8.png",
    features: ["Hard/Industrial Grade", "High Wet Strength", "Cost-Effective Bulk Buy", "Ideal for Machinery"],
    variations: ["C-Fold", "Interfold"],
    specs: {
      GSM: "22 GSM",
      Ply: "1 Ply",
      SheetSize: "33cm x 33cm, 36cm x 36cm",
      Packing: "24 Packs / Case",
      PaperType: "Recycled Hard",
    }
  },
  "wet-wipes": {
    title: "Wet Tissues (Wipes)",
    description: "Hygienic wet wipes for skin or surface sanitization. Available in various formulas (e.g., disinfectant, baby-safe, makeup remover).",
    img: "/Product9.png",
    features: ["Alcohol-Free Options", "Resealable Pack", "pH Balanced", "Non-Woven Material"],
    variations: ["Disinfectant Wipes", "Baby Wipes", "Personal Hygiene Wipes"],
    specs: {
      GSM: "40 GSM Non-Woven",
      Ply: "N/A",
      SheetSize: "15cm x 20cm",
      Packing: "50 Packs / Box",
      PaperType: "Non-Woven",
    }
  },
};

// Function to map specs object to a clean array for display (RETAINS ORIGINAL LOGIC)
const formatSpecs = (specs) => {
  return Object.entries(specs).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').trim(), 
    value: value
  }));
};


export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug; 
  const product = productData[slug];

  // Error check
  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h1 className="text-danger">Product Not Found</h1>
        <Link href="/products"><Button variant="primary" className="mt-3">Back to Catalog</Button></Link>
      </Container>
    );
  }

  // Format the specs for the table
  const specsList = formatSpecs(product.specs);

  return (
    <section className="py-5 min-vh-100 bg-white">
      <Container data-aos="fade-up">
        {/* Back Button */}
        <Link href="/products" className="text-decoration-none text-muted mb-4 d-inline-block">
          &larr; Back to All Products
        </Link>

        <Row className="align-items-start">
          {/* Left: Image */}
          <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <img 
              src={product.img} 
              alt={product.title} 
              className="img-fluid rounded shadow-lg w-100" 
            />
          </Col>

          {/* Right: Details & Request Quote */}
          <Col md={6} data-aos="fade-left">
            <h1 className="fw-bold display-5 text-primary mb-3">{product.title}</h1>
            <p className="lead text-secondary mb-4">{product.description}</p>
            
            <Link href="/contact">
              <Button variant="primary" size="lg" className="mb-5 w-100">
                Request Bulk Quote
              </Button>
            </Link>

          </Col>
        </Row>
        
        {/* NEW SECTION: Technical Specifications & Features */}
        <Row className="mt-5 pt-4">
          
          {/* COLUMN 1: Technical Specs Table */}
          <Col lg={6} className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h2 className="fw-bold h4 mb-3 border-bottom pb-2">Technical Specifications</h2>
            <Table striped bordered hover className="shadow-sm">
              <tbody className="fw-semibold">
                {specsList.map((spec, index) => (
                  <tr key={index}>
                    <td className="text-dark">{spec.name}</td>
                    <td className="text-muted">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          {/* COLUMN 2: Key Features */}
          <Col lg={6} className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <h2 className="fw-bold h4 mb-3 border-bottom pb-2">Key Product Advantages</h2>
            <ListGroup variant="flush">
              {product.features.map((feat, index) => (
                <ListGroup.Item key={index} className="bg-light border-0 mb-2 rounded px-3 py-2 d-flex align-items-start">
                  <span className="text-success me-2 fw-bold fs-5">✓</span>
                  <span className="text-dark">{feat}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          
          {/* COLUMN 3: Variations */}
          <Col lg={12} className="mb-5" data-aos="fade-up" data-aos-delay="300">
            <h2 className="fw-bold h4 mb-3 border-bottom pb-2">Available Bulk Variants</h2>
            <div className="d-flex flex-wrap gap-3">
              {product.variations.map((variant, index) => (
                <Badge key={index} pill bg="primary" className="p-3 fs-6 shadow-sm">
                  {variant}
                </Badge>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
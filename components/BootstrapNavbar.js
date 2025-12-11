"use client";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Define the delay time (in milliseconds)
const HOVER_DELAY = 200; 
let hoverTimeout; // Variable to hold the timer reference

// The component that manages the Product dropdown behavior
function ProductDropdown() {
    const [show, setShow] = useState(false);

    // Function to handle showing the menu instantly on hover
    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout);
        setShow(true);
    };

    // Function to handle hiding the menu after a short delay
    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setShow(false);
        }, HOVER_DELAY);
    };

    return (
        <NavDropdown
            title={<span className="text-white fw-semibold">Products</span>}
            id="product-dropdown-final"
            show={show} // Controlled by state
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
                if (e.target.tagName === 'SPAN') { 
                    window.location.href = '/products';
                }
            }}
            className="product-link-final-clean"
        >
            {/* --- UPDATED DROPDOWN ITEMS --- */}
            <NavDropdown.Item as={Link} href="/products/m-fold-virgin">M-Fold Tissue (Virgin)</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/m-fold-recycled">M-Fold Tissue (Recycled)</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/pop-up-tissue">Pop Up Tissue</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/toilet-roll">Toilet Roll</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/box-tissues">Box Tissues</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/pocket-tissues">Pocket Tissues</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/kitchen-towels">Kitchen Towels</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/paper-towels">Paper Towels (Industrial)</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/products/wet-wipes">Wet Tissues (Wipes)</NavDropdown.Item>
            {/* --- END UPDATED ITEMS --- */}
        </NavDropdown>
    );
}

export default function BootstrapNavbar() {
    return (
        <>
            {/* BACKGROUND COLOR CHANGED TO A DARKER GRAY-BLUE FOR CONTRAST */}
            <Navbar expand="lg" className="shadow-sm sticky-top" style={{ backgroundColor: '#1E3140' }}>
                <Container>
                    
                    {/* LOGO IMPLEMENTATION */}
                    <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
                        <img
                            src="/Logo.png" 
                            alt="Shree Enterprise Logo"
                            height="30" 
                            className="d-inline-block align-top me-2"
                        />
                        <span className="fw-bold text-white fs-4 d-none d-sm-block">Shree Enterprise</span>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            
                            <Nav.Link as={Link} href="/" className="text-white fw-semibold">Home</Nav.Link>
                            
                            {/* 2. PRODUCTS (Using the new stable component with delay) */}
                            <ProductDropdown />

                            <Nav.Link as={Link} href="/blog" className="text-white fw-semibold">Blog</Nav.Link>
                            <Nav.Link as={Link} href="/about" className="text-white fw-semibold">About Us</Nav.Link>

                            {/* CONTACT - Simple Text Link */}
                            <Nav.Link as={Link} href="/contact" className="text-white fw-semibold">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* CSS FOR STYLING AND ANIMATION */}
            <style jsx global>{`
                /* 1. Remove the default dropdown arrow/caret symbol */
                .product-link-final-clean .dropdown-toggle::after {
                    display: none !important;
                }

                /* 2. Add animation properties to the dropdown menu */
                .product-link-final-clean .dropdown-menu {
                    transform-origin: top; 
                    
                    opacity: 0;
                    transform: perspective(1000px) rotateX(-90deg); 
                    transition: opacity 0.3s ease-out, transform 0.3s ease-out;

                    visibility: hidden;
                    pointer-events: none; 

                    /* Style Polish */
                    border-radius: 8px;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.25);
                    border: none;
                }

                /* 3. Final visible state for the 3D animation */
                .product-link-final-clean.show .dropdown-menu {
                    opacity: 1;
                    transform: perspective(1000px) rotateX(0deg); 
                    visibility: visible;
                    pointer-events: auto;
                }


                /* 4. Styling for the dropdown items (for consistency) */
                .dropdown-item {
                    padding: 8px 16px;
                    color: #333;
                    transition: background-color 0.2s;
                    text-decoration: none;
                    font-weight: 500;
                }

                .dropdown-item:hover {
                    background-color: #e0f8f5; /* Light Teal Hover */
                    color: #00A389;
                }
            `}</style>
        </>
    );
}
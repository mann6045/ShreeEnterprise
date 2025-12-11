"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for animations

export default function AOSClient() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation speed (ms)
      once: true, // Whether animation should happen only once - while scrolling down
      easing: 'ease-out-cubic',
    });
  }, []);

  return null;
}
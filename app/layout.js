import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from 'next/font/google'; 
import BootstrapNavbar from '@/components/BootstrapNavbar'; 
import Footer from '@/components/Footer'; 
import AOSClient from '@/components/AOSClient';
import './globals.css'; 

// Configure the font
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'PureSoft Industries',
  description: 'Premium Tissue Manufacturing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-100">
      {/* Set body to be a flex container that stacks items vertically (d-flex flex-column) */}
      <body className={`${poppins.className} d-flex flex-column h-100`}>
        
        <AOSClient /> 
        <BootstrapNavbar /> 
        
        {/*
          MAIN CONTENT WRAPPER:
          flex-shrink-0 prevents the main content from shrinking, 
          and the body's flex properties automatically push the footer down.
        */}
        <main className="flex-shrink-0">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
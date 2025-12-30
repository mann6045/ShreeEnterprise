import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from 'next/font/google'; 
import BootstrapNavbar from '@/components/BootstrapNavbar'; 
import Footer from '@/components/Footer'; 
import AOSClient from '@/components/AOSClient';
import './globals.css'; 

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Shree Enterprise | Premium Tissue Manufacturing',
  description: 'Leading manufacturer of Virgin and Recycled paper products in Mahisagar, Gujarat.',
  icons: {
    icon: 'https://assets.vercel.com/image/upload/v1607554388/front/nextjs/favicon/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-100">
      <body className={`${poppins.className} d-flex flex-column h-100`}>
        <AOSClient /> 
        <BootstrapNavbar /> 
        <main className="flex-shrink-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
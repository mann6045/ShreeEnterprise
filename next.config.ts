/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // This tells Next.js to create folders with index.html files
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows smooth local asset serving without complex remote optimization setups
  },
};

module.exports = nextConfig;


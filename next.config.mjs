/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

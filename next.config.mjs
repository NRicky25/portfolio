/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.example.com" },
      // add more hosts as needed
    ],
    unoptimized: true, // Disable the Image Optimization API
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // 🚫 Disable Turbopack completely
 

  // ✅ Force Webpack usage
  webpack(config) {
    return config;
  },
};

export default nextConfig;


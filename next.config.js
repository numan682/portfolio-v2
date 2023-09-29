/** @type {import('next').NextConfig} */
const isProd = 'production';
const nextConfig = {
  assetPrefix: isProd ? 'https://jhnuman.com' : undefined,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jhnuman.com",
      },
    ],
  },
 
};

module.exports = nextConfig;

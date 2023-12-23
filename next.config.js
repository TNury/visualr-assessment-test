/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.protocol,
        hostname: process.env.host,
      },
    ],
  },
};

module.exports = nextConfig;

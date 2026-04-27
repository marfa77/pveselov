/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixid.studio',
      },
      {
        protocol: 'https',
        hostname: 'pveselov.space',
      },
    ],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;

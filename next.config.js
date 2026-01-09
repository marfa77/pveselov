/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixid.studio'],
  },
  // SEO оптимизация
  compress: true,
  poweredByHeader: false,
  // Генерация статических страниц
  output: 'standalone',
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixid.studio', 'www.pixidstudio.online'],
  },
  // SEO оптимизация
  compress: true,
  poweredByHeader: false,
  // Генерация статических страниц
  output: 'standalone',
  // Headers для безопасности и доступности
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

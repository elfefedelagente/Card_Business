/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  webpack: (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter((rule) => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Ajuste para generar rutas con barra final
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    unoptimized: true, // Para permitir imágenes estáticas con exportación estática
  },
  output: 'export', // Configuración requerida para exportación estática
  basePath: '/Card_Business', // Ajusta las rutas para GitHub Pages
  assetPrefix: '/Card_Business/', // Prefijo para activos estáticos en GitHub Pages
};

module.exports = nextConfig;

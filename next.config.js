/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.xml$/,
      use: 'xml-loader'
    });
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicImport: true,
          header: true,
          skipEmptyLines: true,
          prematureEndLineCount: 0,
      },
    });
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'fs': false,
        'sitemap': 'sitemap/dist/lib/sitemap-simple.js'
      }
    }
    return config;
  },
  i18n: {
    locales: ["zh-HK"],
    defaultLocale: "zh-HK",
  },
  images: {
    domains: ["assets-cdn.heroplus.xyz"],
  },
  reactStrictMode: true,
  async redirects() {
    return [];
  },
};


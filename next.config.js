/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  webpack: (config) => {
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


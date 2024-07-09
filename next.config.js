/** @type {import('next').NextConfig} */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {


  swcMinify: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, ''),
  },

  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {


    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'sitemap.xml'),
            to: path.resolve(config.output.path,'static','media' ,'sitemap.xml'),
          },
        ],
      })
    );



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


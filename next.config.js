/** @type {import('next').NextConfig} */
module.exports = {
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

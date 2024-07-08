/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://yk-ee.com/zh-HK',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://yk-ee.com/zh-HK/server-sitemap.xml', // <==== Add this
      ],
    },
  };

import { GetServerSideProps, NextPage } from 'next';

interface PageProps {
  xml: string;
}

const SiteMap: NextPage<PageProps> = ({  }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yk-ee.com/zh-HK/</loc>
    <lastmod>2024-07-08</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yk-ee.com/zh-HK/service</loc>
    <lastmod>2024-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>` }} />
  );
};

export default SiteMap;
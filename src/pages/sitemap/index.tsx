
import { GetServerSideProps, NextPage } from 'next';

interface PageProps {
  xml: string;
}

const SiteMap: NextPage<PageProps> = ({  }) => {

  const xmlContent = `
   <?xml version="1.0" encoding="UTF-8"?>
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
</urlset>
  `;

  
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlContent, 'application/xml');
  const items = doc.getElementsByTagName('item');

  return (
    <div>
      {Array.from(items).map((item, index) => (
        <div key={index}>
          <h3>{item.getElementsByTagName('name')[0].textContent}</h3>
          <p>{item.getElementsByTagName('description')[0].textContent}</p>
        </div>
      ))}
    </div>
  );
};

export default SiteMap;
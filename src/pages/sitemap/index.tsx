import React, { useEffect, useState } from 'react';
import xmlJs from 'xml-js';
const SiteMap = () => {
  const [xmlData, setXmlData] = useState(null);
  
  useEffect(() => {
    fetch('./sitemap.xml') // Replace with the URL or path to your XML data
      .then((response) => response.text())
      .then((xmlText) => {
        const jsonData = xmlJs.xml2json(xmlText, { compact: true, spaces: 4 });
        setXmlData(JSON.parse(jsonData));
      })
      .catch((error) => {
        console.error('Error fetching XML data:', error);
      });
  }, []);

  return (
    <div style={{display:'none'}}>
      {xmlData ? (
        <pre>{JSON.stringify(xmlData, null, 4)}</pre>
      ) : (
        <p>Loading XML data...</p>
      )}
    </div>
  );
};

export default SiteMap;
import React from 'react';
import Head from 'next/head';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  css?: string;
  js?: string;
  image?: string;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  css,
  js,
  image,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="google-site-verification" content="sDFkCzxvY3ztmNbp5BrQU5An8fnuhQnwPAXMmsxpVzs" />
    <meta name="description" content={description} />
    <meta name="keywords" content="義記膠鐵桶買賣, 桶類用途改造, 膠鐵桶回收, 新界屯門康寶路, 義記陳, 新界九龍香港"/>
    <meta
      name="viewport"
      content="width=device-width,maximum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="義記功能膠鐵桶" />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    {css && <link rel="stylesheet" href={`${css}`} />}
    {image && <meta property="og:image" content={`${image}`} />}
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    
  </Head>
);

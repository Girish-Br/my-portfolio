import React from "react";
import { Helmet } from "react-helmet";

const SEOComponent = ({
  title = "Girish BR | React Developer Freelancer",
  description = "Senior React developer and freelance web application development consultant building modern, scalable web apps.",
  image = "https://girish-br.github.io/my-portfolio/favicon-64.png",
  url = "https://girish-br.github.io/my-portfolio/",
  keywords = "React developer freelancer, senior React developer, web application development freelancer, React consultant, frontend developer, web application development",
  canonicalUrl = url,
  type = "website",
  schema = null,
}) => {
  React.useEffect(() => {
    document.title = title;

    const setMetaTag = (selector, attrName, attrValue, content) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      tag.setAttribute(attrName, attrValue);
      tag.setAttribute("content", content);
    };

    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);
  }, [title, description, keywords, canonicalUrl]);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Girish BR" />
      <meta name="theme-color" content="#0f172a" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Girish BR Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  );
};

export default SEOComponent;
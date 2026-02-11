import React from "react";
import { Helmet } from "react-helmet";

const SEOComponent = ({ 
  title = "Girish BR | Frontend Developer", 
  description = "6+ years experience in React, Node.js, and modern web development",
  image = "https://girish-br.github.io/my-portfolio/preview.png",
  url = "https://girish-br.github.io/my-portfolio"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOComponent;
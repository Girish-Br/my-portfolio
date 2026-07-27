import React from "react";
import { render } from "@testing-library/react";
import SEOComponent from "./SEOComponent";

describe("SEOComponent", () => {
  it("renders keyword-rich metadata and canonical URL", () => {
    render(
      <SEOComponent
        title="Girish BR | React Developer Freelancer"
        description="Senior React developer and freelance web application development consultant"
        url="https://girish-br.github.io/my-portfolio/services"
        keywords="React developer freelancer, senior React developer, web application development freelancer"
      />
    );

    expect(document.title).toBe("Girish BR | React Developer Freelancer");
    expect(document.querySelector('meta[name="description"]').getAttribute("content")).toBe(
      "Senior React developer and freelance web application development consultant"
    );
    expect(document.querySelector('meta[name="keywords"]').getAttribute("content")).toContain(
      "React developer freelancer"
    );
    expect(document.querySelector('link[rel="canonical"]').getAttribute("href")).toBe(
      "https://girish-br.github.io/my-portfolio/services"
    );
  });
});

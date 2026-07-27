// filepath: src/components/About/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import SkillsComponent from "./SkillsComponent";
import SEOComponent from "./SEOComponent";

const About = () => {
  return (
    <>
      <SEOComponent 
        title="About Girish BR | Senior React Developer, MERN Stack Expert & Freelance Consultant"
        description="Learn about Girish BR's background as a senior React developer, freelance consultant, and MERN stack specialist with 6+ years of experience."
        url="https://girish-br.github.io/my-portfolio/about"
        canonicalUrl="https://girish-br.github.io/my-portfolio/about"
        keywords="senior React developer, React consultant, freelance web developer, MERN stack expert, web application development freelancer"
      />
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            <Col md={7} style={{ paddingTop: "30px" }}>
              <h3 style={{ fontSize: "1.8em" }}>
                Get to know <strong className="green">me</strong> better
              </h3>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "50px", paddingBottom: "50px", background: "transparent", maxHeight: "450px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" style={{ maxWidth: "350px", width: "100%" }} />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="green">Skillset </strong>
          </h1>
          <Techstack />

          <SkillsComponent />

          <h1 className="project-heading">
            <strong className="green">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
};

export default About;
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import github from "../../Assets/github.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="green">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here's a glimpse of the projects I've been involved in recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Click on to open GitHub repositories"
              ghLink="https://github.com/Girish-Br"
              description="Explore my GitHub profile for code samples and repositories."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Kotresh Sangam"
              description="A professional website showcase with a clean and modern presentation."
              demoLink="https://www.kotreshsangam.com/"
              demoLabel="Visit Site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Farm2Me"
              description="A service-focused website built to present a business idea effectively."
              demoLink="https://farm2me.in/"
              demoLabel="Visit Site"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

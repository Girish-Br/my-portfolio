import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/portrait-me.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SEOComponent from "../About/SEOComponent";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEOComponent
        title="Girish BR | React Developer Freelancer & Senior React Consultant"
        description="Freelance senior React developer and web application development consultant delivering modern, scalable web apps for businesses and startups."
        url="https://girish-br.github.io/my-portfolio/"
        canonicalUrl="https://girish-br.github.io/my-portfolio/"
        keywords="React developer freelancer, senior React developer, web application development freelancer, React consultant, freelance web developer"
      />
      <Particle />
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
          <Row>
            <Col md={6} style={{ paddingBottom: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="Girish BR - Frontend Developer"
                  className="my-image home-main-img"
                />
              </Tilt>
            </Col>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Girish BR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <div style={{ paddingLeft: 50, paddingTop: 20 }}>
                <Button
                  variant="primary"
                  className="cta-btn"
                  onClick={() => {
                    navigate("/about")
                  }}
                  style={{ pointerEvents: "auto" }}>
                  Explore My Work <FiArrowRight style={{ marginLeft: "8px" }} />
                </Button>
              </div>
            </Col>
          </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    </>
  );
}

export default Home;
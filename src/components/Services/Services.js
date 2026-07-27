import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "../../Assets/services.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import { FaRegStar } from "react-icons/fa";
import SEOComponent from "../About/SEOComponent";

const Services = () => {
    return (
        <section>
            <SEOComponent
                title="React Developer Freelancer | Web Application Development Services"
                description="Hire a senior React developer and freelance web application development consultant for React apps, migrations, APIs, maintenance, and performance tuning."
                url="https://girish-br.github.io/my-portfolio/services"
                canonicalUrl="https://girish-br.github.io/my-portfolio/services"
                keywords="React developer freelancer, web application development freelancer, React consultant, senior React developer, web app development"
            />
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: "center" }}>
                            <Tilt>
                                <img
                                    src={services}
                                    alt="home pic"
                                    className="img-fluid"
                                    style={{ maxHeight: "350px" }}
                                />
                            </Tilt>
                        </Col>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Senior React developer and web application development freelancer available for hire{" "}
                            </h1>
                            <ul>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Complete web application development </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Effective React migration from older versions to latest </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > API development </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Web application maintenance </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Bug fixes </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > I will start my work in AI&ML soon! </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > UI/UX design and prototyping </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Performance optimization </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Cloud deployment and hosting </h5></div>
                                </li>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Consultation and code review </h5></div>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Services;
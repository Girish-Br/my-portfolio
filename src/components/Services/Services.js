import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "../../Assets/services.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import { FaRegStar } from "react-icons/fa";

function Services() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={5} style={{ paddingBottom: 20 }}>
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
                                Hi there! I'm available to work on{" "}
                            </h1>
                            <ul>
                                <li className="about-activity d-flex">
                                    <div><FaRegStar />&nbsp; &nbsp;</div> <div style={{ display: 'inline', paddingTop: "0.1rem" }}><h5 > Web application development with highly responsive design </h5></div>
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
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Services;
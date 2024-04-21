import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I've developed a love for programming, and I believe I've learned something... I think. 🤷‍♂️
              <br />
              <br />I am good in
              <i>
                <b className="green"> Javascript, Python and Java. </b>
              </i>
              <br />
              <br />
              My field of Interests are building new &nbsp;
              <i>
                <b className="green">Web applications</b> and
                also in areas related to{" "}
                <b className="green">
                  AI & ML.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I'm interested to develop web applications
              with <b className="green">Node.js</b> and
              <i>
                <b className="green">
                  {" "}
                  Modern Javascript Library
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{maxHeight: "450px"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>
              Feel free to <span className="green">connect </span>with me
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Girish-Br"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/girish-b-r-4a5864148/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/girish_br/?igsh=MTN5NDZrMndqbWt3ag%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

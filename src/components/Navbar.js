import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import tabLogo from "../Assets/favicon-32.png";
import { CgFileDocument } from "react-icons/cg";
import { HiHomeModern } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  // Helper to check if route is active
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand className="d-flex" style={{ borderRadius: "82% 18% 86% 14% / 60% 74% 26% 40%" }}>
          <Link to="/" onClick={() => setExpand(false)}>
            <Tilt>
              <img src={tabLogo} className="img-fluid logo" alt="brand" />
            </Tilt>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpand(false)}
                className={isActive("/") ? "nav-link-selected" : ""}
              >
                <HiHomeModern style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpand(false)}
                className={isActive("/about") ? "nav-link-selected" : ""}
              >
                <FaUserTie style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/services"
                onClick={() => setExpand(false)}
                className={isActive("/services") ? "nav-link-selected" : ""}
              >
                <FaPeopleCarry style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
                className={isActive("/project") ? "nav-link-selected" : ""}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
                className={isActive("/resume") ? "nav-link-selected" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Girish-Br"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

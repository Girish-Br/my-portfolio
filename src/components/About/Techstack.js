import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

function Techstack() {
  const [hoveredTool, setHoveredTool] = useState('');

  const handleMouseEnter = (toolName) => {
    setHoveredTool(toolName);
  };

  return (
    <div>
      <Row style={{ display: "flex", justifyContent: 'center', height: '3rem', alignContent: "center" }}>
        <div style={{ backgroundColor: "black", borderRadius: "50%" }}>
          {hoveredTool}
        </div>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("JavaScript")} onMouseLeave={() => handleMouseEnter('')}>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Node.js")} onMouseLeave={() => handleMouseEnter('')}>
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("React")} onMouseLeave={() => handleMouseEnter('')}>
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("MongoDB")} onMouseLeave={() => handleMouseEnter('')}>
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Git")} onMouseLeave={() => handleMouseEnter('')}>
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Python")} onMouseLeave={() => handleMouseEnter('')}>
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter("Java")} onMouseLeave={() => handleMouseEnter('')}>
          <DiJava />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;

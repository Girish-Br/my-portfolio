import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiSourcetree,
  SiEclipseide,
  SiJenkins,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import {
  SiFirebase,
} from "react-icons/si";

function Toolstack() {
  const [hoveredTool, setHoveredTool] = useState('');

  const handleIconHover = (toolName) => {
    setHoveredTool(toolName);
  };

  return (
    <div>
      <Row style={{ display: "flex",justifyContent: 'center', height: '3rem', alignContent:"center" }}>
        <div style={{backgroundColor:"black", borderRadius:"50%"}}>
          {hoveredTool}
        </div>
      </Row>
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('Visual Studio Code')} onMouseLeave={() => handleIconHover('')}>
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('Postman')} onMouseLeave={() => handleIconHover('')}>
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('Slack')} onMouseLeave={() => handleIconHover('')}>
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('Eclipse IDE')} onMouseLeave={() => handleIconHover('')}>
          <SiEclipseide />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('SourceTree')} onMouseLeave={() => handleIconHover('')}>
          <SiSourcetree />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('Jenkins')} onMouseLeave={() => handleIconHover('')}>
          <SiJenkins />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('MongoDB')} onMouseLeave={() => handleIconHover('')}>
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('MySQL')} onMouseLeave={() => handleIconHover('')}>
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleIconHover('Firebase')} onMouseLeave={() => handleIconHover('')}>
          <SiFirebase />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;

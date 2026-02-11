import React from "react";
import { Row, Col } from "react-bootstrap";

const Experience = () => {
  const experiences = [
    {
      title: "Custom Software Engineering Senior Analyst",
      company: "Accenture",
      period: "Present",
      details: [
        "Develop and maintain React-based web applications",
        "Collaborate with cross-functional teams",
        "Implement responsive design patterns"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Previous Organizations",
      period: "Past",
      details: [
        "Built scalable UI components",
        "Optimized application performance",
        "Mentored junior developers"
      ]
    }
  ];

  return (
    <div style={{ padding: "40px 0", marginTop: "40px" }}>
      <h2 className="project-heading">
        Professional <span className="green">Journey</span>
      </h2>
      <Row>
        <Col md={8} style={{ margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{
              marginBottom: "30px",
              paddingLeft: "30px",
              borderLeft: "3px solid #90ee90",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                left: "-12px",
                top: 0,
                width: "20px",
                height: "20px",
                background: "#90ee90",
                borderRadius: "50%",
                border: "3px solid #020005"
              }}></div>
              <h5 className="green" style={{ marginBottom: "5px" }}>{exp.title}</h5>
              <p style={{ color: "white", margin: "5px 0" }}>
                <strong>{exp.company}</strong> • {exp.period}
              </p>
              <ul style={{ color: "white", marginTop: "10px" }}>
                {exp.details.map((detail, idx) => (
                  <li key={idx} style={{ marginBottom: "5px" }}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
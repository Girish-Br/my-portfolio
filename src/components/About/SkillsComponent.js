import React from "react";
import { Row, Col } from "react-bootstrap";

const SkillsComponent = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Python", "Java"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      category: "GenAI & AI Workflows",
      skills: ["AI-Assisted Development", "React App Migration with AI", "Prompt Engineering", "Claude / GenAI Tools"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Jenkins", "Postman", "VS Code"]
    }
  ];

  return (
    <div style={{ padding: "40px 0" }}>
      <h2 className="project-heading">
        Technical <span className="green">Expertise</span>
      </h2>
      <Row>
        {skillCategories.map((category, index) => (
          <Col md={6} lg={3} key={index} style={{ marginBottom: "30px" }}>
            <div style={{
              padding: "20px",
              border: "2px solid #90ee90",
              borderRadius: "10px",
              background: "rgba(144, 238, 144, 0.05)"
            }}>
              <h5 className="green" style={{ marginBottom: "15px", fontWeight: "600" }}>
                {category.category}
              </h5>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {category.skills.map((skill, idx) => (
                  <li key={idx} style={{ padding: "5px 0", color: "white" }}>
                    ✓ {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkillsComponent;
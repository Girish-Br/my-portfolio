import React from "react";
import Card from "react-bootstrap/Card";
import { MdFlight } from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";
const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Girish BR </span>
            from <span className="green"> Karnataka, India.</span>
            <br />
            I am currently employed as a Custom Software Engineering Senior Analyst at Accenture.
            <br />
            I build web applications using GenAI-assisted workflows, and have led the migration of
            React applications by leveraging AI-driven development practices for faster, more reliable upgrades.
            <br />
            Alongside my frontend skills, I work across the stack with{" "}
            <span className="green">Node.js</span> and <span className="green">MongoDB</span>.
            <br />
            I have completed Bachelor of Engineering in Information Science from Visvesvaraya Technological University
            <br />
            Apart from coding, I love to!
          </p>
          <ul>
            <li className="about-activity">
              <GiShuttlecock /> Play Badminton
            </li>
            <li className="about-activity">
              <MdFlight /> Travel
            </li>
          </ul>
          <p style={{ color: "#90ee90" }}>
            "I aim to create or contribute to projects, ideas, or initiatives that have a positive impact or bring about meaningful change."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

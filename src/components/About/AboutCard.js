import React from "react";
import Card from "react-bootstrap/Card";
import { MdFlight } from "react-icons/md";
import { GiShuttlecock } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Girish BR </span>
            from <span className="green"> Karnataka, India.</span>
            <br />
            I am currently employed as a Lead developer at Tecnotree Corporation.
            <br />
            I have completed Bachelor of Engineering in Information Science from Visvesvaraya Technological University
            <br />
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
          <footer>- Girish BR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <>
      This is the official GitHub portfolio of Girish BR, a senior React developer, React consultant, and freelance web application development specialist with 6+ years of experience.
      <br/>
      <Typewriter
        options={{
          strings: [
            "React Developer Freelancer",
            "Senior React Developer",
            "React Consultant",
            "Web Application Development Freelancer",
            "MERN Stack Developer",
            "GenAI-Powered Web Developer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};

export default Type;

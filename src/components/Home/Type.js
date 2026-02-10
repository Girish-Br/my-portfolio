import React from "react";
import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <>
      This is the official GitHub portfolio of Girish BR, a React.js Frontend Developer.
      <br/>
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "Open Source Contributor",
            "MERN Stack Developer",
            "Freelancer",
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

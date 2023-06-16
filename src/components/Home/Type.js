import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Game Designer",
          "Computer Scientist",
          "Systems Programmer",
          "Software Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 15,
        delay: 15,
        pauseFor: 10000
      }}
    />
  );
}

export default Type;

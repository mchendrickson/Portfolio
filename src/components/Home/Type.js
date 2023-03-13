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
        delay: 10,
      }}
    />
  );
}

export default Type;

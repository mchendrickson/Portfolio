import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString('Game Designer')
                .pauseFor(500)
                .deleteAll()
                .typeString('Computer Scientist')
                .pauseFor(500)
                .deleteAll()
                .typeString('Systems Programmer')
                .pauseFor(500)
                .deleteAll()
                .typeString('Software Engineer')
                .pauseFor(500)
                .deleteAll()
                .start();
        }}
        options={{
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        delay: 15,
      }}
    />
  );
}

export default Type;

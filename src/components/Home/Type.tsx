import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString('Game Designer')
                .pauseFor(10500)
                .deleteAll()
                .typeString('Computer Scientist')
                .pauseFor(10500)
                .deleteAll()
                .typeString('Systems Programmer')
                .pauseFor(10500)
                .deleteAll()
                .typeString('Software Engineer')
                .pauseFor(10500)
                .deleteAll()
                .start();
        }}
        options={{
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        delay: 1,
      }}
    />
  );
}

export default Type;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
    <Typewriter
        onInit={(typewriter) => {
            typewriter
                .typeString("Game Programmer")
                .start()
        }}
    />
  );
}

export default Type;

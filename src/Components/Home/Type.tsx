import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <span style={{whiteSpace: "nowrap", display: "inline-block"}}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Game Programmer")
                        .start()
                }}
            />
        </span>
    );
}

export default Type;

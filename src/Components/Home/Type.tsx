import React from "react";
import Typewriter from "typewriter-effect";
import { usePreloader } from "../../PreloaderContext";

function Type() {
    const { preloaderDone } = usePreloader();

    return (
        <span style={{ whiteSpace: "nowrap", display: "inline-block" }}>
            {preloaderDone && (
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Game Programmer")
                            .start();
                    }}
                />
            )}
        </span>
    );
}

export default Type;

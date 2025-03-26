import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Intro from "./Intro";

function Home() {
    return (
        <>
            <Intro/>
            <Projects/>
            <About/>
        </>
    );
}

export default Home;
import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Intro from "./Intro";

function Home() {
    return (
        <div className="scroll-snap-container">
            <section className="snap-child scrollable-section">
                <Intro/>
            </section>
            <section className="snap-child scrollable-section">
                <Projects/>
            </section>
            <section className="snap-child scrollable-section">
                <About/>
            </section>
        </div>
    );
}

export default Home;

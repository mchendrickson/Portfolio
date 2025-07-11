import React from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Intro from "./Intro";

/**
 * Landing page.
 * 
 * 1. Intro - Personal introduction and hero section
 * 2. Projects - Work and projects
 * 3. About - Personal information and skills
 * 
 * @returns {JSX.Element} Home page with intro, projects, and about sections
 */
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
import React from "react";
import {Container} from "react-bootstrap";
import HeaderSection from "./HeaderSection";
import SketchGridSection from "./SketchGridSection";
import Particle from "../../../Particle";

/**
 * Pfivejs component - Main page for p5.js projects.
 * 
 * 1: Header - Project overview and tech stack
 * 2: SketchGrid - Grid of p5.js sketches
 * 
 * @returns {JSX.Element} A container with p5.js project sections and particle effects
 */
function Pfivejs() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <SketchGridSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default Pfivejs;
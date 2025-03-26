import React from "react";
import {Container} from "react-bootstrap";
import HeaderSection from "./HeaderSection";
import SketchGridSection from "./SketchGridSection";
import Particle from "../../../Particle";

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
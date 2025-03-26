import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";

function FreeBodyDiagramApp() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default FreeBodyDiagramApp;
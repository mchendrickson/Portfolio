import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";

/**
 * Free Body Diagram App project page.
 * 
 * 1: Header - Project overview and key information
 * 2: Contributions - Personal contributions and role
 * 
 * @returns {JSX.Element} Free Body Diagram App project page with header and contributions sections
 */
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
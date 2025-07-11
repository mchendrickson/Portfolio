import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import AiBehaviorSection from "./AiBehaviorSection";
import AbilitiesSection from "./AbilitiesSection";

/**
 * Badmin project page.
 * 
 * 1: Header - Project overview and key information
 * 2: Contributions - Personal contributions and role
 * 3: AI Behaviors - AI system design and pathfinding
 * 4: Abilities - Moderator abilities and gameplay
 * 
 * @returns {JSX.Element} Badmin project page with header, contributions, AI behaviors, and abilities sections
 */
function Badmin() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
                <AiBehaviorSection/>
                <AbilitiesSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default Badmin;
import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import AiBehaviorSection from "./AiBehaviorSection";
import AbilitiesSection from "./AbilitiesSection";

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
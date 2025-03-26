import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import ServiceRequestsSection from "./ServiceRequestsSection";
import InteractiveMapSection from "./InteractiveMapSection";
import DirectionalRelationshipsSection from "./DirectObjectRelationshipsSection";

function BrighamWomensHospital() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
                <ServiceRequestsSection/>
                <InteractiveMapSection/>
                <DirectionalRelationshipsSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default BrighamWomensHospital;

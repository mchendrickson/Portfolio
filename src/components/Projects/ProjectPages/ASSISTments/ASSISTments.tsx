import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import ClusteringSection from "./ClusteringSection";
import BanditsSection from "./BanditsSection";

function ASSISTments() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
                <ClusteringSection/>
                <BanditsSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default ASSISTments;

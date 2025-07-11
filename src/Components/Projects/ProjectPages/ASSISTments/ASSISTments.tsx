import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import ClusteringSection from "./ClusteringSection";
import BanditsSection from "./BanditsSection";

/**
 * ASSISTments project page.
 * 
 * 1: Header - Project overview and key information
 * 2: Contributions - Personal contributions and role
 * 3: Clustering - Machine learning clustering implementation
 * 4: Bandits - Contextual bandits research and implementation
 * 
 * @returns {JSX.Element} ASSISTments project page with header, contributions, clustering, and bandits sections
 */
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

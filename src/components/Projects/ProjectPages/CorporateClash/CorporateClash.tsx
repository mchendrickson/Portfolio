import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import RefactoringSection from "./RefactoringSection";
import NewContentSection from "./NewContentSection";
import ExploitPreventionSection from "./ExploitPreventionSection";

function CorporateClash() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
                <RefactoringSection/>
                <ExploitPreventionSection/>
                <NewContentSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default CorporateClash;
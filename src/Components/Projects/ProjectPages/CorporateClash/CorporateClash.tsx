import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import RefactoringSection from "./RefactoringSection";
import NewContentSection from "./NewContentSection";
import ExploitPreventionSection from "./ExploitPreventionSection";

/**
 * Corporate Clash project page.
 * 
 * 1: Header - Project overview and key information
 * 2: Contributions - Personal contributions and role
 * 3: Refactoring - Legacy code modernization
 * 4: Exploit Prevention - Security enhancements
 * 5: New Content - Gameplay content development
 * 
 * @returns {JSX.Element} Corporate Clash project page with header, contributions, refactoring, security, and content sections
 */
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
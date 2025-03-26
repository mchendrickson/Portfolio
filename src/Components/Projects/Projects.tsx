import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ImperiusCardHero from "../../Assets/Projects/Imperius/ImperiusLogo.jpg";
import BrighamWomensHospitalCardHero from "../../Assets/Projects/BrighamWomensHospital/softeng.png";
import AssistmentsCardHero from "../../Assets/Projects/Assistments/assistmentslogo.jpg";
import FreeBodyDiagramAppCardHero from "../../Assets/Projects/FBDApp/FBDApplogo.png";
import PfivejsCardHero from "../../Assets/Projects/Misc/p5js.png"
import BadminCardHero from "../../Assets/Projects/Badmin/BadminTitle.png";
import CorporateClashCardHero from "../../Assets/Projects/CorporateClash/CorporateClashLogo.png"
import TechstackImperius from "./TechStacks/TechstackImperius";
import TechstackBadmin from "./TechStacks/TechstackBadmin";
import TechstackBrighamWomensHospital from "./TechStacks/TechstackSofteng";
import TechstackAssistments from "./TechStacks/TechstackAssistments";
import TechstackP5 from "./TechStacks/TechstackP5";
import TechstackFBDApp from "./TechStacks/TechstackFBDApp";
import TechstackCorporateClash from "./TechStacks/TechstackCorporateClash";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Projects and Other <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Several projects I have worked on in my professional career. <b className="purple">Click on a
                    card</b> to learn more.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ImperiusCardHero}
                            linkTo="Imperius"
                            title="Imperius"
                            description="Led a team of six developers to create a 3D space real-time strategy game featuring a six mission campaign and four player multiplayer."
                            footerElement={<TechstackImperius small={true}/>}
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={CorporateClashCardHero}
                            linkTo="CorporateClash"
                            title="Toontown: Corporate Clash"
                            description="Worked as a software developer for the popular MMO title to create new features, improve game security, improve player safety, refactor legacy code, and bugfix."
                            footerElement={<TechstackCorporateClash small={true}/>}
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={BadminCardHero}
                            linkTo="Badmin"
                            title="Badmin"
                            description="Led a team of four developers to create a top down shooter where you play as a server moderator."
                            footerElement={<TechstackBadmin small={true}/>}
                        />
                    </Col>
                </Row>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={FreeBodyDiagramAppCardHero}
                            linkTo="fbdapp"
                            title="Free Body Diagram App"
                            description="Mobile app design in the Unity Engine for a free body diagram game to help students conceptualize engineering/physics concepts."
                            footerElement={<TechstackFBDApp small={true}/>}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={AssistmentsCardHero}
                            linkTo="assistments"
                            title="Machine Learning with ASSISTments"
                            description="Added features to the award winning ASSISTments learning software using contextual bandits."
                            footerElement={<TechstackAssistments small={true}/>}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={BrighamWomensHospitalCardHero}
                            linkTo="BrighamWomensHospital"
                            title="Hospital Tracking System"
                            description="Led a team of eleven programmers to create a medical equipment tracking and workflow application to demo features to the Brigham & Women’s Hospital representatives."
                            footerElement={<TechstackBrighamWomensHospital small={true}/>}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={PfivejsCardHero}
                            linkTo="Pfivejs"
                            title="p5.js Creations"
                            description="Various sketched created with p5.js, many of them graphical representations of math or computer science topics."
                            footerElement={<TechstackP5 small={true}/>}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

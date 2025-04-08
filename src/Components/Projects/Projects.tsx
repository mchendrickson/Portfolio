import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ----- Project Assets -----
import ImperiusCardHero from "../../Assets/Projects/Imperius/ImperiusLogo.jpg";
import CorporateClashCardHero from "../../Assets/Projects/CorporateClash/CorporateClashLogo.png";
import BadminCardHero from "../../Assets/Projects/Badmin/BadminTitle.png";
import FreeBodyDiagramAppCardHero from "../../Assets/Projects/FBDApp/FBDApplogo.png";
import AssistmentsCardHero from "../../Assets/Projects/Assistments/assistmentslogo.jpg";
import BrighamWomensHospitalCardHero from "../../Assets/Projects/BrighamWomensHospital/softeng.png";
import PfivejsCardHero from "../../Assets/Projects/Misc/p5js.png";

// ----- Tech Stack Icons -----
import {SiJavascript, SiP5Dotjs, SiPostgresql, SiPython, SiPytorch, SiTensorflow, SiUnity, SiCsharp} from "react-icons/si";
import {DiJava, DiPython} from "react-icons/di";

let ImperiusIcons = () => {
    return (
        <div>
            <SiUnity/> <SiCsharp/>
        </div>
    );
};

let CorporateClashIcons = () => {
    return (
        <div>
            <DiPython/>
        </div>
    );
};

let BadminIcons = () => {
    return (
        <div>
            <SiUnity/> <SiCsharp/>
        </div>
    );
};

let FBDIcons = () => {
    return (
        <div>
            <SiUnity/> <SiCsharp/>
        </div>
    );
};

let AssistmentsIcons = () => {
    return (
        <div>
            <SiPython/> <SiPostgresql/> <SiPytorch/> <SiTensorflow/>
        </div>
    );
};

let SoftengIcons = () => {
    return (
        <div>
            <DiJava/> <SiPostgresql/>
        </div>
    );
};

let PfiveIcons = () => {
    return (
        <div>
            <SiP5Dotjs/> <SiJavascript/>
        </div>
    );
};


function Projects() {
    return (
        <Container fluid className="project-section ">
            <Container fluid className="project-narrow-container">
                <h1 className="project-heading">
                    My Projects and Other <span className="purple">Works</span>
                </h1>
                <p style={{color: "white"}}>
                    Several projects I have worked on in my professional career. <span className="purple">Click on a
                    card</span> to learn more.
                </p>
                <Row xs={"auto"} className="g-5 justify-content-center">
                    <Col>
                        <ProjectCard
                            imgPath={ImperiusCardHero}
                            linkTo="Imperius"
                            title="Imperius"
                            description="Led a team of six developers to create and release a 3D space real-time strategy game featuring Steam-integrated four player multiplayer."
                            footerElement=<ImperiusIcons/>
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            imgPath={CorporateClashCardHero}
                            linkTo="CorporateClash"
                            title="Toontown: Corporate Clash"
                            description="Worked as a software developer for the popular MMO title to create new features, improve game security, improve player safety, refactor legacy code, and bugfix."
                            footerElement=<CorporateClashIcons/>
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            imgPath={BadminCardHero}
                            linkTo="Badmin"
                            title="Badmin"
                            description="Led a team of four developers to create a top down shooter where you play as a server moderator."
                            footerElement=<BadminIcons/>
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            imgPath={FreeBodyDiagramAppCardHero}
                            linkTo="FBDapp"
                            title="Free Body Diagram App"
                            description="Mobile app design for a free body diagram game to help students conceptualize engineering/physics concepts."
                            footerElement=<FBDIcons/>
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            imgPath={AssistmentsCardHero}
                            linkTo="ASSISTments"
                            title="Machine Learning with ASSISTments"
                            description="Added features to the award winning ASSISTments learning software using contextual bandits."
                            footerElement=<AssistmentsIcons/>
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            imgPath={BrighamWomensHospitalCardHero}
                            linkTo="BrighamWomensHospital"
                            title="Hospital Tracking System"
                            description="Led a team of eleven programmers to create a medical equipment tracking and workflow application to demo features to the Brigham & Women’s Hospital representatives."
                            footerElement=<SoftengIcons/>
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            imgPath={PfivejsCardHero}
                            linkTo="Pfivejs"
                            title="p5.js Creations"
                            description="Various sketched created with p5.js, many of them graphical representations of math or computer science topics."
                            footerElement=<PfiveIcons/>
                        />
                    </Col>
                </Row>
            </Container>
            <Particle/>
        </Container>
    );
}

export default Projects;

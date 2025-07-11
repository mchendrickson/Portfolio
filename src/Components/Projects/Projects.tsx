import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ImperiusCardHero from "../../Assets/Projects/Imperius/ImperiusLogo.jpg";
import CorporateClashCardHero from "../../Assets/Projects/CorporateClash/CorporateClashLogo.png";
import BadminCardHero from "../../Assets/Projects/Badmin/BadminTitle.png";
import FreeBodyDiagramAppCardHero from "../../Assets/Projects/FBDApp/FBDApplogo.png";
import AssistmentsCardHero from "../../Assets/Projects/Assistments/assistmentslogo.jpg";
import BrighamWomensHospitalCardHero from "../../Assets/Projects/BrighamWomensHospital/softeng.png";
import PfivejsCardHero from "../../Assets/Projects/Misc/p5js.png";
import {SiJavascript, SiP5Dotjs, SiPostgresql, SiPython, SiPytorch, SiTensorflow, SiUnity, SiCsharp} from "react-icons/si";
import {DiJava, DiPython} from "react-icons/di";
import { LuMousePointerClick } from "react-icons/lu";

/**
 * Technology icons component for Imperius project.
 * 
 * @returns {JSX.Element} Unity and C# technology icons
 */
let ImperiusIcons = () => {
    return (
        <div>
            <SiUnity/> <SiCsharp/>
        </div>
    );
};

/**
 * Technology icons component for Corporate Clash project.
 * 
 * @returns {JSX.Element} Python technology icon
 */
let CorporateClashIcons = () => {
    return (
        <div>
            <DiPython/>
        </div>
    );
};

/**
 * Technology icons component for Badmin project.
 * 
 * @returns {JSX.Element} Unity and C# technology icons
 */
let BadminIcons = () => {
    return (
        <div>
            <SiUnity/> <SiCsharp/>
        </div>
    );
};

/**
 * Technology icons component for Free Body Diagram App project.
 * 
 * @returns {JSX.Element} Unity and C# technology icons
 */
let FBDIcons = () => {
    return (
        <div>
            <SiUnity/> <SiCsharp/>
        </div>
    );
};

/**
 * Technology icons component for ASSISTments project.
 * 
 * @returns {JSX.Element} Python, PostgreSQL, PyTorch, and TensorFlow technology icons
 */
let AssistmentsIcons = () => {
    return (
        <div>
            <SiPython/> <SiPostgresql/> <SiPytorch/> <SiTensorflow/>
        </div>
    );
};

/**
 * Technology icons component for Hospital Tracking System project.
 * 
 * @returns {JSX.Element} Java and PostgreSQL technology icons
 */
let SoftengIcons = () => {
    return (
        <div>
            <DiJava/> <SiPostgresql/>
        </div>
    );
};

/**
 * Technology icons component for p5.js Creations project.
 * 
 * @returns {JSX.Element} p5.js and JavaScript technology icons
 */
let PfiveIcons = () => {
    return (
        <div>
            <SiP5Dotjs/> <SiJavascript/>
        </div>
    );
};

/**
 * Projects page component that displays the portfolio of work projects.
 * 
 * This component renders a comprehensive showcase of professional projects
 * including game development, educational software, mobile apps, and creative
 * coding projects. Each project is displayed as a clickable card with
 * relevant technology icons and descriptions.
 * 
 * @returns {JSX.Element} Projects page with interactive project cards
 */
function Projects() {
    return (
        <Container fluid className="project-section ">
            <Container fluid className="project-narrow-container">
                <h1 className="project-heading">
                    <span className="purple">Click</span> on a <span className="purple">Project</span>
                </h1>
                <p style={{color: "white"}}>
                    Several projects I have worked on in my professional career. <span className="purple">Click on a
                    card</span> <LuMousePointerClick size={25} className={"purple"} /> to learn more.
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
                            title="ASSISTments"
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

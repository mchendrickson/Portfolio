import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import imperius from "../../Assets/Projects/Imperius/ImperiusLogo.jpg";
import softeng from "../../Assets/Projects/SoftEng/softeng.png";
import assistments from "../../Assets/Projects/Assistments/assistmentslogo.jpg";
import p5js from "../../Assets/Projects/Misc/p5js.png"
import badmin from "../../Assets/Projects/Badmin/BadminTitle.png";
import TechstackImperius from "./TechstackImperius";
import TechstackBadmin from "./TechstackBadmin";
import TechstackSofteng from "./TechstackSofteng";
import TechstackAssistments from "./TechstackAssistments";
import TechstackP5 from "./TechstackP5";

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
                            imgPath={imperius}
                            linkTo="Imperius"
                            title="Imperius"
                            description="Led a team of six developers to create a 3D space real-time strategy game featuring a six mission campaign and four player multiplayer."
                            footerElement={ <TechstackImperius small={true}/> }
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={badmin}
                            linkTo="Badmin"
                            title="Badmin"
                            description="Led a team of four developers to create a top down shooter where you play as a server moderator."
                            footerElement={ <TechstackBadmin small={true}/> }
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={softeng}
                            linkTo="softeng"
                            title="Hospital Tracking System"
                            description="Led a team of eleven programmers to create a medical equipment tracking and workflow application to demo features to the Brigham & Women’s Hospital representatives."
                            footerElement={ <TechstackSofteng small={true}/> }
                        />
                    </Col>
                </Row>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={assistments}
                            linkTo="assistments"
                            title="Machine Learning with ASSISTments"
                            description="Added features to the award winning ASSISTments learning software using contextual bandits."
                            footerElement={ <TechstackAssistments small={true}/> }
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={p5js}
                            linkTo="Pfivejs"
                            title="p5.js Creations"
                            description="Various sketched created with p5.js, many of them graphical representations of math or computer science topics."
                            footerElement={ <TechstackP5 small={true}/> }
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

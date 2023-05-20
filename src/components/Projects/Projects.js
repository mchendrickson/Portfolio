import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import imperius from "../../Assets/Projects/Imperius/ImperiusLogo.jpg";
import softeng from "../../Assets/Projects/SoftEng/softeng.png";
import assistments from "../../Assets/Projects/Assistments/assistments.jpg";
import p5js from "../../Assets/Projects/Misc/p5js.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Projects and Other <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Several projects I have worked on in my academic career. Click on a card to learn more
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imperius}
              linkTo="Imperius"
              isBlog={false}
              title="Imperius"
              description="Led a team of six developers to create a 3D space real-time strategy game featuring a six mission campaign and four player multiplayer."
              demoLink="https://store.steampowered.com/app/1653880/Imperius/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={softeng}
              linkTo="softeng"
              isBlog={false}
              title="Hospital Tracking System"
              description="Led a team of eleven programmers to create a medical equipment tracking and workflow application to demo features to the Brigham & Women’s Hospital representatives."
              ghLink="https://github.com/mchrpt/Hospital-Application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assistments}
              linkTo="assistments"
              isBlog={false}
              title="Machine Learning with ASSISTments"
              description="Added features to the award winning ASSISTments learning software using contextual bandits."
              demoLink="https://digitalwpi.wpi.edu/concern/student_works/2801pk90w?locale=en"
            />
          </Col>
        </Row>
        <Col md={4} className="project-card">
          <ProjectCard
              imgPath={p5js}
              linkTo="Pfivejs"
              isBlog={false}
              title="p5.js Creations"
              description="Various sketched created with p5.js, many of them graphical representations of math or computer science topics."
              demoLink="https://editor.p5js.org/mchendrickson/sketches"
          />
        </Col>

      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import ImperiusImg1 from "../../../Assets/Projects/imperius1.jpg";
import ImperiusImg2 from "../../../Assets/Projects/imperius2.jpg";
import ImperiusImg3 from "../../../Assets/Projects/imperius3.jpg";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";

function Softeng() {
  return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "12px" }}>
            <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
            >
              <h1 style={{ fontSize: "3.5em", paddingBottom: "20px" }}>
                Hospital Tracking System
              </h1>
              <p style={{ textAlign: "justify" }}>
                WPI's CS-3733-D22 Software Engineering class collaborated with
                Brigham & Women's Hospital to create a complete medical equipment
                tracking and workflow application to demo features to the hospital
                representatives to consider implementing. I led a team of eleven
                software engineers using Scrum/Agile methodologies to bring
                this project to completion.
                <br />
                <br />
                I have contributed to this project in a multitude of different ways:
                <br />
                <br />
                <ul>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Project Manager
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Lead Programmer
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Systems Programmer
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Audio Programmer
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Narrative Designer
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> VFX Artist
                  </li>
                </ul>
                I have also designed numerous complex and nuanced systems, bridging together multiple complex APIs together to create intuitive systems.
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                3D Pathfinding
              </h2>
              <p style={{ textAlign: "justify" }}>
                I combined Aron Granberg's A* Pathfinding project, an open source Octree,
                DOTween, and open source Catmull-rom splines to create a fast, efficient,
                and accurate 3D pathfinding solution working with hundreds of agents
                simultaneously with little/no performance overhead. Multithreading
                techniques and efficient use of data structures were key components
                in this project alongside strong code management skills.
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Combat Systems
              </h2>
              <p style={{ textAlign: "justify" }}>
                I combined Unity's particle systems alongside several algorithms
                such that each weapon fired would predict an enemies location using
                their current trajectory, and prioritize specific unit types based on a priority queue.
                This eclectic approach allowed for hundreds of units each with dozens of weapons to
                fire at specific enemies. GPU instancing on the particle systems allowed for multithreaded
                collisions, decreasing CPU strain.
              </p>
            </Col>
            <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
            >
              <img src={ImperiusImg1} alt="about" className="img-fluid" />
              <br />
              <br />
              <img src={ImperiusImg2} alt="about" className="img-fluid" />
              <br />
              <br />
              <img src={ImperiusImg3} alt="about" className="img-fluid" />
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Softeng;

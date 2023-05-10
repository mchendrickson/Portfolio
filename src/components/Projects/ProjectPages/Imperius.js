import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import ImperiusImg1 from "../../../Assets/Projects/imperius1.jpg";
import ImperiusImg2 from "../../../Assets/Projects/imperius2.jpg";
import ImperiusImg3 from "../../../Assets/Projects/imperius3.jpg";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";

function Imperius() {
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
            <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
              Imperius
            </h1>
              <p style={{ textAlign: "justify" }}>
                  Imperius is a <b className="purple">3D space RTS </b>,
                  that I have been the <b className="purple"> lead developer </b>
                  on and off for the last <b className="purple"> 3 years.</b> It is the culmination
                  of my entire skillset. It features a 6 mission campaign, 24 unique units, and a
                  comprehensive economy system.
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
                  I combined <b className="purple">Aron Granberg's A* Pathfinding project</b>, an open source <b className="purple">Octree</b>,
                  <b className="purple"> DOTween</b>, and open source <b className="purple">Catmull-rom splines</b> to create a fast, efficient,
                  and accurate <b className="purple">3D pathfinding</b> solution working with hundreds of agents
                  simultaneously with little/no performance overhead. <b className="purple">Multithreading </b>
                  techniques and efficient use of data structures were key components
                  in this project alongside <b className="purple">strong code management skills</b>.
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                  Combat Systems
              </h2>
              <p style={{ textAlign: "justify" }}>
                  I combined Unity's <b className="purple">particle systems</b> alongside several <b className="purple">algorithms </b>
                  that each weapon fired would predict an enemies location using their current <b className="purple">trajectory</b>,
                  and prioritize specific unit types based on a <b className="purple">priority queue</b>.
                  This eclectic approach allowed for hundreds of units each with dozens of weapons to fire at specific enemies.
                  <b className="purple"> GPU instancing</b> on the particle systems allowed for <b className="purple">multithreaded </b>
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

export default Imperius;

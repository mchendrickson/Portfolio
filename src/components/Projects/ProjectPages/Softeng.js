import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import SoftengTitle from "../../../Assets/Projects/softeng7.jpg"
import SoftengImg1 from "../../../Assets/Projects/softeng1.png";
import SoftengImg2 from "../../../Assets/Projects/softeng2.png";
import SoftengImg3 from "../../../Assets/Projects/softeng3.jpg";
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
                These are some of the roles I took on during this project:
                <br />
                <br />
                <ul>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Project Manager
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Full Stack Engineer
                  </li>
                  <li className="about-activity">
                    <VscDebugBreakpointLogUnverified /> Lead Presenter
                  </li>
                </ul>
                I have also designed numerous complex and nuanced systems, bridging together multiple complex APIs together to create intuitive systems.
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Service Requests
              </h2>
              <p style={{ textAlign: "justify" }}>
                Using JavaFX, Apache Derby SQL, Java, and other programs, we were able to create
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Interactive Map
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
              <img src={SoftengTitle} alt="about" className="img-fluid" />
              <br />
              <br />
              <img src={SoftengImg1} alt="about" className="img-fluid" />
              <br />
              <br />
              <img src={SoftengImg2} alt="about" className="img-fluid" />
              <br />
              <br />
              <img src={SoftengImg3} alt="about" className="img-fluid" />
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Softeng;

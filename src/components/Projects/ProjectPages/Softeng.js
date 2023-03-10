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
                <b className="purple">WPI's CS-3733-D22 Software Engineering</b> class collaborated with
                <b className="purple"> Brigham & Women's Hospital</b> to create a complete <b className="purple">
                medical equipment tracking and workflow application</b> to demo features to the hospital
                representatives to consider implementing. I <b className="purple">led a team</b> of eleven
                software engineers using <b className="purple">Scrum/Agile methodologies</b> to bring this
                project to completion.
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
              </p>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Service Requests
              </h2>
              <p style={{ textAlign: "justify" }}>
                There were a variety of <b className="purple">service requests</b> associated with
                this project that needed to be implemented to mimic a <b className="purple">hospital
                tracking system</b>. Each of us were responsible for one of them, and mine was the
                <b className="purple">medicine delivery request</b>, which I am responsible for the
                <b className="purple">entirety of its development</b>. I also did significant
                <b className="purple">backend work</b> to ensure that every service request stored
                and manipulated data both locally with CSV's and <b className="purple">SQL server backend</b>.
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Interactive Map
              </h2>
              <p style={{ textAlign: "justify" }}>
                Our team created an <b className="purple">interactive map</b> of the entire hospital, including
                the real life existing locations as positions on the map. Each could store <b className="purple">
                equipment, service requests, patients, and employees</b>. I was responsible for creating the
                <b className="purple">pathfinding component</b> as well as ensuring the backend functionality of the map.
              </p>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Directional Object Relationships
              </h2>
              <p style={{ textAlign: "justify" }}>
                I was singlehandedly responsible for creating a <b className="purple">design pattern</b> to share
                data and resources between patients, employees, and locations. The program establishes
                <b className="purple"> bi-directional associations</b> between these objects, allowing them to
                reference and access each other's data. For example, each <b className="purple">patient object </b>
                has instance variables that refer to the <b className="purple">locations and employees</b> associated
                with that patient, and vice versa. The program also includes <b className="purple">methods for adding
                and removing associations</b> between objects dynamically at runtime.
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

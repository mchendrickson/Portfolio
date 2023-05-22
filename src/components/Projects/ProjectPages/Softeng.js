import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import SoftengTitle from "../../../Assets/Projects/SoftEng/softeng7.jpg"
import SoftengMap from "../../../Assets/Projects/SoftEng/softeng1.png";
import SoftengDashboard from "../../../Assets/Projects/SoftEng/softeng2.png";
import SoftengImg3 from "../../../Assets/Projects/SoftEng/softeng3.jpg";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import TechstackSofteng from "../TechstackSofteng";

function Softeng() {
  return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
            <Col
                md={12}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
            >
              <h1 style={{ fontSize: "3.5em", paddingBottom: "20px" }}>
                Hospital Tracking System
              </h1>
              <TechstackSofteng />
              <p style={{ textAlign: "left" }}>
                We partnered with <b className="purple">Brigham & Women's Hospital</b> to develop a comprehensive
                <b className="purple"> medical equipment tracking and workflow application</b> for demonstration purposes.
                As the team leader, I effectively managed a group of <b className="purple"> eleven software engineers</b>, utilizing
                <b className="purple"> Scrum/Agile methodologies</b> to successfully deliver the project.
                <br />
                <br />
                <img src={SoftengTitle} alt="about" className="img-fluid" />
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
                Within this project, various <b className="purple">service requests</b> were implemented to simulate a
                <b className="purple"> hospital tracking system</b>. Additionally, I played a vital role in performing extensive
                <b className="purple"> backend work</b> to ensure seamless data storage and manipulation with <b className="purple">PostgreSQL</b>.
              </p>
              <br/>
              <img src={SoftengImg3} alt="about" className="img-fluid" />
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Interactive Map
              </h2>
              <p style={{ textAlign: "justify" }}>
                As part of our team, I played a key role in developing an <b className="purple">interactive map</b> of the hospital,
                which incorporated real-life locations as positions on the map. The map allowed storage of <b className="purple">equipment,
                service requests, patients, and employees</b>. My specific responsibilities included creating the
                <b className="purple"> pathfinding component</b> and ensuring smooth backend functionality for the map.
              </p>
              <br/>
              <img src={SoftengMap} alt="about" className="img-fluid" />
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                Directional Object Relationships
              </h2>
              <p style={{ textAlign: "justify" }}>
                I created a <b className="purple">design pattern</b> for seamless data and resource sharing among patients, employees, and locations.
                This pattern establishes <b className="purple">bi-directional associations</b> between objects, allowing them to reference and
                access each other's data dynamically.
              </p>
              <img src={SoftengDashboard} alt="about" className="img-fluid" />
            </Col>
        </Container>
      </Container>
  );
}

export default Softeng;

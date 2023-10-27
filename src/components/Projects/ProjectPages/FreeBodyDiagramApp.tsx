import React from "react";
import { Container, Col} from "react-bootstrap";
import Particle from "../../Particle";
import TechstackFBDApp from "../TechstackFBDApp";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";

function FreeBodyDiagramApp() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Col
                    md={12}
                    style={{
                        justifyContent: "justify",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}
                >
                    <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
                        Free Body Diagram App
                    </h1>
                    <TechstackFBDApp />
                    <p style={{ textAlign: "left" }}>
                        A <b className="purple">mobile application</b> designed to help <b className="purple">mechanical engineering students learn statics concepts</b> by working with free body diagrams. Through a series of increasingly difficult problems, students will be able to reinforce what is taught in lectures and complete any free body diagram they are presented with.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        My contributions:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /> Refactored the <b className="purple">entire codebase</b> to align with <b className="purple">OOP methodologies</b>.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /> Implemented <b className="purple">missing documentation</b> and <b className="purple">updated current documentation</b> to be more descriptive.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /> Reworked <b className="purple">tracking documents</b> to be more concise and understandable.
                        </li>
                    </ul>
                    <img src={"https://ids.wpi.edu/wp-content/uploads/2021/07/fbd-constraints.gif"} alt="about" className="img-fluid" />
                    <img src={"https://ids.wpi.edu/wp-content/uploads/2021/07/fbd-adding.gif"} alt="about" className="img-fluid" />

                </Col>
            </Container>
            <Particle />
        </Container>
    );
}

export default FreeBodyDiagramApp;
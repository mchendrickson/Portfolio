import React from "react";
import { Container, Col} from "react-bootstrap";
import Particle from "../../Particle";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Badmin1 from "../../../Assets/Projects/Badmin/Badmin1.mp4";
import Badmin2 from "../../../Assets/Projects/Badmin/Badmin2.mp4";
import Badmin3 from "../../../Assets/Projects/Badmin/Badmin3.mp4";
import TechstackBadmin from "../TechstackBadmin";
function Badmin() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Col
                    md={12}
                    style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}
                >
                    <h1 style={{ fontSize: "4em", paddingBottom: "20px" }}>
                        Badmin
                    </h1>
                    <TechstackBadmin />
                    <p style={{ textAlign: "left" }}>
                        Badmin is a top down shooter with a twist, you have access to moderator abilities!
                        Do your utmost to abuse your powers while hiding from the admin, who seems to have a few screws loose.
                        <br />
                        <Col
                            md={12}
                            style={{ paddingTop: "40px", paddingBottom: "40px" }}
                            className="img-container"
                        >
                            <video autoPlay loop muted disableRemotePlayback className="img-fluid rounded">
                                <source src={Badmin1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                        I have contributed to this project in a multitude of different
                        ways:
                        <br />
                        <br />
                        <ul>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> Project Manager
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> Systems Programmer
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> AI Programmer
                            </li>
                        </ul>
                    </p>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        AI Behaviors
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I designed all the AI behaviors, including using Unity's 2D Navmesh system to create dynamic pathfinding solutions amongst a dozen agents.
                    </p>
                    <Col
                        md={12}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <video autoPlay loop muted disableRemotePlayback className="img-fluid rounded">
                            <source src={Badmin2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        Abilities
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I designed each of the abilities, including balancing penalties for using them and implementing particle effects.
                    </p>
                    <Col
                        md={12}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <video autoPlay loop muted disableRemotePlayback className="img-fluid rounded">
                            <source src={Badmin3} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </Col>
                </Col>
            </Container>
            <Particle />
        </Container>
    );
}

export default Badmin;
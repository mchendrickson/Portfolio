import React from "react";
import { Container, Col} from "react-bootstrap";
import Particle from "../../Particle";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import TechstackBadmin from "../TechstackBadmin";
import VimeoVideo from "../../../VimeoVideo";

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
                    <p style={{ textAlign: "left", paddingTop: "10px", paddingBottom: "40px"}}>
                        Badmin is a top down shooter with a twist, you have access to <b className="purple">moderator abilities!</b> Do your utmost to <b className="purple">abuse your powers</b> while hiding from the admin, who seems to have a few screws loose.
                        <br />
                        <br />
                        My contributions:
                        <br />
                        <br />
                        <ul>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Project Manager:</b> Led a team of four game developers in all stages of the game development pipeline.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Systems Programmer:</b> Developed substantial gameplay elements and systems.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">AI Programmer:</b> Developed the AI for all NPC characters and their various quirks.
                            </li>
                        </ul>
                        <Col
                            md={12}
                            className="img-container"
                        >
                            <VimeoVideo videoId={"877212425"} videoTitle={"Badmin Gameplay"}/>
                        </Col>
                    </p>
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        AI Behaviors
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I designed all the <b className="purple">AI behaviors</b>, including using <b className="purple">Unity's 2D Navmesh</b> system to create dynamic pathfinding solutions amongst a dozen agents. I also designed "cheating" behaviors for each of the NPCs, such as speedhacking, wallhacking, and noclipping.
                    </p>
                    <Col
                        md={12}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"877212490"} videoTitle={"Badmin Abilities"}/>
                    </Col>
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        Abilities
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I designed each of the six <b className="purple">moderator abilities</b>, including balancing penalties for using them.
                    </p>
                    <Col
                        md={12}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"877214056"} videoTitle={"Badmin Behaviors"}/>
                    </Col>
                </Col>
            </Container>
            <Particle />
        </Container>
    );
}

export default Badmin;
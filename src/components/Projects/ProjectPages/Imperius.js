import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import Particle from "../../Particle";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import TechstackImperius from "../TechstackImperius";
import ImperiusArtillery from "../../../Assets/Projects/Imperius/ImperiusArtillery.jpg";
import ImperiusNuke from "../../../Assets/Projects/Imperius/ImperiusNuke.mp4";
import ImperiusShield from "../../../Assets/Projects/Imperius/ImperiusShield.mp4";
import ImperiusPathfinding from "../../../Assets/Projects/Imperius/ImperiusPathfinding.mp4";
import ImperiusCombat from "../../../Assets/Projects/Imperius/ImperiusCombat.mp4";
import ImperiusFTL from "../../../Assets/Projects/Imperius/ImperiusFTL.mp4";
import ImperiusInvis from "../../../Assets/Projects/Imperius/ImperiusInvis.mp4";
import ImperiusEMP from "../../../Assets/Projects/Imperius/ImperiusEMP.mp4";
import ImperiusArty from "../../../Assets/Projects/Imperius/ImperiusArty.mp4";
import ImperiusOctree from "../../../Assets/Projects/Imperius/ImperiusOctree.png";
import ImperiusShowfest from "../../../Assets/Projects/Imperius/ImperiusShowfest.png";
import ImperiusMultiplayer from "../../../Assets/Projects/Imperius/ImperiusMultiplayer.jpg";
import ImperiusMLAgents from "../../../Assets/Projects/Imperius/ImperiusMLAgents.mp4";
import ImperiusClustering from "../../../Assets/Projects/Imperius/ImperiusClustering.mp4";
import ImperiusModel1 from "../../../Assets/Projects/Imperius/ImperiusModel1.png";
import ImperiusModel2 from "../../../Assets/Projects/Imperius/ImperiusModel2.png";
import ImperiusModel3 from "../../../Assets/Projects/Imperius/ImperiusModel3.png";
import ImperiusModel4 from "../../../Assets/Projects/Imperius/ImperiusModel4.png";


function Imperius() {
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
                        Imperius
                    </h1>
                    <TechstackImperius />
                    <p style={{ textAlign: "left" }}>
                        Imperius is a <b className="purple">3D space RTS </b>, that I have
                        been the <b className="purple"> lead developer </b> on and off for
                        the last <b className="purple"> 3 years.</b> It is the culmination
                        of my entire skillset. It features a 6 mission campaign, 24 unique
                        units, and a comprehensive economy system.
                        <br />
                        <Col
                            md={12}
                            style={{ paddingTop: "40px", paddingBottom: "40px" }}
                            className="img-container"
                        >
                            <Row>
                                <Col md={3}>
                                    <img src={ImperiusShowfest} alt="about" className="img-fluid rounded" />
                                </Col>
                                <Col md={8}>
                                    <img src={ImperiusArtillery} alt="about" className="img-fluid rounded" />
                                </Col>
                            </Row>
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
                        I have also designed numerous complex and nuanced systems, bridging
                        together multiple complex APIs together to create intuitive systems.
                    </p>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        3D Pathfinding
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I combined <b className="purple">Aron Granberg's A* Pathfinding project</b>, an open source <b className="purple">Octree</b>,
                        <b className="purple"> DOTween</b>, and open source <b className="purple">Catmull-rom splines</b> to create a fast, efficient,
                        and accurate <b className="purple">3D pathfinding</b> solution working with hundreds of agents
                        simultaneously with little/no performance overhead. <b className="purple">Multithreading </b>
                        techniques and efficient use of data structures were key components
                        in this project alongside <b className="purple">strong code management skills</b>.
                    </p>
                    <Col
                        md={12}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <Row>
                            <Col md={7}>
                                <video autoPlay loop muted disableRemotePlayback className="img-fluid rounded">
                                    <source src={ImperiusPathfinding} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col md={4}>
                                <img src={ImperiusOctree} alt="about" className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        Combat Systems
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I combined Unity's <b className="purple">particle systems</b>{" "}
                        alongside several <b className="purple">algorithms </b>that each
                        weapon fired would predict an enemies location using their current{" "}
                        <b className="purple">trajectory</b>, and prioritize specific unit
                        types based on a <b className="purple">priority queue</b>. This
                        eclectic approach allowed for hundreds of units each with dozens of
                        weapons to fire at specific enemies. <b className="purple">
                        GPU instancing
                    </b>{" "}
                        on the particle systems allowed for <b className="purple">
                        multi-threaded{" "}
                    </b>
                        collisions, decreasing CPU strain.
                    </p>
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <video autoPlay loop muted disableRemotePlayback className="img-fluid rounded">
                            <source src={ImperiusCombat} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>Multiplayer</h2>
                    <p style={{ textAlign: "left" }}>Utilizing Unity's <b className="purple"> Netcode for GameObjects </b> and <b className="purple">Facepunch Transport</b>, I implemented a <b className="purple"> server authoritative 4-player skirmish mode </b> that can interface with the Steam client.</p>
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <img src={ImperiusMultiplayer} alt="about" className="img-fluid rounded" />

                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>Artificial Intelligence</h2>
                    <p style={{ textAlign: "left" }}>
                        I experimented with Unity's <b className="purple">ML-Agents</b> package to attempt to elicit RTS attacking behaviors.
                        I also created a <b className="purple">custom clustering algorithm</b> so that the AI can discriminate against groups of units efficiently.
                    </p>
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                            <source src={ImperiusMLAgents} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <br />
                    <br />
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                            <source src={ImperiusClustering} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>VFX</h2>
                    <p style={{ textAlign: "left" }}>By skillfully modifying pre-existing assets and creating original visual
                        effects from scratch, I have transformed these elements into <b className="purple">captivating</b> and
                         <b className="purple"> dynamic</b> visual enhancements that greatly amplify the overall impact of Imperius.</p>
                    <Row>
                        <Col>
                            <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                                <source src={ImperiusNuke} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                        <Col>
                            <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                                <source src={ImperiusShield} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                                <source src={ImperiusEMP} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                        <Col>
                            <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                                <source src={ImperiusFTL} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                                <source src={ImperiusInvis} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                        <Col>
                            <video autoPlay loop muted disableRemotePlayback  className="img-fluid rounded">
                                <source src={ImperiusArty} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>3D Modeling</h2>
                    <p style={{ textAlign: "left" }}> I have also contributed to Imperius via <b className="purple">3D modeling</b> space ships and space stations.</p>

                    <Row>
                        <Col>
                            <img src={ImperiusModel1} alt="about" className="img-fluid rounded" />
                        </Col>
                        <Col>
                            <img src={ImperiusModel2} alt="about" className="img-fluid rounded" />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <img src={ImperiusModel3} alt="about" className="img-fluid rounded" />
                        </Col>
                        <Col>
                            <img src={ImperiusModel4} alt="about" className="img-fluid rounded" />
                        </Col>
                    </Row>

                </Col>
            </Container>
            <Particle />
        </Container>
    );
}

export default Imperius;
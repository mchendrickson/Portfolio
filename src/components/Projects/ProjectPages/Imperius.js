import React from "react";
import { Container, Col } from "react-bootstrap";
import Particle from "../../Particle";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import TechstackImperius from "../../About/TechstackImperius";
import ImperiusArtillery from "../../../Assets/Projects/ImperiusArtillery.jpg";
import ImperiusNuke from "../../../Assets/Projects/ImperiusNuke.mp4";
import ImperiusShield from "../../../Assets/Projects/ImperiusShield.mp4";
import ImperiusPathfinding from "../../../Assets/Projects/ImperiusPathfinding.mp4";
import ImageWithDescription from "../ImageWithDescription";

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
                    <p style={{ textAlign: "justify" }}>
                        Imperius is a <b className="purple">3D space RTS </b>, that I have
                        been the <b className="purple"> lead developer </b> on and off for
                        the last <b className="purple"> 3 years.</b> It is the culmination
                        of my entire skillset. It features a 6 mission campaign, 24 unique
                        units, and a comprehensive economy system.
                        <br />
                        <Col
                            md={8}
                            style={{ paddingTop: "40px", paddingBottom: "40px" }}
                            className="about-img"
                        >
                            <img
                                src={ImperiusArtillery}
                                alt="about"
                                className="img-fluid rounded"
                            />
                            <div className="image-description">
                                Description of the image
                            </div>
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
                    <p style={{ textAlign: "justify" }}>
                        I combined <b className="purple">Aron Granberg's A* Pathfinding project</b>, an open source <b className="purple">Octree</b>,
                        <b className="purple"> DOTween</b>, and open source <b className="purple">Catmull-rom splines</b> to create a fast, efficient,
                        and accurate <b className="purple">3D pathfinding</b> solution working with hundreds of agents
                        simultaneously with little/no performance overhead. <b className="purple">Multithreading </b>
                        techniques and efficient use of data structures were key components
                        in this project alongside <b className="purple">strong code management skills</b>.
                    </p>
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="about-img"
                    >
                        <video autoPlay loop controls className="img-fluid rounded">
                            <source src={ImperiusPathfinding} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                        Combat Systems
                    </h2>
                    <p style={{ textAlign: "justify" }}>
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
                        multithreaded{" "}
                    </b>
                        collisions, decreasing CPU strain.
                    </p>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>VFX</h2>
                    <p style={{ textAlign: "justify" }}>I made VFX and it looks fackin cool</p>
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="about-img"
                    >
                        <video autoPlay loop controls className="img-fluid rounded">
                            <source src={ImperiusNuke} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="image-description">Description of the video</div>
                    </Col>
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="about-img"
                    >
                        <video autoPlay loop controls className="img-fluid rounded">
                            <source src={ImperiusShield} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="image-description">Description of the video</div>
                    </Col>
                </Col>
            </Container>
            <Particle />
        </Container>
    );
}

export default Imperius;
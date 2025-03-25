import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import Particle from "../../Particle";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import TechstackImperius from "../TechstackImperius";
import ImperiusOctree from "../../../Assets/Projects/Imperius/ImperiusOctree.png";
import ImperiusHero from "../../../Assets/Projects/Imperius/ImperiusHero.png";
import ImperiusLogo from "../../../Assets/Projects/Imperius/ImperiusLogo.png";
import ImperiusMultiplayer from "../../../Assets/Projects/Imperius/ImperiusMultiplayer.jpg";
import ImperiusModel1 from "../../../Assets/Projects/Imperius/ImperiusModel1.png";
import ImperiusModel2 from "../../../Assets/Projects/Imperius/ImperiusModel2.png";
import ImperiusModel3 from "../../../Assets/Projects/Imperius/ImperiusModel3.png";
import ImperiusModel4 from "../../../Assets/Projects/Imperius/ImperiusModel4.png";
import VimeoVideo from "../../../VimeoVideo";

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
                    <img src={ImperiusLogo} alt="about" className="img-fluid rounded" style={{ width: "70%" }} />
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                            <TechstackImperius />
                        </Col>
                        <Col>
                            <iframe src="https://store.steampowered.com/widget/1653880/" width="646" height="190" title="Imperius Steam"></iframe>
                        </Col>
                    </Row>

                    <p style={{ textAlign: "left" }}>
                        <b className="purple">Imperius</b> is a fully completed and released <b className="purple">3D space RTS</b> that I
                        was both team lead and lead programmer for over the course of several years of development. It is the culmination
                        of my entire skillset, featuring dozens of unique units and buildings as well as <b className="purple">Steam-integrated networked multiplayer</b>.
                    </p>
                    <Col
                        md={10}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"1067973072"} videoTitle={"Imperius Combat"}/>
                    </Col>
                    <br/>
                    <br/>
                    <p style={{ textAlign: "left" }}> My contributions: </p>
                        <ul>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Project Manager:</b> Recruited, coordinated, and managed a team of 6 developers using Agile/Scrum as well as oversaw 20+ voice actors during recordings.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Lead Programmer:</b> Wrote a majority of the projects' codebase, as well as employed version control to manage other developers.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Systems Programmer:</b> Designed and implemented several crucial game mechanics, including the economy, special abilities, and ship variants.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Audio Programmer:</b> Integrated FMOD middleware to ensure authentic and realistic soundscapes.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Narrative Designer:</b> Crafted an immersive 60+ page narrative and fictional universe.
                            </li>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">VFX Artist:</b> Developed and adapted a comprehensive range of VFX assets including both
                                particle effects and HLSL shaders.
                            </li>
                        </ul>
                    <br/>
                    <br/>
                    <img src={ImperiusHero} alt="about" className="img-fluid rounded" />
                    <br/>
                    <br/>
                    <h2 style={{ fontSize: "2em", paddingTop: "10px", paddingBottom: "40px" }}>
                        Combat Systems
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I combined Unity's <b className="purple">particle systems</b>{" "}
                        alongside several <b className="purple">algorithms </b>that each
                        weapon fired would predict an enemies' location using their current{" "}
                        <b className="purple">trajectory</b>, and prioritize specific unit
                        types based on a <b className="purple">priority queue</b>. This
                        eclectic approach allowed for hundreds of units each with dozens of
                        weapons to fire at specific enemies. <b className="purple">
                        GPU instancing </b> on the particle systems allowed for <b className="purple">
                        multi-threaded </b>collisions, decreasing CPU strain.
                    </p>
                    <Col
                        md={10}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"877370656"} videoTitle={"Imperius Combat"}/>
                    </Col>

                    <br/>
                    <br/>
                    <h2 style={{ fontSize: "2em", paddingTop: "10px", paddingBottom: "40px" }}>
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
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <Row>
                            <Col md={7}>
                                <VimeoVideo videoId={"876956727"} videoTitle={"Imperius Pathfinding"}/>
                            </Col>
                            <Col md={4}>
                                <img src={ImperiusOctree} alt="about" className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>Multiplayer</h2>
                    <p style={{ textAlign: "left" }}>Leveraging the power of <b className="purple">Unity's Netcode for GameObjects</b> in conjunction with <b className="purple">Facepunch Transport</b>, I successfully engineered a <b className="purple">server-authoritative 4-player skirmish mode</b> that seamlessly integrates with the <b className="purple">Steam client</b>. The implementation embraces a <b className="purple">Peer-to-Peer (P2P)</b> architecture, ensuring a decentralized and efficient network communication capable of managing <b className="purple">hundreds of units</b> simultaneously.</p>
                    <Col
                        md={8}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <img src={ImperiusMultiplayer} alt="about" className="img-fluid rounded" />

                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>Artificial Intelligence</h2>
                    <p style={{ textAlign: "left" }}>
                        I conducted trials using Unity's <b className="purple">ML-Agents</b> package, aiming to derive RTS-style attacking behaviors, and developed a <b className="purple">custom clustering algorithm</b> to efficiently distinguish between different unit groups. In addressing the complex nature of AI in RTS games, I integrated <b className="purple">genetic algorithms, simulated annealing, and utility functions</b> to navigate the vast state space, transitioning from analyzing an immense number of potential states to a manageable few thousand, while ensuring a balance between diversity and precision in decision-making.
                    </p>
                    <Col
                        md={8}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"877373924"} videoTitle={"Imperius Combat"}/>
                    </Col>
                    <Col
                        md={8}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"877372429"} videoTitle={"Imperius Clustering"}/>
                    </Col>
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>VFX</h2>
                    <p style={{ textAlign: "left" }}>By skillfully modifying pre-existing assets as well as creating original visual
                        effects from scratch, I have transformed these elements into <b className="purple">captivating</b> and
                         <b className="purple"> dynamic</b> visual enhancements that greatly amplify the overall impact of Imperius.</p>
                    <Row>
                        <Col>
                            <VimeoVideo videoId={"877208282"} videoTitle={"Imperius Black Holes"}/>
                        </Col>
                        <Col>
                            <VimeoVideo videoId={"877261195"} videoTitle={"Imperius Artillery"}/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <VimeoVideo videoId={"877208504"} videoTitle={"Imperius Pathfinding"}/>
                        </Col>
                        <Col>
                            <VimeoVideo videoId={"876967223"} videoTitle={"Imperius Pathfinding"}/>
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
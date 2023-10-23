import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import Particle from "../../Particle";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import TechstackImperius from "../TechstackImperius";
import ImperiusArtillery from "../../../Assets/Projects/Imperius/ImperiusArtillery.jpg";
import ImperiusOctree from "../../../Assets/Projects/Imperius/ImperiusOctree.png";
import ImperiusHero from "../../../Assets/Projects/Imperius/ImperiusHero.png";
import ImperiusLogo from "../../../Assets/Projects/Imperius/ImperiusLogo.png";
import ImperiusShowfest from "../../../Assets/Projects/Imperius/ImperiusShowfest.png";
import ImperiusMultiplayer from "../../../Assets/Projects/Imperius/ImperiusMultiplayer.jpg";
import ImperiusModel1 from "../../../Assets/Projects/Imperius/ImperiusModel1.png";
import ImperiusModel2 from "../../../Assets/Projects/Imperius/ImperiusModel2.png";
import ImperiusModel3 from "../../../Assets/Projects/Imperius/ImperiusModel3.png";
import ImperiusModel4 from "../../../Assets/Projects/Imperius/ImperiusModel4.png";
import VideoJS from "../../VideoJS";
import { defaultAutoplayOptions } from "../../VideoJS";
import VimeoVideo from "../../../VimeoVideo";

let ImperiusEMP = "https://youtu.be/8jZwxN59QVQ";
let ImperiusClustering = "https://youtu.be/YschcX_E9sQ";
let ImperiusMLAgents = "https://youtu.be/_66QWsxGb4k";
let ImperiusNuke = "https://youtu.be/jjtsBKnWVV0";
let ImperiusShield = "https://youtu.be/joLg3yalzK8";
let ImperiusPathfinding = "https://youtu.be/s1hWoogmJIo";
let ImperiusCombat = "https://youtu.be/d3N5FiW7Rgc";
let ImperiusFTL = "https://youtu.be/nie6nHvoUeM";
let ImperiusInvis = "https://youtu.be/wECx-iToygA";
let ImperiusArty = "https://youtu.be/iX19pFwEtmk";


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
                            <iframe src="https://store.steampowered.com/widget/1653880/" frameBorder="0" width="646" height="190"></iframe>
                        </Col>
                    </Row>

                    <p style={{ textAlign: "left" }}>
                        Imperius is a <b className="purple">3D space RTS </b>, that I have
                        been the <b className="purple"> lead developer </b> on and off for
                        the last <b className="purple"> 3 years.</b> It is the culmination
                        of my entire skillset. It features a 6 mission campaign, 24 unique
                        units, and a comprehensive economy system.
                    </p>

                    <img src={ImperiusHero} alt="about" className="img-fluid rounded" />
                    <br/>
                    <br/>

                    <p style={{ textAlign: "left" }}> I have contributed to this project in a multitude of different
                        ways: </p>
                        <ul>
                            <li className="about-activity">
                                <VscDebugBreakpointLogUnverified /> <b className="purple">Project Manager:</b> Recruited, coordinated, and managed a team of 6 developers using Agile/Scrum as well as oversaw 20+ voice actors during recordings
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
                                <VimeoVideo videoId={"876956727"} videoTitle={"Imperius Pathfinding"}/>
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
                        md={10}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"876967223"} videoTitle={"Imperius Pathfinding"}/>

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
                        <VideoJS options={{
                            ...defaultAutoplayOptions,
                            sources: [{
                                src: ImperiusMLAgents,
                                type: 'video/youtube'
                            }]
                        }}onReady={undefined}/>

                    </Col>
                    <br />
                    <br />
                    <Col
                        md={8}
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VideoJS options={{
                            ...defaultAutoplayOptions,
                            sources: [{
                                src: ImperiusClustering,
                                type: 'video/youtube'
                            }]
                        }}onReady={undefined}/>
                    </Col>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>VFX</h2>
                    <p style={{ textAlign: "left" }}>By skillfully modifying pre-existing assets and creating original visual
                        effects from scratch, I have transformed these elements into <b className="purple">captivating</b> and
                         <b className="purple"> dynamic</b> visual enhancements that greatly amplify the overall impact of Imperius.</p>
                    <Row>
                        <Col>
                            <VimeoVideo videoId={"877208282"} videoTitle={"Imperius Pathfinding"}/>
                        </Col>
                        <Col>
                            <VideoJS options={{
                                ...defaultAutoplayOptions,
                                sources: [{
                                    src: ImperiusShield,
                                    type: 'video/youtube'
                                }]
                            }}onReady={undefined}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VimeoVideo videoId={"877208504"} videoTitle={"Imperius Pathfinding"}/>
                        </Col>
                        <Col>
                            <VideoJS options={{
                                ...defaultAutoplayOptions,
                                sources: [{
                                    src: ImperiusFTL,
                                    type: 'video/youtube'
                                }]
                            }}onReady={undefined}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VideoJS options={{
                                ...defaultAutoplayOptions,
                                sources: [{
                                    src: ImperiusInvis,
                                    type: 'video/youtube'
                                }]
                            }}onReady={undefined}/>
                        </Col>
                        <Col>
                            <VideoJS options={{
                                ...defaultAutoplayOptions,
                                sources: [{
                                    src: ImperiusArty,
                                    type: 'video/youtube'
                                }]
                            }}onReady={undefined}/>
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
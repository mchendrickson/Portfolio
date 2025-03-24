import React from "react";
import {Container, Col} from "react-bootstrap";
import Particle from "../../Particle";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import TechstackCorporateClash from "../TechstackCorporateClash";
import VimeoVideo from "../../../VimeoVideo";
import CorporateClashOptionsMenu from "../../../Assets/Projects/CorporateClash/CorporateClashOptionsMenu.png"
import AstronPandas from "../../../Assets/Projects/CorporateClash/AstronPandas.png"

function CorporateClash() {
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
                        Toontown: Corporate Clash
                    </h1>
                    <TechstackCorporateClash />
                    <p style={{ textAlign: "left" }}>
                        <b className="purple">Toontown: Corporate Clash</b> is a revival of the popular MMO series <b className="purple">Toontown Online</b> created and then later shutdown by Disney. As part of the  <b className="purple">Corporate Clash</b> team, I’ve helped modernize and expand Disney’s original Toontown Online with new content, technical enhancements, and player-focused improvements.
                    </p>
                    <p style={{ textAlign: "left", fontSize: "0.5em", fontStyle: "italic" }}>
                        Disclaimer: I do not claim ownership of any intellectual property rights for the images and videos displayed below. All rights to Toontown: Corporate Clash belong to the Toontown: Corporate Clash team, and all rights to Toontown Online and related assets belong to Disney. My use of this content is for non-commercial, transformative, and informational purposes, constituting fair use under 17 U.S. Code § 107.
                    </p>
                    <Col
                            md={8}
                            style={{ paddingTop: "10px", paddingBottom: "40px" }}
                            className="img-container"
                        >
                            <VimeoVideo videoId={"1067958228"} videoTitle={"Corporate Clash Wave"}/>
                        </Col>
                    <p style={{ textAlign: "left" }}>
                        My contributions:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Engine & Networking Integration:</b> Worked extensively with the Panda3D engine and Astron Networking Project to develop core systems and maintain online infrastructure
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Security Enhancements:</b> Implemented client and server-side safety features to protect player experience and mitigate potential exploits.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Content Development:</b> Designed and implemented new gameplay content while assisting in debugging and improving existing features.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Legacy Refactoring:</b> Modernized legacy code to reduce technical debt, improve maintainability, and support long-term scalability.
                        </li>
                    </ul>

                    <br/>
                    <img src={AstronPandas} alt="about" className="img-fluid rounded" style={{ width: "60%" }} />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2 style={{ fontSize: "2em", paddingTop: "10px", paddingBottom: "40px" }}>
                        Refactoring and Bugfixing
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        There were several areas in the codebase and feature set that required refactoring for improved efficiency and stability:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Login-Time Datetime Validation:</b> Designed and implemented a preventative check that ensures server-client datetime alignment during login, eliminating time-based sync errors that previously caused critical gameplay bugs.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Clubs Netcode Refactor:</b> Untangled tightly coupled network logic and modularized the backend to dramatically improve the reliability and performance of the Clubs feature under high concurrency.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Rainmaker Boss Debugging:</b> Targeted playtesting and debugging of the Rainmaker boss fight, resolving gameplay-breaking edge cases and improving the consistency of mechanics.
                        </li>
                    </ul>
                    <Col
                        md={8}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"1068446232"} videoTitle={"Rainmaker Boss Fight"}/>
                    </Col>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2 style={{ fontSize: "2em", paddingTop: "10px", paddingBottom: "40px" }}>
                        Exploit Prevention
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        Malicious players were exploiting tools like <b className="purple">Cheat Engine</b> to spam teleport requests and clutter livestreamers’ screens. To prevent this, I developed a multi‐layered solution:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Action Lock:</b> Users can no longer click the teleport button once a teleport is already in progress.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Client‐Side Rate Limiting:</b> Only a set number of requests can be sent per second, even if the UI is bypassed.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Server‐Side Redundancy:</b> A second rate limiter on the server provides an extra safeguard against spam.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Suspicious Activity Alerts:</b> Users who hit these limits trigger automatic flags and detailed logs for moderation.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Privacy Settings:</b> A new option lets players opt out of teleport requests from anyone who isn’t on their friends list.
                        </li>
                    </ul>
                    <p style={{ textAlign: "left" }}>
                        This comprehensive approach <b className="purple">eliminated the exploit</b> and safeguarded the game’s community from harassment.
                    </p>
                    <img src={CorporateClashOptionsMenu} alt="about" className="img-fluid rounded" style={{ width: "60%" }} />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2 style={{ fontSize: "2em", paddingTop: "10px", paddingBottom: "40px" }}>
                        New Content
                    </h2>
                    <p style={{ textAlign: "left" }}>
                        I contributed to the <b className="purple">The Director's Cut</b> and the upcoming <b className="purple">Hammerspace</b> updates by improving systems, refining features, and strengthening release readiness:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Spawn Weight Tuning:</b> Increased the frequency of new enemy types during the celebration event to highlight recent content and enhance combat variety.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">Legacy Code Refactor:</b> Rewrote outdated systems to reduce technical debt and streamline the development pipeline for future updates.
                        </li>
                        <li className="about-activity">
                            <VscDebugBreakpointLogUnverified /><b className="purple">QA and Bug Triage:</b> Conducted in-depth testing on unreleased features to ensure stability, polish, and design consistency.
                        </li>
                    </ul>
                    <Col
                        md={8}
                        style={{ paddingTop: "10px", paddingBottom: "40px" }}
                        className="img-container"
                    >
                        <VimeoVideo videoId={"1068230483"} videoTitle={"The Directors Cut"}/>
                    </Col>
                </Col>
            </Container>
            <Particle />
        </Container>
    );
}

export default CorporateClash;
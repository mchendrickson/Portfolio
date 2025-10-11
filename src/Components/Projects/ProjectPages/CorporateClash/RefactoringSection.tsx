import React from "react";
import {Col} from "react-bootstrap";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * Refactoring and bugfixing section for the Corporate Clash project page.
 * 
 * @returns {JSX.Element} Section explaining refactoring work and bugfixes
 */
const RefactoringSection: React.FC = () => {
    return (
        <Section title="Refactoring and Bugfixing">
            <p style={{textAlign: "left"}}>
                There were several areas in the codebase and feature set that required refactoring for improved
                efficiency and stability:
            </p>

            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <span className="body-text">Login-Time Datetime
                    Validation:</span> Designed and implemented a preventative check that ensures server-client datetime
                    alignment during login, eliminating time-based sync errors that previously caused critical gameplay
                    bugs.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <span className="body-text">Clubs Netcode Refactor:</span> Untangled
                    tightly coupled network logic and modularized the backend to dramatically improve the reliability
                    and performance of the Clubs feature under high concurrency.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <span className="body-text">Rainmaker Boss Debugging:</span> Targeted
                    playtesting and debugging of the Rainmaker boss fight, resolving gameplay-breaking edge cases and
                    improving the consistency of mechanics.
                </li>
            </ul>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1068446232" videoTitle="Rainmaker Boss Fight"/>
            </Col>
        </Section>
    );
};

export default RefactoringSection;

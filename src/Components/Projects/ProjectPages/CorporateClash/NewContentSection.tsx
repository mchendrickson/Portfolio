import React from "react";
import {Col} from "react-bootstrap";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * New content section for the Corporate Clash project page.
 * 
 * @returns {JSX.Element} Section explaining new content development and updates
 */
const NewContentSection: React.FC = () => {
    return (
        <Section title="New Content">
            <p style={{textAlign: "left"}}>
                I contributed to the <span className="purple">The Director's Cut</span> and the upcoming{" "}
                <span className="purple">Hammerspace</span> updates by improving systems, refining features, and strengthening
                release readiness:
            </p>

            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <span className="purple">Spawn Weight Tuning:</span> Increased the
                    frequency of new enemy types during the celebration event to highlight recent content and enhance
                    combat variety.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <span className="purple">Legacy Code Refactor:</span> Rewrote outdated
                    systems to reduce technical debt and streamline the development pipeline for future updates.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <span className="purple">QA and Bug Triage:</span> Conducted in-depth
                    testing on unreleased features to ensure stability, polish, and design consistency.
                </li>
            </ul>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px", paddingBottom: "40px"}}
            >
                <VimeoVideo videoId="1068230483" videoTitle="The Directors Cut"/>
            </Col>
        </Section>
    );
};

export default NewContentSection;

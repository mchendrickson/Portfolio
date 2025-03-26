import React from "react";
import {Col} from "react-bootstrap";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const NewContentSection: React.FC = () => {
    return (
        <Section title="New Content">
            <p style={{textAlign: "left"}}>
                I contributed to the <b className="purple">The Director's Cut</b> and the upcoming{" "}
                <b className="purple">Hammerspace</b> updates by improving systems, refining features, and strengthening
                release readiness:
            </p>

            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Spawn Weight Tuning:</b> Increased the
                    frequency of new enemy types during the celebration event to highlight recent content and enhance
                    combat variety.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Legacy Code Refactor:</b> Rewrote outdated
                    systems to reduce technical debt and streamline the development pipeline for future updates.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">QA and Bug Triage:</b> Conducted in-depth
                    testing on unreleased features to ensure stability, polish, and design consistency.
                </li>
            </ul>

            <Col
                md={8}
                className="img-container"
                style={{paddingTop: "10px", paddingBottom: "40px"}}
            >
                <VimeoVideo videoId="1068230483" videoTitle="The Directors Cut"/>
            </Col>
        </Section>
    );
};

export default NewContentSection;

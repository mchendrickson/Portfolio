import React from "react";
import {Col} from "react-bootstrap";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const ContributionsSection: React.FC = () => {
    return (
        <Section title="My Contributions">
            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Project Manager:</b> Led a team of four
                    game developers in all stages of the game development pipeline.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Systems Programmer:</b> Developed
                    substantial gameplay elements and systems.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">AI Programmer:</b> Developed the AI for all
                    NPC characters and their various quirks.
                </li>
            </ul>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877212425" videoTitle="Badmin Gameplay"/>
            </Col>
        </Section>
    );
};

export default ContributionsSection;

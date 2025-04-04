import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import BulletList from "../../BulletList";
import VimeoVideo from "../../../../VimeoVideo";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Project Manager:</span> Led a team of four game developers in all stages of the game
            development pipeline.</>,
        <><span className="purple">Systems Programmer:</span> Developed substantial gameplay elements and systems.</>,
        <><span className="purple">AI Programmer:</span> Developed the AI for all NPC characters and their various quirks.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets}/>
            <Col md={8} className="vimeo-container" style={{paddingTop: "10px"}}>
                <VimeoVideo videoId="877212425" videoTitle="Badmin Gameplay"/>
            </Col>
        </Section>
    );
};

export default ContributionsSection;

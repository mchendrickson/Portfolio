import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * AI behaviors section for the Badmin project page.
 * 
 * @returns {JSX.Element} Section explaining AI behaviors and pathfinding
 */
const AiBehaviorSection: React.FC = () => {
    return (
        <Section title="AI Behaviors">
            <p style={{textAlign: "left"}}>
                I designed all the <span className="purple">AI behaviors</span>, including using{" "}
                <span className="purple">Unity's 2D Navmesh</span> system to create dynamic pathfinding solutions amongst a
                dozen agents.
                I also designed “cheating” behaviors for each of the NPCs, such as speedhacking, wallhacking, and
                noclipping.
            </p>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877212490" videoTitle="Badmin Abilities"/>
            </Col>
        </Section>
    );
};

export default AiBehaviorSection;

import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const AiBehaviorSection: React.FC = () => {
    return (
        <Section title="AI Behaviors">
            <p style={{textAlign: "left"}}>
                I designed all the <b className="purple">AI behaviors</b>, including using{" "}
                <b className="purple">Unity's 2D Navmesh</b> system to create dynamic pathfinding solutions amongst a
                dozen agents.
                I also designed “cheating” behaviors for each of the NPCs, such as speedhacking, wallhacking, and
                noclipping.
            </p>

            <Col
                md={8}
                className="img-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877212490" videoTitle="Badmin Abilities"/>
            </Col>
        </Section>
    );
};

export default AiBehaviorSection;

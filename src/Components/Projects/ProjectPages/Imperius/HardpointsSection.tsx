import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * Hardpoints section for the Imperius project page.
 * 
 * @returns {JSX.Element} Section explaining hardpoint system and targeting mechanics
 */
const HardpointsSection: React.FC = () => {
    return (
        <Section title="Hardpoints">
            <p style={{ textAlign: "left" }}>
                Hardpoints are <span className="body-text">destructible subsystems</span> on ships and buildings that are <span className="body-text">individually targetable</span>.
                Since each weapon's <span className="body-text">firing arc</span> depends on its hardpoint position, destroying (for example) all bow-mounted weapons disables the ship's forward-firing capability.
            </p>
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1069317063" videoTitle="Imperius Hardpoints"/>
            </Col>
        </Section>
    );
};

export default HardpointsSection;

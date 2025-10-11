import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * TerritoryCaptureSection component for the Imperius project page.
 * 
 * @returns {JSX.Element} A section component with territory capture details and video demo
 */
const TerritoryCaptureSection: React.FC = () => {
    return (
        <Section title="Territory Capture">
            <p style={{ textAlign: "left" }}>
                Imperius features a range of <span className="body-text">capturable territories</span> across its maps and game modes.
                Players contest areas by <span className="body-text">moving units nearby</span>, and will capture the area once they defeat all nearby enemies.
                Players can then <span className="body-text">construct buildings</span> on the captured area.
            </p>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1071298977" videoTitle="Imperius Territory Capture"/>
            </Col>
        </Section>
    );
};

export default TerritoryCaptureSection;

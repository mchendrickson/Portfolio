import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const TerritoryCaptureSection: React.FC = () => {
    return (
        <Section title="Territory Capture">
            <p style={{ textAlign: "left" }}>
                There is a variety of <b className="purple">capturable territory</b> strewn across the various maps and gamemodes of <i>Imperius</i>.
                players need only move their units close to the area they wish to capture and they will <b className="purple">contest</b> it with
                any enemies in the surrounding area.
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

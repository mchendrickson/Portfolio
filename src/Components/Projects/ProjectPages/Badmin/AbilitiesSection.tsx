import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const AbilitiesSection: React.FC = () => {
    return (
        <Section title="Abilities">
            <p style={{textAlign: "left"}}>
                I designed each of the six <b className="purple">moderator abilities</b>, including balancing penalties
                for using them.
            </p>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877214056" videoTitle="Badmin Behaviors"/>
            </Col>
        </Section>
    );
};

export default AbilitiesSection;

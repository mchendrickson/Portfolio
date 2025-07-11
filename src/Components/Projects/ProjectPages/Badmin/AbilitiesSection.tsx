import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * Abilities section for the Badmin project page.
 * 
 * @returns {JSX.Element} Section explaining moderator abilities and gameplay
 */
const AbilitiesSection: React.FC = () => {
    return (
        <Section title="Abilities">
            <p style={{textAlign: "left"}}>
                I designed each of the six <span className="purple">moderator abilities</span>, including balancing penalties
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

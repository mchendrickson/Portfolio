import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const VFXSection: React.FC = () => {
    return (
        <Section title="VFX">
            <p style={{textAlign: "left"}}>
                I created the majority of the <span className="purple">VFX</span> for <i>Imperius</i>, including particle effects, post processing, and lighting.
            </p>

            <Row>
                <Col>
                    <VimeoVideo videoId="877208282" videoTitle="Imperius Black Holes"/>
                </Col>
                <Col>
                    <VimeoVideo videoId="877261195" videoTitle="Imperius Artillery"/>
                </Col>
            </Row>

            <br/>

            <Row>
                <Col>
                    <VimeoVideo videoId="877208504" videoTitle="Imperius EMP"/>
                </Col>
                <Col>
                    <VimeoVideo videoId="876967223" videoTitle="Imperius Nuke"/>
                </Col>
            </Row>
        </Section>
    );
};

export default VFXSection;

import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const VFXSection: React.FC = () => {
    return (
        <Section title="VFX">
            <p style={{textAlign: "left"}}>
                By skillfully modifying pre-existing assets as well as creating original visual effects from scratch, I
                have
                transformed these elements into <b className="purple">captivating</b> and <b
                className="purple">dynamic</b> visual
                enhancements that greatly amplify the overall impact of Imperius.
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

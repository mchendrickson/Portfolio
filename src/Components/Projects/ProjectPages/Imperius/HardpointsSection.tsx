import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const HardpointsSection: React.FC = () => {
    return (
        <Section title="Hardpoints">
            <p style={{textAlign: "left"}}>
                Hardpoints are <b className="purple">destructible subsystems</b> on units and buildings that can be{" "}
                <b className="purple">individually targeted</b> and destroyed during combat. Hardpoints take the form of
                weapons,
                engines, or other critical components. This adds another{" "}
                <b className="purple">strategic gameplay layer</b> for the player to manage and exploit.
            </p>

            <Col
                md={8}
                className="img-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1069317063" videoTitle="Imperius Hardpoints"/>
            </Col>
        </Section>
    );
};

export default HardpointsSection;

import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const HardpointsSection: React.FC = () => {
    return (
        <Section title="Hardpoints">
            <p style={{ textAlign: "left" }}>
                Hardpoints are <b className="purple">destructible subsystems</b>—such as weapons, engines, or other critical components—on units and buildings. These subsystems can be <b className="purple">individually targeted</b> and destroyed during combat, with some units featuring dozens of them. This mechanic introduces a new <b className="purple">strategic gameplay layer</b> for players to manage and exploit.
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

import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const HardpointsSection: React.FC = () => {
    return (
        <Section title="Hardpoints">
            <p style={{textAlign: "left"}}>
                Hardpoints are <span className="purple">destructible subsystems</span>—like weapons or engines—that can be <span
                className="purple">individually targeted</span> to cripple a ship's functionality, adding another layer of
                strategy for players to micromanage and exploit.
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

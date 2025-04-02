import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const HardpointsSection: React.FC = () => {
    return (
        <Section title="Hardpoints">
            <p style={{textAlign: "left"}}>
                Hardpoints are <b className="purple">destructible subsystems</b>—like weapons or engines—that can be <b
                className="purple">individually targeted</b> to cripple a ship's functionality, adding another layer of
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

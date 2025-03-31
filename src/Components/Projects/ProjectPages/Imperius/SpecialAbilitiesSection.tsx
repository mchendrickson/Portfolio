import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";

const SpecialAbilitiesSection: React.FC = () => {
    return (
        <Section title="Special Abilities">
            <p style={{textAlign: "left"}}>
                I designed and developed <b className="purple">15 distinct special abilities</b> for the units in Imperius,
                ranging from <b className="purple">force fields</b> to <b className="purple">EMP bursts</b> to devastating <b className="purple">nuclear WMD strikes</b>.
                These abilities provided players with powerful tools to gain tactical advantages over their opponents.
                The system was carefully balanced to allow certain abilities to counter others,
                introducing a dynamic <b className="purple">rock-paper-scissors</b> style of strategic warfare.
            </p>
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1071231926" videoTitle="Imperius Special Abilities"/>
            </Col>
        </Section>
    );
};

export default SpecialAbilitiesSection;

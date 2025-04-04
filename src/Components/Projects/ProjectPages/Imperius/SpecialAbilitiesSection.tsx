import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";

const SpecialAbilitiesSection: React.FC = () => {
    return (
        <Section title="Special Abilities">
            <p style={{textAlign: "left"}}>
                I designed and developed <span className="purple">15 distinct special abilities</span> for the units in Imperius,
                ranging from <span className="purple">force fields</span> to <span className="purple">EMP bursts</span> to devastating <span className="purple">nuclear WMD strikes</span>.
                These abilities provided players with powerful tools to gain tactical advantages over their opponents.
                The system was carefully balanced to allow certain abilities to counter others,
                introducing a dynamic <span className="purple">rock-paper-scissors</span> style of strategic warfare.
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

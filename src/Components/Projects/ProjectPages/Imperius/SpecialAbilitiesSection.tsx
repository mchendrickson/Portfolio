import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";

/**
 * SpecialAbilitiesSection component for the Imperius project page.
 * 
 * @returns {JSX.Element} A section component with special abilities details and video demo
 */
const SpecialAbilitiesSection: React.FC = () => {
    return (
        <Section title="Special Abilities">
            <p style={{textAlign: "left"}}>
                I designed and developed <span className="body-text">15 distinct special abilities</span> for the units in Imperius,
                ranging from <span className="body-text">force fields</span> to <span className="body-text">EMP bursts</span> to devastating <span className="body-text">nuclear WMD strikes</span>.
                These abilities provided players with powerful tools to gain tactical advantages over their opponents.
                The system was carefully balanced to allow certain abilities to counter others,
                introducing a dynamic <span className="body-text">rock-paper-scissors</span> style of strategic warfare.
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

import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import VimeoVideo from "../../../../VimeoVideo";
import {Col} from "react-bootstrap";

const BaseBuildingSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Command Centers:</span> Can construct units, generates resources, and allows the construction of other buildings. </>,
        <><span className="purple">Supply Depots:</span> Generates materials, which are used to create other buildings and ships. </>,
        <><span className="purple">Solar Panels:</span> Increases the power cap-which in turn allows more structures to be built. </>,
        <><span className="purple">Dockyards:</span> Can construct small-medium sized ships. </>,
        <><span className="purple">Shipyards:</span> Can construct medium-large sized ships. </>,
        <><span className="purple">Turrets:</span> Static defensive structures to defend other buildings and hold territory. </>,
    ];
    return (
        <Section title="Base Building">
            <p style={{ textAlign: "left" }}>
                Players can <span className="purple">construct and upgrade</span> a <span className="purple">variety of structures</span> in <i>Imperius</i>, each with a different role to play in the gameplay loop.
            </p>
            <BulletList items={bullets} />
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1071901283" videoTitle="Imperius Base Building"/>
            </Col>

        </Section>
    );
};

export default BaseBuildingSection;

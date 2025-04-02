import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import ImperiusHomeMenu from "../../../../Assets/Projects/Imperius/ImperiusHomeMenu.png";
import VimeoVideo from "../../../../VimeoVideo";
import {Col} from "react-bootstrap";

const EconomySection: React.FC = () => {
    const bullets = [
        <><b className="purple">Materials:</b> Used for constructing units, buildings, and unlocking upgrades. </>,
        <><b className="purple">Tech:</b> Progresses through five tiers, each requiring more materials. Higher tiers unlock advanced buildings and high-cost units. </>,
        <><b className="purple">Power:</b> Caps at 100%; exceeding this limit restricts building/unit production and reduces material generation. </>,
    ];

    return (
        <Section title="Economy">
            <p style={{ textAlign: "left" }}>
                <i>Imperius</i> has <b className="purple">three distinct resources</b> that make the backbone of its economy:
            </p>
            <BulletList items={bullets} />
            <p style={{ textAlign: "left" }}>
                Players must balance each of these resources with base building, territory control, and unit production.
                Mismanagement of any of these three will lead to dire strategic consequences.
            </p>
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1071905755" videoTitle="Imperius Economy"/>
            </Col>
        </Section>
    );
};

export default EconomySection;

import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import VimeoVideo from "../../../../VimeoVideo";
import { Col } from "react-bootstrap";

/**
 * Base building section for the Imperius project page.
 * 
 * @returns {JSX.Element} Section explaining base building and economy system
 */
const BaseBuildingSection: React.FC = () => {
    const economyBullets = [
        <><span className="body-text">Materials:</span> Used for constructing units, buildings, and unlocking upgrades. </>,
        <><span className="body-text">Tech:</span> Progresses through five tiers, each requiring more materials. Higher tiers unlock advanced buildings and high-cost units. </>,
        <><span className="body-text">Power:</span> Caps at 100%; exceeding this limit restricts building/unit production and reduces material generation. </>,
    ];

    return (
        <Section title="Base Building">
            <p style={{ textAlign: "left" }}>
                Players can <span className="body-text">construct and upgrade</span> a <span className="body-text">variety of structures</span> in <i>Imperius</i> which can generate resources, build units, or defend territory.
            </p>
            <p style={{ textAlign: "left" }}>
                The game's economy is built around <span className="body-text">three distinct resources</span> that the player must balance between base construction, building upgrades, and unit production:
            </p>
            <BulletList items={economyBullets} />
            <Col
                md={8}
                className="vimeo-container"
                style={{ paddingTop: "10px" }}
            >
                <VimeoVideo videoId="1071901283" videoTitle="Imperius Base Building" />
            </Col>
        </Section>
    );
};

export default BaseBuildingSection;

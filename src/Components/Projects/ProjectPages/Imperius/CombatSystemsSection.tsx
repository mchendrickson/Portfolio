import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

/**
 * Combat systems section for the Imperius project page.
 * 
 * @returns {JSX.Element} Section explaining combat systems and weapon mechanics
 */
const CombatSection: React.FC = () => {
    const bullets = [
        <><span className="body-text">Kinematics:</span> To calculate a weapon's optimal firing position by predicting the future position of it's target.</>,
        <><span className="body-text">Batch Raycasting:</span> To perform multithreaded raycasts, ensuring each weapon has line of sight to their target.</>,
        <><span className="body-text">Particle Systems:</span> To create each bullet, laser, and missile and all other weapon projectiles, and for multithreaded collision detection.</>,
        <><span className="body-text">GPU Instancing:</span> To reduce draw calls for repeated weaponsfire, easing CPU/GPU load.</>,
    ];

    return (
        <Section title="Combat Systems">
            <p style={{textAlign: "left"}}>
                Each ship in <i>Imperius</i> is equipped with shields, health, and anywhere from a single weapon to <span className="body-text">dozens of weapon systems</span>.
            </p>
            <p style={{textAlign: "left"}}>
                Managing simultaneous firing from potentially over a hundred weapons demanded high-performance game architecture:
            </p>
            <BulletList items={bullets} />
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1072888207" videoTitle="Imperius Combat"/>
            </Col>
        </Section>
    );
};

export default CombatSection;

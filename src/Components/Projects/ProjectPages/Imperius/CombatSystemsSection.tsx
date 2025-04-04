import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

const CombatSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Kinematics:</span> To calculate a weapon's optimal firing position by predicting the future position of it's target.</>,
        <><span className="purple">Batch Raycasting:</span> To perform multithreaded raycasts, ensuring each weapon has line of sight to their target.</>,
        <><span className="purple">Particle Systems:</span> To create each bullet, laser, and missile and all other weapon projectiles, and for multithreaded collision detection.</>,
        <><span className="purple">GPU Instancing:</span> To reduce draw calls for repeated weaponsfire, easing CPU/GPU load.</>,
    ];

    return (
        <Section title="Combat Systems">
            <p style={{textAlign: "left"}}>
                Each ship in <i>Imperius</i> is equipped with shields, health, and anywhere from a single weapon to <span className="purple">dozens of weapon systems</span>.
                There are over a <span className="purple">dozen weapon types</span>, each with distinct strengths and weaknesses against different units.
                Weapons can be aimed at individual ship subsystems—known as <span className="purple">hardpoints</span>—to disable or weaken opponents.
                Every weapon has a <span className="purple">limited firing arc</span>; for example, port-side weapons cannot fire to starboard, making ship orientation a key tactical element.
            </p>
            <p style={{textAlign: "left"}}>
                Supporting dozens—or even hundreds—of weapons firing simultaneously demanded a high-performance, multi-layered programming solution:
            </p>
            <BulletList items={bullets} />
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877370656" videoTitle="Imperius Combat"/>
            </Col>
        </Section>
    );
};

export default CombatSection;

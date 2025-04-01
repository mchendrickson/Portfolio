import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

const CombatSection: React.FC = () => {
    const bullets = [
        <><b className="purple">Kinematics:</b> To calculate a weapon's optimal firing position by predicting the future position of it's target.</>,
        <><b className="purple">Batch Raycasting:</b> To perform multithreaded raycasts, ensuring each weapon has line of sight to their target.</>,
        <><b className="purple">Particle Systems:</b> To create each bullet, laser, and missile and all other weapon projectiles, and for multithreaded collision detection.</>,
        <><b className="purple">GPU Instancing:</b> To reduce draw calls for repeated weaponsfire, easing CPU/GPU load.</>,
    ];

    return (
        <Section title="Combat Systems">
            <p style={{textAlign: "left"}}>
                Each ship in <i>Imperius</i> is equipped with shields, health, and anywhere from a single weapon to <b className="purple">dozens of weapon systems</b>.
                There are over a <b className="purple">dozen weapon types</b>, each with distinct strengths and weaknesses against different units.
                Weapons can be aimed at individual ship subsystems—known as <b className="purple">hardpoints</b>—to disable or weaken opponents.
                Every weapon has a <b className="purple">limited firing arc</b>; for example, port-side weapons cannot fire to starboard, making ship orientation a key tactical element.
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

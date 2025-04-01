import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import ImperiusHomeMenu from "../../../../Assets/Projects/Imperius/ImperiusHomeMenu.png";

const EconomySection: React.FC = () => {
    const bullets = [
        <><b className="purple">Materials:</b> Used for constructing units, buildings, and unlocking upgrades. </>,
        <><b className="purple">Power:</b> Caps at 100%; exceeding this limit restricts building/unit production and reduces material generation. </>,
        <><b className="purple">Tech:</b> Progresses through five tiers, each requiring more materials. Higher tiers unlock advanced buildings and high-cost units. </>,
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
            <img
                src={ImperiusHomeMenu}
                alt="Imperius Home Menu"
                className="display-image-container rounded"
            />
        </Section>
    );
};

export default EconomySection;

import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import ImperiusBuildingSlot from "../../../../Assets/Projects/Imperius/ImperiusBuildingSlot.png";

const BaseBuildingSection: React.FC = () => {
    const bullets = [
        <><b className="purple">Command Centers:</b> Can construct units, generates resources, and allows the construction of other buildings. </>,
        <><b className="purple">Supply Depots:</b> Generates materials, which are used to create other buildings and ships. </>,
        <><b className="purple">Solar Panels:</b> Increases the power cap-which in turn allows more structures to be built. </>,
        <><b className="purple">Dockyards:</b> Can construct small-medium sized ships. </>,
        <><b className="purple">Shipyards:</b> Can construct medium-large sized ships. </>,
        <><b className="purple">Turrets:</b> Static defensive structures to defend other buildings and hold territory. </>,
    ];
    return (
        <Section title="Base Building">
            <p style={{ textAlign: "left" }}>
                Players can <b className="purple">construct and upgrade</b> a <b className="purple">variety of structures</b> in <i>Imperius</i>, each with a different role to play in the gameplay loop.
            </p>
            <BulletList items={bullets} />

            <img
                src={ImperiusBuildingSlot}
                alt="Imperius Building Slot"
                className="display-image-container rounded"
            />

        </Section>
    );
};

export default BaseBuildingSection;

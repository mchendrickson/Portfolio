import React from "react";
import Section from "../../Section";
import ImperiusFMODStudio from "../../../../Assets/Projects/Imperius/ImperiusFMODStudio.png";

const AudioProgrammingSection: React.FC = () => {
    return (
        <Section title="Audio Programming">
            <p style={{ textAlign: "left" }}>
                I integrated <b className="purple">audio triggers</b> into <i>Imperius</i> using the Unity plugin for the industry-standard middleware <b className="purple">FMOD</b>, and contributed to a dynamic <b className="purple">variable mix</b> system that adjusts musical intensity in real time based on gameplay action.
            </p>

            <img
                src={ImperiusFMODStudio}
                alt="Imperius FMOD Studio"
                className="display-image-container rounded"
            />
        </Section>
    );
};

export default AudioProgrammingSection;

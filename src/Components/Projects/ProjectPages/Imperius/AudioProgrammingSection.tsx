import React from "react";
import Section from "../../Section";
import ImperiusFMODStudio from "../../../../Assets/Projects/Imperius/ImperiusFMODStudio.png";

const AudioProgrammingSection: React.FC = () => {
    return (
        <Section title="Audio Programming">
            <p style={{ textAlign: "left" }}>
                I integrated <span className="purple">audio triggers</span> into <i>Imperius</i> using the Unity plugin for the industry-standard middleware <span className="purple">FMOD</span>, and contributed to a dynamic <span className="purple">variable mix</span> system that adjusts musical intensity in real time based on gameplay action.
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

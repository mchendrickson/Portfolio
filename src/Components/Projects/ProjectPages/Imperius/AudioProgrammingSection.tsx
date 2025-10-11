import React from "react";
import Section from "../../Section";
import ImperiusFMODStudio from "../../../../Assets/Projects/Imperius/ImperiusFMODStudio.png";

/**
 * Audio programming section for the Imperius project page.
 * 
 * @returns {JSX.Element} Section explaining audio programming and FMOD integration
 */
const AudioProgrammingSection: React.FC = () => {
    return (
        <Section title="Audio Programming">
            <p style={{ textAlign: "left" }}>
                I integrated <span className="body-text">audio triggers</span> into <i>Imperius</i> using the Unity plugin for the industry-standard middleware <span className="body-text">FMOD</span>, and contributed to a dynamic <span className="body-text">variable mix</span> system that adjusts musical intensity in real time based on gameplay action.
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

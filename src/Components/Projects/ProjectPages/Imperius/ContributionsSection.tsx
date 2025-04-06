import React from "react";
import Section from "../../Section";
import ImperiusHero from "../../../../Assets/Projects/Imperius/ImperiusHero.png";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Project Manager:</span> Recruited, coordinated, and managed a team of 6.</>,
        <><span className="purple">Lead Programmer:</span> Authored most of the 15,000+ line codebase and managed version control for team collaboration.</>,
        <><span className="purple">Systems Programmer:</span> Designed and implemented several crucial game mechanics listed below.</>,
        <><span className="purple">Audio Programmer:</span> Integrated FMOD middleware to ensure authentic and realistic soundscapes.</>,
        <><span className="purple">VFX Tech Artist:</span> Developed and adapted a comprehensive range of VFX assets including both particle effects and HLSL shaders.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
            <img src={ImperiusHero} alt="Imperius Hero" className="img-fluid rounded" />
        </Section>
    );
};

export default ContributionsSection;

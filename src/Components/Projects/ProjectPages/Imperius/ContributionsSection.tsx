import React from "react";
import Section from "../../Section";
import ImperiusHero from "../../../../Assets/Projects/Imperius/ImperiusHero.png";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Project Manager:</span> Recruited, coordinated, and managed a team of 6.</>,
        <><span className="purple">Lead Programmer:</span> Wrote a majority of the project's codebase, as well as employed version control to manage other developers.</>,
        <><span className="purple">Systems Programmer:</span> Designed and implemented several crucial game mechanics, including the economy, special abilities, and ship variants.</>,
        <><span className="purple">Audio Programmer:</span> Integrated FMOD middleware to ensure authentic and realistic soundscapes.</>,
        <><span className="purple">VFX Artist:</span> Developed and adapted a comprehensive range of VFX assets including both particle effects and HLSL shaders.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
            <img src={ImperiusHero} alt="Imperius Hero" className="img-fluid rounded" />
        </Section>
    );
};

export default ContributionsSection;

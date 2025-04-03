import React from "react";
import Section from "../../Section";
import ImperiusHero from "../../../../Assets/Projects/Imperius/ImperiusHero.png";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <><b className="purple">Project Manager:</b> Recruited, coordinated, and managed a team of 6.</>,
        <><b className="purple">Lead Programmer:</b> Wrote a majority of the project's codebase, as well as employed version control to manage other developers.</>,
        <><b className="purple">Systems Programmer:</b> Designed and implemented several crucial game mechanics, including the economy, special abilities, and ship variants.</>,
        <><b className="purple">Audio Programmer:</b> Integrated FMOD middleware to ensure authentic and realistic soundscapes.</>,
        <><b className="purple">VFX Artist:</b> Developed and adapted a comprehensive range of VFX assets including both particle effects and HLSL shaders.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
            <img src={ImperiusHero} alt="Imperius Hero" className="img-fluid rounded" />
        </Section>
    );
};

export default ContributionsSection;

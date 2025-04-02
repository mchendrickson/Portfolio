import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import AstronPandas from "../../../../Assets/Projects/CorporateClash/AstronPandas.png";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <><b className="purple">Engine & Networking Integration:</b> Worked extensively with the Panda3D engine and
            Astron Networking Project to develop core systems and maintain online infrastructure.</>,
        <><b className="purple">Security Enhancements:</b> Implemented client and server-side safety features to protect
            player experience and mitigate potential exploits.</>,
        <><b className="purple">Content Development:</b> Designed and implemented new gameplay content while assisting
            in debugging and improving existing features.</>,
        <><b className="purple">Legacy Refactoring:</b> Modernized legacy code to reduce technical debt, improve
            maintainability, and support long-term scalability.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets}/>
            <br/>
            <img
                src={AstronPandas}
                alt="Astron Pandas"
                className="display-image-container rounded"
            />
        </Section>
    );
};

export default ContributionsSection;

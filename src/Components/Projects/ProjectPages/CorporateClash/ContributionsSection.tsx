import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";
import AstronPandas from "../../../../Assets/Projects/CorporateClash/AstronPandas.png";

/**
 * Personal contributions section for the Corporate Clash project page.
 * 
 * @returns {JSX.Element} Section listing personal contributions to the project
 */
const ContributionsSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Engine & Networking Integration:</span> Worked extensively with the Panda3D engine and
            Astron Networking Project to develop core systems and maintain online infrastructure.</>,
        <><span className="purple">Security Enhancements:</span> Implemented client and server-side safety features to protect
            player experience and mitigate potential exploits.</>,
        <><span className="purple">Content Development:</span> Designed and implemented new gameplay content while assisting
            in debugging and improving existing features.</>,
        <><span className="purple">Legacy Refactoring:</span> Modernized legacy code to reduce technical debt, improve
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

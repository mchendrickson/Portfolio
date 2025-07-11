import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";

/**
 * Personal contributions section for the Brigham Women's Hospital project page.
 * 
 * @returns {JSX.Element} Section listing personal contributions to the project
 */
const ContributionsSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Project Manager:</span> Led a team of eleven programmers to successfully develop a working application.</>,
        <><span className="purple">Full Stack Engineer:</span> Developed significant parts of the codebase and incorporated work from other programmers.</>,
        <><span className="purple">Lead Presenter:</span> Presented to hospital employees and coached others in presenting.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
        </Section>
    );
};

export default ContributionsSection;

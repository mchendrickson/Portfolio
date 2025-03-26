import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <><b className="purple">Project Manager:</b> Led a team of eleven programmers to successfully develop a working application.</>,
        <><b className="purple">Full Stack Engineer:</b> Developed significant parts of the codebase and incorporated work from other programmers.</>,
        <><b className="purple">Lead Presenter:</b> Presented to hospital employees and coached others in presenting.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
        </Section>
    );
};

export default ContributionsSection;

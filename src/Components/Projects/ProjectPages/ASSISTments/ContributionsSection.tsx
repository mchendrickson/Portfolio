import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";

/**
 * Personal contributions section for the ASSISTments project.
 * 
 * @returns {JSX.Element} Section listing personal contributions to the project
 */
const ContributionsSection: React.FC = () => {
    const bullets = [
        <>Designed and implemented features to detect <span className="body-text">student behavior patterns</span> using data concatenation and trigram similarity.</>,
        <>Developed <span className="body-text">clustering models</span> using MathBERT embeddings and evaluated them with multiple linkage and scoring techniques.</>,
        <>Converted educational data into a <span className="body-text">contextual bandit framework</span> and ran simulations using epsilon-greedy and deep Bayesian bandits.</>,
        <>Integrated all experiments and visualizations into the <span className="body-text">APLS (Automatic Personalized Learning Service)</span> codebase.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
        </Section>
    );
};

export default ContributionsSection;

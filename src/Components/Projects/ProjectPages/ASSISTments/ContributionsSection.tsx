import React from "react";
import Section from "../../Section";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <>Designed and implemented features to detect <b className="purple">student behavior patterns</b> using data concatenation and trigram similarity.</>,
        <>Developed <b className="purple">clustering models</b> using MathBERT embeddings and evaluated them with multiple linkage and scoring techniques.</>,
        <>Converted educational data into a <b className="purple">contextual bandit framework</b> and ran simulations using epsilon-greedy and deep Bayesian bandits.</>,
        <>Integrated all experiments and visualizations into the <b className="purple">APLS (Automatic Personalized Learning Service)</b> codebase.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
        </Section>
    );
};

export default ContributionsSection;

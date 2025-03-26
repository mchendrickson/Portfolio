import React from "react";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";

const ContributionsSection: React.FC = () => {
    return (
        <Section title="My Contributions">
            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> Designed and implemented features to detect <b
                    className="purple">student behavior patterns</b> using data concatenation and trigram similarity.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> Developed <b className="purple">clustering models</b> using
                    MathBERT embeddings and evaluated them with multiple linkage and scoring techniques.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> Converted educational data into a <b className="purple">contextual
                    bandit framework</b> and ran simulations using epsilon-greedy and deep Bayesian bandits.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> Integrated all experiments and visualizations into the <b
                    className="purple">APLS (Automatic Personalized Learning Service)</b> codebase.
                </li>
            </ul>
        </Section>
    );
};

export default ContributionsSection;

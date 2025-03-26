import React from "react";
import Section from "../../Section";
import Assistmentsbandits from "../../../../Assets/Projects/Assistments/assistmentsbandits.png";

const BanditsSection: React.FC = () => {
    return (
        <Section title="Contextual Bandits on ASSISTments Data">
            <p style={{textAlign: "left"}}>
                I turned ASSISTments data into a <b className="purple">contextual bandit problem</b> and then applied
                several popular
                bandit algorithms from <b className="purple">past research</b> to maximize next problem correctness
                among students
                using <b className="purple">tutor supports</b>.
            </p>

            <img
                src={Assistmentsbandits}
                alt="Bandits Diagram"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />
        </Section>
    );
};

export default BanditsSection;

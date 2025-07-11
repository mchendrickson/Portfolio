import React from "react";
import Section from "../../Section";
import Assistmentsbandits from "../../../../Assets/Projects/Assistments/assistmentsbandits.png";


/**
 * Contextual bandits research section for the ASSISTments project.
 * 
 * @returns {JSX.Element} Section explaining contextual bandits research and implementation
 */
const BanditsSection: React.FC = () => {
    return (
        <Section title="Contextual Bandits on ASSISTments Data">
            <p style={{textAlign: "left"}}>
                I turned ASSISTments data into a <span className="purple">contextual bandit problem</span> and then applied
                several popular
                bandit algorithms from <span className="purple">past research</span> to maximize next problem correctness
                among students
                using <span className="purple">tutor supports</span>.
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

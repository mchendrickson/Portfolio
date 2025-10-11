import React from "react";
import Section from "../../Section";
import TechstackAssistments from "../../TechStacks/TechstackAssistments";
import AssistmentsTitle from "../../../../Assets/Projects/Assistments/assistmentstitle.jpg";

/**
 * Header section for the ASSISTments project page.
 * 
 * @returns {JSX.Element} Header section with project overview and tech stack
 */
const HeaderSection: React.FC = () => {
    return (
        <Section title="ASSISTments: Reinforcement Learning" size={"large"}>

            <TechstackAssistments/>

            <p style={{textAlign: "left"}}>
                This project was an eclectic development of various features for the{" "}
                <span className="body-text">ASSISTments online learning platform</span>. We designed features to identify student
                gaming
                behaviors, used <span className="body-text">trigram matching</span> to determine similarity between hints and
                explanations
                of problems, concatenated data to find streaks of correctly answered problems, and{" "}
                <span className="body-text">clustered Common Core descriptions</span> based on embeddings from{" "}
                <span className="body-text">MathBERT</span>.
            </p>

            <img
                src={AssistmentsTitle}
                alt="ASSISTments Overview"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />

            <p style={{textAlign: "left", marginTop: "20px"}}>
                We also simulated using <span className="body-text">deep Bayesian bandits</span> to recommend content in the form
                of supports
                to struggling students. Our models were able to predict whether or not a student would get the next
                problem correct
                more frequently than random using an <span className="body-text">epsilon-greedy (RMS) model</span>. All features
                were completed
                successfully and integrated into the <span className="body-text">ASSISTments Automatic Personalized Learning
                Service (APLS)</span>.
            </p>
        </Section>
    );
};

export default HeaderSection;

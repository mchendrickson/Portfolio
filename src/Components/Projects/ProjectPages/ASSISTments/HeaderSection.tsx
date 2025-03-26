import React from "react";
import Section from "../../Section";
import TechstackAssistments from "../../TechStacks/TechstackAssistments";
import AssistmentsTitle from "../../../../Assets/Projects/Assistments/assistmentstitle.jpg";

const HeaderSection: React.FC = () => {
    return (
        <Section title="ASSISTments: Reinforcement Learning" size={"large"}>

            <TechstackAssistments/>

            <p style={{textAlign: "left"}}>
                This project was an eclectic development of various features for the{" "}
                <b className="purple">ASSISTments online learning platform</b>. We designed features to identify student
                gaming
                behaviors, used <b className="purple">trigram matching</b> to determine similarity between hints and
                explanations
                of problems, concatenated data to find streaks of correctly answered problems, and{" "}
                <b className="purple">clustered Common Core descriptions</b> based on embeddings from{" "}
                <b className="purple">MathBERT</b>.
            </p>

            <img
                src={AssistmentsTitle}
                alt="ASSISTments Overview"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />

            <p style={{textAlign: "left", marginTop: "20px"}}>
                We also simulated using <b className="purple">deep Bayesian bandits</b> to recommend content in the form
                of supports
                to struggling students. Our models were able to predict whether or not a student would get the next
                problem correct
                more frequently than random using an <b className="purple">epsilon-greedy (RMS) model</b>. All features
                were completed
                successfully and integrated into the <b className="purple">ASSISTments Automatic Personalized Learning
                Service (APLS)</b>.
            </p>
        </Section>
    );
};

export default HeaderSection;

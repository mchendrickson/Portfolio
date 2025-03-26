import React from "react";
import Section from "../../Section";
import TechstackSofteng from "../../TechStacks/TechstackSofteng";
import SoftengTitle from "../../../../Assets/Projects/BrighamWomensHospital/softeng7.jpg";

const HeaderSection: React.FC = () => {
    return (
        <Section title={""}>
            <h1 style={{fontSize: "4em", paddingBottom: "20px"}}>
                Hospital Tracking System
            </h1>

            <TechstackSofteng/>

            <p style={{textAlign: "left"}}>
                We partnered with <b className="purple">Brigham & Women&apos;s Hospital</b> to develop a
                comprehensive{" "}
                <b className="purple">medical equipment tracking and workflow application</b> for demonstration
                purposes.
                As the team leader, I effectively managed a group of <b className="purple">eleven software engineers</b>,
                utilizing{" "}
                <b className="purple">Scrum/Agile methodologies</b> to successfully deliver the project.
            </p>

            <img
                src={SoftengTitle}
                alt="Hospital System Overview"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />
        </Section>
    );
};

export default HeaderSection;

import React from "react";
import Section from "../../Section";
import TechstackSofteng from "../../TechStacks/TechstackSofteng";
import SoftengTitle from "../../../../Assets/Projects/BrighamWomensHospital/softeng7.jpg";

const HeaderSection: React.FC = () => {
    return (
        <Section title={"Hospital Tracking System"} size={"large"}>

            <TechstackSofteng/>

            <p style={{textAlign: "left"}}>
                We partnered with <span className="purple">Brigham & Women&apos;s Hospital</span> to develop a
                comprehensive{" "}
                <span className="purple">medical equipment tracking and workflow application</span> for demonstration
                purposes.
                As the team leader, I effectively managed a group of <span className="purple">eleven software engineers</span>,
                utilizing{" "}
                <span className="purple">Scrum/Agile methodologies</span> to successfully deliver the project.
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

import React from "react";
import Section from "../../Section";
import TechstackSofteng from "../../TechStacks/TechstackSofteng";
import SoftengTitle from "../../../../Assets/Projects/BrighamWomensHospital/softeng7.jpg";

/**
 * Header section for the Brigham Women's Hospital project page.
 * 
 * @returns {JSX.Element} Header section with project overview and tech stack
 */
const HeaderSection: React.FC = () => {
    return (
        <Section title={"Hospital Tracking System"} size={"large"}>

            <TechstackSofteng/>

            <p style={{textAlign: "left"}}>
                We partnered with <span className="body-text">Brigham & Women&apos;s Hospital</span> to develop a
                comprehensive{" "}
                <span className="body-text">medical equipment tracking and workflow application</span> for demonstration
                purposes.
                As the team leader, I effectively managed a group of <span className="body-text">eleven software engineers</span>,
                utilizing{" "}
                <span className="body-text">Scrum/Agile methodologies</span> to successfully deliver the project.
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

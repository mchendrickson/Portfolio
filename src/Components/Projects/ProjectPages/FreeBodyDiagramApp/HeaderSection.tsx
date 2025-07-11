import React from "react";
import Section from "../../Section";
import TechstackFBDApp from "../../TechStacks/TechstackFBDApp";

/**
 * Header section for the Free Body Diagram App project page.
 * 
 * @returns {JSX.Element} Header section with project overview and tech stack
 */
const HeaderSection: React.FC = () => {
    return (
        <Section title="Free Body Diagram App" size={"large"}>

            <TechstackFBDApp/>

            <p style={{textAlign: "left"}}>
                A <span className="purple">mobile application</span> designed to help mechanical engineering students{" "}
                <span className="purple">learn statics concepts</span> by working with free body diagrams. Through a series of
                increasingly
                difficult problems, students will be able to reinforce what is taught in lectures and complete any free
                body diagram
                they are presented with.
            </p>
        </Section>
    );
};

export default HeaderSection;

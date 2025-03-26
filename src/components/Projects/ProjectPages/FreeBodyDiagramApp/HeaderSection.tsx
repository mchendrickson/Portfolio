import React from "react";
import Section from "../../Section";
import TechstackFBDApp from "../../TechStacks/TechstackFBDApp";

const HeaderSection: React.FC = () => {
    return (
        <Section title="">
            <h1 style={{fontSize: "4em", paddingBottom: "20px"}}> Free Body Diagram App </h1>

            <TechstackFBDApp/>

            <p style={{textAlign: "left"}}>
                A <b className="purple">mobile application</b> designed to help mechanical engineering students{" "}
                <b className="purple">learn statics concepts</b> by working with free body diagrams. Through a series of
                increasingly
                difficult problems, students will be able to reinforce what is taught in lectures and complete any free
                body diagram
                they are presented with.
            </p>
        </Section>
    );
};

export default HeaderSection;

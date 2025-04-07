import React from "react";
import Section from "../../Section";
import TechstackP5 from "../../TechStacks/TechstackP5";

const HeaderSection: React.FC = () => {
    return (
        <Section title={"p5.js Projects"} size={"large"}>

            <TechstackP5/>

            <p style={{color: "white"}}>
                Click and drag on any frame to rotate the camera.
            </p>
        </Section>
    );
};

export default HeaderSection;

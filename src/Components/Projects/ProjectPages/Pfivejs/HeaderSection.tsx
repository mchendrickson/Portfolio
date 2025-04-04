import React from "react";
import Section from "../../Section";
import TechstackP5 from "../../TechStacks/TechstackP5";

const HeaderSection: React.FC = () => {
    return (
        <Section title={"p5.js Projects"} size={"large"}>

            <TechstackP5/>

            <p style={{color: "white"}}>
                This page is <span className="purple">desktop only</span> due to the limitations of p5.js. Click and drag
                on any frame to rotate the camera.
            </p>
        </Section>
    );
};

export default HeaderSection;

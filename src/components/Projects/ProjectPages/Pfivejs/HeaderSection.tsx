import React from "react";
import Section from "../../Section";
import TechstackP5 from "../../TechStacks/TechstackP5";

const HeaderSection: React.FC = () => {
    return (
        <Section title={""}>
            <h1 style={{fontSize: "4em", paddingBottom: "20px"}}>
                Various p5.js Projects
            </h1>

            <TechstackP5/>

            <p style={{color: "white"}}>
                This page is <b className="purple">desktop only</b> due to the limitations of p5.js. Click and drag
                on any frame to rotate the camera.
            </p>
        </Section>
    );
};

export default HeaderSection;

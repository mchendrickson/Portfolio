import React from "react";
import Section from "../../Section";
import TechstackP5 from "../../TechStacks/TechstackP5";

/**
 * HeaderSection component for the p5.js project page.
 * 
 * Displays the header section for p5.js projects, including the technology stack
 * and user interaction instructions for camera controls. Features a large section
 * layout with tech stack display and camera rotation instructions.
 * 
 * @returns {JSX.Element} A large section component with p5.js project header and tech stack
 */
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

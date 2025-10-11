import React from "react";
import Section from "../../Section";
import TechstackBadmin from "../../TechStacks/TechstackBadmin";

/**
 * Header section for the Badmin project page.
 * 
 * @returns {JSX.Element} Header section with project overview and tech stack
 */
const HeaderSection: React.FC = () => {
    return (
        <Section title="Badmin" size={"large"}>

            <TechstackBadmin/>

            <p style={{textAlign: "left", paddingTop: "10px"}}>
                Badmin is a top down shooter with a twist — you have access to{" "}
                <span className="body-text">moderator abilities!</span> Do your utmost to{" "}
                <span className="body-text">abuse your powers</span> while hiding from the admin,
                who seems to have a few screws loose.
            </p>
        </Section>
    );
};

export default HeaderSection;

import React from "react";
import Section from "../../Section";
import TechstackBadmin from "../../TechStacks/TechstackBadmin";

const HeaderSection: React.FC = () => {
    return (
        <Section title="Badmin" size={"large"}>

            <TechstackBadmin/>

            <p style={{textAlign: "left", paddingTop: "10px"}}>
                Badmin is a top down shooter with a twist — you have access to{" "}
                <span className="purple">moderator abilities!</span> Do your utmost to{" "}
                <span className="purple">abuse your powers</span> while hiding from the admin,
                who seems to have a few screws loose.
            </p>
        </Section>
    );
};

export default HeaderSection;

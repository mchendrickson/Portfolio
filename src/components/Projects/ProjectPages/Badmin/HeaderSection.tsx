import React from "react";
import Section from "../../Section";
import TechstackBadmin from "../../TechStacks/TechstackBadmin";

const HeaderSection: React.FC = () => {
    return (
        <Section title="">
            <h1 style={{fontSize: "4em", paddingBottom: "20px"}}>Badmin </h1>

            <TechstackBadmin/>

            <p style={{textAlign: "left", paddingTop: "10px"}}>
                Badmin is a top down shooter with a twist — you have access to{" "}
                <b className="purple">moderator abilities!</b> Do your utmost to{" "}
                <b className="purple">abuse your powers</b> while hiding from the admin,
                who seems to have a few screws loose.
            </p>
        </Section>
    );
};

export default HeaderSection;

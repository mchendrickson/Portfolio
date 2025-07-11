import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import TechstackCorporateClash from "../../TechStacks/TechstackCorporateClash";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * Header section for the Corporate Clash project page.
 * 
 * This component displays the project overview, technology stack, and
 * game description for the Toontown: Corporate Clash MMO revival
 * project with demonstration video.
 * 
 * @returns {JSX.Element} Header section with project overview and tech stack
 */
const HeaderSection: React.FC = () => {
    return (
        <Section title="Toontown: Corporate Clash" size={"large"}>

            <TechstackCorporateClash/>

            <p style={{textAlign: "left"}}>
                <span className="purple">Toontown: Corporate Clash</span> is a revival of the popular MMO series{" "}
                <span className="purple">Toontown Online</span> created and then later shutdown by Disney. As part of the{" "}
                <span className="purple">Corporate Clash</span> team, I've helped modernize and expand Disney's original
                Toontown Online
                with new content, technical enhancements, and player-focused improvements.
            </p>
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1067958228" videoTitle="Corporate Clash Wave"/>
            </Col>
        </Section>
    );
};

export default HeaderSection;

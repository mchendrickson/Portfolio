import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import TechstackCorporateClash from "../../TechStacks/TechstackCorporateClash";
import VimeoVideo from "../../../../VimeoVideo";

const HeaderSection: React.FC = () => {
    return (
        <Section title="Toontown: Corporate Clash" size={"large"}>

            <TechstackCorporateClash/>

            <p style={{textAlign: "left"}}>
                <b className="purple">Toontown: Corporate Clash</b> is a revival of the popular MMO series{" "}
                <b className="purple">Toontown Online</b> created and then later shutdown by Disney. As part of the{" "}
                <b className="purple">Corporate Clash</b> team, I’ve helped modernize and expand Disney’s original
                Toontown Online
                with new content, technical enhancements, and player-focused improvements.
            </p>

            <p style={{textAlign: "left", fontSize: "0.5em", fontStyle: "italic"}}>
                Disclaimer: I do not claim ownership of any intellectual property rights for the images and videos
                displayed below.
                All rights to Toontown: Corporate Clash belong to the Toontown: Corporate Clash team, and all rights to
                Toontown
                Online and related assets belong to Disney. My use of this content is for non-commercial,
                transformative, and
                informational purposes, constituting fair use under 17 U.S. Code § 107.
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

import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import ImperiusLogo from "../../../../Assets/Projects/Imperius/ImperiusLogo.png";
import TechstackImperius from "../../TechStacks/TechstackImperius";

const HeaderSection: React.FC = () => {
    return (
        <Section title="">
            <img
                src={ImperiusLogo}
                alt="Imperius Logo"
                className="img-fluid rounded"
                style={{width: "70%"}}
            />
            <br/>
            <br/>
            <Row>
                <Col md={6}>
                    <TechstackImperius/>
                </Col>
                <Col md={6}>
                    <iframe className="steam-iframe-wrapper"
                        src="https://store.steampowered.com/widget/1653880/"
                        title="Imperius Steam"
                    ></iframe>
                </Col>
            </Row>

            <p style={{textAlign: "left"}}>
                <span className="purple">Imperius</span> is a fully completed and released{" "}
                <span className="purple">3D space RTS</span> that I was both team lead and lead programmer for over the course
                of several
                years of development. It is the culmination of my entire skillset, featuring dozens of unique units and
                buildings
                as well as <span className="purple">Steam-integrated networked multiplayer</span>.
            </p>

            <Col
                md={10}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1067973072" videoTitle="Imperius Trailer"/>
            </Col>
        </Section>
    );
};

export default HeaderSection;

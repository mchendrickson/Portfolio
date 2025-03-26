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
                <Col>
                    <TechstackImperius/>
                </Col>
                <Col>
                    <iframe
                        src="https://store.steampowered.com/widget/1653880/"
                        width="646"
                        height="190"
                        title="Imperius Steam"
                    ></iframe>
                </Col>
            </Row>

            <p style={{textAlign: "left"}}>
                <b className="purple">Imperius</b> is a fully completed and released{" "}
                <b className="purple">3D space RTS</b> that I was both team lead and lead programmer for over the course
                of several
                years of development. It is the culmination of my entire skillset, featuring dozens of unique units and
                buildings
                as well as <b className="purple">Steam-integrated networked multiplayer</b>.
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

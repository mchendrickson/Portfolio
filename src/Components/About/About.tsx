import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import TechStackAll from "./TechStackAll";
import AboutCard from "./AboutCard";
import ToolStack from "./ToolStack";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/matt-photo-edited2.png";

/**
 * Displays personal information, skills, and tools.
 * 
 * Renders the main about page with three main sections:
 * 1. Personal information with photo and about card
 * 2. Professional skillset display
 * 3. Tools and technologies used
 * 
 * Uses Bootstrap's responsive grid system with a two-column
 * layout for the personal section (text and photo) and full-width
 * sections for skills and tools. Includes particle background effects.
 * 
 * @returns {JSX.Element} About page with personal info, skills, and tools
 */
function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                {/* About Me Section */}
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col md={7} style={{paddingTop: "30px", paddingBottom: "50px"}}>
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            About <strong className="secondary-heading-text">Me</strong>
                        </h1>
                        <AboutCard/>
                    </Col>

                    <Col md={5} style={{paddingTop: "50px", paddingBottom: "50px"}} className="about-img">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>

                {/* Skillset */}
                <h1 className="project-heading">
                    Professional <strong className="secondary-heading-text">Skillset</strong>
                </h1>
                <TechStackAll/>

                {/* Tools */}
                <h1 className="project-heading">
                    <strong className="secondary-heading-text">Tools</strong> I use
                </h1>
                <ToolStack/>
            </Container>

            <Particle/>
        </Container>
    );
}

export default About;

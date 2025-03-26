import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
//import Github from "./Github";
import TechStackAll from "./TechStackAll";
import Aboutcard from "./AboutCard";
import ToolStack from "./ToolStack";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/matt-photo-edited2.png";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            About <strong className="purple">Me</strong>
                        </h1>
                        <Aboutcard/>
                    </Col>
                    <Col
                        md={5}
                        style={{paddingTop: "50px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <TechStackAll/>

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <ToolStack/>

                {/*<Github />*/}
            </Container>
        </Container>
    );
}

export default About;

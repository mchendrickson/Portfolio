import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import VimeoVideo from "../../VimeoVideo";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h1 style={{paddingBottom: 15}} className="heading"> Hello There! </h1>
                            <h1 className="heading-name">
                                I'M <strong className="main-name"> MATTHEW HENDRICKSON</strong>
                            </h1>
                            <div style={{padding: 45, textAlign: "left"}}>
                                <Type/>
                            </div>
                        </Col>
                        <Col md={6} className="align-top">
                            <VimeoVideo videoId={"877375771"} videoTitle={"Imperius Combat"}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Projects/>
            <About/>
        </section>
    );
}

export default Home;
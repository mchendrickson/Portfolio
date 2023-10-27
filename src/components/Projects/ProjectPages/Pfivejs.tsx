import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import TechstackP5 from "../TechstackP5";

function Pfivejs() {
    return (
        <Container fluid className="about-section">
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Various p5.js Projects
                </h1>
                <TechstackP5/>
                <p style={{ color: "white" }}>
                    This page is <b className="purple">desktop only</b> due to the limitations of p5.js. Click and drag on any frame to rotate the camera.
                </p>
                <br/>
                <Row>
                    <Col >
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/FIyhwA0D0"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                    <Col >
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/8nI90LLo9"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/Rq68bfS2Y"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                    <Col>
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/74XLtdnMY"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                </Row>
            </Container>
            <Particle />
        </Container>
    );
}

export default Pfivejs;
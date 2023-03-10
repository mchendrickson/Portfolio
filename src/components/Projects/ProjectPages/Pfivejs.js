import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";

function Pfivejs() {
    return (
        <Container fluid className="about-section">
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Various p5.js Projects
                </h1>
                <Row style={{ justifyContent: "center", padding: "12px" }}>
                    <Col md={6}>
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/FIyhwA0D0"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                    <Col md={6}>
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/8nI90LLo9"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", padding: "12px" }}>
                    <Col md={6}>
                        <iframe
                            src="https://editor.p5js.org/mchendrickson/full/Rq68bfS2Y"
                            title="p5js iframe"
                            style={{ border: "none", width: "600px", height: "600px" }}
                        ></iframe>
                    </Col>
                    <Col md={6}>
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
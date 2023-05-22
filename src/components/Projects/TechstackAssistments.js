import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
} from "react-icons/di";
import {
    SiPython,
    SiPytorch,
    SiTensorflow,
    SiPostgresql,
} from "react-icons/si";

function TechstackAssistments() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiPython />
                <div className="icon-label">Python</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
                <div className="icon-label">PostgreSQL</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPytorch />
                <div className="icon-label">Pytorch</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow />
                <div className="icon-label">Tensorflow</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <div className="icon-label">Git</div>
            </Col>
        </Row>
    );
}

export default TechstackAssistments;

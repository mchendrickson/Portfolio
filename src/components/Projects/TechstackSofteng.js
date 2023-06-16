import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
} from "react-icons/di";
import {
    SiJava,
    SiPostgresql,
} from "react-icons/si";

function TechstackSofteng() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={1} className="tech-icons">
                <SiJava />
                <div className="icon-label">Java</div>
            </Col>
            <Col xs={4} md={1} className="tech-icons">
                <SiPostgresql />
                <div className="icon-label">PostgreSQL</div>
            </Col>
            <Col xs={4} md={1} className="tech-icons">
                <DiGit />
                <div className="icon-label">Git</div>
            </Col>
        </Row>
    );
}

export default TechstackSofteng;

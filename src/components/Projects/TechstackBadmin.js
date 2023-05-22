import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
} from "react-icons/di";
import {
    SiCsharp,
    SiUnity,
    SiVisualstudio
} from "react-icons/si";

function TechstackBadmin() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiUnity />
            <div className="icon-label">Unity</div>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
          <div className="icon-label">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
          <div className="icon-label">Git</div>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudio />
            <div className="icon-label">Visual Studio</div>
        </Col>
    </Row>
  );
}

export default TechstackBadmin;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUnity,
  SiJetbrains,
  SiMicrosoftoffice,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";

function Toolstack() {
  return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={1} className="tech-icons">
                  <SiUnity />
                  <div className="icon-label">Unity</div>
          </Col>
          <Col xs={4} md={1} className="tech-icons">
                  <SiJetbrains />
                  <div className="icon-label">JetBrains</div>
          </Col>
          <Col xs={4} md={1} className="tech-icons">
                  <SiMicrosoftoffice />
                  <div className="icon-label">Microsoft Office</div>
          </Col>
          <Col xs={4} md={1} className="tech-icons">
                  <SiAdobephotoshop />
                  <div className="icon-label">Photoshop</div>
          </Col>
          <Col xs={4} md={1} className="tech-icons">
                  <SiBlender />
                  <div className="icon-label">Blender</div>
          </Col>
      </Row>
  );
}

export default Toolstack;

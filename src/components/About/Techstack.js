import React from "react";
import { Col, Row } from "react-bootstrap";
//import { CgArrowLongDownC } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPytorch,
  SiCsharp,
  SiPostgresql,
  SiP5Dotjs,
  SiTensorflow,
  SiWebgl,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
          <div className="icon-label">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
          <div className="icon-label">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
          <div className="icon-label">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
          <div className="icon-label">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
          <div className="icon-label">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
          <div className="icon-label">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiP5Dotjs />
          <div className="icon-label">p5.js</div>
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
        <SiWebgl />
          <div className="icon-label">WebGL</div>
      </Col>
    </Row>
  );
}

export default Techstack;

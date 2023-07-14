import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import VideoSlideshow from "../VideoSlideshow";

import ImperiusNuke from "../../Assets/Projects/Imperius/ImperiusNuke.mp4";
import ImperiusPathfinding from "../../Assets/Projects/Imperius/ImperiusPathfinding.mp4";
import ImperiusCombat from "../../Assets/Projects/Imperius/ImperiusCombat.mp4";
import ImperiusEMP from "../../Assets/Projects/Imperius/ImperiusEMP.mp4";
import ImperiusArty from "../../Assets/Projects/Imperius/ImperiusArty.mp4";

const videos : string[] = [
  ImperiusNuke,
  ImperiusPathfinding,
  ImperiusCombat,
  ImperiusEMP,
  ImperiusArty,
];

function Home() {
  return (
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={6} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading"> Hello There! </h1>
                <h1 className="heading-name">
                  I'M <strong className="main-name"> MATTHEW HENDRICKSON</strong>
                </h1>
                <div style={{ padding: 45, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={6} className="align-top">
                <div className="video-wrapper">
                  <VideoSlideshow videos={videos} />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <About />
        <Projects />
      </section>
  );
}

export default Home;
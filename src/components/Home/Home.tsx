import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import VideoSlideshow from "../VideoSlideshow";

let ImperiusEMP = "https://youtu.be/8jZwxN59QVQ";
let ImperiusNuke = "https://youtu.be/jjtsBKnWVV0";
let ImperiusPathfinding = "https://youtu.be/s1hWoogmJIo";
let ImperiusCombat = "https://youtu.be/d3N5FiW7Rgc";
let ImperiusArty = "https://youtu.be/iX19pFwEtmk";

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
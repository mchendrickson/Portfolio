import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/matt-photo-edited2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../../components/Projects/Projects";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3.0em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I enjoy tackling <b className="purple">complex programming problems</b> and designing <b className="purple">elegant solutions</b>. My drive to conquer complexity for intuitive design is what captivates me in this industry.
              <br />
              <br />I am fluent in object oriented languages such as <b className="purple"> Java, C#, Javascript, and Python. </b> I have plenty of experience in <b className="purple">managing</b> software development teams. I code primarily in the <b className="purple">Unity</b> game engine.
              <br />
              <br />
              I hope to get a job as a <b className="purple">systems programmer</b> or other coding role at a game studio. I specialize in RTS games, but I also have experience coding for other genres such as platformers, shooters, and VR games. &nbsp;
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Projects/>
    </Container>
  );
}
export default Home2;

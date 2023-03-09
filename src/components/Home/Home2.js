import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/matt-photo-edited.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I enjoy programming unnecessarily complex things both at work and in my free time.
              <br />
              <br />I am fluent in object oriented languages such as <i><b className="purple"> Java, C#, Javascript, and Python. </b></i> I have plenty of experience in <i><b className="purple">managing</b></i> software development teams.
              <br />
              <br />
              I hope to get a job as a <i><b className="purple">systems programmer</b></i> or other coding role at a popular game studio. I specialize in RTS games, but I can also design for a variety of other genres such as FPS, 4X, TBS, and VR games. &nbsp;
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mchrpt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matthew-hendrickson-69627921a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

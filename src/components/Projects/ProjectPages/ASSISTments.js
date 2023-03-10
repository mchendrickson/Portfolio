import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import laptopImg from "../../../Assets/Projects/assistments2.png";

function ASSISTments() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Adding Features to ASSISTments
            </h1>
            <p style={{ textAlign: "justify" }}>
              This project was an eclectic development of various features for the
              <b className="purple"> ASSISTments online learning platform</b>.
              We designed features to identify student gaming behaviors, used
              <b className="purple"> trigram matching</b> to determine similarity
              between hints and explanations of problems, concatenated data to find
              streaks of correctly answered problems, and <b className="purple">clustered Common Core descriptions </b>
              based on embeddings from <b className="purple">MathBERT</b>.
              <br/>
              <br/>
              We also simulated using <b className="purple">deep Bayesian bandits</b> to recommend
              content in the form of supports to struggling students. Our models were able to
              predict whether or not a student would get the next problem correct more frequently
              than random using an <b className="purple">epsilon-greedy (RMS) model</b>.
              All features were completed successfully and integrated into the
              <b className="purple"> ASSISTments Automatic Personalized Learning Service (APLS)</b>.
              These results all had significant findings to be expanded upon in further research.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "70px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ASSISTments;

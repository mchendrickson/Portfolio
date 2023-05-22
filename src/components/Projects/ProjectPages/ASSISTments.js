import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import TechstackAssistments from "../TechstackAssistments";
import AssistmentsTitle from "../../../Assets/Projects/Assistments/assistmentstitle.jpg";
import Assistmentsaglomerative from "../../../Assets/Projects/Assistments/assistmentsaglomerative.png";
import Assistmentslinkage from "../../../Assets/Projects/Assistments/assistmentslinkage.png";
import Assistmentsgaming from "../../../Assets/Projects/Assistments/assistmentsgaming.jpg";
import Assistmentscore from "../../../Assets/Projects/Assistments/assistmentscore.png";
import Assistmentsbandits from "../../../Assets/Projects/Assistments/assistmentsbandits.png";

function ASSISTments() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Adding Features to <b className="purple">ASSISTments</b> Reinforcement Learning Service
            </h1>
              <TechstackAssistments />
              <p style={{ textAlign: "left" }}>
              This project was an eclectic development of various features for the
              <b className="purple"> ASSISTments online learning platform</b>.
              We designed features to identify student gaming behaviors, used
              <b  className="purple"> trigram matching</b> to determine similarity
              between hints and explanations of problems, concatenated data to find
              streaks of correctly answered problems, and <b className="purple">clustered Common Core descriptions </b>
              based on embeddings from <b className="purple">MathBERT</b>.
              <br/>
              <br/>
              <img src={AssistmentsTitle} alt="about" className="img-fluid" />
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
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                  Clustering MathBERT Embeddings
              </h2>
              <p style={{ textAlign: "left" }}>
                  Combining <b className="purple">MathBERT</b>, a large language model, we set out to embed and cluster around 450 mathematical Common
                  Core skill descriptions using several different <b className="purple">clustering methods</b> in Python.
              </p>
              <img src={Assistmentslinkage} alt="about" className="img-fluid" />
              <br/>
              <br/>
              <div className="row">
                  <div className="col-md-6">
                      <img src={Assistmentscore} alt="about" className="img-fluid" />
                  </div>
                  <div className="col-md-6">
                      <img src={Assistmentsaglomerative} alt="about" className="img-fluid" />
                  </div>
              </div>
              <br/>
              <br/>
              <h2 style={{ fontSize: "2em", paddingBottom: "20px" }}>
                  Contextual Bandits on ASSISTments Data
              </h2>
              <p style={{ textAlign: "left" }}>
                  I turned ASSISTments data into a <b className="purple">contextual bandit problem</b> and  then  applied
                  several  popular  bandit  algorithms  from  <b className="purple">past  research</b>  to  maximize  next problem correctness  among
                  students using <b className="purple">tutor supports</b>.
              </p>
              <img src={Assistmentsbandits} alt="about" className="img-fluid" />
              <br/>
              <br/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "70px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
      </Container>
    </Container>
  );
}

export default ASSISTments;

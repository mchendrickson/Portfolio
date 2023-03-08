import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matthew Hendrickson </span>
            from <span className="purple"> Southbury, Connecticut.</span>
            <br />I am a senior pursuing a double major in Computer Science and Game Design at Worcester Polytechnic Institute.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Martial Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Writing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can either piss in the sink, or sink in the piss"{" "}
          </p>
          <footer className="blockquote-footer">Matthew Hendrickson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <b className="purple">Matthew Hendrickson</b>,
            I'm from <b className="purple"> Southbury, Connecticut</b>.
            I'm pursuing a double major in <b className="purple">
            Computer Science </b> and <b className="purple">
            Interactive Media and Game Technology </b> with a 4.0 (ish) GPA
            at Worcester Polytechnic Institute.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Playing Games
            </li>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Martial Arts
            </li>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Creative Writing
            </li>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Helping others learn to code
            </li>
            <li className="about-activity">
              <VscDebugBreakpointLogUnverified /> Hunting
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

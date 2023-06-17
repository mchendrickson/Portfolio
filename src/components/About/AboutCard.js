import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            My name is <b className="purple">Matthew Hendrickson</b>,
            I'm from <b className="purple"> Connecticut</b>.
            I graduated with a double major in <b className="purple">
            Computer Science </b> and <b className="purple">
            Interactive Media and Game Development </b> with a 4.0 GPA
            at Worcester Polytechnic Institute.
            <br />
            <br />I am fluent in object oriented languages such as <b className="purple"> Java, C#, Javascript, and Python. </b> I have plenty of experience in <b className="purple">managing</b> software development teams. I code primarily in the <b className="purple">Unity</b> game engine.
            <br />
            <br />
            I hope to get a job as a <b className="purple">systems programmer</b> or other coding role at a game studio. I specialize in RTS games, but I also have experience coding for other genres such as platformers, shooters, and VR games. &nbsp;
            <br />
            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

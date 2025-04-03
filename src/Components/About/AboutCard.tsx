import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "left" }}>
                        My name is <b className="purple">Matthew Hendrickson</b>, and I'm based in <b className="purple">Connecticut</b>. I'm seeking a position as a <b className="purple">game programmer</b> or a developer role at a game studio.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        I specialize in <b className="purple">real-time strategy</b> (RTS) games and have additional experience developing platformers, shooters, and virtual reality (VR) titles. I'm fluent in object-oriented languages including <b className="purple">C#, Java, TypeScript, and Python</b>, and I primarily work in the <b className="purple">Unity</b> game engine.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        Currently, I work as a Full-Stack Software Developer at <b className="purple">SAVVAS Learning Company</b>, where I help build and maintain a suite of K–12 online learning services. I earned a double major in <b className="purple">Computer Science</b> and <b className="purple">Interactive Media & Game Development</b> from Worcester Polytechnic Institute, graduating with a <b className="purple">4.0 GPA</b>.
                    </p>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "left" }}>
                        My name is <span className="purple">Matthew Hendrickson</span>, and I'm based in <span className="purple">Connecticut</span>. I'm seeking a position as a <span className="purple">game programmer</span> or a developer role at a game studio.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        I specialize in <span className="purple">real-time strategy</span> (RTS) games and have additional experience developing platformers, shooters, and virtual reality (VR) titles. I'm fluent in object-oriented languages including <span className="purple">C#, Java, TypeScript, and Python</span>, and I primarily work in the <span className="purple">Unity</span> game engine.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        Currently, I work as a Full-Stack Software Developer at <span className="purple">SAVVAS Learning Company</span>, where I help build and maintain a suite of K–12 online learning services. I earned a double major in <span className="purple">Computer Science</span> and <span className="purple">Interactive Media & Game Development</span> from Worcester Polytechnic Institute, graduating with a <span className="purple">4.0 GPA</span>.
                    </p>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

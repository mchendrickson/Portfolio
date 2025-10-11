import React from "react";
import Card from "react-bootstrap/Card";

/**
 * Displays personal information in a styled card.
 * 
 * Renders a Bootstrap card containing a personal introduction
 * and professional summary. Text is styled with purple highlights for key information
 * and uses a blockquote format.
 * 
 * @returns {JSX.Element} Styled card containing personal and professional information
 */
function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "left" }}>
                        My name is <span className="body-text">Matthew Hendrickson</span>, and I'm based in <span className="body-text">Connecticut</span>. I'm seeking a position as a <span className="body-text">game programmer</span> or a developer role at a game studio.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        I specialize in <span className="body-text">real-time strategy</span> (RTS) games and have additional experience developing platformers, shooters, and virtual reality (VR) titles. I'm fluent in object-oriented languages including <span className="body-text">C#, Java, TypeScript, and Python</span>, and I primarily work in the <span className="body-text">Unity</span> game engine.
                    </p>
                    <p style={{ textAlign: "left" }}>
                        Currently, I work as a Full-Stack Software Developer at <span className="body-text">SAVVAS Learning Company</span>, where I help build and maintain a suite of K–12 online learning services. I earned a double major in <span className="body-text">Computer Science</span> and <span className="body-text">Interactive Media & Game Development</span> from Worcester Polytechnic Institute, graduating with a <span className="body-text">4.0 GPA</span>.
                    </p>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

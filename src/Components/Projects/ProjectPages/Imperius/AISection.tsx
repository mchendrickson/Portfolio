import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

const AISection: React.FC = () => {
    const bullets = [
        <><b className="purple">Utility-Based Evaluation:</b> Each possible game state is evaluated using a utility function that considers unit health, position, firepower, and potential actions.</>,
        <><b className="purple">Genetic Algorithms:</b> Multiple candidate solutions (children) are generated, crossed over, and mutated to evolve optimal decisions for unit assignments.</>,
        <><b className="purple">Simulated Annealing:</b> Mutation intensity decreases over time, reducing randomness as the solution converges toward an optimal state.</>,
        <><b className="purple">Real-Time Clustering:</b> Units are grouped dynamically by spatial proximity to reduce state space complexity and improve AI decision speed.</>,
        <><b className="purple">Individual Unit Logic:</b> Each unit runs a custom state machine to handle movement, targeting, and defense logic based on in-game conditions.</>,
        <><b className="purple">Job Offloading:</b> All high-level AI computations run asynchronously on a separate thread, keeping the main game loop smooth and responsive.</>,
    ];

    return (
        <Section title="Artificial Intelligence">
            <p style={{textAlign: "left"}}>
                I developed a <b className="purple">custom AI system</b> capable of adapting to player behavior in real-time with <b className="purple">minimal performance impact</b>, even in large-scale battles.
            </p>

            <p style={{textAlign: "left"}}>
                To achieve intelligent behavior, the AI system combines several algorithms and techniques:
            </p>

            <BulletList items={bullets} />

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1071976243" videoTitle="Imperius AI"/>
            </Col>
        </Section>
    );
};

export default AISection;

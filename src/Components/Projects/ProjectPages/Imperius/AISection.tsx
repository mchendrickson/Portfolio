import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

/**
 * AI system section for the Imperius project page.
 * 
 * @returns {JSX.Element} Section explaining AI system and algorithms
 */
const AISection: React.FC = () => {
    const bullets = [
        <><span className="purple">Utility-Based Evaluation:</span> Each possible game state is evaluated using a utility function that considers unit health, position, firepower, and potential actions.</>,
        <><span className="purple">Genetic Algorithms:</span> Multiple candidate solutions (children) are generated, crossed over, and mutated to evolve optimal decisions for unit assignments.</>,
        <><span className="purple">Simulated Annealing:</span> Mutation intensity decreases over time, reducing randomness as the solution converges toward an optimal state.</>,
        <><span className="purple">Real-Time Clustering:</span> Units are grouped dynamically by spatial proximity to reduce state space complexity and improve AI decision speed.</>,
        <><span className="purple">Individual Unit Logic:</span> Each unit runs a custom state machine to handle movement, targeting, and defense logic based on in-game conditions.</>,
        <><span className="purple">Job Offloading:</span> All high-level AI computations run asynchronously on a separate thread, keeping the main game loop smooth and responsive.</>,
    ];

    return (
        <Section title="Artificial Intelligence">
            <p style={{textAlign: "left"}}>
                I developed a <span className="purple">custom AI system</span> capable of adapting to player behavior in real-time with <span className="purple">minimal performance impact</span>, even in large-scale battles.
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

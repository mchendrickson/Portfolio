import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const AISection: React.FC = () => {
    return (
        <Section title="Artificial Intelligence">
            <p style={{textAlign: "left"}}>
                I conducted trials using Unity's <b className="purple">ML-Agents</b> package, aiming to derive RTS-style
                attacking behaviors, and
                developed a <b className="purple">custom clustering algorithm</b> to efficiently distinguish between
                different unit groups. In
                addressing the complex nature of AI in RTS games, I integrated <b className="purple">genetic algorithms,
                simulated annealing, and
                utility functions</b> to navigate the vast state space, transitioning from analyzing an immense number
                of potential states to a
                manageable few thousand, while ensuring a balance between diversity and precision in decision-making.
            </p>

            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877373924" videoTitle="Imperius AI"/>
            </Col>
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877372429" videoTitle="Imperius Clustering"/>
            </Col>
        </Section>
    );
};

export default AISection;

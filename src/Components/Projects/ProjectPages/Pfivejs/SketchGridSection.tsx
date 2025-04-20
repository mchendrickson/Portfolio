import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";

const sketches = [
    "https://editor.p5js.org/mchendrickson/full/FIyhwA0D0",
    "https://editor.p5js.org/mchendrickson/full/8nI90LLo9",
    "https://editor.p5js.org/mchendrickson/full/74XLtdnMY",
];

const SketchGridSection: React.FC = () => {
    return (
        <Section title={""}>
            <Row className="justify-content-center">
                {sketches.map((src, index) => (
                    <Col key={index} md={6} className="d-flex mb-4">
                        <iframe
                            src={src}
                            title={`p5js-sketch-${index}`}
                            style={{border: "none", width: "600px", height: "600px"}}
                        />
                    </Col>
                ))}
            </Row>
        </Section>
    );
};

export default SketchGridSection;

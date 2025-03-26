import React from "react";
import { Col, Row } from "react-bootstrap";
import Section from "../../Section";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <>Refactored the <b className="purple">entire codebase</b> to align with <b className="purple">OOP methodologies</b>.</>,
        <>Implemented <b className="purple">missing documentation</b> and <b className="purple">updated current documentation</b> to be more descriptive.</>,
        <>Reworked <b className="purple">tracking documents</b> to be more concise and understandable.</>,
    ];

    return (
        <Section title="My Contributions">
            <BulletList items={bullets} />
            <Col md={8} className="img-container" style={{ paddingTop: "10px" }}>
                <Row>
                    <Col>
                        <img
                            src="https://ids.wpi.edu/wp-content/uploads/2021/07/fbd-constraints.gif"
                            alt="FBD Constraints"
                            className="img-fluid"
                        />
                    </Col>
                    <Col>
                        <img
                            src="https://ids.wpi.edu/wp-content/uploads/2021/07/fbd-adding.gif"
                            alt="FBD Adding Forces"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Col>
        </Section>
    );
};

export default ContributionsSection;

import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import BulletList from "../../BulletList";

const ContributionsSection: React.FC = () => {
    const bullets = [
        <>
            <b className="purple">Codebase Refactor:</b> Rewrote major systems using OOP to improve structure, readability, and future scalability.
        </>,
        <>
            <b className="purple">Documentation:</b> Created new internal docs and cleaned up legacy ones to support easier onboarding and maintenance.
        </>,
        <>
            <b className="purple">Workflow Improvements:</b> Simplified internal tracking docs to reduce redundancy and streamline team processes.
        </>,
    ];



    return (
        <Section title="My Contributions">
            <BulletList items={bullets}/>
            <Col md={8} className="img-container" style={{paddingTop: "10px"}}>
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

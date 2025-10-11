import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import BulletList from "../../BulletList";

/**
 * Personal contributions section for the Free Body Diagram App project page.
 * 
 * @returns {JSX.Element} Section listing personal contributions to the project
 */
const ContributionsSection: React.FC = () => {
    const bullets = [
        <>
            <span className="body-text">Codebase Refactor:</span> Rewrote major systems using OOP to improve structure, readability, and future scalability.
        </>,
        <>
            <span className="body-text">Documentation:</span> Created new internal docs and cleaned up legacy ones to support easier onboarding and maintenance.
        </>,
        <>
            <span className="body-text">Workflow Improvements:</span> Simplified internal tracking docs to reduce redundancy and streamline team processes.
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

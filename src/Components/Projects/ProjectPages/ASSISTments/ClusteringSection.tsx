import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Section from "../../Section";
import Assistmentsaglomerative from "../../../../Assets/Projects/Assistments/assistmentsaglomerative.png";
import Assistmentslinkage from "../../../../Assets/Projects/Assistments/assistmentslinkage.png";
import Assistmentscore from "../../../../Assets/Projects/Assistments/assistmentscore.png";

/**
 * Clustering research section for the ASSISTments project.
 * 
 * @returns {JSX.Element} Section explaining clustering research and implementation
 */
const ClusteringSection: React.FC = () => {
    return (
        <Section title="Clustering MathBERT Embeddings">
            <p style={{textAlign: "left"}}>
                Combining <span className="body-text">MathBERT</span>, a large language model, we set out to embed and cluster
                around 450
                mathematical Common Core skill descriptions using several different <span className="body-text">clustering
                methods</span> in Python.
            </p>

            {/* Centered top image using Row + Col */}
            <Row className="justify-content-center mb-5">
                <Col md={8} className="d-flex justify-content-center">
                    <img
                        src={Assistmentslinkage}
                        alt="Linkage Dendrogram"
                        className="img-fluid rounded"
                        style={{width: "100%"}}
                    />
                </Col>
            </Row>

            {/* Bottom two images in grid */}
            <Container style={{maxWidth: "70%"}}>
                <Row className="justify-content-between">
                    <Col md={6} className="d-flex justify-content-center mb-4">
                        <img
                            src={Assistmentscore}
                            alt="Silhouette Score"
                            className="img-fluid rounded"
                            style={{width: "100%"}}
                        />
                    </Col>
                    <Col md={6} className="d-flex justify-content-center mb-4">
                        <img
                            src={Assistmentsaglomerative}
                            alt="Agglomerative Clustering"
                            className="img-fluid rounded"
                            style={{width: "100%"}}
                        />
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default ClusteringSection;

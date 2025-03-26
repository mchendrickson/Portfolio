import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Type from "./Type";
import VimeoVideo from "../../VimeoVideo";

const Intro: React.FC = () => {
    return (
        <Container fluid className="home-section" id="home">
            <Container className="home-content">
                <Row className="align-items-center">
                    <Col
                        md={6}
                        className="text-md-start text-center"
                        style={{ paddingBottom: "2rem" }}
                    >
                        <h1 className="heading" style={{ paddingBottom: "15px" }}>
                            Hello There!
                        </h1>
                        <h1 className="heading-name">
                            I'M <strong className="main-name">MATTHEW HENDRICKSON</strong>
                        </h1>
                        <Type />
                    </Col>

                    <Col md={6} className="text-center">
                        <VimeoVideo videoId={"877375771"} videoTitle={"Home Intro"} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Intro;

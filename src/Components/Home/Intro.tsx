import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Type from "./Type";
import VimeoVideo from "../../VimeoVideo";
import AnimatedWrapper from "../AnimatedWrapper";


const Intro: React.FC = () => {
    return (
        <Container fluid className="home-section" id="home">
            <Container className="home-content">
                <Row className="align-items-center">
                    <Col
                        md={6}
                        className="text-md-start text-center"
                        style={{paddingBottom: "2rem"}}
                    >
                        <AnimatedWrapper
                            initial={{ y: -200, opacity: 0, rotate: -10 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 120,
                                damping: 12
                            }}
                        >
                            <h1 className="heading" style={{paddingBottom: "15px"}}>
                                Hello There!
                            </h1>
                        </AnimatedWrapper>
                        <h1 className="heading-name">
                            I'M <span className="purple">MATTHEW HENDRICKSON</span>
                        </h1>
                        <Type/>
                    </Col>

                    <Col md={6} className="text-center">
                        <VimeoVideo videoId={"877375771"} videoTitle={"Home Intro"}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Intro;

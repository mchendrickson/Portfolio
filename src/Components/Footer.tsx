import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

/**
 * Footer component that displays copyright information and social media links.
 * 
 * This component renders a three-column layout containing:
 * - Copyright notice with current year
 * - Usage terms and conditions for the portfolio site
 * - Social media icons linking to GitHub and LinkedIn profiles
 * 
 * The footer uses Bootstrap's responsive grid system and includes
 * proper accessibility attributes for external links.
 * 
 * @returns {JSX.Element} Footer with copyright, terms, and social links
 */
function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} Matthew Hendrickson</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3 style={{ fontSize: "0.75em", fontStyle: "italic"}}>You may fork, modify, and rehost this site’s code at your leisure. However, you may not use any text, images, or videos describing my professional work experience.</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/mchendrickson/Portfolio"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/mchendrickson/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

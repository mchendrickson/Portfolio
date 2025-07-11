import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CgFileDocument, CgGitFork} from "react-icons/cg";
import {
    AiOutlineFundProjectionScreen,
    AiOutlineGithub,
    AiOutlineHome,
    AiOutlineLinkedin,
    AiOutlineUser,
    AiOutlineMail
} from "react-icons/ai";

/**
 * Main navigation bar component with responsive design and scroll-based styling.
 * 
 * Provides navigation links to all major sections of the portfolio,
 * including Home, About, Projects, Resume, and external links to email, LinkedIn,
 * and GitHub. The navbar changes appearance on scroll and includes a mobile-friendly
 * collapsible menu with hamburger icon.
 * 
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Scroll-based navbar color change
 * - External links to social media and contact
 * - Brand logo linking to home page
 * - Icon-enhanced navigation items
 * 
 * @returns {JSX.Element} Responsive navigation bar with all portfolio links
 */
function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    /**
     * Handles navbar color change based on scroll position.
     * 
     * This function updates the navbar styling when the user scrolls
     * more than 20 pixels from the top of the page. It changes the
     * navbar from transparent to a solid background color for better
     * visibility and user experience.
     */
    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="lg"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container fluid>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="logo" alt="brand"/>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <span className="icon-text-wrapper">
                                    <AiOutlineHome style={{marginBottom: "3px"}}/>{" "}Home
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <span className="icon-text-wrapper">
                                    <AiOutlineUser style={{marginBottom: "3px"}}/> About
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <span className="icon-text-wrapper">
                                    <AiOutlineFundProjectionScreen
                                        style={{marginBottom: "2px"}}
                                    />{" "}
                                    Projects
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <span className="icon-text-wrapper">
                                    <CgFileDocument style={{marginBottom: "2px"}}/> Resume
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href="mailto:mchendrickson@protonmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="icon-text-wrapper">
                                    <AiOutlineMail style={{ marginBottom: "2px"}}/> Email
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href="https://www.linkedin.com/in/mchendrickson/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="icon-text-wrapper">
                                    <AiOutlineLinkedin style={{marginBottom: "2px"}}/> LinkedIn
                                </span>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://github.com/mchendrickson/Portfolio"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <span className="icon-text-wrapper">
                                    <CgGitFork style={{fontSize: "1.2em"}}/>{" "}
                                    <AiOutlineGithub style={{fontSize: "1.1em"}}/>
                                </span>
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
import React, {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import pdf from "../Assets/Matthew Hendrickson Resume Web.pdf";
import {AiOutlineDownload} from "react-icons/ai";
import {Document, Page, pdfjs} from "react-pdf";
import 'pdfjs-dist/web/pdf_viewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const resumeLink =
    "https://raw.githubusercontent.com/mchrpt/portfolio/master/src/Assets/Matthew Hendrickson Resume Web.pdf";

/**
 * Resume page component that displays a PDF resume with download functionality.
 * 
 * Renders a PDF resume using react-pdf library with responsive
 * scaling based on screen width. Includes download buttons at the top and
 * bottom of the page, and displays the PDF inline.
 * 
 * @returns {JSX.Element} Resume page with PDF viewer and download options
 */
function Resume() {
    const [width, setWidth] = useState(1200);

    /**
     * Sets the initial window width for responsive PDF scaling.
     * 
     * This effect runs once on component mount to capture the current
     * window width, which is used to determine the appropriate PDF scale
     * factor for optimal viewing on different screen sizes.
     */
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle/>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
                    </Document>
                </Row>

                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;

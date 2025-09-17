import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Particle from "./Particle";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const transcriptsLink =  "https://raw.githubusercontent.com/mchendrickson/portfolio/master/src/Assets/Matthew Hendrickson WPI Official Transcript.pdf";

/**
 * Transcript page component that displays a PDF transcript with download functionality.
 * 
 * Renders a PDF resume using react-pdf library with responsive
 * scaling based on screen width. Includes download buttons at the top and
 * bottom of the page, and displays the PDF inline.
 * 
 * @returns {JSX.Element} Resume page with PDF viewer and download options
 */
function Transcripts() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState<number>(0);

    // define the shape of the success callback ourselves
    type DocumentLoadSuccess = {
        numPages: number;
    };

    const onDocumentLoadSuccess = ({ numPages }: DocumentLoadSuccess) => {
        setNumPages(numPages);
    };

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
            <Container fluid className="pdf-section">
                <Particle/>
                    <Document
                        file={transcriptsLink}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from({ length: numPages }, (_, index) => (
                            <div key={`page_${index + 1}`} className="pdf-page">
                                <Page
                                    pageNumber={index + 1}
                                    scale={1.5}
                                    renderTextLayer={false}
                                />
                            </div>
                        ))}
                    </Document>
            </Container>
        </div>
    );
}

export default Transcripts;

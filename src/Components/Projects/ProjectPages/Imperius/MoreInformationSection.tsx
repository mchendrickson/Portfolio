import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

/**
 * MoreInformationSection component for the Imperius project page.
 * 
 * @returns {JSX.Element} A section component with more information details
 */
const MoreInformationSection: React.FC = () => {
    return (
        <Section title="More Information">
            <p style={{textAlign: "left"}}>
                Please also see <span className="purple"><a href="https://digital.wpi.edu/concern/student_works/zp38wh02w?locale=en" target="_blank" rel="noopener noreferrer">the full project report</a></span> as well as the <span className="purple"><a href="https://github.com/mchendrickson/Portfolio/blob/master/src/Assets/Projects/Imperius/ImperiusREADME.md" target="_blank" rel="noopener noreferrer">credits, project members, and code citations</a></span>.
            </p>
        </Section>
    );
};

export default MoreInformationSection;

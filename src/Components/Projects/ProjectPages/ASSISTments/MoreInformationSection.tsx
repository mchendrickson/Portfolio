import React from "react";
import Section from "../../Section";
import ASSISTmentsIQPReport from "../../../../Assets/Projects/Assistments/ASSISTmentsIQPReport.png";
import {LuMousePointerClick} from "react-icons/lu";

/**
 * MoreInformationSection component for the ASSISTments project page.
 * 
 * @returns {JSX.Element} A section component with more information details
 */
const MoreInformationSection: React.FC = () => {
    return (
        <Section title="More Information">
            <p style={{textAlign: "left"}}>
                Please see <span className="body-text"><a href="https://digital.wpi.edu/concern/student_works/2801pk90w?locale=en" target="_blank" rel="noopener noreferrer">the full report <LuMousePointerClick size={25} className={"body-text"} /></a></span> for the project members, advisors, and further details.
            </p>
            <a href="https://digital.wpi.edu/concern/student_works/2801pk90w?locale=en" target="_blank" rel="noopener noreferrer">
                <img src={ASSISTmentsIQPReport} alt="ASSISTments IQP Report" className="img-fluid rounded" style={{ width: '50%', height: 'auto' }} />
            </a>
        </Section>
    );
};

export default MoreInformationSection;
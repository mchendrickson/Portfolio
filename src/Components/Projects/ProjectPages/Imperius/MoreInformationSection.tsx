import React from "react";
import Section from "../../Section";
import ImperiusPresentation from "../../../../Assets/Projects/Imperius/ImperiusPresentation.png";

/**
 * MoreInformationSection component for the Imperius project page.
 * 
 * @returns {JSX.Element} A section component with more information details
 */
const MoreInformationSection: React.FC = () => {
    return (
        <Section title="More Information">
            <p style={{textAlign: "left"}}>
                Please also see <span className="body-text"><a href="https://digital.wpi.edu/concern/student_works/zp38wh02w?locale=en" target="_blank" rel="noopener noreferrer">the full project report</a></span> as well as the <span className="body-text"><a href="https://github.com/mchendrickson/Portfolio/blob/master/src/Assets/Projects/Imperius/ImperiusREADME.md" target="_blank" rel="noopener noreferrer">credits, project members, and code citations</a></span>.
            </p>
            <img src={ImperiusPresentation} alt="Imperius Presentation" className="img-fluid rounded" />
        </Section>
    );
};

export default MoreInformationSection;

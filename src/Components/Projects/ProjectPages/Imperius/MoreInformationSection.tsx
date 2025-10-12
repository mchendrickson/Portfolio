import React from "react";
import Section from "../../Section";
import ImperiusMQPReport from "../../../../Assets/Projects/Imperius/ImperiusMQPReport.png";
import {LuMousePointerClick} from "react-icons/lu";

/**
 * MoreInformationSection component for the Imperius project page.
 * 
 * @returns {JSX.Element} A section component with more information details
 */
const MoreInformationSection: React.FC = () => {
    return (
        <Section title="More Information">
            <p style={{textAlign: "left"}}>
                Please also see <span className="body-text"><a href="https://digital.wpi.edu/concern/student_works/zp38wh02w?locale=en" target="_blank" rel="noopener noreferrer">the full project report <LuMousePointerClick size={25} className={"body-text"} /></a></span> as well as the <span className="body-text"><a href="https://github.com/mchendrickson/Portfolio/blob/master/src/Assets/Projects/Imperius/ImperiusREADME.md" target="_blank" rel="noopener noreferrer">credits, project members, and code citations <LuMousePointerClick size={25} className={"body-text"} /></a></span>.
            </p>
            <a href="https://digital.wpi.edu/concern/student_works/zp38wh02w?locale=en" target="_blank" rel="noopener noreferrer">
                <img src={ImperiusMQPReport} alt="Imperius MQP Report" className="img-fluid rounded" style={{ width: '50%', height: 'auto' }} />
            </a>
        </Section>
    );
};

export default MoreInformationSection;
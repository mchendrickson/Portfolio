import React from "react";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";

const ContributionsSection: React.FC = () => {
    return (
        <Section title="My Contributions">
            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Project Manager:</b> Led a team of eleven programmers to successfully develop
                    a working application.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Full Stack Engineer:</b> Developed significant parts of the codebase and
                    incorporated work from other programmers.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Lead Presenter:</b> Presented to hospital employees and coached others in
                    presenting.
                </li>
            </ul>
        </Section>
    );
};

export default ContributionsSection;

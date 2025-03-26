import React from "react";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";
import AstronPandas from "../../../../Assets/Projects/CorporateClash/AstronPandas.png"

const ContributionsSection: React.FC = () => {
    return (
        <Section title="My Contributions">
            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Engine & Networking Integration:</b> Worked
                    extensively with the Panda3D engine and Astron Networking Project to develop core systems and
                    maintain online infrastructure
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Security Enhancements:</b> Implemented
                    client and server-side safety features to protect player experience and mitigate potential exploits.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Content Development:</b> Designed and
                    implemented new gameplay content while assisting in debugging and improving existing features.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/> <b className="purple">Legacy Refactoring:</b> Modernized legacy
                    code to reduce technical debt, improve maintainability, and support long-term scalability.
                </li>
            </ul>

            <br/>

            <img src={AstronPandas} alt="about" className="img-fluid rounded" style={{width: "60%"}}/>
        </Section>
    );
};

export default ContributionsSection;

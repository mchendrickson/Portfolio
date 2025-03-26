import React from "react";
import {VscDebugBreakpointLogUnverified} from "react-icons/vsc";
import Section from "../../Section";
import ImperiusHero from "../../../../Assets/Projects/Imperius/ImperiusHero.png";

const ContributionsSection: React.FC = () => {
    return (
        <Section title="My Contributions">
            <ul>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Project Manager:</b> Recruited, coordinated, and managed a team of 6
                    developers using Agile/Scrum as well as oversaw 20+ voice actors during recordings.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Lead Programmer:</b> Wrote a majority of the project's codebase, as well as
                    employed version control to manage other developers.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Systems Programmer:</b> Designed and implemented several crucial game
                    mechanics, including the economy, special abilities, and ship variants.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Audio Programmer:</b> Integrated FMOD middleware to ensure authentic and
                    realistic soundscapes.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">Narrative Designer:</b> Crafted an immersive 60+ page narrative and fictional
                    universe.
                </li>
                <li className="about-activity">
                    <VscDebugBreakpointLogUnverified/>{" "}
                    <b className="purple">VFX Artist:</b> Developed and adapted a comprehensive range of VFX assets
                    including both particle effects and HLSL shaders.
                </li>
            </ul>

            <br/>
            <br/>

            <img src={ImperiusHero} alt="Imperius Hero" className="img-fluid rounded"/>
        </Section>
    );
};

export default ContributionsSection;

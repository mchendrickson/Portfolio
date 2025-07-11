import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import CombatSystemsSection from "./CombatSystemsSection";
import PathfindingSection from "./PathfindingSection";
import MultiplayerSection from "./MultiplayerSection";
import HardpointsSection from "./HardpointsSection";
import AISection from "./AISection";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import SpecialAbilitiesSection from "./SpecialAbilitiesSection";
import TerritoryCaptureSection from "./TerritoryCaptureSection";
import BaseBuildingSection from "./BaseBuildingSection";
import AudioProgrammingSection from "./AudioProgrammingSection";

/**
 * Imperius project page.
 * 
 * 1: Header - Project overview and key information
 * 2: Contributions - Personal contributions and role
 * 3: Combat Systems - Weapon systems and performance
 * 4: Pathfinding - Navigation and movement
 * 5: Multiplayer - Steam integration and networking
 * 6: AI - Custom AI system and algorithms
 * 7: Audio Programming - FMOD integration and sound
 * 8: Hardpoints - Destructible subsystems
 * 9: Special Abilities - Unique unit capabilities
 * 10: Base Building - Construction and economy
 * 11: Territory Capture - Strategic gameplay mechanics
 * 
 * @returns {JSX.Element} Imperius project page with comprehensive game development sections
 */
function Imperius() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
                <CombatSystemsSection/>
                <PathfindingSection/>
                <MultiplayerSection/>
                <AISection/>
                <AudioProgrammingSection/>
                <HardpointsSection/>
                <SpecialAbilitiesSection/>
                <BaseBuildingSection/>
                <TerritoryCaptureSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default Imperius;
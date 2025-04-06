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
import EconomySection from "./EconomySection";
import TerritoryCaptureSection from "./TerritoryCaptureSection";
import BaseBuildingSection from "./BaseBuildingSection";
import AudioProgrammingSection from "./AudioProgrammingSection";

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
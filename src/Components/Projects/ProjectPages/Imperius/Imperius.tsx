import React from "react";
import {Container} from "react-bootstrap";
import Particle from "../../../Particle";
import CombatSystemsSection from "./CombatSystemsSection";
import PathfindingSection from "./PathfindingSection";
import MultiplayerSection from "./MultiplayerSection";
import HardpointsSection from "./HardpointsSection";
import AISection from "./AISection";
import VFXSection from "./VFXSection";
import ModelingSection from "./ModelingSection";
import HeaderSection from "./HeaderSection";
import ContributionsSection from "./ContributionsSection";
import SpecialAbilitiesSection from "./SpecialAbilitiesSection";

function Imperius() {
    return (
        <Container fluid className="project-page">
            <Container>
                <HeaderSection/>
                <ContributionsSection/>
                <CombatSystemsSection/>
                <SpecialAbilitiesSection/>
                <PathfindingSection/>
                <MultiplayerSection/>
                <HardpointsSection/>
                <AISection/>
                <VFXSection/>
                <ModelingSection/>
            </Container>
            <Particle/>
        </Container>
    );
}

export default Imperius;
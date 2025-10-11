import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

/**
 * Multiplayer section for the Imperius project page.
 * 
 * @returns {JSX.Element} Section explaining multiplayer system and networking
 */
const MultiplayerSection: React.FC = () => {
    const bullets = [
        <><span className="body-text">Peer-to-Peer Architecture:</span> Using Unity's Netcode package to communicate directly between clients, and eliminate the need for dedicated servers. </>,
        <><span className="body-text">Server-Authoritative Structure:</span> To ensure smooth gameplay between clients and enforce game security. </>,
        <><span className="body-text">Steam API Integration:</span> Using Facepunch Transport to incorporate the game with Steam features such as joining a friend's lobby. </>,
    ];

    return (
        <Section title="Multiplayer">
            <p style={{textAlign: "left"}}>
                Imperius features <span className="body-text">4-player multiplayer</span> with <span className="body-text">full Steam integration</span>.
                Players engage in deathmatch—free-for-all or team-based—choosing between <span className="body-text">two factions</span>, each with twelve units and six structures.
                Gameplay combines territory control, base building, economy management, and real-time combat. Decentralized and efficient
                netcode allowed <span className="body-text">over a hundred units</span> to fight simultaneously with <span className="body-text">very little lag</span>.
            </p>
            <p style={{textAlign: "left"}}>
                Relevant technical features include:
            </p>
            <BulletList items={bullets} />
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1069315982" videoTitle="Imperius Multiplayer"/>
            </Col>
        </Section>
    );
};

export default MultiplayerSection;

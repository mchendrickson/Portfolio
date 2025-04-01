import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

const MultiplayerSection: React.FC = () => {
    const bullets = [
        <><b className="purple">Peer-to-Peer Architecture:</b> Using Unity's Netcode package to communicate directly between clients, and eliminate the need for dedicated servers. </>,
        <><b className="purple">Server-Authoritative Structure:</b> To ensure smooth gameplay between clients and enforce game security. </>,
        <><b className="purple">Steam API Integration:</b> Using Facepunch Transport to incorporate the game with Steam features such as joining a friend's lobby. </>,
    ];

    return (
        <Section title="Multiplayer">
            <p style={{textAlign: "left"}}>
                Imperius features <b className="purple">4-player multiplayer</b> with <b className="purple">full Steam integration</b>.
                Players engage in deathmatch—free-for-all or team-based—choosing between <b className="purple">two factions</b>, each with twelve units and six structures.
                Gameplay combines territory control, base building, economy management, and real-time combat. Decentralized and efficient
                netcode allowed <b className="purple">over a hundred units</b> to fight simultaneously with <b className="purple">very little lag</b>.
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

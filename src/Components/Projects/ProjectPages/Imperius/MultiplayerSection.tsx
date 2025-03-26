import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";

const MultiplayerSection: React.FC = () => {
    return (
        <Section title="Multiplayer">
            <p style={{textAlign: "left"}}>
                Leveraging the power of <b className="purple">Unity's Netcode for GameObjects</b> in conjunction
                with{" "}
                <b className="purple">Facepunch Transport</b>, I successfully engineered a{" "}
                <b className="purple">server-authoritative 4-player skirmish mode</b> that seamlessly integrates with
                the{" "}
                <b className="purple">Steam client</b>. The implementation embraces a{" "}
                <b className="purple">Peer-to-Peer (P2P)</b> architecture, ensuring a decentralized and efficient
                network
                communication capable of managing <b className="purple">over a hundred units</b> simultaneously.
            </p>

            <Col
                md={8}
                className="img-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1069315982" videoTitle="Imperius Multiplayer"/>
            </Col>
        </Section>
    );
};

export default MultiplayerSection;

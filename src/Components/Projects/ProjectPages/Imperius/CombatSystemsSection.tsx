import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section"
import VimeoVideo from "../../../../VimeoVideo";

const CombatSection: React.FC = () => {
    return (
        <Section title="Combat Systems">
            <p style={{textAlign: "left"}}>
                I combined Unity's <b className="purple">particle systems</b> alongside several{" "}
                <b className="purple">algorithms</b> that each weapon fired would predict an enemies' location using
                their current{" "}
                <b className="purple">trajectory</b>, and prioritize specific unit types based on a{" "}
                <b className="purple">priority queue</b>. This eclectic approach allowed for hundreds of units each with
                dozens of
                weapons to fire at specific enemies. <b className="purple">GPU instancing</b> on the particle systems
                allowed for{" "}
                <b className="purple">multi-threaded</b> collisions, decreasing CPU strain.
            </p>
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="877370656" videoTitle="Imperius Combat"/>
            </Col>
        </Section>
    );
};

export default CombatSection;

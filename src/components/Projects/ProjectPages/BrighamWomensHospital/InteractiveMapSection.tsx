import React from "react";
import Section from "../../Section";
import SoftengMap from "../../../../Assets/Projects/BrighamWomensHospital/softeng1.png";

const InteractiveMapSection: React.FC = () => {
    return (
        <Section title="Interactive Map">
            <p style={{textAlign: "left"}}>
                As part of our team, I played a key role in developing an <b className="purple">interactive map</b> of
                the hospital,
                which incorporated real-life locations as positions on the map. The map allowed storage of{" "}
                <b className="purple">equipment, service requests, patients, and employees</b>. My specific
                responsibilities included
                creating the <b className="purple">pathfinding component</b> and ensuring smooth backend functionality
                for the map.
            </p>

            <img
                src={SoftengMap}
                alt="Hospital Map"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />
        </Section>
    );
};

export default InteractiveMapSection;

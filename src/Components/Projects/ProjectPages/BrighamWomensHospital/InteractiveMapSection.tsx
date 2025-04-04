import React from "react";
import Section from "../../Section";
import SoftengMap from "../../../../Assets/Projects/BrighamWomensHospital/softeng1.png";

const InteractiveMapSection: React.FC = () => {
    return (
        <Section title="Interactive Map">
            <p style={{textAlign: "left"}}>
                As part of our team, I played a key role in developing an <span className="purple">interactive map</span> of
                the hospital,
                which incorporated real-life locations as positions on the map. The map allowed storage of{" "}
                <span className="purple">equipment, service requests, patients, and employees</span>. My specific
                responsibilities included
                creating the <span className="purple">pathfinding component</span> and ensuring smooth backend functionality
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

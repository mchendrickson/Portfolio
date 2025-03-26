import React from "react";
import Section from "../../Section";
import SoftengDashboard from "../../../../Assets/Projects/BrighamWomensHospital/softeng2.png";

const DirectionalRelationshipsSection: React.FC = () => {
    return (
        <Section title="Directional Object Relationships">
            <p style={{textAlign: "left"}}>
                I created a <b className="purple">design pattern</b> for seamless data and resource sharing among
                patients, employees,
                and locations. This pattern establishes <b className="purple">bi-directional associations</b> between
                objects, allowing
                them to reference and access each other's data dynamically.
            </p>

            <img
                src={SoftengDashboard}
                alt="Dashboard Overview"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />
        </Section>
    );
};

export default DirectionalRelationshipsSection;

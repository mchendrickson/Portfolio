import React from "react";
import Section from "../../Section";
import SoftengImg3 from "../../../../Assets/Projects/BrighamWomensHospital/softeng3.jpg";

const ServiceRequestsSection: React.FC = () => {
    return (
        <Section title="Service Requests">
            <p style={{textAlign: "left"}}>
                Within this project, various <b className="purple">service requests</b> were implemented to simulate
                a{" "}
                <b className="purple">hospital tracking system</b>. Additionally, I played a vital role in performing
                extensive{" "}
                <b className="purple">backend work</b> to ensure seamless data storage and manipulation with{" "}
                <b className="purple">PostgreSQL</b>.
            </p>

            <img
                src={SoftengImg3}
                alt="Service Request Example"
                className="img-fluid rounded"
                style={{width: "60%"}}
            />
        </Section>
    );
};

export default ServiceRequestsSection;

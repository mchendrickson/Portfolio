import React from "react";
import Section from "../../Section";
import SoftengImg3 from "../../../../Assets/Projects/BrighamWomensHospital/softeng3.jpg";

const ServiceRequestsSection: React.FC = () => {
    return (
        <Section title="Service Requests">
            <p style={{textAlign: "left"}}>
                Within this project, various <span className="purple">service requests</span> were implemented to simulate
                a{" "}
                <span className="purple">hospital tracking system</span>. Additionally, I played a vital role in performing
                extensive{" "}
                <span className="purple">backend work</span> to ensure seamless data storage and manipulation with{" "}
                <span className="purple">PostgreSQL</span>.
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

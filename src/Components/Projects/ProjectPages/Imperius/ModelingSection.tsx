import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import ImperiusModel1 from "../../../../Assets/Projects/Imperius/ImperiusModel1.png";
import ImperiusModel2 from "../../../../Assets/Projects/Imperius/ImperiusModel2.png";
import ImperiusModel3 from "../../../../Assets/Projects/Imperius/ImperiusModel3.png";
import ImperiusModel4 from "../../../../Assets/Projects/Imperius/ImperiusModel4.png";

const ModelingSection: React.FC = () => {
    return (
        <Section title="3D Modeling">
            <p style={{textAlign: "left"}}>
                I have also contributed to Imperius via <span className="purple">3D modeling</span> space ships and space
                stations.
            </p>

            <Row>
                <Col>
                    <img src={ImperiusModel1} alt="Imperius Model 1" className="img-fluid rounded"/>
                </Col>
                <Col>
                    <img src={ImperiusModel2} alt="Imperius Model 2" className="img-fluid rounded"/>
                </Col>
            </Row>

            <br/>
            <br/>

            <Row>
                <Col>
                    <img src={ImperiusModel3} alt="Imperius Model 3" className="img-fluid rounded"/>
                </Col>
                <Col>
                    <img src={ImperiusModel4} alt="Imperius Model 4" className="img-fluid rounded"/>
                </Col>
            </Row>
        </Section>
    );
};

export default ModelingSection;

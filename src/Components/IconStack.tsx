import React from 'react';
import {Col, Row} from "react-bootstrap";

type TechStackItem = {
    icon: React.ElementType;
    label: string;
};

type TechStackProps = {
    items: TechStackItem[];
};

function IconStack({items}: TechStackProps) {
    const className = 'techstack-icons';
    const secondClassName = 'icon-label'

    return (
        <Row style={{justifyContent: "center", paddingBottom: "0px"}}>
            {items.map((item, i) => (
                <Col xs="auto" className={className} key={i}>
                    <div className="icon-box">
                        <item.icon className="icon-svg"/>
                    </div>
                    <div className={secondClassName}>{item.label}</div>
                </Col>
            ))}
        </Row>
    );
}

export default IconStack;
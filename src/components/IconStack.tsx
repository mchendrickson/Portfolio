import React from 'react';
import { Col, Row } from "react-bootstrap";

type TechStackItem = {
    icon: React.ElementType;
    label: string;
};

type TechStackProps = {
    items: TechStackItem[];
    small?: boolean;
};

function IconStack({ items, small }: TechStackProps) {
    const className = small ? 'techstack-icons-small' : 'techstack-icons';
    const secondClassName = small ? 'icon-label-small' : 'icon-label'

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {items.map((item, i) => (
                <Col xs={4} md={1} className={className} key={i}>
                    <item.icon />
                    <div className={secondClassName}>{item.label}</div>
                </Col>
            ))}
        </Row>
    );
}

export default IconStack;
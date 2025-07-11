import React from 'react';
import {Col, Row} from "react-bootstrap";

/**
 * Type definition for individual tech stack items.
 * 
 * @param {React.ElementType} icon - React component representing the technology icon
 * @param {string} label - Display name for the technology
 */
type TechStackItem = {
    icon: React.ElementType;
    label: string;
};

/**
 * Props interface for the IconStack component.
 * 
 * @param {TechStackItem[]} items - Array of technology stack items to display
 */
type TechStackProps = {
    items: TechStackItem[];
};

/**
 * Renders a horizontal grid of tech stack icons with labels.
 * 
 * Displays tech icons in a responsive grid layout using
 * Bootstrap's Row and Col components. Each tech is represented by an icon
 * component and a text label below it. The icons are centered and styled with
 * CSS classes for consistent appearance.
 * 
 * @param {TechStackProps} props - Component props containing the array of tech stack items
 * @returns {JSX.Element} A responsive grid of technology icons with labels
 */
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
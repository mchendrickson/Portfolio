import React, {ReactElement, ReactNode} from 'react';
import { Link, To } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Col} from "react-bootstrap";

interface ProjectCardsProps {
    linkTo: To;
    imgPath: string | undefined;
    title: string | number | boolean | ReactElement | React.ReactPortal | Iterable<ReactNode> | null | undefined;
    description: string | number | boolean | ReactElement | React.ReactPortal | Iterable<ReactNode> | null | undefined;
    footerElement?: ReactNode;  // Optional footer element prop
}

const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
    return (
        <Card className="project-card-view">
            <Link to={props.linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                {props.footerElement}
            </Link>
        </Card>
    );
}

export default ProjectCards;
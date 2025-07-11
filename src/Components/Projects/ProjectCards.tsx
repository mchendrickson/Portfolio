import React, {ReactElement, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { LuMousePointerClick } from "react-icons/lu";

/**
 * Props interface for the ProjectCards component.
 * 
 * @param {string} linkTo - Route path for navigation to project details
 * @param {string | undefined} imgPath - Image path for the project card
 * @param {ReactNode} title - Project title content (supports various React node types)
 * @param {ReactNode} description - Project description content (supports various React node types)
 * @param {ReactNode} [footerElement] - Optional footer element for additional content
 */
interface ProjectCardsProps {
    linkTo: string;
    imgPath: string | undefined;
    title: string | number | boolean | ReactElement | React.ReactPortal | Iterable<ReactNode> | null | undefined;
    description: string | number | boolean | ReactElement | React.ReactPortal | Iterable<ReactNode> | null | undefined;
    footerElement?: ReactNode;  // Optional footer element prop
}

/**
 * Renders clickable project cards with navigation.
 * 
 * Creates Bootstrap cards that display project information
 * with images, titles, descriptions, and optional footer elements. Each
 * card is wrapped in a React Router Link for navigation to detailed
 * project pages.
 * 
 * @param {ProjectCardsProps} props - Component props containing project data
 * @returns {JSX.Element} Clickable project card with navigation
 */
const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="project-card">
            <Link to={{pathname:`/${props.linkTo}`}} style={{textDecoration: 'none', color: 'inherit'}}>
                <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
                <Card.Body>
                    <Card.Title style={{ height: '1rem' }}>{props.title}</Card.Title>
                    {props.footerElement}
                    <Card.Text style={{textAlign: "left", height: '8rem' }}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            <Card.Footer>
                    <span className="purple"><u>Read More:</u></span> <LuMousePointerClick size={25} className={"purple"}/>
            </Card.Footer>
            </Link>
        </Card>
    );
}

export default ProjectCards;
import React, {ReactElement, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { LuMousePointerClick } from "react-icons/lu";
interface ProjectCardsProps {
    linkTo: string;
    imgPath: string | undefined;
    title: string | number | boolean | ReactElement | React.ReactPortal | Iterable<ReactNode> | null | undefined;
    description: string | number | boolean | ReactElement | React.ReactPortal | Iterable<ReactNode> | null | undefined;
    footerElement?: ReactNode;  // Optional footer element prop
}

const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="project-card">
            <Link to={{pathname:`/${props.linkTo}`}} style={{textDecoration: 'none', color: 'inherit'}}>
                <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
                <Card.Body>
                    <Card.Title style={{ height: '1rem' }}>{props.title}</Card.Title>
                    {props.footerElement}
                    <Card.Text style={{textAlign: "left", height: '8.1rem' }}>
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
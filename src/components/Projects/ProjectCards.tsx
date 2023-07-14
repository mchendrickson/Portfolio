import React from "react";
import { Link, To} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";

function ProjectCards(props: { linkTo: To; imgPath: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; ghLink: string | undefined; isBlog: any; demoLink: string | undefined; }) {
    return (
        <Card className="project-card-view">
            <Link to={props.linkTo} style={{ textDecoration: 'none', color: 'inherit' }} >
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Link>
            <div className="mt-auto">
                <Card.Body>
                    {props.ghLink && (
                        <Button variant="primary" href={props.ghLink} target="_blank">
                            <BsGithub /> &nbsp;
                            {props.isBlog ? "Blog" : "GitHub"}
                        </Button>
                    )}
                    {!props.isBlog && props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp;
                            {"Link"}
                        </Button>
                    )}
                </Card.Body>
            </div>
        </Card>
    );
}

export default ProjectCards;
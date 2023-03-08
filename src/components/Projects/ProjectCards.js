import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Link to={props.linkTo} style={{ textDecoration: 'none', color: 'inherit' }} >
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Link>
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
        </Card>
    );
}

export default ProjectCards;
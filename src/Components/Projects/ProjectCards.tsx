import React, {ReactNode} from 'react';
import {Link, To} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import AnimatedWrapper from "../AnimatedWrapper";
import {motion} from 'framer-motion';
import FancyText from "./FancyText";

interface ProjectCardsProps {
    linkTo: To;
    imgPath: string | undefined;
    title: ReactNode;
    description: string;
    footerElement?: ReactNode;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
                                                       linkTo,
                                                       imgPath,
                                                       title,
                                                       description,
                                                       footerElement
                                                   }) => {
    return (
        <AnimatedWrapper
            initial={{opacity: 0, y: 0, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1.0}}
            transition={{duration: 0.7, ease: 'easeOut'}}
        >
            <motion.div
                whileHover={{
                    scale: 1.02,
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
                }}
                transition={{type: "spring", stiffness: 120, damping: 15}}
            >
                <Card className="project-card-view" style={{overflow: 'hidden'}}>
                    <Link to={linkTo} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Card.Img
                            variant="top"
                            src={imgPath}
                            alt="card-img"
                            style={{transition: "transform 0.3s ease"}}
                        />

                        <motion.div
                            className="card-body-wrapper"
                            initial={{opacity: 0, y: 0}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text style={{textAlign: "left"}}>
                                    <FancyText text={description} mode="staggered" />
                                </Card.Text>
                            </Card.Body>
                            {footerElement}
                        </motion.div>
                    </Link>
                </Card>
            </motion.div>
        </AnimatedWrapper>
    );
};

export default ProjectCards;

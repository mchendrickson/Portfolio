import React from "react";
import {Col, Row} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import ImperiusOctree from "../../../../Assets/Projects/Imperius/ImperiusOctree.png";

const PathfindingSection: React.FC = () => {
    return (
        <Section title="3D Pathfinding">
            <p style={{textAlign: "left"}}>
                I combined <b className="purple">Aron Granberg's A* Pathfinding project</b>, an open source{" "}
                <b className="purple">Octree</b>, <b className="purple">DOTween</b>, and open source{" "}
                <b className="purple">Catmull-rom splines</b> to create a fast, efficient, and accurate{" "}
                <b className="purple">3D pathfinding</b> solution working with hundreds of agents simultaneously with
                little/no
                performance overhead. <b className="purple">Multithreading</b> techniques and efficient use of data
                structures
                were key components in this project alongside <b className="purple">strong code management skills</b>.
            </p>

            <Col md={12} className="vimeo-container" style={{paddingTop: "10px"}}>
                <Row>
                    <Col md={7}>
                        <VimeoVideo videoId="876956727" videoTitle="Imperius Pathfinding"/>
                    </Col>
                    <Col md={4}>
                        <img src={ImperiusOctree} alt="Imperius Octree" className="img-fluid rounded"/>
                    </Col>
                </Row>
            </Col>
        </Section>
    );
};

export default PathfindingSection;
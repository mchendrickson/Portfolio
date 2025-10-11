import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

/**
 * PathfindingSection component for the Imperius project page.
 * 
 * @returns {JSX.Element} A section component with pathfinding details and video demo
 */
const PathfindingSection: React.FC = () => {
    const bullets = [
        <><span className="body-text">Octrees:</span> To efficiently generate the position nodes the units can traverse. </>,
        <><span className="body-text">A* Pathfinding:</span> To generate the best possible path through the position nodes. </>,
        <><span className="body-text">Catmull-Rom Splines:</span> To create a smooth, natural looking path for each unit to follow. </>,
        <><span className="body-text">Tweening:</span> To create dynamic animations for each unit as they speed up, slow down, and rotate. </>,
        <><span className="body-text">Multithreading:</span> To offload calculations to separate threads, increasing performance.</>,
    ];

    return (
        <Section title="3D Pathfinding">
            <p style={{textAlign: "left"}}>
                I created a fast, efficient, and accurate <span className="body-text">3D pathfinding</span> solution that
                supports hundreds of agents with real-time performance and minimal CPU usage.
                Units are able to move seamlessly in a 3D environment without colliding into any obstacles
                and organize themselves efficiently into formations.
            </p>
            <p style={{textAlign: "left"}}>
                Many algorithms and heuristics were used in parallel to bring this system to life:
            </p>
            <BulletList items={bullets} />
            <Col
                md={8}
                className="vimeo-container"
                style={{paddingTop: "10px"}}
            >
                <VimeoVideo videoId="1071579959" videoTitle="Imperius Pathfinding"/>
            </Col>
        </Section>
    );
};

export default PathfindingSection;
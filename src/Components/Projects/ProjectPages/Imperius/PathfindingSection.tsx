import React from "react";
import {Col} from "react-bootstrap";
import Section from "../../Section";
import VimeoVideo from "../../../../VimeoVideo";
import BulletList from "../../BulletList";

const PathfindingSection: React.FC = () => {
    const bullets = [
        <><span className="purple">Octrees:</span> To efficiently generate the position nodes the units can traverse. </>,
        <><span className="purple">A* Pathfinding:</span> To generate the best possible path through the position nodes. </>,
        <><span className="purple">Catmull-Rom Splines:</span> To create a smooth, natural looking path for each unit to follow. </>,
        <><span className="purple">Tweening:</span> To create dynamic animations for each unit as they speed up, slow down, and rotate. </>,
    ];

    return (
        <Section title="3D Pathfinding">
            <p style={{textAlign: "left"}}>
                I created a fast, efficient, and accurate <span className="purple">3D pathfinding</span> solution
                that works with hundreds of agents simultaneously with little/no performance overhead.
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
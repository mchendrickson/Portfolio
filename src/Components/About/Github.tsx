import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Row} from "react-bootstrap";

/**
 * Displays a GitHub contribution calendar.
 * 
 * Renders a GitHub-style contribution calendar using the
 * react-github-calendar library. It shows coding activity over time with
 * a visual heatmap representation.
 * 
 * @returns {JSX.Element} GitHub contribution calendar with activity visualization
 */
function Github() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
            <h1 className="project-heading" style={{paddingBottom: "20px"}}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <GitHubCalendar
                username="mchendrickson"
                blockSize={15}
                blockMargin={5}
                //color="#c084f5"
                fontSize={16}
            />
        </Row>
    );
}

export default Github;

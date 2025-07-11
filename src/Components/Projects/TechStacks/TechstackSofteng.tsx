import React from 'react';
import IconStack from '../../IconStack';
import {DiGit, DiJava} from 'react-icons/di';
import {SiPostgresql} from 'react-icons/si';

/**
 * Tech stack display for Brigham Women's Hospital project.
 * 
 * @returns {JSX.Element} An IconStack component displaying software engineering project technologies
 */
function TechstackSofteng() {
    const items = [
        {icon: DiJava, label: 'Java'},
        {icon: SiPostgresql, label: 'PostgreSQL'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackSofteng;
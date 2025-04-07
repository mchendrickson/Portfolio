import React from 'react';
import IconStack from '../../IconStack';
import {DiGit, DiJava} from 'react-icons/di';
import {SiPostgresql} from 'react-icons/si';

function TechstackSofteng() {
    const items = [
        {icon: DiJava, label: 'Java'},
        {icon: SiPostgresql, label: 'PostgreSQL'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackSofteng;
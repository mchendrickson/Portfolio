import React from 'react';
import IconStack from '../IconStack';
import {
    DiGit,
    DiJava
} from 'react-icons/di';
import {
    SiPostgresql
} from 'react-icons/si';

interface TechstackSoftengProps {
    small?: boolean;
}

function TechstackSofteng({small}: TechstackSoftengProps) {
    const items = [
        { icon: DiJava, label: 'Java' },
        { icon: SiPostgresql, label: 'PostgreSQL' },
        { icon: DiGit, label: 'Git' },
    ];

    return <IconStack items={items} small={small} />;
}

export default TechstackSofteng;